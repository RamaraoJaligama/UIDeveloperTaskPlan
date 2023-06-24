import React from "react";

class Header extends React.Component {
    render() {
      return (
      <>
      <div className='head'>
      <div className='top'>
        <span class="material-symbols-outlined">search</span>
        <input type='text'placeholder=' Search by name'/>
      <button><span>+</span>Add New Component</button>
      </div>
      </div>
      </>
      );
    }
  }
  export default Header;
  