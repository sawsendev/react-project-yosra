import React, { useState } from 'react'
import image from '../../assets/animation_500_lj4c3zmw 1.svg'
import { format } from 'date-fns';
import ReactGA from 'react-ga';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./BookingRoom.scss"
import sendImg from "../../assets/send 1.svg"
import upload from "../../assets/image-gallery.svg"
import payslip from "../../assets/g2115.svg"
import certificate from "../../assets/certificate.svg"
import groupId from "../../assets/Groupe 1178.svg"
import inVoice from "../../assets/invoice.svg"
import file from "../../assets/file.svg"
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import BookingProcess from '../BookingProcess/BookingProcess';
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import calendarIcon from '../../assets/calendar.svg';
import { Helmet } from 'react-helmet';
import { URL } from '../Variables'
import loading1 from '../../assets/loadwithoutbg.gif'
import { URL_Back } from '../Variables';
const BookingRoom = () => {
  // ************************
  const [mainFile, setMainFile] = useState(null);
  const [subFiles, setSubFiles] = useState([null, null, null]);
  const [newFile, setNewFile] = useState(null);
  const [fileVisible, setFileVisible] = useState([true, true, true, true, true]);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [emailValid, setEmailValid] = useState(true);
  const { id } = useParams();
  const [lotData, setLotData] = useState({});
  const API_KEY = 'a2b18f9cfb72eb93f3ce6b1c30372b59';
  const [isLoading, setIsLoading] = useState(false);
  const API_URL = `https://admin.finecribs.com/api/lot/${id}`;
  const [email, setEmail] = useState('')
  const [formData, setFormData] = useState({
    firstName: '',
    surname: '',

  });
  const [phoneNumber, setPhoneNumber] = useState("")
  const [country, setCountry] = useState('fr');
  const [formErrors, setFormErrors] = useState({
    firstName: '',
    surname: '',
    email: '',
    moveInDate: '',
    moveOutDate: '',
  });
  const [moveInDate, setMoveInDate] = useState(null);
  const [moveOutDate, setMoveOutDate] = useState(null);
  const CustomInputIn = ({ value, onClick, onChange, name }) => (
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

  const CustomInputOut = ({ value, onClick, onChange, name }) => (
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
  const [phoneNumberWithoutCode, setPhoneNumberWithoutCode] = useState('');
  const [code, setCode] = useState()

  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setFormErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
  };
  const handleEmailChange = (event) => {
    const emailValue = event.target.value;
    setEmail(emailValue);
    setEmailValid(validateEmail(emailValue));
    setFormErrors((prevErrors) => ({ ...prevErrors, email: '' }));
  }
  const validateEmail = (email) => {
    const emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
    return emailPattern.test(email);
  };

  useEffect(() => {
    const headers = {
      'apiKey': `${API_KEY}`,
    };
    fetch(API_URL, { method: 'GET', mode: 'cors', headers })
      .then(response => response.json())
      .then(data => {
        setLotData(data.data.lot);
      })
      .catch(error => {
        console.error('Erreur lors de la récupération des données :', error);
      });
  }, [API_URL, API_KEY])

  const handleCustomInputInChange = (date) => {
    setMoveInDate(date);
  };
  const handleCustomInputOutChange = (date) => {
    setMoveOutDate(date);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsLoading(true);
      const formDataToSend = new FormData();
      formDataToSend.append('lot_id', id);
      formDataToSend.append('first_name', formData.firstName);
      formDataToSend.append('last_name', formData.surname);
      formDataToSend.append('email', email);
      formDataToSend.append('start_date', format(moveInDate, 'yyyy-MM-dd'));
      formDataToSend.append('end_date', format(moveOutDate, 'yyyy-MM-dd'));
      if (phoneNumberWithoutCode) {
        formDataToSend.append('phone_number', phoneNumberWithoutCode);
        formDataToSend.append('phone_country_name', country);
      }
      if (mainFile) {
        formDataToSend.append('identity', mainFile);
      }
      if (subFiles[0]) {
        formDataToSend.append('school_certificate', subFiles[0]);
      }
      if (subFiles[1]) {
        formDataToSend.append('guarantor_id', subFiles[1]);
      }
      if (subFiles[2]) {
        formDataToSend.append('guarantor_tax_declaration', subFiles[2]);
      }
      if (newFile) {
        formDataToSend.append('professional_tax_declaration', newFile);
      }
      try {
        const response = await fetch('https://admin.finecribs.com/api/rental_request/post', {
          method: 'POST',
          mode: 'cors',
          headers: {
            'apiKey': API_KEY,
          },
          body: formDataToSend,
        });

        if (response.ok) {
          setFormSubmitted(true);
          window.scrollTo(0, 0);
        } else {
          if (response.status === 422) {
            const errorData = await response.json();
            if (errorData) {
              toast.error(errorData.data.message, {
                position: toast.POSITION.TOP_CENTER,
                autoClose: 6000,
              });
            } else {
              toast.error('Validation Error, please check your input', {
                position: toast.POSITION.TOP_CENTER,
                autoClose: 6000,
              });
            }
          } else {
            console.error('Error making the request. Status:', response.status);
            toast.error('Error making the request. Please try again.', {
              position: toast.POSITION.TOP_CENTER,
              autoClose: 6000,
            });
          }
        }
      } catch (error) {
        console.error('Error making the request:', error.message);
        toast.error('Error making the request. Please try again.', {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 6000,
        });
      }
      finally {
        setIsLoading(false)
      }
    } else {
      window.scrollTo(0, 0);
    }
  };
  const handleclick = (index) => {
    const updatedFileVisible = [...fileVisible];
    updatedFileVisible[index] = !updatedFileVisible[index];
    setFileVisible(updatedFileVisible);
  };
  const handleFileChange = (e, index) => {
    const file = e.target.files[0];
    const updatedFileVisible = [...fileVisible];
    if (index === 0) {
      setMainFile(file);
      updatedFileVisible[0] = true;
    } else if (index <= 3) {
      const newSubFiles = [...subFiles];
      newSubFiles[index - 1] = file;
      setSubFiles(newSubFiles);
      updatedFileVisible[index] = true;
    } else if (index === 4) {
      setNewFile(file);
      updatedFileVisible[4] = true;
    }
    setFileVisible(updatedFileVisible);
    e.target.value = '';
  };

  // ***************
  const validateForm = () => {
    const errors = {};
    let isValid = true;
    if (!formData.firstName.trim()) {
      errors.firstName = 'First name is required';
      isValid = false;
    }
    if (!formData.surname.trim()) {
      errors.surname = 'Surname is required';
      isValid = false;
    }
    if (!email.trim()) {
      errors.email = 'Email is required';
      isValid = false;
    }
    if (!moveInDate) {
      errors.moveInDate = 'Move In Date is required';
      isValid = false;
    }
    if (!moveOutDate) {
      errors.moveOutDate = 'Move Out Date is required';
      isValid = false;
    }
    setFormErrors(errors);
    return isValid;
  };
  const handleMoveInDateChange = (date) => {
    if (date) {
      setMoveInDate(date);
      setFormErrors((prevErrors) => ({ ...prevErrors, moveInDate: '' }));
    }
  };
  const handleMoveOutDateChange = (date) => {
    if (date) {
      setMoveOutDate(date);
      setFormErrors((prevErrors) => ({ ...prevErrors, moveOutDate: '' }));
    }
  };
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
    } else if (value.startsWith(code)) {
      // Utiliser substring pour obtenir la partie après le code de composition
      const phoneNumberWithoutCode = value.substring(code.length).trim();
      setPhoneNumberWithoutCode(phoneNumberWithoutCode);
    } else {
      // Le numéro ne commence ni par le code de composition ni par le code seul
      setPhoneNumberWithoutCode(value.trim());
    }
  };
  const moment = require('moment');
  function convertAvailabilityDateToDateObject(availabilityDate) {
    const availabilityMoment = moment(availabilityDate);
    if (!availabilityMoment.isValid()) {
      return null;
    }
    const dateObject = availabilityMoment.toDate();
    return dateObject;
  }
  const formattedDate = lotData && lotData.availability_date ? convertAvailabilityDateToDateObject(lotData.availability_date) : null;
  const minDate = new Date(formattedDate);
  minDate.setDate(minDate.getDate() + 1);
 return (
    <>
      <Helmet>
        <title>Booking Room</title>
        <meta
          name="description"
          content="Fine Cribs, beautiful flatshares designed for communal living"
        />
        <link rel="canonical" href={`${URL}/booking-enquiry/${id}`} />
        <script type="application/ld+json">
            {`
 {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Booking Room",
  "url": "${URL}/booking-enquiry/${id}",
  "description": "page apply for a room"
}

  
  `}
          </script>
      </Helmet>

      {lotData && lotData.apartment && lotData.apartment.title && lotData.title && lotData.apartment.building && lotData.apartment.building.city && (
        <Breadcrumbs
          path={`/`}
          customRoutes={[
            {
              path: `/search-cities?city=${lotData.apartment.building.city}`,
              label: `${lotData.apartment.building.city}`
            },
            {
              path: `/room/${lotData.id}`,
              label: `${lotData.apartment.title} - ${lotData.title}`
            }
          ]}

        />)}
      <div className='container'>
        <div className="Booking-title mt-4 mb-3">
          {lotData && lotData.apartment && lotData.apartment.title && lotData.title && (
            <h2>{lotData.apartment.title} - {lotData.title}</h2>
          )}
          <span>Private room in Nice</span>
        </div>
        {/* Contenu du formulaire */}
        {!formSubmitted ? (
          <div className='row'>
            <div className='Booking-content my-2 col-md-8 col-sm-12 pe-5'>
              <div className='d-flex justify-content-start align-items-center Booking-content-application mb-3'>
                <img className='me-2' src={sendImg} alt='send icon' />
                <h3 className='m-0'>Submit your application</h3>
              </div>
              <form id="file-upload-form" onSubmit={handleSubmit} className="uploader">
                <div className="row mb-4">
                  <div className="col-md-6 col-12">
                    {lotData && lotData.apartment && lotData.apartment.title && lotData.title && (
                      <input type='text' value={`Room[${lotData.apartment.title} - ${lotData.title}]`}
                        disabled className='w-100 Input-disabled' />)}
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 col-12">
                    <div className="form-outline">
                      <label className="form-label mb-1" htmlFor="firstname" >First name *</label>
                      <input type="text" id='firstname' name='firstName' className="form-control" placeholder='First name' onChange={handleChange} />
                      {formErrors.firstName !== '' &&
                        <div className="error-message">{formErrors.firstName}</div>}
                    </div>
                  </div>
                  <div className="col-md-6 col-12">
                    <div className="form-outline">
                      <label className="form-label mb-1" htmlFor="surname" >Surname *</label>
                      <input type="text" id='surname' className="form-control" name='surname' placeholder='Surname' onChange={handleChange} />
                      {formErrors.surname !== '' && <div className="error-message">{formErrors.surname}</div>}
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 col-12">
                    <div className="form-outline">
                      <label className="form-label mb-1" htmlFor="datein">Move in date *</label>
                      <DatePicker
                        id='datein'
                        selected={moveInDate}
                        name="moveInDate"
                        dateFormat="dd/MM/yyyy"
                        onChange={handleMoveInDateChange}
                        minDate={formattedDate - 1}
                        customInput={
                          <CustomInputIn
                            value={moveInDate}
                            onChange={handleCustomInputInChange}
                            name="moveInDate"
                          />
                        }
                        slotProps={{
                          textField: {
                            id: 'datein',
                          }
                        }}
                      />
                      {formErrors.moveInDate !== '' && <div className="error-message">{formErrors.moveInDate}</div>}
                    </div>
                  </div>
                  <div className="col-md-6 col-12">
                    <div className="form-outline">
                      <label className="form-label mb-1" htmlFor="dateout">Move out date *</label>
                      <DatePicker
                        id='dateout'
                        selected={moveOutDate}
                        name="moveOutDate"
                        dateFormat="dd/MM/yyyy"
                        onChange={handleMoveOutDateChange}
                        minDate={minDate}
                        customInput={
                          <CustomInputOut
                            value={moveOutDate}
                            onChange={handleCustomInputOutChange}
                            name="moveOutDate"
                          />}
                        slotProps={{
                          textField: {
                            id: 'dateout',
                          }
                        }}
                      />
                      {formErrors.moveOutDate !== '' && <div className="error-message">{formErrors.moveOutDate}</div>}
                    </div>
                  </div>
                </div>
                <div className='row mb-4'>
                  <div className="form-outline col-md-6 col-xs-12 mb-4">
                    <label className="form-label mb-1" htmlFor="email">Email*</label>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      className="form-control"
                      name='email'
                      placeholder="exemple@gmail.com"
                      onChange={handleEmailChange}

                    />
                    {!emailValid && <div className='error-message'>Please enter a valid email address.</div>}
                    {formErrors.email !== '' && <div className="error-message">{formErrors.email}</div>}
                  </div>
                  <div className="form-outline col-md-6 col-xs-12 mb-4">
                    <label className="form-label mb-1" htmlFor="phone">Phone</label>
                    <PhoneInput
                      country={country}
                      value={phoneNumber}
                      onChange={handlePhone}
                      inputProps={{
                        id: 'phone',
                        required: true,
                      }}
                    />
                  </div>
                </div>

                {/* *********** */}
                <div className="input-section">
                  {/* Main Input File */}
                  <label className="file-label">
                    Looking to speed up the booking process? Save time by completing your application now{' '}
                    <span className="comment d-block">(optional)</span>
                  </label>
                  <div className="input-container mb-2">
                    <label className="file-label mb-0">
                      <img className="d-table mx-auto mb-2" src={upload} alt="upload" />
                      <span className="first-span">Upload identity card </span>
                    </label>
                    <input
                      type="file"
                      name="mainFile"
                      accept=".pdf, .png, .jpg, .jpeg"
                      onChange={(e) => handleFileChange(e, 0)}
                    />
                  </div>
                  <div className={fileVisible[0] ? "file-input" : "file-input hidden"}>
                    {mainFile && (
                      <div className="uploaded-file">
                        {mainFile.type.startsWith('image/') ? (
                          <p className="uploaded-pdf mb-2"><img className='me-2' src={file} alt='file icon' />Image: {mainFile.name}
                            <div className='close-file' onClick={() => handleclick(0)}>
                              <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
                                <path d="M0 0h24v24H0z" fill="none" />
                                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" fill="#FF4B55" />
                              </svg>
                            </div>
                          </p>
                        ) : (
                          <p className="uploaded-pdf mb-2"><img className='me-2' src={file} alt='file icon' />PDF File: {mainFile.name}
                            <div className='close-file' onClick={() => handleclick(0)}>
                              <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
                                <path d="M0 0h24v24H0z" fill="none" />
                                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" fill="#FF4B55" />
                              </svg>
                            </div>
                          </p>
                        )}
                      </div>
                    )}
                  </div>

                  <label className="mt-4">Are you a student?</label>
                  <div className="sub-inputs row">
                    {[1, 2, 3].map((item, index) => (
                      <div className="col-sm-4" key={`sub-input-${index}`}>
                        <div className="input-container">
                          <label className="file-label m-0">
                            {/* Changez le titre et l'image pour chaque champ */}
                            {index === 0 && (
                              <>
                                <img className="d-table mx-auto mb-2" src={certificate} alt="Certificate" />
                                <span>Your school enrollment certificate</span>
                              </>
                            )}
                            {index === 1 && (
                              <>
                                <img className="d-table mx-auto mb-2" src={groupId} alt="guarantor" />
                                <span>Your guarantor’s ID</span>
                              </>
                            )}
                            {index === 2 && (
                              <>
                                <img className="d-table mx-auto mb-2" src={inVoice} alt="invoice" />
                                <span>Your guarantor’s last payslip or tax return</span>
                              </>
                            )}
                          </label>
                          <input
                            type="file"
                            accept=".pdf, .png, .jpg, .jpeg"
                            onChange={(e) => handleFileChange(e, index + 1)}
                          />
                        </div>
                        <div className={fileVisible[index + 1] ? "file-input" : "file-input hidden"}>
                          {subFiles[index] && (
                            <div className="uploaded-file">
                              {subFiles[index].type.startsWith('image/') ? (
                                <p className="uploaded-pdf mb-2"><img className='me-2' src={file} alt='file icon' />Image: {subFiles[index].name}
                                  <div className='close-file' onClick={() => handleclick(index + 1)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
                                      <path d="M0 0h24v24H0z" fill="none" />
                                      <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" fill="#FF4B55" />

                                    </svg>
                                  </div>
                                </p>
                              ) : (
                                <p className="uploaded-pdf mb-2"><img className='me-2' src={file} alt='file icon' />PDF File: {subFiles[index].name}
                                  <div className='close-file' onClick={() => handleclick(index + 1)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
                                      <path d="M0 0h24v24H0z" fill="none" />
                                      <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" fill="#FF4B55" />
                                    </svg>
                                  </div>
                                </p>
                              )}
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                  {/* Last Input File */}
                  <label className="file-label mt-4">Are you a professional ?</label>
                  <div className="input-container">
                    <label className="file-label m-0">
                      <img className='d-table mx-auto mb-2' src={payslip} alt="payslip" />
                      <span className='last-span'>Upload your last payslip or tax declaration</span>
                    </label>
                    <input
                      type="file"
                      accept=".pdf, .png, .jpg, .jpeg"
                      onChange={(e) => handleFileChange(e, 4)}
                    />
                  </div>
                  <div className={fileVisible[4] ? "file-input" : "file-input hidden"}>
                    {newFile && (
                      <div className="uploaded-file">
                        {newFile.type.startsWith('image/') ? (
                          <p className="uploaded-pdf mb-2"><img className='me-2' src={file} alt='file icon' />Image: {newFile.name}
                            <div className='close-file' onClick={() => handleclick(4)} >
                              <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
                                <path d="M0 0h24v24H0z" fill="none" />
                                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" fill="#FF4B55" />
                              </svg>
                            </div>
                          </p>
                        ) : (
                          <p className="uploaded-pdf mb-2"><img className='me-2' src={file} alt='file icon' />PDF File: {newFile.name}
                            <div className='close-file' onClick={() => handleclick(4)}>
                              <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
                                <path d="M0 0h24v24H0z" fill="none" />
                                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" fill="#FF4B55" />
                              </svg>
                            </div>
                          </p>
                        )}
                      </div>
                    )}
                  </div>
                </div>
                {/* ******************* */}
                <button type="submit" className="btn float-end submit-button" disabled={isLoading}>
                  {isLoading ? (
                    <span><img src={loading1} alt="Loading" style={{ width: '30px', height: '30px' }} /></span>
                  ) : (
                    <span>Apply</span>
                  )}
                </button>
              </form>
              </div>
            <div className='col-md-4 col-sm-12'>
              <BookingProcess cribs={lotData} />
            </div>
          </div>
        ) : (
        <div className='row'>
            <div className='col-md-8 col-sm-12 thank'>
              <img src={image} alt="description" />
              <p className='text-center mt-3  px-2 mx-md-3'>
                Thank you {formData.firstName}, we have received your application. Our team is currently reviewing your file. We will get back to you shortly. Please check your email address {email}.
              </p>
            </div>
            <div className='col-md-4 col-sm-12'>
              <BookingProcess />
            </div>
          </div>
        )}
      </div>
      <ToastContainer />
    </>
    )
}
export default BookingRoom