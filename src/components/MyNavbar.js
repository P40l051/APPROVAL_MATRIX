import React, { Component } from 'react'
import Identicon from 'identicon.js';
import ConnectionButton from './ConnectionButton';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

class MyNavbar extends Component {

render() {
  let content
    if(!this.props.account) {
      content = <ConnectionButton />
    } else {
      content =
        <ul className="navbar-nav px-3">
          <li className="nav-item text-nowrap d-none d-sm-none d-sm-block">
            <small className="text-secondary">
              <small id="account">{this.props.account}</small>
            </small>
            { this.props.account
              ? <img
                  className="ml-2"
                  width='30'
                  height='30'
                  src={`data:image/png;base64,${new Identicon(this.props.account, 30).toString()}`}
                  alt=""
              />
              : <span></span>
              }
          </li>
        </ul>
    }
    
    return (
      <div>
        <Navbar expand="md" bg="dark" variant="dark">
           <Navbar.Brand href="#home">Approval Matrix</Navbar.Brand>
           <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#features">My Profile</Nav.Link>
              <Nav.Link href="#features">Tasks</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Nav>{content}</Nav>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        </Navbar>
      </div>
	 );
}
}
export default MyNavbar;