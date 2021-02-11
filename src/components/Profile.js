import React, { Component } from 'react'
import { Card } from 'react-bootstrap';

import TestProfile from './TestProfile';

class Profile extends Component {

render() {

    return (
      <div>
        <Card>
          <Card.Body>
            <Card.Title>My Profile</Card.Title>
            <p><TestProfile /></p>
          </Card.Body>
        </Card>
      </div>
	 );
}
}
export default Profile;