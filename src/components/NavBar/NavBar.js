import React,{ useState } from 'react'
import "./NavBar.css"
import {NavTable} from "../../Data/Data"
import logo from "../../assets/logo.svg"
import hamburger from "../../assets/hamburger.png"
import { NavLink } from 'react-router-dom'




const NavBar = () => {

  const [showNav, setShowNav] = useState(false)

  const toggleNavItems = () => {
    setShowNav(!showNav)
  }
  
  return (
      <nav className='NavBar-container d-flex
      container'>
           <img src={logo} alt="company's logo" />

           <div className="menu-icon" onClick={toggleNavItems}>
             <img src={hamburger} alt="company's logo" />

           </div>
           <div className={`nav-elements  ${showNav && 'active'}`}
            onClick={toggleNavItems}>
              {NavTable.map((navItem, index) => {
                return (
                    <NavLink key={index} className= "List-items"  to={navItem.href}>{navItem.name}</NavLink>
                );
              })}
           </div>

      </nav>
  )
}

export default NavBar;