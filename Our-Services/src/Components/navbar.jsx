import React,{Component} from 'react';
import logo from './images/Frame 4.png';
import bars from './images/Vector (2).png';
 
class Navbar extends Component {
  render() {
    return (          
       <div className='display'> 
         <img src={logo} className='logo' alt="img"/>
        <ul>
         <li>Home</li>
         <li>Portfoilo</li>
         <li>Services</li>
         <li>Contact</li>
         </ul>
         <img src={bars} className='menu' alt=''/>
       </div>       
    );   
  }
}

export default Navbar;


