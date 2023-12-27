import React, { useState } from 'react';
import "./ProposeModal.css";
import logo from "../../../assets/logo.svg";
import upload from "../../../assets/room/icons/upload.svg";
import { IoCloseOutline, IoArrowBackOutline } from "react-icons/io5";
import { GiCheckMark } from "react-icons/gi";
import { BsSend } from "react-icons/bs";
import Modal from 'react-modal';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import calendarIcon from '../../../assets/calendar.svg'; 
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { format } from 'date-fns';
import PhoneInput from 'react-phone-input-2';
import iconfile from "../../../assets/file.svg";
import Popup from '../../Popupmsg/popup';
import like from '../../../assets/like.png'

const ProposeModal = ({ isOpen, closeModal }) => {
  
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

  const [step, setStep] = useState(1);
  const[date,setDate]=useState('')
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    
    quality: '',
    location: '',
    address: '',
    surface: '',
    message: '',
  });
  const API_KEY = 'a2b18f9cfb72eb93f3ce6b1c30372b59';
  const [validationErrors, setValidationErrors] = useState({});

  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;


  const requiredFieldsByStep = {
    1: ['email', 'phone', 'quality'],
    2: ['address', 'surface', 'date'],
    3: [],
    4: ['message'],
  };
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [country, setCountry] = useState('fr');
  const[phoneNumber, setPhoneNumber]=useState("")
 
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
  
  const [firstNameValue,setFirstNameValue]=useState('')
  
  
  
  

  const submitFormData = () => {
    console.log(phoneNumberWithoutCode);
    const formDataToSend = new FormData();
    formDataToSend.append('first_name', formData.firstName);
    formDataToSend.append('last_name', formData.lastName);
    formDataToSend.append('email', formData.email);
    formDataToSend.append('city', formData.location);
    formDataToSend.append('phone_number', phoneNumberWithoutCode);
    formDataToSend.append('phone_country_name', country);
    formDataToSend.append('surface', formData.surface);
    formDataToSend.append('are_you', formData.quality);
    formDataToSend.append('availability_date', format(date, 'dd-MM-yyyy'));
    formDataToSend.append('adress', formData.address);
    selectedFiles.forEach((file, index) => {
      formDataToSend.append(`medias[${index}]`, file);
    });
    formDataToSend.append('other_informations', formData.message);
     setFirstNameValue(formData.firstName)
   
    fetch('https://admin.finecribs.com/api/apartment_request/post', {
      method: 'POST',
      headers: {
        'apiKey': API_KEY,
      },
      body: formDataToSend,
    })
      .then((response) => {
        if (!response.ok) {
          // Gérez ici les erreurs de réponse de l'API
          return response.text().then((data) => {
            if (response.status === 422) {
              // Gérer les erreurs de validation (statut 422)
              console.error('API Error - Status 422:', data);
              throw new Error(data); // Lancez l'erreur avec la réponse complète
            } else {
              // Gérer d'autres erreurs de réponse
              console.error('API Error - Status ' + response.status + ':', data);
              throw new Error('API Error - Status ' + response.status);
            }
            
          });
        }
        setStatus('error');
        // Traitement normal si la réponse est OK
        return response.text();
      })
      .then(() => {
        setStep(1);
        closeModal();
        // toast.success('Form successfully submitted!', {
        //   position: toast.POSITION.TOP_CENTER,
        //   autoClose: 5000,
        // });
        displayPopup('Form successfully submitted!', {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 5000,
        });
        setStatus('success');
        setSelectedFiles([])
      })
      .catch((error) => {
         
        console.error('Erreur lors de la soumission du formulaire:', error);
        if (error && error.message) {
          try {
            const errorMessage = JSON.parse(error.message);
            if (errorMessage.data && errorMessage.data.message) {
              const message = errorMessage.data.message;
              // toast.error(message, {
              //   position: toast.POSITION.TOP_CENTER,
              //   autoClose: 5000,
              // });
              displayPopup(message, {
                position: toast.POSITION.TOP_CENTER,
                autoClose: 5000,
              });
              setStatus('error');
            }
          } catch (parseError) {
            console.error('Erreur d\'analyse JSON :', parseError);
          }
        } else {
          // toast.error('Error, please try again', {
          //   position: toast.POSITION.TOP_CENTER,
          //   autoClose: 5000,
          // });
          displayPopup('Error, please try again', {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 5000,
          });
          setStatus('error');
        }
        
      })
      .finally(() => {
        setSelectedFiles([]); 
      });
  };
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    const currentStepRequiredFields = requiredFieldsByStep[step];
    const errors = {};
  
    if (!emailRegex.test(formData.email)) {
      errors.email = 'Invalid email format';
    }
  
    currentStepRequiredFields.forEach((field) => {
      // Check if formData[field] is a string before calling trim()
      if (field === 'phoneNumber') {
        if (phoneNumber === '') {
          errors[field] = 'This field is required';
        }
      } else if (typeof formData[field] === 'string' && !formData[field].trim()) {
        errors[field] = 'This field is required';
      }
    });
  
    // Check if date is empty
    if (step === 2 && date === null) {
      errors.date = 'Date of availability is required';
    }
  
    if (Object.keys(errors).length === 0) {
      if (step < 4) {
        setStep(step + 1);
      } else {
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          quality: '',
          location: '',
          address: '',
          surface: '',
          message: '',
          medias:''
        });
        setPhoneNumber('');
        setDate('');
        setStep(1);
        closeModal();
      }
      setValidationErrors({});
    } else {
      setValidationErrors(errors);
    }
  };
  
  const prevStep = () => {
    setStep(step - 1);
  };
  const handleCustomInputChange = (date) => {
    setDate(date);
    console.log(date)
  };
  const [fileVisibility, setFileVisibility] = useState([true]);
  const handleFileChange = (e) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      // Initialisez fileVisibility avec true pour chaque fichier
      setFileVisibility(Array(files.length).fill(true)); 
      setSelectedFiles(Array.from(files));
      e.target.value = '';
    }
  };
  
  


  const handleclick = (index) => {
    // Créez une copie du tableau fileVisibility
    const updatedFileVisibility = [...fileVisibility];
    // Inversez la visibilité du fichier à l'index spécifié
    updatedFileVisibility[index] = !updatedFileVisibility[index];
    // Mettez à jour l'état avec le nouveau tableau
    setFileVisibility(updatedFileVisibility);
  };
  console.log(fileVisibility)
  
  
  
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
      setDate(date); // Stockez la date telle quelle
    }
  };
  console.log(formData.lastName)

  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);

    const renderStep = () => {
      switch (step) {
        case 1:
          return (
            <>
            <div className='step1-form'>
                <div className='form-group'>
                    <label className='form-label'>First name</label>
                    <input className='form-control'
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                    />
                </div>
                <div className='form-group'>
                    <label className='form-label'>Surname</label>
                    <input className='form-control'
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                    />
                </div> 
                <div className='form-group'>
                    <label className='form-label'>Email *</label>
                    <input className='form-control'
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                    required/>
                    {validationErrors.email && (
                      <div className="validation-error">{validationErrors.email}</div>
                    )}
                </div>
                <div className='form-group'>
                    <label className='form-label'>Phone number *</label>
                    <PhoneInput
  country={country}
  value={phoneNumber}
  onChange={handlePhone}
  inputProps={{
    required: true,
  }}

/>
                    
                {validationErrors.phone && (
                  <div className="validation-error">{validationErrors.phone}</div>
                )}
                </div>  
                <div className='form-group'>
                    <label className='form-label'>Are you *</label>
                    <div className='input-group input-select'>
                        <select className='form-control'
                            name="quality"
                            value={formData.quality}
                            onChange={handleInputChange}
                            required>
                            <option value=""></option>
                            <option value="individual">Individual</option>
                            <option value="company">Company</option>
                            <option value="association">Association</option>
                        </select>
                    </div>
                    {validationErrors.quality && (
                      <div className="validation-error">{validationErrors.quality}</div>
                    )}
                </div>  
                <button className='btn btn-accept' onClick={handleSubmit}>OK</button>
            </div>
            </>
          );
        case 2:
          return (
            <>
            <div className='step2-form'>
                <div className='form-group'>
                    <label className='form-label'>In which city is the property located</label>
                      <input className='form-control'
                          type="text"
                          name="location"
                          value={formData.location}
                          onChange={handleInputChange}
                      />
                </div>  
                <div className='form-group'>
                    <label className='form-label'>What is the adress ? *</label>
                    <input className='form-control'
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                    required/>
                    {validationErrors.address && (
                      <div className="validation-error">{validationErrors.address}</div>
                    )}
                </div> 
                <div className='form-group'>
                    <label className='form-label'>What is the surface (m2) ? *</label>
                    <input className='form-control'
                        type="number"
                        name="surface"
                        value={formData.surface}
                        onChange={handleInputChange}
                    required/>
                    {validationErrors.surface && (
                      <div className="validation-error">{validationErrors.surface}</div>
                    )}
                </div>
                <div className='form-group'>
                    <label className='form-label'>Date of availability *</label>
                    <div className='input-group'>

                            
                    <DatePicker
  selected={date}
  name="moveInDate"
  dateFormat="dd/MM/yyyy"
  onChange={handleMoveInDateChange}
  customInput={
    <CustomInput
      value={date}
      onChange={handleCustomInputChange}
      name="moveInDate"
    />
  }
  minDate={tomorrow}
/>
                    </div>
                        {validationErrors.date && (
                          <div className="validation-error">{validationErrors.date}</div>
                        )}
                </div>
                <button className='btn btn-accept' onClick={handleSubmit}>OK</button>
            </div>
            </>
          );
        case 3:
          return (
            <>
                <div className='step3-form'>
                    <div className='form-group'>
                        <label className='form-label'>Do you have photos, videos or a floorplan?
                        <br/>
                        We advise to attach recent photos of your property and ideally a floorplan to help us review your enquiry more efficiently
                        </label>

                        <button type="button" className="box-input">
                            <img src={upload} alt='photos' />
                            <label>Choose files</label>
                            <input type="file"
                            name="medias"
                            
                            onChange={handleFileChange} 
                            className="form-control upload-medias"
                             multiple/>
                        </button>
                    </div>
                    <div className="uploaded-file d-flex flex-wrap mb-3">
                    {selectedFiles.map((file, index) => (
  fileVisibility[index] && (
    <p key={index} className="uploaded-pdf mb-2">
      <img className='me-2' src={iconfile} alt='file icon'/>
      {file.name}
      <div className='close-file' onClick={() => handleclick(index)}>
        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
          <path d="M0 0h24v24H0z" fill="none"/>
          <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" fill="#FF4B55"/>
        </svg>
      </div>
    </p>
  )
))}
</div>

                    <button className='btn btn-accept' onClick={handleSubmit}>OK</button>
                </div>
            </>
          );
        case 4:
            return (
              <>
                <div className='step4-form'>
                    <div className='form-group message-form-group'>
                        <label className='form-label'>Other useful information (e.g. property condition, special needs) *</label>
                        <div className='note'>Date of availability, desired rent, condition of the property, possible work to be planned….</div>
                        <textarea className='form-control'
                            type="text"
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                        required></textarea>
                        {validationErrors.message && (
                          <div className="validation-error">{validationErrors.message}</div>
                        )}
                    </div>
                    <button
   className='btn btn-send'
  onClick={() => {
      handleSubmit();
      submitFormData();
    } }
>
  <BsSend /> Send
</button>

                </div>
              </>
            );
        default:
          return null;
      }
    };


    return (
      <>
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        contentLabel="Propose Modal"
      >
        <div className='container'>
       <div className='reactmodal-head'>
        <div className='btn-flex'>
            {step !== 1 && <button onClick={prevStep} className='btn btn-back'><IoArrowBackOutline /> Back</button>}
            <button onClick={closeModal} className='btn btn-close'>Close <IoCloseOutline/></button>
        </div>
        </div>
        <div className='reactmodal-header'>
            <div className='img-logo'><img src={logo} alt="NiceRoom" /></div>
            <nav className='nav-steps'>
                <ul>
                    <li className={`num ${step > 1 ? 'done' : ''} ${step === 1 ? 'active-step' : ''}`}><span className='n-step'><span className='number'>1</span><span className='check'><GiCheckMark /></span></span></li>
                    <li className='sup active-step'><span className='border'></span></li>
                    <li className={`num ${step > 2 ? 'done' : ''} ${step === 2 ? 'active-step' : ''}`}><span className='n-step'><span className='number'>2</span><span className='check'><GiCheckMark /></span></span></li>
                    <li className={step > 2 ? 'sup active-step' : 'sup'}><span className='border'></span></li>
                    <li className={`num ${step > 3 ? 'done' : ''} ${step === 3 ? 'active-step' : ''}`}><span className='n-step'><span className='number'>3</span><span className='check'><GiCheckMark /></span></span></li>
                    <li className={step > 3 ? 'sup active-step' : 'sup'}><span className='border'></span></li>
                    <li className={step === 4 ? 'num active-step' : 'num'}><span className='n-step'><span className='number'>4</span><span className='check'><GiCheckMark /></span></span></li>
                </ul>
            </nav>
        </div>
        <div className='reactmodal-body'>
            <div className='reactmodal-container'>
                    {renderStep()}
            </div>
        </div> 
        </div>
      </Modal>
      {/* <ToastContainer /> */}
      {showPopup && (
        status==='success' ?(<div className="popupp popup-msg-alertp">
          <div className='close'>
        <button className='closebtn' onClick={handlePopupClose}>
                &times;
              </button> 
              </div>
      <div className="popup-contentpropose"> 
      
        <div className='popup-body'>
          
        <div className='icon-msg mt-3 d-flex justify-content-center align-items-center'>
  <div className="d-flex align-items-center">
    <img src={like} alt='like' className='img-fluid like mx-2'/>
    <div className="message col">
      Thank you {firstNameValue}, we have received your enquiry
    </div>
  </div>
</div>




          <div className=''>
          <div className='my-2 row mx-3 qt'>What happens next ?</div>
          
          <div className='row mx-2'>
           <span className='step col-md-auto mx-2'>Step1</span>
           <div className='col-md mt-2'>
           <div className=''>
           <h5 className='text-start'>Our team will review your information and get back to you shortly</h5>
           <p className='text-start'>Our team will analyse the information you have provided, and get in touch with you to arrrange a viewing of the apartment</p>
          </div>
          </div>
          </div>
          <div className='row mx-2'>
           <span className='step col-md-auto mx-2'>Step2</span>
           <div className='col-md mt-2'>
           <div>
           <h5 className='text-start'>If your apartment makes the cut ,we will make you an offer in no time</h5>
           <p className='text-start'>If your apartment meets our standards , we will make you an offer and explain the terms of the partnership with Fine cribs.
           If your apartment needs a smart refurbishment(for example a bathroom),
           we will explain the initiatives that we intend to realise to improve your 
           property.</p>
          </div>
          </div>
          </div>
          <div className='row mx-2'>
           <span className='step col-md-auto mx-2'>Step3</span>
           <div className='col-md mt-2'>
           <div className=''>
           <h5 className='text-start'>Start earning a rental incom</h5>
           <p className='text-start'>If accept our offer , you will start earning a rental income from the next day.
           Fine cribs will be your tenant, you will just need to relax and cash rent every month.</p>
          </div>
          </div>
          </div>
          </div>
          
        </div>
      </div>
    </div>):( <Popup message={popupMessage} status={status} onClose={handlePopupClose} />)
    )}
      </>
     ) 
    }
  
export default ProposeModal;
