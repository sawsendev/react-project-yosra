import React from 'react'
import "./NavBar.css"
import {NavTable} from "../../Data/Data"
import logo from "../../assets/logo.svg"

const NavBar = () => {
  return (
      <div className='NavBar-container d-flex
      container-fluid'>
      <img src={logo} alt="company's logo" />
      <ul className='List-container'>
        {NavTable.map((navItem, index) => {
          return (
            <a key={index} href={navItem.href}>
              <li className='List-items'>{navItem.name}</li>
            </a>
          );
        })}
      </ul>
      </div>
  )
}

export default NavBar;
