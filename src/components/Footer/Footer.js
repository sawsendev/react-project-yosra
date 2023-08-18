import React, {useState} from 'react'
import "./Footer.css"
import bell from "../../assets/bell 1.svg"
import arrow from '../../assets/arrow.svg'

const Footer = () => {
  const [show, setShow]=useState(false)

  const handleCLick=()=>{
    setShow(!show)
  }
  return (
    <>
    <div className='Footer-container p-4 d-flex justify-content-evenly align-items-center mb-2  text-align-center'>
      <div className='Apartements'>
        <h3>Our apartments</h3>
       <div className='d-flex justify-content-start align-items-center gap-3'>
       <div className='First'>
            <p>Our apartments in Nice </p>
            <p>Our apartments in Florence</p>
        </div>
        <div className='Second'>
            <p>Our apartments in Paris</p>
            <p>Our apartments in Bologna</p>
        </div>
       </div>
      </div>
      <div className='Useful-links'>
      <h3>Useful links</h3>
      <div className='d-flex justify-content-start align-items-center gap-3'>

        <div className='First'>
           <p>FAQ</p>
           <p>Terms and conditions</p>
        </div>
        <div className='Second'>
            <p>Contact us</p>
            <p>Cookies alert</p>
        </div>
</div>
      </div>
      <div className='Create-alert'>
        <h3>You don’t find what you are looking for? </h3>
        <button className='d-flex align-items-center mt-4 p-3'> <img className='me-2' src={bell} alt='bell'/>Create an alert</button>
      </div>
    </div>



    {/* Mobile collapse */}
    <div className='Footer-container-mobile'>
      <div className='Apartements container'>
        <div className='d-flex justify-content-between'>
          <h3>Our apartments</h3>
          <img src={arrow} alt='arrow' onClick={handleCLick}/>
        </div>

      {!show&&<div className='Footer-content'>
       <div className='First'>
            <p>Our apartments in Nice </p>
            <p>Our apartments in Florence</p>
        </div>
        <div className='Second'>
            <p>Our apartments in Paris</p>
            <p>Our apartments in Bologna</p>
        </div>
       </div>
      } 
      </div>
      <div className='Useful-links container'>
      <div className='d-flex justify-content-between'>
        <h3>Useful links</h3>
        <img src={arrow} alt='arrow' onClick={handleCLick}/>
      </div>

      {show &&<div className='Footer-content'>

        <div className='First'>
           <p>FAQ</p>
           <p>Terms and conditions</p>
        </div>
        <div className='Second'>
            <p>Contact us</p>
            <p>Cookies alert</p>
        </div>
      </div>}
      </div>
      <div className='Create-alert container'>
        <h3>You don’t find what you are looking for? </h3>
        <button> <img src={bell} alt='bell'/>Create an alert</button>
      </div>
    </div>

    {/*  */}
    <hr></hr>
    <p className='Copyright'>Copyright 2022 - Oxton Digital</p>
    </>
  )
}

export default Footer
