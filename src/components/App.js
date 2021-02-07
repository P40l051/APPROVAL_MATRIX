import React, { Component } from 'react';

import AddEmployee from './AddEmployee';
import Navbar from './Navbar';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="container-fluid mt-5">
          <AddEmployee />
        </div>
      </div>
    );
  }
}

export default App;
