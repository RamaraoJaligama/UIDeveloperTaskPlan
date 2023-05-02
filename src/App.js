import React from "react";
import Navbar from './navbar';
import Data from './data';
import Class from './class';
import Arrow from './arrow';
import Variable from './variable';
import logo from './logo.svg';

const App = () => {
	const options = ['One', 'Two', 'Three', '243', 'Five'];
	const onOptionChangeHandler = (event) => {
		console.log("User Selected Value - ", event.target.value)
	}  
	return (
		<>
		<Navbar/>
			<center className="main">
                <img src={logo} className="app-logo" alt="logo"/>
				<h1>React Environment</h1>
				<h3>HTML select tag </h3>
				<select onChange={onOptionChangeHandler}>

					<option>Please choose one option</option>
					{options.map((option, index) => {
						return <option key={index} >
							{option}
						</option>									
					})}					
				</select>
                <Arrow/>
                <Variable color="Red"/>	
				<Data/>
                <Class/>                              	
    			</center>                     
		</>	       
	);
};

export default App;
