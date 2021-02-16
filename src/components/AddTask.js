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
                  <div className="container-fluid">
                    <form>
                      <p> </p>
                      <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Task Name</label>
                        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="e.g.: Explain Mathematics" />
                        <small id="emailHelp" className="form-text text-muted">Enter Task Name</small>
                      </div>
                      <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Task field role</label>
                        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="e.g.: Mathematics Senior Teacher" />
                        <small id="emailHelp" className="form-text text-muted">Enter Employee Role</small>
                      </div>
                      <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Baget offered [AMT]</label>
                        <input type="number" className="form-control" id="exampleInputPassword1" placeholder="e.g.: 20 Approval Matrix Tokens" />
                        <small id="emailHelp" className="form-text text-muted">Approval Matrix token is the token used to pay for tasks. Users accepting the task have to stake same amount of Appruval Matrix Tokens and they get it back when task is completed and verified by both sides.</small>
                      </div>
                      <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Task description</label>
                        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="e.g.: explain Fibonacci number to 0xC4c06c58918b0a9F452b95f5BA2d62b0e2310bfD. Phone Number: 3401205747" />
                        <small id="emailHelp" className="form-text text-muted">Please, isert informations as much as possible otherwise is difficult that someone is going to accept this task.</small>
                      </div>
                        <div className="form-check">
                          <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                          <label className="form-check-label" htmlFor="exampleCheck1">Check me out if task informations and description are correct.</label>
                        </div>
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