import React from 'react';

class Error extends React.Component {

    render() {
        const errorText = (!this.props.hideError) ? <p>Incorrect Password</p> : '';
        
        return(
            <div>
                {errorText}
            </div>
        );
    }
}

export default Error;