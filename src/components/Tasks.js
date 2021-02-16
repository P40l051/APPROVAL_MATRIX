import React, { Component } from 'react'
import { Accordion, Card, Button , ListGroup} from 'react-bootstrap';
import TestTaskList from './TestTaskList';

class AddTask extends Component {

render() {

    return (
      <div>
        <Accordion>
          <Card><Card.Body>Open the following section to watch task list you could accept!</Card.Body></Card>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="0">
                OPEN/COLSE Tasks list!
              </Accordion.Toggle>
            </Card.Header>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  <div className="container-fluid">
                      <TestTaskList />
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