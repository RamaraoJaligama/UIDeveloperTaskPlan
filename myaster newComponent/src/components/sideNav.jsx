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
          <div style={{ padding: '15px 20px' }}>
            <img src={logo} alt='img' />
            <h4>Super Admin</h4>
            <div className='sidenav' >
              <lable>Teleconsultation<KeyboardArrowUpIcon /></lable>
              <lable>Homecare<KeyboardArrowUpIcon /></lable>
              <lable>pharmacy<KeyboardArrowUpIcon /></lable>
              <lable>E lab<KeyboardArrowDownIcon /></lable>
              <div className="sidenavIcon">
                <div className="sideLable"><lable><a><HomeIcon style={{ marginRight: '8px' }} /></a>homepages</lable></div>
                <div className="sideLable"><lable><a><ViewCarouselIcon style={{ marginRight: '8px' }} /></a>Compnents</lable></div>
                <div className="sideLable"><lable><a><CollectionsIcon style={{ marginRight: '8px' }} /></a>Media library</lable></div>
              </div>
            </div>
            <div className='settings'>
              <h3>settings</h3>
              <ul>
                <lable><span><SettingsIcon /></span>configuration</lable>
                <lable><span><GroupIcon /></span>users</lable>
                <lable><span><LanguageIcon /></span>Language</lable>
                <lable><span><LocationOnIcon /></span>locations</lable>
                <lable><span><AccessAlarmIcon /></span>slots</lable>
                <lable><span><AutoAwesomeMotionIcon /></span>Strapi roles</lable>
                <lable><span><Person2Icon /></span>doctor lables</lable>
                <lable><span><LocationOnIcon /></span>mappings</lable>
              </ul>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default SideNav;
