import React, { Component } from 'react'
import { Accordion, Card, Button } from 'react-bootstrap';

class AddEmployee extends Component {
  constructor(props) {
    super(props);
    this.state = {_employerAdress: '', _employeeEmail: '', _employeeName: '', _employeeRole: '', _employeeDivision: '', _employeeLocation: '', _employeePower: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event){ 
    this.setState({ 
      [event.target.name] : event.target.value 
    }) 
  } 

  handleSubmit(event){ 
    const { _employerAdress, _employeeName, _employeeEmail, _employeeRole, _employeeDivision, _employeeLocation, _employeePower } = this.state 
    this.props.addEmployee(this.state._employerAdress,this.state._employeeName, this.state._employeeEmail, this.state._employeeRole, this.state._employeeDivision, this.state._employeeLocation, this.state._employeePower)
    event.preventDefault() 
    alert(` Employee addes sucesfully!
      ____Employee Details____ 
      Adress: ${_employerAdress}
      Email : ${_employeeEmail} 
      Name : ${_employeeName} 
      Role : ${_employeeRole} 
      Division : ${_employeeDivision} 
      Location : ${_employeeLocation} 
      Financial Power : ${_employeePower}  
    `)
  } 

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
                    <form onSubmit={this.handleSubmit}>
                      <p> </p>
                      <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Employee Adress</label>
                        <input type="text" className="form-control" aria-describedby="emailHelp" placeholder="e.g.: 0xf2645d8950C672d4d2FA73e73234A6B5edFf4b1B" name='_employerAdress' value={this.state._employerAdress} onChange={this.handleChange} />
                        <small id="emailHelp" className="form-text text-muted">Enter Employee Ethereum Adress</small>
                      </div>
                      <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Employee Name</label>
                        <input type="text" className="form-control" aria-describedby="emailHelp" placeholder="e.g.: Mario" name='_employeeName' value={this.state._employeeName} onChange={this.handleChange} />
                        <small id="emailHelp" className="form-text text-muted">Enter Employee name</small>
                      </div>
                      <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control" aria-describedby="emailHelp" placeholder="e.g.: mario@gmail.com" name='_employeeEmail' value={this.state._employeeEmail} onChange={this.handleChange}/>
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                      </div>
                      <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Employee Role</label>
                        <input type="text" className="form-control" aria-describedby="emailHelp" placeholder="e.g.: Senior Teacher" name='_employeeRole' value={this.state._employeeRole} onChange={this.handleChange} />
                        <small id="emailHelp" className="form-text text-muted">Enter Employee Role</small>
                      </div>
                      <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Employee Division</label>
                        <input type="text" className="form-control" aria-describedby="emailHelp" placeholder="e.g.: Instruction" name='_employeeDivision' value={this.state._employeeDivision} onChange={this.handleChange} />
                        <small id="emailHelp" className="form-text text-muted">Enter Employee Division</small>
                      </div>
                      <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Employee Location</label>
                        <input type="text" className="form-control" aria-describedby="emailHelp" placeholder="e.g.: Roma" name='_employeeLocation' value={this.state._employeeLocation} onChange={this.handleChange} />
                        <small id="emailHelp" className="form-text text-muted">Enter Employee Location</small>
                      </div>
                      <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Financial Power [token]</label>
                        <input type="number" className="form-control" placeholder="e.g.: 20 token" name='_employeePower' value={this.state._employeePower} onChange={this.handleChange}/>
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