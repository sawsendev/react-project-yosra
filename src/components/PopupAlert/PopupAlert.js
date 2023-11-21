import React, { useState, useEffect } from 'react';
import './PopupAlert.css';
import PhoneInput from 'react-phone-input-2';
import logo_popup from '../../assets/img-logo-popupalert.png';
import icon from '../../assets/alert-bull.svg';
import { IoCloseOutline } from "react-icons/io5";
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Popup from '../Popupmsg/popup';
import SelectCity from '../SelectCity/SelectCity';
import { format } from 'date-fns';
import calendarIcon from '../../assets/calendar.svg'; 
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const PopupAlert =  (props) => {
  
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');
  const [status, setStatus] = useState('');
  
  const handlePopupClose = () => {
    setShowPopup(false);
  };

  const displayPopup = (message) => {
    setStatus(status);
    setPopupMessage(message);
    setShowPopup(true);
  };

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [city, setCity] = useState('');
  const [maxBudget, setMaxBudget] = useState('');
  const [moveInDate, setMoveInDate] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [country,setCountry]=useState('fr');
  const API_KEY = 'a2b18f9cfb72eb93f3ce6b1c30372b59';
  const API_URL = 'https://admin.finecribs.com/api/alert_request/post';
  const [phoneNumberWithoutCode, setPhoneNumberWithoutCode] = useState('');
  const[code,setCode]=useState()
  const handlePhone = (value, data) => {
    setPhoneNumber(value);
    setCountry(data.countryCode);
  
    // Extraire le code de composition du numéro
    
    setCode(data.dialCode);
  
    // Vérifier si le numéro commence par le code de composition
    if (value.startsWith(`+${code}`)) {
      // Utiliser substring pour obtenir la partie après le code de composition
      const phoneNumberWithoutCode = value.substring(`+${code}`.length).trim();
      setPhoneNumberWithoutCode(phoneNumberWithoutCode);
  
      console.log('Code de composition:', code);
      console.log('Numéro sans le code de pays:', phoneNumberWithoutCode);
    } else if (value.startsWith(code)) {
      // Utiliser substring pour obtenir la partie après le code de composition
      const phoneNumberWithoutCode = value.substring(code.length).trim();
      setPhoneNumberWithoutCode(phoneNumberWithoutCode);
  
      console.log('Code de composition:', code);
      console.log('Numéro sans le code de pays:', phoneNumberWithoutCode);
    } else {
      // Le numéro ne commence ni par le code de composition ni par le code seul
      setPhoneNumberWithoutCode(value.trim());
  
      console.log('Numéro sans le code de pays:', value.trim());
    }
  };
  
  


  const handleFormSubmit = (event) => {
    event.preventDefault();
    const formData = {
      first_name: firstName,
      last_name: lastName,
      email: email,
      city: city,
      date: format(moveInDate, 'dd-MM-yyyy'),
      max_budget: parseInt(maxBudget),
      phone_number: phoneNumberWithoutCode,
      phone_country_name: country
    };
  
    fetch(`${API_URL}`, {
      method: 'POST',
      headers: {
        'apiKey': `${API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then(async (response) => {
        if (response.ok) {
          const responseData = await response.json();
          console.log('Réponse de l\'API en cas de succès:', responseData);
          return responseData;
        } else {
          const errorData = await response.json();
          throw new Error(errorData.data.message);
        }
      })
      .then((data) => {
        setIsSubmitted(true);
        console.log("Requête effectuée avec succès");
        displayPopup('Thank you for your message! We will get in touch soon.');
        setStatus('success');
      })
      .catch((error) => {
        console.error('Erreur lors de la soumission du formulaire:', error);
        displayPopup('Error, please try again: ' + error.message);
        setStatus('error');
      });
  };
  
  
  
  
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

  const handleCustomInputChange = (date) => {
    setMoveInDate(date);
    console.log(date)
  };

  const CustomInput = ({ value, onClick, onChange, name }) => (
    <div className="input-datepicker" onClick={onClick}>
      <input
        type="text"
        name={name}
        className="form-control"
        value={value}
        placeholder=""
        required
        readOnly
        onChange={onChange}
      />
      <span className="calendar-icon">
        <img src={calendarIcon} alt="Calendar" />
      </span>
    </div>
  );
  const handleMoveInDateChange = (date) => {
    if (date) {
      setMoveInDate(date); // Stockez la date telle quelle
    }
  };

  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);


  return (
    <>
    
    <div className={`popup-container popupalert ${props.isPopupOpen ? 'open' : 'closed'}`}>
     {/* <ToastContainer/> */}
    {showPopup && <Popup message={popupMessage} status={status} onClose={handlePopupClose} />}
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
              <div className='col-md-6'>
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
              <div className='col-md-6'>
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
              <div className='col-md-6'>
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
              <div className='col-md-6'>
                <div className="form-outline">
                  <label htmlFor="phoneNumber" className='form-label'>Phone number</label>
                  <PhoneInput
  country={country}
  value={phoneNumber}
  onChange={handlePhone}
  inputProps={{
    required: true,
  }}
/>
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='col-md-6'>
                <div className="form-outline">
                  <label htmlFor="city" className='form-label'>City</label>
                  <div className='input-select'>
                  <SelectCity text="City" onChange={(selectedValue) => setCity( selectedValue.value)} />
                  </div>
                </div>
              </div>
              <div className='col-md-6'>
                <div className="form-outline">
                  <label htmlFor="moveInDate" className='form-label'>Move in date</label>
                  <div className='input-date'>
                  <DatePicker
  selected={moveInDate}
  name="moveInDate"
  dateFormat="dd/MM/yyyy"
  onChange={handleMoveInDateChange}
  customInput={
    <CustomInput
      value={moveInDate}
      onChange={handleCustomInputChange}
      name="moveInDate"
    />
  }
  minDate={tomorrow}
/>
                  </div>
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='col-md-6'>
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
    </>
  );
};

export default PopupAlert;
