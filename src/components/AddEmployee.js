import React, { Component } from 'react'
import { Card } from 'react-bootstrap';

class AddEmployee extends Component {

render() {
    return (
      <Card>
      	<div class="container-fluid">
          <form>
            <p> </p>
            <div class="form-group">
              <label for="exampleInputEmail1">Eth Account</label>
              <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder=" e.g.: 0x05B4ca3F7DF84237d8047C24775D406f1157d2Ba" />
              <small id="emailHelp" class="form-text text-muted">Enter Ethereum adress's employee</small>
            </div>
            <div class="form-group">
              <label for="exampleInputEmail1">Employee Name</label>
              <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="e.g.: Mario" />
              <small id="emailHelp" class="form-text text-muted">Enter Employee name</small>
            </div>
            <div class="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="e.g.: mario@gmail.com" />
              <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div class="form-group">
              <label for="exampleInputEmail1">Employee Role</label>
              <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="e.g.: foreign affairs" />
              <small id="emailHelp" class="form-text text-muted">Enter Employee Role</small>
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Employee Max Baget</label>
              <input type="number" class="form-control" id="exampleInputPassword1" placeholder="Password" />
            </div>
            <p>
              <div class="form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                <label class="form-check-label" for="exampleCheck1">Check me out if informations are correct.</label>
              </div>
            </p>
            <p>
              <button type="submit" class="btn btn-primary">Submit</button>
            </p>
          </form>
  		  </div>
      </Card>
	 );
}
}
export default AddEmployee;