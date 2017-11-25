import React from 'react';
import './App.css';
import Error from './Error';
import Authorize from './Authorize';

class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        password: 'swordfish',
        authorized: false,
        hideError: true,
        value: '',
        total : 0
      };

      this.authorize = this.authorize.bind(this);
      this.reset = this.reset.bind(this);
      this.handleText = this.handleText.bind(this);
      this.randomize = this.randomize.bind(this);
  
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
            value: '',
            total: 0
        });
    }

    handleText(e) {
      const val = e.target.value;
      this.setState({value:val});
    }

    randomize() {
      const rando = Math.floor( Math.random() * 20 );
      const total = this.state.total + rando;
      
      this.setState({
          total : total
      });

    }
   
    render() {
      
      return (
        <div id="authorization">
          <Authorize authorized={this.state.authorized} authorize={this.authorize} reset={this.reset} handleText={this.handleText} value={this.state.value} getTotal={this.state.total} randomize={this.randomize}/>
          <Error hideError={this.state.hideError} />
  
        </div>
      );
    }
  }

  export default App;