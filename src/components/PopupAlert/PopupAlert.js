import React, { useState, useEffect } from 'react';
import './PopupAlert.css';
import PhoneInput from 'react-phone-input-2';
import logo_popup from '../../assets/img-logo-popupalert.png';
import icon from '../../assets/alert-bull.svg';
import { IoCloseOutline } from "react-icons/io5";

const PopupAlert =  (props) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [city, setCity] = useState('');
  const [maxBudget, setMaxBudget] = useState('');
  const [moveInDate, setMoveInDate] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
    const handleChange = (value) => {
    const input = value;
    setPhoneNumber(input);
  }
  
  const handleFormSubmit = (event) => {
    event.preventDefault();
    setIsSubmitted(true);
  }
  useEffect(() => {
    if (isSubmitted) {
      setTimeout(() => {
        setIsSubmitted(false);
        props.onClose();
      }, 2000);
    }
  }, [isSubmitted, props]);

  const handleClose = () => {
    props.onClose();
  };

  useEffect(() => {
    if (props.isPopupOpen) {
      document.body.classList.add('popup-open');
    } else {
      document.body.classList.remove('popup-open');
    }
  }, [props.isPopupOpen]);
  return (
    <div className={`popup-container popupalert ${props.isPopupOpen ? 'open' : 'closed'}`}>
      <div className="popup-content">
        <div className='popup-header'>
          <div className="circle">
            <img src={icon} alt="im" className='img-fluid' />
          </div>
          <button className="close-button" onClick={handleClose}>
            <IoCloseOutline />
          </button>
          <h2>Create an alert</h2>
        </div>
        
        <div className='popup-body'>
          {isSubmitted ? (
            <p className='alert alert-success'>Form submitted successfully! Popup will close in a moment.</p>
          ) : (
          <form onSubmit={handleFormSubmit}>
            <div className='row'>
              <div className='col-lg-6'>
                <div className="form-outline">
                  <label htmlFor="firstName" className='form-label'>Name</label>
                  <input
                    type="text"
                    id="firstName"
                    className="form-control"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className='col-lg-6'>
                <div className="form-outline">
                  <label htmlFor="lastName" className='form-label'>Surname</label>
                  <input
                    type="text"
                    id="lastName"
                    className="form-control"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                  />
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='col-lg-6'>
                <div className="form-outline">
                  <label htmlFor="email" className='form-label'>Email address</label>
                  <input
                    type="email"
                    id="email"
                    className="form-control"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className='col-lg-6'>
                <div className="form-outline">
                  <label htmlFor="phoneNumber" className='form-label'>Phone number</label>
                  <PhoneInput
                    country={'fr'}
                    class="form-control"
                    value={phoneNumber}
                    onChange={handleChange}
                    inputProps={{
                      required: true,
                    }} />
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='col-lg-6'>
                <div className="form-outline">
                  <label htmlFor="city" className='form-label'>City</label>
                  <div className='input-select'>
                  <input
                    type="text"
                    id="city"
                    className="form-control"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    required
                  />
                  </div>
                </div>
              </div>
              <div className='col-lg-6'>
                <div className="form-outline">
                  <label htmlFor="moveInDate" className='form-label'>Move in date</label>
                  <div className='input-date'>
                    <input
                      type="date"
                      id="moveInDate"
                      className="form-control"
                      value={moveInDate}
                      onChange={(e) => setMoveInDate(e.target.value)}
                      required
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='col-lg-6'>
                <div className="form-outline">
                  <label htmlFor="maxBudget" className='form-label'>Max budget</label>
                  <div className='input-price'>
                    <input
                      type="text"
                      id="maxBudget"
                      className="form-control"
                      value={maxBudget}
                      onChange={(e) => setMaxBudget(e.target.value)}
                      required
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center">
              <button type="submit" className='btn'>Send message</button>
            </div>
          </form>
        )}
        <div className="text-right img-right">
          <img src={logo_popup} alt="fine-cribes" className='img-fluid' />
        </div>
        </div>
      </div>
    </div>
  );
};

export default PopupAlert;
