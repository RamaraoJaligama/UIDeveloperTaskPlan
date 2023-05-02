import React from "react";

class Car extends React.Component {
    constructor(props) {   
    super(); 
    this.state = {
        brand: 'Benz'
    };
    }
    render() { 
    return <div className="item">
    <h2>It is a {this.props.color} Car!</h2>
    <h2>it is a {this.state.brand} Car!</h2>
    </div>
    }   
    }
    export default Car;