import React, {useState} from 'react'
import "./Footer.css"
import bell from "../../assets/bell 1.svg"
import arrow from '../../assets/arrow.svg'

const Footer = () => {
  const [showApartments, setShowApartments] = useState(false);
  const [showUsefulLinks, setShowUsefulLinks] = useState(false);

  const toggleApartments = () => {
    setShowApartments(!showApartments);
  };

  const toggleUsefulLinks = () => {
    setShowUsefulLinks(!showUsefulLinks);
  };

  
  return (
    <>
    <div className='Footer-container p-4 justify-content-evenly align-items-center mb-2  text-align-center'>
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
        {/* Apartments Section */}
        <div className='Apartements container'>
          <div className='d-flex justify-content-between align-items-center'>
            <h3>Our apartments</h3>
            <img src={arrow} alt='arrow' onClick={toggleApartments} />
          </div>

          {/* Footer Content */}
          {showApartments && (
            <div className='Footer-content'>
              {/* Apartments content */}
            <div className='Footer-content'>
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
          )}
        </div>

        {/* Useful Links Section */}
        <div className='Useful-links container'>
          <div className='d-flex justify-content-between align-items-center'>
            <h3>Useful links</h3>
            <img src={arrow} alt='arrow' onClick={toggleUsefulLinks} />
          </div>

          {/* Footer Content */}
          {showUsefulLinks && (
            <div className='Footer-content'>
              {/* Useful links content */}
              
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
            </div>
          )}
        </div>

        {/* Create Alert Section */}
        <div className='Create-alert container'>
          <h3>You don’t find what you are looking for? </h3>
          <button> <img src={bell} alt='bell' />Create an alert</button>
        </div>
      </div>

      {/* Horizontal Line and Copyright */}
      <hr />
      <p className='Copyright'>Copyright 2022 - Oxton Digital</p>
    </>
  );
};

export default Footer;