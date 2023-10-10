import React, { useState } from 'react';
import './PopupAlert.css';
import PhoneInput from 'react-phone-input-2';
import icon from '../../assets/Group 26 (2).svg'
const PopupAlert = ({isPopupOpen,closeModal }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [city, setCity] = useState('');
  const [maxBudget, setMaxBudget] = useState('');
  const [moveInDate, setMoveInDate] = useState('');
  const [closePopup,setClosePopup]=useState('false')

  const handleChange = (value) => {
    const input = value;
    setPhoneNumber(input);
  }

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Appelez la fonction de gestion du formulaire et transmettez les données
   setClosePopup(true)
};

  return (
    <div className={`popup-container ${isPopupOpen ? 'open' : 'closed'}`}>
    
      <div className="popup-content">
      <div className="circle">
      <img src={icon} alt="im" className='img-fluid'/>
      </div>
        <h2>Create an alert</h2>
        <hr /> 
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
                  }}/>
          </div>
          </div>
          </div>
          <div className='row'>
          <div className='col-lg-6'>
          <div className="form-outline">
            <label htmlFor="city" className='form-label'>city</label>
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
          <div className='col-lg-6'>
          <div className="form-outline">
            <label htmlFor="maxBudget" className='form-label'>Move in date</label>
          
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
          <div className='row'>
          <div className='col-lg-6'>
          <div className="form-outline">
            <label htmlFor="moveInDate" className='form-label'>Max budget</label>
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
          <div className="text-center">
          <button type="submit" className='btn' onClick={handleFormSubmit}>Send message</button>
          </div>
        </form>
       
      </div>
    </div>
  );
};

export default PopupAlert;
