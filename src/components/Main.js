import React, { Component } from 'react'
import { Accordion, Card, Button } from 'react-bootstrap';
import ConnectionButton from './ConnectionButton';
import LoadMetamaskText from './LoadMetamaskText';
import AddEmployee from './AddEmployee';
import AddTask from './AddTask';
import Tasks from './Tasks';

class Main extends Component {

render() {

    let content
    if(!this.props.account) {
      content = <LoadMetamaskText />

    } else {
      content = <div>
                  <p><AddEmployee /></p>
                  <p><AddTask /></p>
                  <p><Tasks /></p>
                </div>
    }

    return (
      <div>
       {content}
      </div>
	 );
}
}
export default Main;