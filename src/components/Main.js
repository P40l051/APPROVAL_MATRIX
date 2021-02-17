import React, { Component } from 'react'

import LoadMetamaskText from './LoadMetamaskText';

import Profile from './Profile';
import EmployeeList from './EmployeeList';
import AddEmployee from './AddEmployee';
import AddTask from './AddTask';
import Tasks from './Tasks';

class Main extends Component {

  render() {
    return (
        <div>
          <Profile tokenBalance={this.props.tokenBalance} ethBalance={this.props.ethBalance} />
          <EmployeeList employees={this.props.employees}/>
          <AddEmployee addEmployee={this.props.addEmployee} />
          <AddTask />
          <Tasks />
        </div>
  	 );
  }
}
export default Main;