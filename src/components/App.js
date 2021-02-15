import React, { Component } from 'react';

import Web3 from 'web3'

import Main from './Main';
import MyNavbar from './MyNavbar';

import Token from '../abis/Token.json'

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

  constructor(props) {
    super(props)
    this.state = {
      account: '',
      ethBalance: '0',
      tokenBalance: '0',
      loading: true
    }
  }
  render() {
    return (
      <div>
        <MyNavbar account={this.state.account}/>
        <div className="container-fluid mt-5">
          <Main 
            account={this.state.account} 
            tokenBalance={this.state.tokenBalance}
            ethBalance={this.state.ethBalance/1000000000000000000} 
          />
        </div>
      </div>
    );
  }
}

export default App;
