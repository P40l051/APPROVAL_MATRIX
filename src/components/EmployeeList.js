import React, { Component } from 'react';
import { ListGroup, Button } from 'react-bootstrap';

class EmployeeProfile extends Component {

  render() {
    return (
      <div className="container-fluid">
            { this.props.employees.map((employee, key) => {
              return(
                <div className="card mb-4 mx-auto" key={key}>
                  <ul className="list-group" >
                    <li className="list-group-item">ID: {employee.Id}</li>
                    <li className="list-group-item">Boss Adress: {employee.EmployerBossAdress}</li>
                    <li className="list-group-item">Employer Adress: {employee.EmployerAdress}</li>
                    <li className="list-group-item">Name: {employee.EmployeeName}</li>
                    <li className="list-group-item">Email: {employee.EmployeeEmail}</li>
                    <li className="list-group-item">Role: {employee.EmployeeRole}</li>
                    <li className="list-group-item">Division: {employee.EmployeeDivision}</li>
                    <li className="list-group-item">Location: {employee.EmployeeLocation}</li>
                    <li className="list-group-item">Power: {employee.EmployeePower}</li>
                  </ul>
                </div>
              )
            })}
      </div>
    );
  }
}


export default EmployeeProfile;