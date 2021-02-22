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
                        <td>{window.web3.utils.fromWei(this.props.tokenBalance, 'Ether')}</td>
                        <td>{window.web3.utils.fromWei(this.props.ethBalance, 'Ether')}</td>
                      </tr>
                    </tbody>
          </table>
      </div>
	 );
}
}
export default Profile;