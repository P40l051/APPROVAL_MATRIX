import React, { Component } from 'react';
import { ListGroup, Button, Accordion, Card } from 'react-bootstrap';

class EmployeeProfile extends Component {

  render() {
    return (
        <Accordion>
          <Card><Card.Body>Open the following section to watch registered employees!</Card.Body></Card>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="0">
                OPEN/COLSE Registered Eployees list!
              </Accordion.Toggle>
            </Card.Header>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
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
                </Card.Body>
              </Accordion.Collapse>
          </Card>
        </Accordion>
    );
  }
}


export default EmployeeProfile;