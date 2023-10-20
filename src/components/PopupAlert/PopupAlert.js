import React, { useState, useEffect } from 'react';
import './PopupAlert.css';
import PhoneInput from 'react-phone-input-2';
import logo_popup from '../../assets/img-logo-popupalert.png';
import icon from '../../assets/alert-bull.svg';
import { IoCloseOutline } from "react-icons/io5";
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Assurez-vous d'importer également les styles

const PopupAlert =  (props) => {
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
  const API_URL = 'http://dev.niceroom.sofis-info.com/api/alert_request/post';
  const handleChangephone=(value)=>{
    const input = value
    setPhoneNumber(input)
   
   }
  const handlePhoneCountryChange = (value) => {
    setCountry(value);
  };
  


  const handleFormSubmit = (event) => {
    event.preventDefault();
  
    // Créer un objet contenant les données du formulaire
    const formData = {
      first_name: firstName,
      last_name: lastName,
      email: email,
      city: city,
      date: moveInDate,
      max_budget: parseInt(maxBudget),
      phone_number: phoneNumber,
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
      .then((response) => {
        if (response.ok) {
          return response.json(); // Vous pouvez gérer la réponse du serveur ici
        } else if (response.status === 422) {
          return response.json().then((errorData) => {
            throw new Error(errorData.message); // Gérer le message d'erreur précis
          });
        } else {
          throw new Error('Error, please try again'); // Gérer d'autres erreurs de réponse
        }
      })
      .then((data) => {
        setIsSubmitted(true);
      })
      .catch((error) => {
        console.error('Erreur lors de la soumission du formulaire:', error);
        toast.error('Error try again ' + error.message, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
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
  return (
    <div className={`popup-container popupalert ${props.isPopupOpen ? 'open' : 'closed'}`}>
     <ToastContainer/>
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
                    class="form-control"
                    value={phoneNumber}
                    onChange={handleChangephone}
                    onChangeCountry={handlePhoneCountryChange}
                    inputProps={{
                      required: true,
                    }}/>
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='col-md-6'>
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
              <div className='col-md-6'>
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
  );
};

export default PopupAlert;
