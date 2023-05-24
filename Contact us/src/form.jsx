import { useState } from "react";
import './form.scss';
import Map from './images/map.png';


function MyForm() {
  const [name, setName] = useState("");

  return (
    <div className='loginForm' style={{display:'flex', marginTop:'4rem'}}> 
    <form className="form">
        <div>
      <label>name</label><br/>
        <input
          type="text" 
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        </div>
      
        <div>
      <label>email</label><br/>  
        <input
          type="text" 
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        </div>
        <div>
      <label>message</label><br/>
        <input
          type="text" 
          value={name}
          onChange={(e) => setName(e.target.value)} style={{Width:'570px',height:'70px'}}
        />
        <button className="btn">submit</button>
        </div>     
         </form>
         <img src={Map} className='map' alt="img" style={{alignItems:'flex-start'}}/>
       </div>
      
   
    
  )
}
export default MyForm;