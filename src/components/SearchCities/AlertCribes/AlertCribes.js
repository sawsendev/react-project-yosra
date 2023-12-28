import React, {useState} from 'react'
import "./AlertCribes.css"
import bell from "../../../assets/bell 1.svg"
import PopupAlert from '../../PopupAlert/PopupAlert'


const AlertCribes = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  
  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };
  return (
    <div className='alert text-center mt-3 row'>
    <div className="col-lg-7 d-flex flex-column align-items-center">
      <h2>You don't find what you are looking for? </h2>
      <button className='btn btn-alert' onClick={openPopup}>
        <img src={bell} alt='bell' />Create an alert
      </button>
    </div>
  <PopupAlert isPopupOpen={isPopupOpen} onClose={closePopup} id="popupAlert2"/>
  </div>
  )
}

export default AlertCribes
