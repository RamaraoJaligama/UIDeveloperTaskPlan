import React ,{useState} from 'react'
import DashBordSection from './dashBoard-Options';
import TelegramIcon from '@mui/icons-material/Telegram';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import DoneIcon from '@mui/icons-material/Done';
import PopupFilter from './popupFilter';


function NewComponent() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const [nextComponent, setnextComponent] = useState(false);
  return (
    <>  
    {  nextComponent ? <DashBordSection setnextComponent={setnextComponent}/>: <>
    <div className='newComponent'>
        <div className='topSection'>
          <div className="newLeft">
            <button className='back' onClick={{}}><KeyboardArrowLeftIcon />Back</button>
            <button className='save' onClick={{}}><DoneIcon />Save</button>
          </div>
          <div className="newRight">
            <button className='btn'><TelegramIcon />Submite for approval</button>
          </div>
        </div>
        <div className='allComponents'>
          <a href=''>All components</a>
          <span>  /  </span>
          <a href=''>New component</a>
        </div>
        <div className='addComponent'>
          <h4>Component Type*</h4>
          <p>Please select a Component Type to begin</p>
          <button onClick={handleOpen}><span>+</span>Add New Component</button>
          <PopupFilter open={open} handleClose={handleClose} handleOpen={handleOpen} setnextComponent={setnextComponent} />

        </div>
      </div>
    </>}
      


    </>
  )
}

export default NewComponent;