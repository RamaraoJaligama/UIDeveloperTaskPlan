import React from "react";
import SearchIcon from '@mui/icons-material/Search';


export default function Header({setNewComponent}) {
  return (
    <>
        <div className='head'>
          <div className='top'>
            <span class="material-symbols-outlined"><SearchIcon/></span>
            <input type='text' placeholder=' Search by name' />
            <button onClick={()=>setNewComponent(true)}><span>+</span>Add New Component</button>
          </div>
        </div>
      </>
  )
}

