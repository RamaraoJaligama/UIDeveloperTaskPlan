import React from 'react';


function Missed() {
	return <div className='goal'>
    <h2>Conditional Rendering!</h2>
  <h1>MISSED GOAL!</h1>
  </div>
}

function Made() {
	return<div className='goal'>
    <h2>Conditional Rendering!</h2>
  <h1>GOAL!</h1>
  </div> 
}

function Goal(props) {
  const isGoal = props.isGoal;
  return (
  <>
  { isGoal ? <Made/> : <Missed/> }
</>
);

}

export default Goal;
