import React from 'react'
import "./Footer.css"

const Footer = () => {
  return (
    <div className='Footer-container'>
      <div className='Apartements'>
        <h3>Our apartments</h3>
        <div className='First'>
            <p>Our apartments in Nice </p>
            <p>Our apartments in Florence</p>
        </div>
        <div className='Second'>
            <p>Our apartments in Paris</p>
            <p>Our apartments in Bologna</p>
        </div>
      </div>
      <div className='Useful-links'>
      <h3>Useful links</h3>
        <div className='First'>
           <p>FAQ</p>
           <p>Terms and conditions</p>
        </div>
        <div className='Second'>
            <p>Contact us</p>
            <p>Cookies alert</p>
        </div>
      </div>
      <div className='Create-alert'>
        <h3>You don’t find what you are looking for? </h3>
        <button>Create an alert</button>
      </div>
 <hr></hr>
 <p>Copyright 2022 - Oxton Digital</p>
    </div>
  )
}

export default Footer
