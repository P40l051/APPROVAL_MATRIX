import React, { Component } from 'react'
import { Card } from 'react-bootstrap';

import TestProfile from './TestProfile';

class Profile extends Component {

render() {

    return (
      <div>
        <table className="table table-borderless text-muted text-center">
                    <thead>
                      <tr>
                        <th scope="col">Approval Matrix token</th>
                        <th scope="col">Financial Power ETH</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>{this.props.tokenBalance} token</td>
                        <td>{this.props.ethBalance}</td>
                      </tr>
                    </tbody>
          </table>
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