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
    <div className='Footer-container mb-4 pb-3 pt-3 mt-5'>
      <div className='container'>
        <div class="row justify-content-between align-items-center">
        <div className='Apartements px-3'>
        <p className='h3'>Our apartments</p>
          <div className='d-flex justify-content-between align-items-center gap-3'>
              <div className='First'>
                  <p><a href="#">Our apartments in Nice</a></p>
                  <p><a href="#">Our apartments in Paris</a></p>
              </div>
              <div className='Second'>
                  <p><a href="#">Our apartments in Florence</a></p>
                  <p><a href="#">Our apartments in Bologna</a></p>
              </div>
          </div>
        </div>
        <div className='Useful-links px-3'>
          <p className='h3'>Useful links</p>
          <div className='d-flex justify-content-between align-items-center gap-3'>
            <div className='First'>
              <p><a href="#">FAQ</a></p>
              <p><a href="#">Contact us</a></p>
            </div>
            <div className='Second'>
                <p><a href="#">Terms and conditions</a></p>
                <p><a href="#">Cookies alert</a></p>
            </div>
          </div>
        </div>
        <div className='Create-alert px-3'>
          <p className='h3'>You don’t find what you are looking for? </p>
          <button className='btn btn-alert'> <img src={bell} alt='bell'/>Create an alert</button>
        </div>
      </div>
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
      <div className='Copyright'>
        <p className='m-0 text-center'>Copyright 2022 - Oxton Digital</p>
      </div>
    </>
  );
};

export default Footer;