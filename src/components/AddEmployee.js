import React, { Component } from 'react'
import { Accordion, Card, Button } from 'react-bootstrap';

class AddEmployee extends Component {

render() {

    return (
      <div>
        <Accordion>
          <Card><Card.Body>Open the following section to register yourself as employe!</Card.Body></Card>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="0">
                OPEN/COLSE Register as Employee!
              </Accordion.Toggle>
            </Card.Header>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  <div className="container-fluid">
                    <form onSubmit={(event) => {
                      event.preventDefault()
                      this.props.addEmployee('0xA8e8bc8Bd51D1d279D4b090D3Ae009D96c69AED3','Giorgio', 'giorgio@gmail.com','Product Manager', 'After-Sales', 'Livorno','9')
                      console.log('Submit clicked!')
                    }}>
                      <p> </p>
                      <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Employee Adress</label>
                        <input type="text" className="form-control" id="_employerAdress" aria-describedby="emailHelp" placeholder="e.g.: 0xf2645d8950C672d4d2FA73e73234A6B5edFf4b1B" />
                        <small id="emailHelp" className="form-text text-muted">Enter Employee Ethereum Adress</small>
                      </div>
                      <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Employee Name</label>
                        <input type="text" className="form-control" id="_employeeName" aria-describedby="emailHelp" placeholder="e.g.: Mario" />
                        <small id="emailHelp" className="form-text text-muted">Enter Employee name</small>
                      </div>
                      <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control" id="_employeeEmail" aria-describedby="emailHelp" placeholder="e.g.: mario@gmail.com" />
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                      </div>
                      <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Employee Role</label>
                        <input type="text" className="form-control" id="_employeeRole" aria-describedby="emailHelp" placeholder="e.g.: Senior Teacher" />
                        <small id="emailHelp" className="form-text text-muted">Enter Employee Role</small>
                      </div>
                      <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Employee Division</label>
                        <input type="text" className="form-control" id="_employeeDivision" aria-describedby="emailHelp" placeholder="e.g.: Instruction" />
                        <small id="emailHelp" className="form-text text-muted">Enter Employee Division</small>
                      </div>
                      <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Employee Location</label>
                        <input type="text" className="form-control" id="_employeeLocation" aria-describedby="emailHelp" placeholder="e.g.: Roma" />
                        <small id="emailHelp" className="form-text text-muted">Enter Employee Location</small>
                      </div>
                      <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Financial Power [token]</label>

                        <input 
                          type="number"
                          className="form-control" id="_etherAmount"
                          placeholder="e.g.: 20 token" 
                        />
                        <small id="emailHelp" className="form-text text-muted">To register an employer with X financial power you have to allocate to him X token. Approval Matrix token is the token used to pay for tasks.</small>
                      </div>
                      <Button type="submit">Submit & Stake </Button>
                    </form>
                  </div>
                </Card.Body>
              </Accordion.Collapse>
          </Card>
        </Accordion>
      </div>
	 );
}
}
export default AddEmployee;