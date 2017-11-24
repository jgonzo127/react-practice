import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: 'swordfish',
      authorized: false,
      hideError: true,
      value: ''
    };
    this.authorize = this.authorize.bind(this);
    this.reset = this.reset.bind(this);
    this.handleText = this.handleText.bind(this);

  }

  authorize(e) {
    e.preventDefault();
    const password = e.target.querySelector(
      'input[type="password"]').value;
    const auth = password == this.state.password;
    const error = password == this.state.password;
    this.setState({
      authorized: auth,
      hideError:error
    });
  }
  
  reset(e) {
    e.preventDefault();
    this.setState({
      authorized: false,
      hideError: true,
      value: ''
    });
  }
  
  handleText(e) {
    const val = e.target.value;
    this.setState({value:val});
  }
 
  render() {

    const errorText = <p>Incorrect Password</p>;
    
    const login = <form action="#" onSubmit={this.authorize}><input type="password" name="input"  placeholder="Password" onChange={this.handleText}/><input type="submit" disabled={!this.state.value}/></form>;
    
    const contactInfo = (
      <div>
      <ul>
          <li>
            client@example.com
          </li>
          <li>
            555.555.5555
          </li>
      </ul>
      <a href="#" onClick={this.reset}>Back</a>
        </div>
  
    );
    
    return (
      <div id="authorization">
        <h1>{(this.state.authorized) ? 'Contact' : 'Enter the Password'}</h1>
        {(this.state.authorized) ? contactInfo : login}
        {(this.state.hideError) ? '' : errorText }

      </div>
    );
  }
}


export default Contact;
