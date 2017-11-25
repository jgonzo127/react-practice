import React from 'react';

class Info extends React.Component {

    render() {
        
        return(
            <div>
                <ul>
                    <li>
                    client@example.com
                    </li>
                    <li>
                    555.555.5555
                    </li>
                </ul>
                <button onClick={this.props.randomize}>Randomize!</button>
                <p>{this.props.getTotal}</p>
                <a href="#" onClick={this.props.handleReset}>Back</a>
            </div>
        )
    }
}

export default Info;