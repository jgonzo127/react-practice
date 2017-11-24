import React from 'react';
import Error from './Error';
import Authorize from './Authorize';

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
      const auth = password === this.state.password;
      const error = password === this.state.password;
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
      
      return (
        <div>
          <Authorize authorized={this.state.authorized} authorize={this.authorize} reset={this.reset} handleText={this.handleText} value={this.state.value} />
          <Error hideError={this.state.hideError} />
  
        </div>
      );
    }
  }

  export default Contact;