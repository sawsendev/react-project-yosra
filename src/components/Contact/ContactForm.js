import React, { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import "./Contact.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Popup from '../Popupmsg/popup';
import loading1 from '../../assets/loaderbtn.gif'

const ContactForm = () => {
    const [phoneNumber, setPhoneNumber] = useState("");
    const [valid, setValid] = useState(true);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [emailValid, setEmailValid] = useState(true);
    const [country,setCountry]=useState('fr');
    const [isLoading, setIsLoading] = useState(false);
    const API_KEY = 'a2b18f9cfb72eb93f3ce6b1c30372b59';
 
    
      //popup msg alert
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');
  const [status, setStatus] = useState('');
  const [formErrors, setFormErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });
  const validateForm = () => {
    const errors = {};
    let isValid = true;
  
    if (!firstName.trim()) {
      errors.firstName = 'First name is required';
      isValid = false;
    }
  
    if (!lastName.trim()) {
      errors.lastName = 'Last name is required';
      isValid = false;
    }
  
    if (!email.trim()) {
      errors.email = 'Email is required';
      isValid = false;
    }
    if (!message.trim()) {
      errors.message = 'Message is required';
      isValid = false;
    }
    if (!phoneNumber.trim()) {
      errors.phoneNumber = 'Phone number is required';
      isValid = false;
    }
  
    setFormErrors(errors);
    return isValid;
  };
 
  
  const handlePopupClose = () => {
    setShowPopup(false);
  };

  const displayPopup = (message) => {
    setStatus(status);
    setPopupMessage(message);
    setShowPopup(true);
  };

    const handleFirstNameChange = (event) => {
        setFirstName(event.target.value);
        setFormErrors((prevErrors) => ({ ...prevErrors, firstName: '' }));
    }

    const handleLastNameChange = (event) => {
        setLastName(event.target.value);
        setFormErrors((prevErrors) => ({ ...prevErrors, lastName: '' }));
    }

    const handleEmailChange = (event) => {
      const emailValue = event.target.value;
      setEmail(emailValue);
      setEmailValid(validateEmail(emailValue));
      setFormErrors((prevErrors) => ({ ...prevErrors, email: '' }));
  }

  const validateEmail = (email) => {
      const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      return emailPattern.test(email);
  }

    const handleMessageChange = (event) => {
        setMessage(event.target.value);
        setFormErrors((prevErrors) => ({ ...prevErrors, message: '' }));
    }
    const handleSubmit = async (event) => {
      event.preventDefault();
     
    
      if (validateForm() && emailValid && valid && message) {
        setIsLoading(true);
        const data = {
          name: firstName + " " + lastName,
          email: email,
          message: message,
          objet: "contact : " + firstName + " " + lastName
        };
        if (phoneNumberWithoutCode) {
          data.phone = phoneNumberWithoutCode;
          data.phone_country_name = country;
        }
    
        try {
          const response = await fetch('https://admin.finecribs.com/api/contact', {
            method: 'POST',
            mode: 'cors',
            headers: {
              'Content-Type': 'application/json',
              'apiKey': API_KEY, 
            },
            body: JSON.stringify(data),
          });
    
          if (response.status === 200) {

            displayPopup('Thank you for your message! We will get in touch soon.');
            setStatus('success');
  
            console.log("Requête effectuée avec succès");
    
            // // Réinitialisez les états du formulaire
            // setFirstName('');
            // setLastName('');
            // setEmail('');
            // setPhoneNumber('');
            // setCountry('fr');
            // setMessage('');
            // setEmailValid(true);
            // setValid(true);
          } else {
            // Gérez les erreurs de la requête si nécessaire
            const errorData = await response.json();

            console.error('Erreur de la requête vers l\'API :', errorData.data.message);

            displayPopup( errorData.data.message );
            setStatus('error');

          }
        } catch (error) {
          console.error('Erreur lors de la requête vers l\'API :', error);

          // toast.error('Erreur lors de la requête vers l\'API. Veuillez réessayer.', {
          //   position: toast.POSITION.TOP_CENTER,
          //   autoClose: 3000, 
          // });
          
          displayPopup('Erreur lors de la requête vers l\'API. Veuillez réessayer.');
          setStatus('error');

        } finally{
          setIsLoading(false);
        }
      }
    };
    const [phoneNumberWithoutCode, setPhoneNumberWithoutCode] = useState('');
    const[code,setCode]=useState()
    const handlePhone = (value, data) => {
      setPhoneNumber(value);
      setCountry(data.countryCode);
    
      // Extraire le code de composition du numéro
      
      setCode(data.dialCode);
      setFormErrors((prevErrors) => ({ ...prevErrors, phoneNumber: '' }));
    
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
    
      
    return (
  
      <>
        <form className='col-md-6 col-10 mx-auto offset-md-6 '  onSubmit={handleSubmit}>
        <ToastContainer/>
        <h2>We are here to help</h2>
        <h3 className='contact-heading'>Leave a message</h3>
          
            <div className="row mb-8">
                <div className="col-lg-6">
                    <div className="form-outline">
                        <label className="form-label" for="form6Example1">First name*</label>
                        <input type="text" id="form6Example1" className="form-control" value={firstName} onChange={handleFirstNameChange} />
                        {formErrors.firstName !==''&&
                      <div className="error-message">{formErrors.firstName}</div>}
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="form-outline">
                        <label className="form-label" for="form6Example2">Last name*</label>
                        <input type="text" id="form6Example2" className="form-control" value={lastName} onChange={handleLastNameChange} />
                        {formErrors.lastName !==''&&
                      <div className="error-message">{formErrors.lastName}</div>}
                    </div>
                </div>
            </div>

            <div className='row'>
                <div className="form-outline col-lg-6 mb-4">
                    <label className="form-label" for="form6Example3">Email*</label>
                    <input type="email" id="form6Example3" className="form-control" value={email} onChange={handleEmailChange} />
                    {!emailValid && <div className='error-message'>Please enter a valid email address.</div>}
                    {formErrors.email !==''&&
                      <div className="error-message">{formErrors.email}</div>}
                </div>

               
            <div className="form-outline col-lg-6 mb-4">
                  <label className="form-label" for="phone">Phone*</label>
                  <PhoneInput
  country={country}
  value={phoneNumber}
  onChange={handlePhone}
  inputProps={{
    required: true,
  }}
/>
{formErrors.phoneNumber !==''&&
                      <div className="error-message">{formErrors.phoneNumber}</div>}

               
            </div>
        </div>

        

            <div className="form-outline mb-4">
                <label className="form-label" for="form6Example7">Type here*</label>
                <textarea className="form-control" id="form6Example7" rows="2" value={message} onChange={handleMessageChange}></textarea>
                {formErrors.message !==''&&
                      <div className="error-message">{formErrors.message}</div>}
            </div>

            <button type="submit" className="btn btn-primary btn-block float-end custom-button " disabled={isLoading} >
            {isLoading ? (
                      <span><img src={loading1} alt="Loading" style={{ width: '30px', height: '30px'}} /></span>
                    ) : (
                      <div>Send message</div>
                    )}
              </button>

        </form>
        
      {showPopup && <Popup message={popupMessage} status={status} onClose={handlePopupClose} />}
    </>
    )
}

export default ContactForm;
