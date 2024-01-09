import React, { useState } from 'react';
import './CancelAlert.css';
import arrow from '../../assets/right-arrow.svg'
import check from '../../assets/check.svg'
import loading1 from '../../assets/loadwithoutbg.gif'

const CancelAlert = () => {

  const [confirmation, setConfirmation] = useState(false);
  const [checkboxValue, setCheckboxValue] = useState(0);
  const API_KEY = 'a2b18f9cfb72eb93f3ce6b1c30372b59';
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

//   const location = useLocation();
//   const queryParams = new URLSearchParams(location.search);
//   const email = queryParams.get('email');
//   const id = queryParams.get('id');
  const encodedStringFromURL = window.location.search.substring(1); 
  const decodedString = atob(encodedStringFromURL);
  
  const [email, id] = decodedString.split('_');
 
  
  const handleConfirmation = () => {
    setIsLoading(true);
    const apiUrl = 'https://admin.finecribs.com/api/alert_request/confirm-cancel-alert';
     const requestData = {
           email:email,
           check:checkboxValue,
           id:id
        };
     const headers = {
        'apiKey': `${API_KEY}`,
        'Content-Type': 'application/json',
       };
    const requestOptions = {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(requestData),
    };
    fetch(apiUrl, requestOptions)
      .then(response => {
        if (!response.ok) {
          throw new Error('Erreur lors de la requête');
        }
       
        return response.json();
      })
      .then(data => {
        console.log('Réponse du serveur :', data);
        setConfirmation(true);
      })
      .catch(error => {
        console.error('Erreur fetch :', error);
      })
      .finally(()=>{
        setIsLoading(false);
      });
  };
  const handleConfirmation2 = () => {
    if (checkboxValue === 1) {
      handleConfirmation()
    }
    else{
      setErrorMessage('Please check the box to confirm your unsubscribe');
    }
  
  };
  
const handleCheckboxChange = (event) => {
    setCheckboxValue(event.target.checked ? 1 : 0);
    setErrorMessage('');
  };
  if (email==='0' && id === '0') {
    return (
      <div className='container cancelAlert-container'>
        <div className='d-flex flex-column align-items-start justify-content-space-evenly'>
          <div className='container'>
            {/* <div className='d-flex justify-content-center flex-row gap-3 mb-4'>
              <img src={check} alt='check' />
              <h1>Success</h1>
            </div> */}
             <h1> Unsubscribe from Our Alert </h1>
            <p>Hey, you don’t seem to have any active alert. If you need anything, drop us a message at <a href="mailto:contact@finecribs.com">contact@finecribs.com</a>. we’re here to help!</p>
            <button className='btn-hp mt-4' onClick={() => window.location.href='/'}>Go to the home page  <img src={arrow} alt='arrow'/></button>
          </div>
        </div>
      </div>
    );
  } else if (id === '0' && email !== '0') {
    return (
      <div className='container cancelAlert-container'>
        <div className='d-flex flex-column align-items-start justify-content-space-evenly'>
        {confirmation ? (
            <div className='container'>
            <div className='d-flex justify-content-center flex-row gap-3 mb-4'>
            <img src={check} alt='check' />
            <h1>Success</h1>
            </div>
          <p>Got it! Your unsubscribe request has been confirmed. You won't receive any more alerts from now on. Need further assistance? Feel free to reach out to us at <a href="mailto:contact@finecribs.com">contact@finecribs.com</a>.</p>
          <button className='btn-hp mt-4' onClick={()=>window.location.href='/'}>Go to the home page  <img src={arrow} alt='arrow'/></button>
          </div>
        ) : (
            <div className='container'>
              <h1> Unsubscribe from Our Alert </h1>
              <div className='d-flex flex-column justify-content-space-evenly'>
                <p className='cancel'>
                  This alert has already been canceled
                </p>
                <div className='d-flex flex-row-reverse align-items-stretch justify-content-center gap-2'>
          <label htmlFor="unsubscribeCheckbox"> Check this option if you want to unsubscribe from all your other alerts</label>
          <input type="checkbox" id="unsubscribeCheckbox" className='form-check-input' onChange={handleCheckboxChange} value={checkboxValue}/>
         
        </div>
        {errorMessage && <p className="text-danger">{errorMessage}</p>}
      
              </div>
              {/* <div className='d-flex justify-content-center gap-4 mt-4'>
                <button onClick={handleConfirmation2} className='b-confirmer'>Confirmer</button>
                <button className='b-annuler' onClick={() => window.location.href='/'}>Annuler</button>
              </div> */}
              <div className=' mt-4'>
                <button onClick={handleConfirmation2} className='b-confirmer me-3' disabled={isLoading} >
          {isLoading ? (
            <span><img src={loading1} alt="Loading" style={{ width: '30px', height: '30px' }} /></span>
          ) : (
            <div> Confirmer </div>
          )}
        </button>
               <button className='btn-hp mt-4' onClick={()=>window.location.href='/'}>Go to the home page  <img src={arrow} alt='arrow'/></button>
               </div>
            </div>
          )}
        </div>
      </div>
    );
  }
  
  return (
    <div className='container cancelAlert-container'>
    
      <div className='d-flex flex-column align-items-start justify-content-space-evenly'>
        {confirmation ? (
            <div className='container'>
            <div className='d-flex justify-content-center flex-row gap-3 mb-4'>
            <img src={check} alt='check' />
            <h1>Success</h1>
            </div>
          <p>Got it! Your unsubscribe request has been confirmed. You won't receive any more alerts from now on. Need further assistance? Feel free to reach out to us at <a href="mailto:contact@finecribs.com">contact@finecribs.com</a>.</p>
          <button className='btn-hp mt-4' onClick={()=>window.location.href='/'}>Go to the home page  <img src={arrow} alt='arrow'/></button>
          </div>
        ) : (
          <div className='container'>
           <h1> Unsubscribe from Our Alert </h1>
          <div className='d-flex flex-column justify-content-space-evenly'>
          <p className='cancel'>
          Ready to opt out of alerts? Simply check the box below to confirm your unsubscribe request.
           We hope you've found the perfect room! If you need anything, drop us a message at <a href="mailto:contact@finecribs.com">contact@finecribs.com</a> – we're here to help!
          </p>
          <div className='d-flex flex-row-reverse align-items-stretch justify-content-center gap-2'>
          <label htmlFor="unsubscribeCheckbox">I would like to unsubscribe from all alerts</label>
          <input type="checkbox" id="unsubscribeCheckbox" className='form-check-input' onChange={handleCheckboxChange} value={checkboxValue}/>
          
        </div>
        </div>
      <div className='d-flex justify-content-center gap-4 mt-4'>
      <button onClick={handleConfirmation} className='b-confirmer' disabled={isLoading} >
          {isLoading ? (
            <span><img src={loading1} alt="Loading" style={{ width: '30px', height: '30px' }} /></span>
          ) : (
            <div> Confirmer </div>
          )}
        </button>
        <button className='b-annuler' onClick={()=>window.location.href='/'}>Annuler</button>
      </div>
     
      </div>
        )}
        
    </div>
    </div>
  );
};

export default CancelAlert;
