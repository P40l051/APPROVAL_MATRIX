import React, { Component } from 'react'
import { Button } from 'react-bootstrap';

class ReloadButton extends Component {

  constructor(props){
    super(props);
    this.refreshPage = this.refreshPage.bind(this);
  }

  refreshPage() {
    console.log("button pressed!");
    window.location.reload(false);
  }

render() {
    return (
      <div>
        <Button variant="secondary" onClick={this.refreshPage}>Click to reload!</Button>
      </div>
	 );
}
}
export default ReloadButton;