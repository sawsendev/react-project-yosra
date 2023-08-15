import React,{ useState } from 'react'
import "./NavBar.css"
import {NavTable} from "../../Data/Data"
import logo from "../../assets/logo.svg"
import hamburger from "../../assets/hamburger.png"


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
            <ul className='List-container'>
              {NavTable.map((navItem, index) => {
                return (
                    <li className= "List-items" key={index}>{navItem.name}</li>
                );
              })}
            </ul>
           </div>
      </nav>
  )
}

export default NavBar;