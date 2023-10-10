import React, { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import "./Contact.css"
import {FaRegFaceSmileBeam} from 'react-icons/fa6'

const ContactForm = () => {
    const [phoneNumber, setPhoneNumber] = useState("");
    const [valid, setValid] = useState(true);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [emailValid, setEmailValid] = useState(true);
    const [showThankYou, setShowThankYou] = useState(false);
    const API_KEY = 'a2b18f9cfb72eb93f3ce6b1c30372b59';
    const handleChange = (value) => {
        const input = value;
        setPhoneNumber(input);
        setValid(validatePhoneNumber(input));
    }

    const validatePhoneNumber = (phoneNumber) => {
        const phoneNumberPattern = /^\d{10}$/;
        return phoneNumberPattern.test(phoneNumber);
    }

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
            email: email,
            phone: phoneNumber,
            message: message,
            objet: "contact : " + firstName + " " + lastName
          };
      
          try {
            const response = await fetch('http://dev.niceroom.sofis-info.com/api/contact', {
              method: 'POST',
              mode: 'cors',  
              headers: {
                'Content-Type': 'application/json',
                'apiKey': API_KEY, // Assurez-vous que votre clé API est correctement définie
              },
              body: JSON.stringify(data),
            });
      
            if (response.status === 200) {
              // Si la requête réussit, affichez un message de remerciement ou effectuez d'autres actions nécessaires
              setShowThankYou(true);
              console.log("Requête effectuée avec succès");
      
              // Réinitialisez les états du formulaire
              setFirstName('');
              setLastName('');
              setEmail('');
              setPhoneNumber('');
              setMessage('');
              setEmailValid(true);
              setValid(true);
            } else {
              // Gérez les erreurs de la requête si nécessaire
              console.error('Erreur de la requête vers l\'API');
            }
          } catch (error) {
            console.error('Erreur lors de la requête vers l\'API :', error);
          }
        }
      };
      
      

    return (
        <form className='col-md-6 col-10 mx-auto offset-md-6 '  onSubmit={handleSubmit}>
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
                  country={'fr'}
                  class="form-control"
                  value={phoneNumber}
                  onChange={handleChange}
                  inputProps={{
                  required: true,
                  }}/>
                {!valid && <p>Please enter a valid 10-digit phone number.</p>}
            </div>
        </div>

        

            <div class="form-outline mb-4">
                <label className="form-label" for="form6Example7">Type here</label>
                <textarea className="form-control" id="form6Example7" rows="2" value={message} onChange={handleMessageChange}></textarea>
            </div>

            <button type="submit" className="btn btn-primary btn-block float-end custom-button ">Send message</button>
            {showThankYou && (
         <div className="popup-overlay">
          <div className="popup-content">
            <p>Thank you for your message! We will get in touch soon.</p>
                <span style={{ display: 'block', marginBottom: '5px',marginTop:'-10px',fontSize:'25px' }}><FaRegFaceSmileBeam/></span>
            <button className='btn btn-primary' onClick={() => setShowThankYou(false)}>Close</button>
        </div>
    </div>
)}
        </form>
        
    )
}

export default ContactForm;
