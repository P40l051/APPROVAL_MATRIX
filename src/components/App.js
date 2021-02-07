import React, { Component } from 'react';

import AddEmployee from './AddEmployee';
import Collapse from './collapsetest';

class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
          <a
            className="navbar-brand col-sm-3 col-md-2 mr-0"
            href="http://www.dappuniversity.com/bootcamp"
            target="_blank"
            rel="noopener noreferrer"
          >
            Approval Matrix
          </a>
        </nav>
        <div className="container-fluid mt-5">
          <Collapse />
        </div>
        <div className="container-fluid mt-5">
          <AddEmployee />
        </div>
      </div>
    );
  }
}

export default App;
