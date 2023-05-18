import React from "react";
import { useState } from 'react';
import Demostate from './classbased';
import Demo from "./demo";



const FunctionExample = () => {
    const [change, setChange] = useState(true);
    console.log('FunctionalComponent..');
    return (
        <>
        <div className="goal">
            <button className="btn" onClick={() => setChange(!change)}>
                Click Here!
            </button>
            {change ? <h1>Welcome to Accellor</h1> :
                <h1>Functional Component</h1>}
        </div>
        <Demo isGoal={true} /> 
        <Demostate/>
        </>
    );

}



export default FunctionExample;