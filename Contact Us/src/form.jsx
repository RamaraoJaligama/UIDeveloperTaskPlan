import { useState } from "react";
import './form.scss';
import Map from './images/map.png';


function MyForm() {
  const [name, setName] = useState("");

  return (
    <div className='loginForm' style={{display:'flex', marginTop:'4rem'}}> 
    <form className="form" style={{margin:'auto auto'}}>
      <div className="Form">
        <div  className="text">
      <label>name</label><br/>
        <input
          type="text" 
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        </div>
      
        <div  className="text">
      <label>email</label><br/>  
        <input
          type="text" 
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        </div>
        <div className="text">
      <label>message</label><br/>
        <input
          type="text" 
          name="box"
          value={name}
          onChange={(e) => setName(e.target.value)} 
        />
        <button className="btn">submit</button>
        </div>
        </div>     
         </form>
         <img src={Map} className='map' alt="img" style={{alignItems:'flex-start'}}/>
       </div>
      
   
    
  )
}
export default MyForm;