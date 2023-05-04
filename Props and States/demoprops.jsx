import React from 'react'

class PropsExample extends React.Component{
    render(){
        console.log("Props")
        return(
                <div className='goal'>
                    <h2>Basic {this.props.title} for Props!!</h2><br/>
                    <h2>Another {this.props.heading} for Props!!</h2>
                    <ExampleClass/>
                </div>
            );
    }
}
 
PropsExample.defaultProps = {
    title: " Example"
}

class ExampleClass extends React.Component{
    render(){
        console.log('list')
        return(
                <div>
                    <h1>{this.props.names.map(
                        function names(item,i){
                            return (
                                    "Student "+ (i+1) +": " +item+ ((i!==2) ? ', ' : '\n')
                                )
                        }
                        )}</h1>
                </div>
            );
    }
}
ExampleClass.defaultProps = {
    names: ['Raj ', 'Shyam ', 'Rahul, ','Sudheer ']
}

export default PropsExample;
