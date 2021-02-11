import React, { Component } from 'react'
import { Accordion, Card, Button } from 'react-bootstrap';

class AddTask extends Component {

render() {

    return (
      <div>
        <Accordion>
          <Card><Card.Body>Open the following section to add a new task!</Card.Body></Card>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="0">
                OPEN/COLSE Add Task!
              </Accordion.Toggle>
            </Card.Header>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  <div class="container-fluid">
                    <form>
                      <p> </p>
                      <div class="form-group">
                        <label for="exampleInputEmail1">Task Name</label>
                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="e.g.: Explain Mathematics" />
                        <small id="emailHelp" class="form-text text-muted">Enter Task Name</small>
                      </div>
                      <div class="form-group">
                        <label for="exampleInputEmail1">Task field role</label>
                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="e.g.: Mathematics Senior Teacher" />
                        <small id="emailHelp" class="form-text text-muted">Enter Employee Role</small>
                      </div>
                      <div class="form-group">
                        <label for="exampleInputPassword1">Baget offered [AMT]</label>
                        <input type="number" class="form-control" id="exampleInputPassword1" placeholder="e.g.: 20 Approval Matrix Tokens" />
                        <small id="emailHelp" class="form-text text-muted">Approval Matrix token is the token used to pay for tasks. Users accepting the task have to stake same amount of Appruval Matrix Tokens and they get it back when task is completed and verified by both sides.</small>
                      </div>
                      <div class="form-group">
                        <label for="exampleInputEmail1">Task description</label>
                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="e.g.: explain Fibonacci number to 0xC4c06c58918b0a9F452b95f5BA2d62b0e2310bfD. Phone Number: 3401205747" />
                        <small id="emailHelp" class="form-text text-muted">Please, isert informations as much as possible otherwise is difficult that someone is going to accept this task.</small>
                      </div>
                      <p>
                        <div class="form-check">
                          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                          <label class="form-check-label" for="exampleCheck1">Check me out if task informations and description are correct.</label>
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
export default AddTask;