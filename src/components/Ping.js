import React from 'react';

class Ping extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ping: null
        };
    }

    componentDidMount() {
        this._ping();
    }
    
    render() {
        return (
            <div>
                <p>{this.state.ping}</p>
            </div>
        );
    }

    _ping = () => {
        const url = '/api/ping';
        fetch(url)
            .then(response => response.json())
            .then(response => {
                this.setState({
                    ping: response
                });
            });
    }
}

export default Ping;
