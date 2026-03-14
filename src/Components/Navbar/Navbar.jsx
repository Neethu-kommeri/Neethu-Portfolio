import React, { useState, useRef } from 'react'
import './Navbar.css'

import theme_pattern from '../../assets/theme_pattern.svg'
import menu_open from '../../assets/menu_open.svg'
import menu_close  from '../../assets/menu_close.svg'


const Navbar = () => {
  const[menu,setMenu] = useState("home");
  const menuRef = useRef();
  const openMenu = ()=>{
    menuRef.current.style.right="0";
  }
    const closeMenu = ()=>{
    menuRef.current.style.right="-350px";
  }

  return (
    <div className='navbar'>
        <h1>NK</h1>
          {/* <img src={theme_pattern} alt="" />   */}
         
         <img src={menu_open} onClick={openMenu} alt="" className='nav-mob-open'/>
        <ul ref={menuRef} className="nav-menu">
          <img src={menu_close} onClick={closeMenu} alt="" className="nav-mob-close" />
            <li><a href="#home"className='anchor-link'><p onClick={()=>setMenu("home")}>Home</p></a></li>
            <li><a href="#about"className='anchor-link'><p onClick={()=>setMenu("about")}>About Me</p></a></li>
            <li><a href="#services"className='anchor-link'><p onClick={()=>setMenu("services")}>Services</p></a></li>
            <li><a href="#work"className='anchor-link'><p onClick={()=>setMenu("work")}>Portfolio</p></a></li>
            <li><a href="#contact"className='anchor-link'><p onClick={()=>setMenu("contact")}>Contact</p></a></li>
        </ul>
        <div className="nav-connect"><a href="#contact"className='anchor-link'>Connect With Me</a></div>
    </div>
  )
}

export default Navbar