import React, { Component } from 'react'

import LoadMetamaskText from './LoadMetamaskText';

import Profile from './Profile';
import EmployeeList from './EmployeeList';
import AddEmployee from './AddEmployee';
import AddTask from './AddTask';
import Tasks from './Tasks';

class EmployeeSection extends Component {

  render() {
    return (
        <div>
          <Profile tokenBalance={this.props.tokenBalance} ethBalance={this.props.ethBalance} />
          <AddEmployee addEmployee={this.props.addEmployee} />
          <EmployeeList employees={this.props.employees}/>
        </div>
  	 );
  }
}
export default EmployeeSection;