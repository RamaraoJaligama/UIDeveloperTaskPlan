import React from "react";
import Navbar from './navbar';
import Data from './data';
import Class from './class';
import Arrow from './arrow';
import Variable from './variable';
import logo from './logo.svg';
import Demoprops from './demoprops';
import Function from './fuctional';
import Form  from "./Form";


const App = () => {
	const mylist = ['One', 'Two', 'Three', '243', 'Five'];
	const onOptionChangeHandler = (event) => {
		console.log("User Selected Value - ", event.target.value)
	}  
	return (
		<>
		<Navbar/>
			<center className="main">
                <img src={logo} className="app-logo" alt="logo"/>
				<h1>React Environment</h1>
				<h3>Select tag </h3>
				<select onChange={onOptionChangeHandler}>	

					<option>Please choose one option</option>
					{mylist.map((option, index) => {
						return <option key={index} >
							{option}
						</option>									
					})}					
				</select><br/><br/>
				<div className="bg-img">
				<div className="Components">
				<Demoprops/>
                <Arrow/>
                <Variable title="Pvt.ltd"/>
				<Data/>
				</div>
				<div className="Components">	
                <Class/>  
				<Function/>
				</div>
				</div>
				<Form/>
				<div className="footer">
					<p>@Copyrights - 2023</p>
				</div>
				
    			</center>                    
		</>	       
	);
};

export default App;
