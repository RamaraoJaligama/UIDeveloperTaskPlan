import React from "react";
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import EventNoteIcon from '@mui/icons-material/EventNote';
import DescriptionIcon from '@mui/icons-material/Description';
import ReportIcon from '@mui/icons-material/Report';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import LastPageIcon from '@mui/icons-material/LastPage';

class Main extends React.Component {
    render() {
      return (
      <>
      <div className='main'>
      <div className='headStart'>
      <ul >
        <li>
          <InsertDriveFileIcon/>
          <p>All Componentes</p>
          <span>59 etenties</span>
        </li>
        <li>
          <EventNoteIcon/>
        <p>Drafts</p>
          <span>59 etenties</span>
        </li>     
        <li>
        <DescriptionIcon/><p>submited</p>
          <span>59 etenties</span></li>
        <li>
          <ReportIcon/>
            <p>reported</p>
          <span>59 etenties</span></li>
        <li>
          <CheckCircleIcon/><p>published</p>
          <span>59 etenties</span></li>
      </ul>
      </div>
      <div className='sideFilter'>
        <a>Filters <ArrowDropDownIcon/> </a>
      </div> 
 <div className='list'> 
 <span>HB</span>
 <div className='text'>
   <p>HeroBanner_Campaign-01</p>
   <div className='created'>
   <a>rejected on: <p>24 April</p></a>
   <a>Rejected by: <p>Nadeem Zafar</p></a>
   <a>Component type: <p>Hero banner</p></a>
   </div>
   </div>
   <div className='filter filterRed'>
   <a>rejected
   </a>
   </div>
 </div>
 <div className='list'> 
  <span>2B</span>
  <div className='text'>
    <p>2-in-1Banner_Campaign-01</p>
   <div className='created' >
   <a>Created on: <p>24 April</p></a>
   <a>Created by: <p>Khitam Jabirah Srour</p></a>
   <a>Component type: <p>2-in-1 Banner</p></a>
   </div>
    </div>
    <div className='filterAsh'>
    <a>draft
    </a>
    </div>
  </div>
  <div className='list'> 
  <span>QB</span>
  <div className='text'>
    <p>QuickBookingBanner_Campaign-01</p>
    <div className='created'>
   <a>Published on: <p>24 April</p></a>
   <a>Published by: <p>Nadeem Zafar</p></a>
   <a>Component type: <p>Quick Booking Banner</p></a>
   </div>
    </div>
    <div className='filterGreen'>
    <a>published
    </a>
    </div>
  </div>
  
 <div className='list'> 
 <span>PB</span>
 <div className='text'>
   <p>PromotionalBanner_Campaign-01</p>
   <div className='created' >
   <a>rejected on: <p>24 April</p></a>
   <a>Rejected by: <p>Nadeem Zafar</p></a>
   <a>Component type: <p>Promotional Banner</p></a>
   </div>
   </div>
   <div className='filterRed'>
   <a>rejected
   </a>
   </div>
 </div>
 <div className='list'> 
 <span>HB</span>
 <div className='text'>
   <p>HeroBanner_Campaign-02</p>
   <div className='created'>
   <a>Created on: <p>24 April</p></a>
   <a>Created by: <p>Khitam Jabirah Srour</p></a>
   <a>Component type: <p>Hero banner</p></a>
   </div>
   </div>
   <div className='filterAsh'>
   <a>draft
   </a>
   </div>
 </div>
 <div className='list'> 
 <span>2B</span>
 <div className='text'>
   <p>2-in-1Banner_Campaign-02</p>
   <div className='created' >
   <a>Published on: <p>24 April</p></a>
   <a>Published by: <p>Nadeem Zafar</p></a>
   <a>Component type: <p>2-in-1 Banner</p></a>
   </div>
   </div>
   <div className='filterGreen'>
   <a>published
   </a>
   </div>
 </div>
 <div className='list'> 
 <span>QB</span>
 <div className='text'>
   <p>QuickBookingBanner_Campaign-02</p>
   <div className='created' >
   <a>rejected on: <p>24 April</p></a>
   <a>Rejected by: <p>Nadeem Zafar</p></a>
   <a>Component type: <p>Quick Booking Banner</p></a>
   </div>
   </div>
   <div className='filterRed'>
   <a>rejected
   </a>
   </div>
 </div>
 <div className='list'>
  <span>PB</span>
  <div className='text'>
    <p>PromotionalBanner_Campaign-08</p>
    <div className='created'>
    <a>Created on: <p>24 April</p></a>
    <a>Created by: <p>Khitam Jabirah Srour</p></a>
    <a>Component type: <p>Promotional Banner</p></a>
    </div>
    </div>
    <div className='filterAsh'>
    <a>draft
    </a>
    </div>
  </div>
 <br/><br/><br/><br/>
 <footer>
  <div className='leftFt'>
    <p>Showing<span>8</span>Out of<span>59</span>Records</p>
  </div>
  <div className='pagination'>
    <span><FirstPageIcon/></span>
    <span><KeyboardArrowLeftIcon/></span>
    <span>1</span>
    <span>2</span>
    <span>3</span>
    <span>4</span>
    <span>5</span>
    <span>...</span>
    <span>10</span>
    <span><KeyboardArrowRightIcon/></span>
    <span><LastPageIcon/></span>
  </div>
 </footer>
 </div>
      </>
      );
    }
  }
  export default Main;
  