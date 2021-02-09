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
                        <label for="exampleInputEmail1">Level of approval</label>
                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="e.g.: foreign affairs" />
                        <small id="emailHelp" class="form-text text-muted">Enter Employee Role</small>
                      </div>
                      <div class="form-group">
                        <label for="exampleInputPassword1">Baget requested</label>
                        <input type="number" class="form-control" id="exampleInputPassword1" placeholder="Password" />
                      </div>
                      <div class="form-group">
                        <label for="exampleInputEmail1">Task description</label>
                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="e.g.: Mario" />
                        <small id="emailHelp" class="form-text text-muted">Enter Employee name</small>
                      </div>
                      <p>
                        <div class="form-check">
                          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                          <label class="form-check-label" for="exampleCheck1">Check me out if task informations and description are correct.</label>
                        </div>
                      </p>
                      <Button variant="primary">Submit</Button>
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