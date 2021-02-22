import React, { Component } from 'react';

import Web3 from 'web3'


import MyNavbar from './MyNavbar';
import Home from './Home';
import EmployeeSection from './EmployeeSection';
import TasksSection from './TasksSection';

import Token from '../abis/Token.json'
import ApprovalMatrix from '../abis/ApprovalMatrix.json'

import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";


class App extends Component {
  async componentWillMount() {
    await this.loadWeb3()
    await this.loadBlockchainData()
  }

  async loadBlockchainData() {
    const web3 = window.web3

    const accounts = await web3.eth.getAccounts()
    this.setState({ account: accounts[0] })

    const ethBalance = await web3.eth.getBalance(this.state.account)
    this.setState({ ethBalance })

    const networkId = await web3.eth.net.getId()

        // Load Token
    const tokenData = Token.networks[networkId]
    if(tokenData) {
      const token = new web3.eth.Contract(Token.abi, tokenData.address)
      this.setState({ token })
      let tokenBalance = await token.methods.balanceOf(this.state.account).call()
      this.setState({ tokenBalance: tokenBalance.toString() })
    } else {
      window.alert('Token contract not deployed to detected network.')
    }

    // Load Approval Matrix
    const approvalMatrixData = ApprovalMatrix.networks[networkId]
    if(approvalMatrixData) {
      const approvalMatrix = new web3.eth.Contract(ApprovalMatrix.abi, approvalMatrixData.address)
      this.setState({ approvalMatrix })
      const employeesCount = await approvalMatrix.methods.employeeCount().call()
      this.setState({ employeesCount })

    // Load employees, sort by newest
    for (var i=employeesCount; i>=1; i--){
      const employee = await approvalMatrix.methods.employees(i).call()
        this.setState({
          employees: [...this.state.employees, employee]
        })  
    }
    } else {
      window.alert('EthSwap contract not deployed to detected network.')
    }

    this.setState({ loading: false })
  }

  async loadWeb3() {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum)
      await window.ethereum.enable()
    }
    else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider)
    }
    else {
      window.alert('Non-Ethereum browser detected. You should consider trying MetaMask!')
    }
  }

  addEmployee = (_employerAddress, _employeeName, _employeeEmail, _employeeRole, _employeeDivision, _employeeLocation, _amount) => {
    this.setState({ loading: true })
    this.state.token.methods.approve(this.state.approvalMatrix._address, _amount).send({ from: this.state.account }).on('transactionHash', (hash) => {
      this.state.approvalMatrix.methods.AddEmployee(_employerAddress, _employeeName, _employeeEmail, _employeeRole, _employeeDivision, _employeeLocation).send({ value: _amount, from: this.state.account }).on('transactionHash', (hash) => {
        this.setState({ loading: false })
      })
    })
  }


  constructor(props) {
    super(props)
    this.state = {
      account: '',
      token:{},
      approvalMatrix:{},
      employees: [],
      ethBalance: '0',
      tokenBalance: '0',
      loading: true
    }
  }
  render() {
    return (
      <BrowserRouter>
          <MyNavbar account={this.state.account}/>
          <div className="container-fluid mt-5">
          <Route exact path="/">
            <Home account={this.state.account} />
          </Route>
          <Route exact path="/employee">
            <EmployeeSection 
              account={this.state.account}
              tokenBalance={this.state.tokenBalance}
              ethBalance={this.state.ethBalance}
              employees={this.state.employees}
              addEmployee={this.addEmployee}            
            />
          </Route>
          <Route exact path="/tasks">
            <TasksSection 
              account={this.state.account}
              tokenBalance={this.state.tokenBalance}
              ethBalance={this.state.ethBalance}           
            />
          </Route>
          </div>
      </BrowserRouter>
    );
  }
}

export default App;
