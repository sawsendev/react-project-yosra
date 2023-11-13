import React, { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import "./Contact.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Popup from '../Popupmsg/popup';


const ContactForm = () => {
    const [phoneNumber, setPhoneNumber] = useState("");
    const [valid, setValid] = useState(true);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [emailValid, setEmailValid] = useState(true);
    const [country,setCountry]=useState('fr');
    const API_KEY = 'a2b18f9cfb72eb93f3ce6b1c30372b59';
 
    
      //popup msg alert
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

    const handleFirstNameChange = (event) => {
        setFirstName(event.target.value);
    }

    const handleLastNameChange = (event) => {
        setLastName(event.target.value);
    }

    const handleEmailChange = (event) => {
      const emailValue = event.target.value;
      setEmail(emailValue);
      setEmailValid(validateEmail(emailValue));
  }

  const validateEmail = (email) => {
      const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      return emailPattern.test(email);
  }

    const handleMessageChange = (event) => {
        setMessage(event.target.value);
    }
    const handleSubmit = async (event) => {
      event.preventDefault();
    
      if (firstName && lastName && emailValid && valid && message) {
        const data = {
          name: firstName + " " + lastName,
          email: email,
          phone: phoneNumberWithoutCode,
          phone_country_name: country,
          message: message,
          objet: "contact : " + firstName + " " + lastName
        };
    
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
          
            <div class="row mb-8">
                <div class="col-lg-6">
                    <div class="form-outline">
                        <label class="form-label" for="form6Example1">First name</label>
                        <input type="text" id="form6Example1" class="form-control" value={firstName} onChange={handleFirstNameChange} />
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="form-outline">
                        <label className="form-label" for="form6Example2">Last name</label>
                        <input type="text" id="form6Example2" className="form-control" value={lastName} onChange={handleLastNameChange} />
                    </div>
                </div>
            </div>

            <div className='row'>
                <div className="form-outline col-lg-6 mb-4">
                    <label className="form-label" for="form6Example3">Email*</label>
                    <input type="email" id="form6Example3" class="form-control" value={email} onChange={handleEmailChange} />
                    {!emailValid && <p>Please enter a valid email address.</p>}
                </div>

               
            <div className="form-outline col-lg-6 mb-4">
                  <label className="form-label" for="phone">Phone</label>
                  <PhoneInput
  country={country}
  value={phoneNumber}
  onChange={handlePhone}
  inputProps={{
    required: true,
  }}
/>

                {/* {!valid && <p>Please enter a valid 10-digit phone number.</p>} */}
            </div>
        </div>

        

            <div class="form-outline mb-4">
                <label className="form-label" for="form6Example7">Type here</label>
                <textarea className="form-control" id="form6Example7" rows="2" value={message} onChange={handleMessageChange}></textarea>
            </div>

            <button type="submit" className="btn btn-primary btn-block float-end custom-button ">Send message</button>

        </form>
        
      {showPopup && <Popup message={popupMessage} status={status} onClose={handlePopupClose} />}
    </>
    )
}

export default ContactForm;
