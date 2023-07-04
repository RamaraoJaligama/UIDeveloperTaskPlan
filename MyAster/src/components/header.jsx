import React from "react";
import NewComponent from "./newComponent";


export default function Header({setNewComponent}) {
  return (
    <>
        <div className='head'>
          <div className='top'>
            <span class="material-symbols-outlined">search</span>
            <input type='text' placeholder=' Search by name' />
            <button onClick={()=>setNewComponent(true)}><span>+</span>Add New Component</button>
          </div>
        </div>
      </>
  )
}

