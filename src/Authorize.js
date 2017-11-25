import React from 'react';
import Info from './Info';

class Authorize extends React.Component {

    render() {

        const login = <form action="#" onSubmit={this.props.authorize}><input type="password" name="input"  placeholder="Password" onChange={this.props.handleText}/><input type="submit" disabled={!this.props.value}/></form>;
        
        return(
            <div className="authorize-form">
                <h1>{(this.props.authorized) ? 'Contact' : 'Enter the Password'}</h1>
                {(this.props.authorized) ? <Info getTotal={this.props.getTotal} handleReset={this.props.reset} randomize={this.props.randomize} /> : login}
            </div>
        );
    }
}

export default Authorize;