import React, { useState } from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import logo from '../../Assets/assets/logo.svg'




import './Navbar.css'

const Menu = () => {
  <>
  <p><a href="#Home">Home</a></p>
  <p><a href="#what">WHat is GTp3?</a></p>
  <p><a href="#possibilities">OpenAI</a></p>
  <p><a href="#case">Case Studies</a></p>
  <p><a href="#library">Libraries</a></p> 
</>
}

const Navbar = () => {

  const [toggleMenu, setToggleMenu] = useState(false);


  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar_links">
        <div className="gpt3__navbar_links_loggo">
          <img src={logo} alt="loggo" />
        </div>

        <div className="gpt3__navbar_links_container">
          <p><a href="#Home">Home</a></p>
          <p><a href="#what">WHat is GTp3?</a></p>
          <p><a href="#possibilities">OpenAI</a></p>
          <p><a href="#case">Case Studies</a></p>
          <p><a href="#library">Libraries</a></p> 
        </div>
          

      
      </div>

      <div className="gpt3__navbar_sign">
        <p>Sign In</p>
        <button type='button'>Sign Up</button>
      </div>

      <div className="gpt3__navbar_menu">
        {toggleMenu
          ? <RiCloseLine color="#FFFFFF" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#FFFFFF" size={27} onClick={() => setToggleMenu(true)} />}
        {
          toggleMenu && (
            <div className="gpt3__navbar_menu_container scale-up-center">
              <div className='gpt3__navbar_menu_links'>
                <p><a href="#Home">Home</a></p>
                <p><a href="#what">WHat is GTp3?</a></p>
                <p><a href="#possibilities">OpenAI</a></p>
                <p><a href="#case">Case Studies</a></p>
                <p><a href="#library">Libraries</a></p> 
                <div className="gpt3__navbar_menu_container_links_sign">
                    <p>Sign In</p>
                    <button type='button'>Sign Up</button>
                </div>
              </div>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default Navbar