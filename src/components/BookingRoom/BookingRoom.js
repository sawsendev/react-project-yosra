import React, { useState } from 'react'


import StepsToBook from "../HomePage/StepsToBook/StepsToBook"
import "./BookingRoom.scss"
//import {UploadArray} from "../../Data/Data"

import sendImg from "../../assets/send 1.svg"
import upload from "../../assets/image-gallery.svg"
import payslip from "../../assets/g2115.svg"
import certificate from "../../assets/certificate.svg"
import groupId from "../../assets/Groupe 1178.svg"
import inVoice from "../../assets/invoice.svg"
import thinking from "../../assets/thinking.svg"
import file from "../../assets/file.svg"

import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import BookingProcess from '../BookingProcess/BookingProcess';

const BookingRoom = () => {
// ************************

  const [mainFile, setMainFile] = useState(null);
  const [subFiles, setSubFiles] = useState([ null, null, null]);
  const [newFile, setNewFile] = useState(null);

  const handleFileChange = (e, index) => {
    const file = e.target.files[0];

    if (index === 0) {
      setMainFile(file);
    } else if (index <= 3) {
      const newSubFiles = [...subFiles];
      newSubFiles[index - 1] = file;
      setSubFiles(newSubFiles);
    } else if (index === 4) {
      setNewFile(file);
    }
  };


  // ***************
  const[phoneNumber, setPhoneNumber]=useState("")
  const[valid, setValid]=useState(true)

  const handleChange=(value)=>{
   const input = value
   setPhoneNumber(input)
   setValid(validatePhoneNumber(input))
  }

  const validatePhoneNumber=(phoneNumber)=>{
    const phoneNumberPattern= /^\d{10}$/
    return phoneNumberPattern.test(phoneNumber);
  }

  return (
    <div className='container'>
      <div className='row'>
          <div className='Booking-content my-2 col-md-8 col-sm-12 pe-5'>
            <div className="Booking-title mt-4 mb-5">
              <h2>52 Rue Vernier, Nice - Room 5</h2>
              <span>Private room in Nice</span>
            </div>
            <div className='d-flex justify-content-start align-items-center Booking-content-application mb-3'>
              <img className='me-2' src={sendImg} alt='send icon'/>
              <h3 className='m-0'>Send your application</h3>
            </div>
            <form id="file-upload-form" class="uploader">
              <div class="row mb-4">
                <div class="col-md-6 col-12">
                  <input type='text' value="Room [53 Boulevard Sola – Room 1]" disabled className='w-100 Input-disabled'/>
                </div>
              </div>
              <div class="row mb-4">
                <div class="col">
                <div class="form-outline">
                    <label class="form-label mb-1" for="form6Example1" >First name *</label>
                    <input type="text" id="form6Example1" class="form-control" placeholder='First name'/>
                </div>
                </div>
                <div class="col">
                <div class="form-outline">
                    <label class="form-label mb-1" for="form6Example2" >Surname *</label>
                    <input type="text" id="form6Example2" class="form-control" placeholder='Surname'/>
                </div>
                </div>
                </div>

                <div class="row mb-4">
                <div class="col">
                <div class="form-outline">
                    <label class="form-label mb-1" for="form6Example1">Move in date *</label>
                    <div class="form-date">
                      <input type="date" id="form6Example1" class="form-control input-date" required/>
                    </div>
                </div>
                </div>
                <div class="col">
                <div class="form-outline">
                    <label class="form-label mb-1" for="form6Example2">Move out date *</label>
                    <div class="form-date">
                      <input type="date" id="form6Example2" class="form-control input-date" required/>
                    </div>
                </div>
                </div>
                </div>

              <div className='row'>
                <div class="form-outline col-md-6 col-xs-12 mb-4">
                    <label class="form-label mb-1" for="form6Example3">Email*</label>
                    <input type="email" id="form6Example3" class="form-control" placeholder='exemple@gmail.com' required/>
                </div>

                <div class="form-outline col-md-6 col-xs-12 mb-4">
                    <label class="form-label mb-1" for="phone">Phone</label>
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
    
           {/* *********** */}
            <div className="input-section">
            {/* Main Input File */}
            <label className="file-label">
              Looking to speed up the booking process? Save time by completing your file now <span className='comment d-block'>(optional)</span>
            </label>
            <div className="input-container mb-2">
            <label className="file-label mb-0">
               <img className="d-table mx-auto mb-2" src={upload} alt="upload"/>
               <span className='first-span'>Upload identity card </span>
            </label>
                <input
                  type="file"
                  accept=".pdf, .png, .jpg, .jpeg"
                  onChange={(e) => handleFileChange(e, 0)}
                />
              </div>
              <div className="file-input">
                
                      {/* <img
                        src={URL.createObjectURL(mainFile)}
                        alt="Main File"
                        className="uploaded-image"
                      /> */}
                {mainFile && (
                  <div className="uploaded-file">
                    {mainFile.type.startsWith('image/') ? (
                      <p className="uploaded-pdf mb-2"><img className='me-2' src={file} alt='file icon'/>Image: {mainFile.name}
                        <div className='close-file'>
                          <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
                            <path d="M0 0h24v24H0z" fill="none"/>
                            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" fill="#FF4B55"/>
                          </svg>
                      </div>
                      </p>
                    ) : (
                      <p className="uploaded-pdf mb-2"><img className='me-2' src={file} alt='file icon'/>PDF File: {mainFile.name}
                        <div className='close-file'>
                          <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
                            <path d="M0 0h24v24H0z" fill="none"/>
                            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" fill="#FF4B55"/>
                          </svg>
                        </div>
                      </p>
                    )}
                  </div>
                )}
              </div>

            {/* Sub-Input Files */}
          
            <label className='mt-4'>Are you a student?</label>
            <div className='sub-inputs row'>
              {[1, 2, 3].map((item, index) => (
              <div className='col-sm-4'>
                <div key={`sub-input-${index}`} className="input-container ">
                    <label className="file-label m-0">
                      {/* Change the title and image for each input */}
                      {index === 0 && (
                        <>
                          <img className='d-table mx-auto mb-2' src={certificate} alt="Certificate" />
                          <span>Your school enrollment certificate</span>
                        </>
                      )}
                      {index === 1 && (
                        <>
                          <img className='d-table mx-auto mb-2' src={groupId} alt="guarantor" />
                          <span> Your guarantor’s ID</span>
                        </>
                      )}
                      {index === 2 && (
                        <>
                          <img className='d-table mx-auto mb-2' src={inVoice} alt="invoice" />
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
                  <div className="file-input">
                    {subFiles[index] && (
                      <div className="uploaded-file">
                        {subFiles[index].type.startsWith('image/') ? (
                          <p className="uploaded-pdf mb-2"><img className='me-2' src={file} alt='file icon'/>Image: {subFiles[index].name}
                            <div className='close-file'>
                              <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
                                <path d="M0 0h24v24H0z" fill="none"/>
                                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" fill="#FF4B55"/>
                              </svg>
                            </div>
                          </p>
                        ) : (
                          <p className="uploaded-pdf mb-2"><img className='me-2' src={file} alt='file icon'/>PDF File: {subFiles[index].name} 
                            <div className='close-file'>
                              <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
                                <path d="M0 0h24v24H0z" fill="none"/>
                                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" fill="#FF4B55"/>
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
                <img  className='d-table mx-auto mb-2' src={payslip} alt="payslip" />
                <span className='last-span'>Upload your last payslip or tax declaration</span>
              </label>
                <input
                  type="file"
                  accept=".pdf, .png, .jpg, .jpeg"
                  onChange={(e) => handleFileChange(e, 4)}
                />
            </div>
              <div className="file-input">
                {newFile && (
                  <div className="uploaded-file">
                    {newFile.type.startsWith('image/') ? (
                      <p className="uploaded-pdf mb-2"><img className='me-2' src={file} alt='file icon'/>Image: {newFile.name}
                        <div className='close-file' >
                          <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
                            <path d="M0 0h24v24H0z" fill="none"/>
                            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" fill="#FF4B55"/>
                          </svg>
                        </div>
                      </p>
                    ) : (
                      <p className="uploaded-pdf mb-2"><img className='me-2' src={file} alt='file icon'/>PDF File: {newFile.name}
                      <div className='close-file'>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
                          <path d="M0 0h24v24H0z" fill="none"/>
                          <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" fill="#FF4B55"/>
                        </svg>
                      </div>
                    </p>
                    )}
                  </div>
                )}
              </div>
            </div>

           {/* ******************* */}
           <button type="submit" class="btn btn-primary float-end submit-button">Apply</button>
            </form>

          </div>
          
        <div className='col-md-4 col-sm-12'>
          <BookingProcess/>
        </div>
      </div>
      <div className='thinking-container'>
              <img className="me-2" src={thinking} alt='thinking icon'/>
              <span>What’s next? Our team will review your application and get back to you within 48 hours</span>
      </div>
      <StepsToBook/>
    </div>
  )
}

export default BookingRoom
