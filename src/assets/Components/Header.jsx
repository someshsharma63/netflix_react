import React from 'react'
import logo from "../Images/netflix-logo.png"
import emoji from "../Images/green_emoji.png"

function Header() {
  return (
    <header >
          <div className='logo'>
               <img src={logo} alt="" /> 
            </div>  
            <div className='emoji'>
                <img src={emoji} alt="" />
            </div>
    </header>
  )
}

export default Header