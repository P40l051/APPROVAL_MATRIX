import React, { Component } from 'react'
import { Accordion, Card, Button } from 'react-bootstrap';

class AddEmployee extends Component {

render() {

    return (
      <div>
        <Accordion>
          <Card><Card.Body>Open the following section to add a new employe!</Card.Body></Card>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="0">
                OPEN/COLSE Add Employee!
              </Accordion.Toggle>
            </Card.Header>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  <div class="container-fluid">
                    <form>
                      <p> </p>
                      <div class="form-group">
                        <label for="exampleInputEmail1">Eth Account</label>
                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder=" e.g.: 0x05B4ca3F7DF84237d8047C24775D406f1157d2Ba" />
                        <small id="emailHelp" class="form-text text-muted">Enter Ethereum adress's employee</small>
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
                        <label for="exampleInputPassword1">Financial Power: Stake Employee Baget [ETH]</label>
                        <input type="number" class="form-control" id="exampleInputPassword1" placeholder="e.g.: 20 ETH" />
                        <small id="emailHelp" class="form-text text-muted">To create a an employer with X financial power you have to stake X ETH and you get Y Approval Matrix Token. Approval Matrix token is the token used to pay your employees.</small>
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