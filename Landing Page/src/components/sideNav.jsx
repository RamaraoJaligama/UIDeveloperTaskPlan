import React from "react";
import logo from '../images/logoMy.png';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import HomeIcon from '@mui/icons-material/Home';
import ViewCarouselIcon from '@mui/icons-material/ViewCarousel';
import CollectionsIcon from '@mui/icons-material/Collections';
import SettingsIcon from '@mui/icons-material/Settings';
import GroupIcon from '@mui/icons-material/Group';
import LanguageIcon from '@mui/icons-material/Language';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import AutoAwesomeMotionIcon from '@mui/icons-material/AutoAwesomeMotion';
import Person2Icon from '@mui/icons-material/Person2';

class SideNav extends React.Component {
    render() {
      return (
      <>
       <div className="sidepanal">
         <div style={{padding: '15px 20px'}}>
      <img src={logo} alt='img'/>
      <h4>Super Admin</h4>
      
        <div className='sidenav' >
       <lable>Teleconsultation<KeyboardArrowUpIcon /></lable>
       <lable>Homecare<KeyboardArrowUpIcon /></lable>
       <lable>pharmacy<KeyboardArrowUpIcon /></lable>
       <lable>E lab<KeyboardArrowDownIcon /></lable>
       <div className="sidenav icon">
       <lable><HomeIcon style={{ marginRight:'8px'}}/>homepages</lable>
       <lable><ViewCarouselIcon style={{ marginRight:'8px'}}/>Compnents</lable>
       <lable><span><CollectionsIcon style={{ marginRight:'8px'}}/></span>Media library</lable>
       </div>
       </div>
       <div className='settings'>
        <h3>settings</h3>
      <ul>
        <li><span><SettingsIcon /></span>configuration</li>
        <li><span><GroupIcon /></span>users</li>
        <li><span><LanguageIcon /></span>Language</li>
        <li><span><LocationOnIcon /></span>locations</li>
        <li><span><AccessAlarmIcon /></span>slots</li>
        <li><span><AutoAwesomeMotionIcon /></span>Strapi roles</li>
        <li><span><Person2Icon /></span>doctor lables</li>
        <li><span><LocationOnIcon /></span>mappings</li>
      </ul>
       </div>
    </div>
    </div>
      </>
      );
    }
  }
  export default SideNav;
  