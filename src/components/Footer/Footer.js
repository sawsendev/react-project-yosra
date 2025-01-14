import React, { useState } from 'react'
import "./Footer.css"
import bell from "../../assets/bell 1.svg"
import arrow from '../../assets/arrow.svg'
import PopupAlert from '../PopupAlert/PopupAlert'

const Footer = () => {
  const [showApartments, setShowApartments] = useState(false);
  const [showUsefulLinks, setShowUsefulLinks] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const searchParams = new URLSearchParams();
  searchParams.append("city", "Nice");

  const searchParamsParis = new URLSearchParams();
  searchParamsParis.append("city", "Paris");

  const searchParamsFlorence = new URLSearchParams();
  searchParamsFlorence.append("city", "Florence");

  const searchParamsBologna = new URLSearchParams();
  searchParamsBologna.append("city", "Bologna");

  const toggleApartments = () => {
    setShowApartments(!showApartments);
  };
  const toggleUsefulLinks = () => {
    setShowUsefulLinks(!showUsefulLinks);
  };
  const openPopup = () => {
    setIsPopupOpen(true);
  };
  const closePopup = () => {
    setIsPopupOpen(false);
  };
  const [rotateDegree, setRotateDegree] = useState(90);
  const [rotateDegree1, setRotateDegree1] = useState(90);
  const toggleRotation = () => {
    setRotateDegree((prevDegree) => (prevDegree === 90 ? 270 : 90));
  };
  const toggleRotation1 = () => {
    setRotateDegree1((prevDegree) => (prevDegree === 90 ? 270 : 90));
  };
  const handleClick = () => {

    toggleApartments();
    toggleRotation();
  };
  const handleClick1 = () => {
    toggleUsefulLinks();
    toggleRotation1();
  };

  return (
    <>
      <div className='Footer-container mb-4 pb-3 pt-3 mt-5'>
        <div className='container'>
          <div className="row justify-content-between align-items-center">
            <div className='Apartements px-3'>
              <p className='h3'>Our apartments</p>
              <div className='d-flex justify-content-between align-items-center gap-3'>
                <div className='First'>
                  <p><a href={`/search-cities?${searchParams.toString()}`}>Our apartments in Nice</a></p>
                  <p><a href={`/search-cities`}>All our apartments</a></p>
                </div>
                <div className='Second'>
                  <p><a href={`/search-cities?${searchParamsFlorence.toString()}`}>Our apartments in Florence</a></p>
                  <p><a href={`/search-cities?${searchParamsBologna.toString()}`}>Our apartments in Bologna</a></p>
                </div>
              </div>
            </div>
            <div className='Useful-links px-3'>
              <p className='h3'>Useful links</p>
              <div className='d-flex justify-content-between align-items-center gap-3'>
                <div className='First'>
                  <p><a href={'/faq'}>FAQ</a></p>
                  <p><a href={'/contact'}>Contact us</a></p>
                </div>
                <div className='Second'>
                  <p><a href="/page/cgu">Terms and conditions</a></p>
                  <p><a href="/page/cookies-alert">Cookies alert</a></p>
                </div>
              </div>
            </div>
            <div className='Create-alert px-3' id='create_alert'>
              <p className='h3'>You don’t find what you are looking for? </p>
              <button className='btn btn-alert' onClick={openPopup}>
                <img src={bell} alt='bell' />Create an alert
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Mobile collapse */}
      <div className='Footer-container-mobile'>
        {/* Apartments Section */}
        <div className='Apartements container'>
          <div className='d-flex justify-content-between align-items-center'>
            <p className='h3'>Our apartments</p>
            <img src={arrow} alt='arrow' style={{ transform: `rotate(${rotateDegree}deg)` }} onClick={handleClick} />
          </div>
          {/* Footer Content */}
          {showApartments && (
            <div className='Footer-content'>
              {/* Apartments content */}
              <div className='Footer-content'>
                <div className='First'>
                  <p><a href={`/search-cities?${searchParams.toString()}`}>Our apartments in Nice</a></p>
                  <p><a href={`/search-cities`}>All our apartments</a></p>
                </div>
                <div className='Second'>
                  <p><a href={`/search-cities?${searchParamsFlorence.toString()}`}>Our apartments in Florence</a></p>
                  <p><a href={`/search-cities?${searchParamsBologna.toString()}`}>Our apartments in Bologna</a></p>
                </div>
              </div>
            </div>
          )}
        </div>
        {/* Useful Links Section */}
        <div className='Useful-links container'>
          <div className='d-flex justify-content-between align-items-center'>
            <p className='h3'>Useful links</p>
            <img src={arrow} alt='arrow' style={{ transform: `rotate(${rotateDegree1}deg)` }} onClick={handleClick1} />
          </div>
          {/* Footer Content */}
          {showUsefulLinks && (
            <div className='Footer-content'>
              {/* Useful links content */}
              <div className='Useful-links'>
                <div className=''>
                  <div className='First'>
                    <p><a href={'/faq'}>FAQ</a></p>
                    <p><a href={'/contact'}>Contact us</a></p>
                  </div>
                  <div className='Second'>
                    <p><a href="/page/cgu">Terms and conditions</a></p>
                    <p><a href="/page/cookies-alert">Cookies alert</a></p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        {/* Create Alert Section */}
        <div className='Create-alert container' id='create_alert'>
          <p className='h3'>You don’t find what you are looking for? </p>
          <button className='btn btn-alert' onClick={openPopup}>
            <img src={bell} alt='bell' />Create an alert
          </button>
        </div>
      </div>
      {/* Horizontal Line and Copyright */}
      <div className='Copyright'>
        <p className='m-0 text-center'>Copyright © {new Date().getFullYear()} Finecribs. All rights reserved. Developed by <a href='https://oxton-digital.com/' target='_blank' rel='noopener noreferrer'>Oxton Digital.</a></p>
      </div>
      {/* PopupAlert */}
      <PopupAlert isPopupOpen={isPopupOpen} onClose={closePopup} id="popupAlert1" />
    </>
  );
};

export default Footer;