import React from "react";

 class State extends React.Component {
    constructor(props) {   
    super(); 
    this.state = {
        type: 'Developer'
    }
    }
    render() { 
    return <div className="item">
    <h2>Accellor {this.props.title}</h2>
    <h2>FrontEnd {this.state.type}</h2>
    </div>
    }   
    }

    export default State;

    