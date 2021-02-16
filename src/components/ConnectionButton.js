import React, { Component } from 'react'
import { Button } from 'react-bootstrap';

class ConnectionButton extends Component {

  constructor(props){
    super(props);
    this.refreshPage = this.refreshPage.bind(this);
  }

  async refreshPage() {
    window.location.reload(false);
  }

render() {
    return (
        <Button variant="secondary" onClick={this.refreshPage}>Load Metamask!</Button>
	 );
}
}
export default ConnectionButton;