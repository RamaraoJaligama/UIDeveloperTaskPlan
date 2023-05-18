import React from "react";

class DemoComponent extends React.Component{
    state = {
        name : 'Component',
        model : '2023',
        city : 'USA'
     }
    render(){
        console.log('Class Component...')
        return <div className="goal">
            <h2>It is a Class Based {this.state.name}</h2>
            <h2>Made Year {this.state.model}</h2>
            <h2>From {this.state.city}</h2>
            </div>
     }
  }

  export default DemoComponent ;