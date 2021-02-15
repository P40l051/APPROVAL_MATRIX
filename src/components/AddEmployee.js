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
                  <div class="container-fluid">
                    <form>
                      <p> </p>
                      <div class="form-group">
                        <label for="exampleInputEmail1">Employee Adress</label>
                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="e.g.: 0xf2645d8950C672d4d2FA73e73234A6B5edFf4b1B" />
                        <small id="emailHelp" class="form-text text-muted">Enter Employee Ethereum Adress</small>
                      </div>
                      <div class="form-group">
                        <label for="exampleInputEmail1">Employee Name</label>
                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="e.g.: Mario" />
                        <small id="emailHelp" class="form-text text-muted">Enter Employee name</small>
                      </div>
                      <div class="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="e.g.: mario@gmail.com" />
                        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                      </div>
                      <div class="form-group">
                        <label for="exampleInputEmail1">Employee Role</label>
                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="e.g.: Senior Teacher" />
                        <small id="emailHelp" class="form-text text-muted">Enter Employee Role</small>
                      </div>
                      <div class="form-group">
                        <label for="exampleInputEmail1">Employee Division</label>
                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="e.g.: Instruction" />
                        <small id="emailHelp" class="form-text text-muted">Enter Employee Division</small>
                      </div>
                      <div class="form-group">
                        <label for="exampleInputEmail1">Employee Location</label>
                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="e.g.: Roma" />
                        <small id="emailHelp" class="form-text text-muted">Enter Employee Location</small>
                      </div>
                      <div class="form-group">
                        <label for="exampleInputPassword1">Financial Power [token]</label>
                        <input type="number" class="form-control" id="exampleInputPassword1" placeholder="e.g.: 20 token" />
                        <small id="emailHelp" class="form-text text-muted">To register an employer with X financial power you have to allocate to him X token. Approval Matrix token is the token used to pay for tasks.</small>
                      </div>
                      <p>
                        <div class="form-check">
                          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                          <label class="form-check-label" for="exampleCheck1">Check me out if Employee informations are correct.</label>
                        </div>
                      </p>
                      <Button variant="primary">Submit & Stake</Button>
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