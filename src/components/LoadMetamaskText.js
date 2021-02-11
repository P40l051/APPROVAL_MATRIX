import React, { Component } from 'react'
import ConnectionButton from './ConnectionButton';

class LoadMetamaskText extends Component {

  constructor(props){
    super(props);
    this.refreshPage = this.refreshPage.bind(this);
  }

  async refreshPage() {
    window.location.reload(false);
  }

render() {
    return (
      <div>
        <p>You need Metamask extention to open this DApp.</p>
        <p>For more information and download visit 
          <a className="Metamask-link"
                  href="https://metamask.io"
                  target="_blank"
                  rel="noopener noreferrer"
                > https://metamask.io
          </a>.
        </p>
        <p>Once installation in completed connect with the following button.</p>
        <p><ConnectionButton /></p>
      </div> 
	 );
}
}
export default LoadMetamaskText;