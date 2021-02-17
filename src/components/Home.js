import React, { Component } from 'react'

import LoadMetamaskText from './LoadMetamaskText';

import Profile from './Profile';
import EmployeeList from './EmployeeList';
import AddEmployee from './AddEmployee';
import AddTask from './AddTask';
import Tasks from './Tasks';

class Home extends Component {

render() {
    let content
    if(!this.props.account) {
      content = <LoadMetamaskText />
    } else {
      content = // pages/Home.js
		  <div>
		    <h1 className="title is-1">This is the Home Page</h1>
		    <p>
		      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras gravida,
		      risus at dapibus aliquet, elit quam scelerisque tortor, nec accumsan eros
		      nulla interdum justo. Pellentesque dignissim, sapien et congue rutrum,
		      lorem tortor dapibus turpis, sit amet vestibulum eros mi et odio.
		    </p>
		  </div>
	}
    return (
      <div>
       {content}
      </div>
	 );

}
}
export default Home;