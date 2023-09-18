import React,{ useState } from 'react'
import "./NavBar.css"
import {NavTable} from "../../Data/Data"
import logo from "../../assets/logo.svg"
import hamburger from "../../assets/open-anv.svg"
import closenav from "../../assets/close.svg"
import { NavLink } from 'react-router-dom'
import { useLocation } from 'react-router-dom';



const NavBar = () => {

  const [showNav, setShowNav] = useState(false)

  const toggleNavItems = () => {
    setShowNav(!showNav)
  }
  const location = useLocation();
  const isHomePage=location.pathname==='/' ;
  const isNoRoomPage=location.pathname==='/noRoom'
  const isSearchPage=location.pathname==='/searchCities';
  
  return (
    <>
      <nav className='NavBar-container d-flex
      container'>
           <img src={logo} alt="company's logo" />

           <div className={`menu-icon  ${showNav && 'active'}`} onClick={toggleNavItems}>
             <img className='open-nav' src={hamburger} alt="company's logo" />
             <img className='close-nav' src={closenav} alt="company's logo" />
           </div>
           <div className={`nav-elements  ${showNav && 'active'}`}
            onClick={toggleNavItems}>
              <div className='nav-list'>
              {NavTable.map((navItem, index) => {
                return (
                    <NavLink key={index} className= "List-items"  to={navItem.href}>{navItem.name}</NavLink>
                );
              })}
              </div>
           </div>

      </nav>
      <div className={`nav-divider ${isHomePage || isNoRoomPage || isSearchPage ? 'hide-on-home' : ''}`}></div>





      </>
  )
}

export default NavBar;