import React from 'react';

class Authorize extends React.Component {

    render() {

        const login = <form action="#" onSubmit={this.props.authorize}><input type="password" name="input"  placeholder="Password" onChange={this.props.handleText}/><input type="submit" disabled={!this.props.value}/></form>;
        
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
          <a href="#" onClick={this.props.reset}>Back</a>
            </div>
      
        );
        
        return(
            <div>
                <h1>{(this.props.authorized) ? 'Contact' : 'Enter the Password'}</h1>
                {(this.props.authorized) ? contactInfo : login}
            </div>
        );
    }
}

export default Authorize;