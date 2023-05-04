import React from "react";

class DemoComponent extends React.Component{
    state = {
        name : 'Component'
     }
    render(){
        console.log('State')
        return <div className="goal">
            <h2>It is a Class Based {this.state.name}</h2>
            </div>
     }
  }

  export default DemoComponent ;