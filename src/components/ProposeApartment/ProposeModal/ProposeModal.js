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

const ProposeModal = ({ isOpen, closeModal }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    quality: '',
    location: '',
    address: '',
    surface: '',
    availability: '',
    medias: '',
    message: '',
  });
  
  const [validationErrors, setValidationErrors] = useState({});

  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
//   const phoneRegex = /^\d{8}$/;
  const phoneRegex = /^[\d-]{6,20}$/;

  const requiredFieldsByStep = {
    1: ['email', 'phone', 'quality'],
    2: ['address', 'surface', 'availability'],
    3: [],
    4: ['message'],
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

    if (!phoneRegex.test(formData.phone)) {
      errors.phone = 'Invalid phone format (e.g., 00112233)';
    }

    currentStepRequiredFields.forEach((field) => {
      if (!formData[field].trim()) {
        errors[field] = 'This field is required';
      }
    });

    if (Object.keys(errors).length === 0) {
      if (step < 4) {
        setStep(step + 1);
      } else {
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          quality: '',
          location: '',
          address: '',
          surface: '',
          availability: '',
          medias: '',
          message: '',
        });
        setStep(1);
        closeModal();
              // Show success toast message
        toast.success('Form successfully submitted!', {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 3000, // Adjust the duration of the toast as needed (in milliseconds)
        });
      }
      setValidationErrors({});
    } else {
      setValidationErrors(errors);
    }
  };

  const prevStep = () => {
    setStep(step - 1);
  };
  
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
                    <input className='form-control'
                        type="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                    required/>
                    
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
                    <div className='input-group input-select'>
                        <select className='form-control'
                            name="location"
                            value={formData.location}
                            onChange={handleInputChange}
                            >
                            <option value=""></option>
                            <option value="paris">Paris</option>
                            <option value="nice">Nice</option>
                            <option value="lilles">Lilles</option>
                        </select>
                    </div>
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
                    <label className='form-label'>What is the surface? *</label>
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
                    <div className='input-group input-date'>
                        <input className='form-control'
                            type="date"
                            name="availability"
                            value={formData.availability}
                            onChange={handleInputChange}
                        required/>
                    </div>
                        {validationErrors.availability && (
                          <div className="validation-error">{validationErrors.availability}</div>
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
                        <label className='form-label'>Do you have photos, videos or a floorplan?</label>
                        <button type="button" className="box-input">
                            <img src={upload} alt='photos' />
                            <label>Choose files</label>
                            <input type="file"
                            name="medias"
                            value={formData.medias}
                            onChange={handleInputChange} 
                            className="form-control upload-medias" multiple/>
                        </button>
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
                        <label className='form-label'>Other information (e.g. condition, need for refurbishment) *</label>
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
                    <button className='btn btn-send' onClick={handleSubmit}><BsSend /> Send</button>
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
      <ToastContainer />
      </>
      )
    }
  
export default ProposeModal