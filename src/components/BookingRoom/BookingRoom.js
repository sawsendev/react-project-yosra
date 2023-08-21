import React, { useState } from 'react'


import StepsToBook from "../HomePage/StepsToBook/StepsToBook"
import "./BookingRoom.scss"
import {UploadArray} from "../../Data/Data"

import sendImg from "../../assets/send 1.svg"
import upload from "../../assets/image-gallery.svg"
import payslip from "../../assets/g2115.svg"
import certificate from "../../assets/certificate.svg"
import groupId from "../../assets/Groupe 1178.svg"
import inVoice from "../../assets/invoice.svg"
import thinking from "../../assets/thinking.svg"

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
          <div className='Booking-content my-2 col-md-8 col-sm-12'>
            <h2>52 Rue Vernier, Nice - Room 5</h2>
            <span>Private room in Nice</span>
            <div className='d-flex justify-content-start align-items-center Booking-content-application'>
              <img className='me-2' src={sendImg} alt='send icon'/>
              <h3>Send your application</h3>
            </div>
            <form id="file-upload-form" class="uploader">
              <input type='text' value="Room [53 Boulevard Sola – Room 1]" disabled className='w-100 Input-disabled'/>
              <div class="row mb-4">
                <div class="col">
                <div class="form-outline">
                    <label class="form-label" for="form6Example1" >First name *</label>
                    <input type="text" id="form6Example1" class="form-control" placeholder='First name'/>
                </div>
                </div>
                <div class="col">
                <div class="form-outline">
                    <label class="form-label" for="form6Example2" >Surname *</label>
                    <input type="text" id="form6Example2" class="form-control" placeholder='Surname'/>
                </div>
                </div>
                </div>

                <div class="row mb-4">
                <div class="col">
                <div class="form-outline">
                    <label class="form-label" for="form6Example1">Move in date *</label>
                    <input type="date" id="form6Example1" class="form-control" required/>
                </div>
                </div>
                <div class="col">
                <div class="form-outline">
                    <label class="form-label" for="form6Example2">Move out date *</label>
                    <input type="date" id="form6Example2" class="form-control" required/>
                </div>
                </div>
                </div>

              <div className='row'>
                <div class="form-outline col-md-6 col-xs-12 mb-4">
                    <label class="form-label" for="form6Example3">Email*</label>
                    <input type="email" id="form6Example3" class="form-control" placeholder='exemple@gmail.com' required/>
                </div>

                <div class="form-outline col-md-6 col-xs-12 mb-4">
                    <label class="form-label" for="phone">Phone</label>
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
              Looking to speed up the booking process? Save time by completing your file now (optional)
            </label>
            <div className="input-container">
            <label className="file-label">
               <img className="d-block" src={upload} alt="upload"/>
               <span className='first-span'>Upload identity card </span>

            </label>
              <div className="file-input">
                <input
                  type="file"
                  accept=".pdf, .png, .jpg, .jpeg"
                  onChange={(e) => handleFileChange(e, 0)}
                />
                {mainFile && (
                  <div className="uploaded-file">
                    {mainFile.type.startsWith('image/') ? (
                      <img
                        src={URL.createObjectURL(mainFile)}
                        alt="Main File"
                        className="uploaded-image"
                      />
                    ) : (
                      <p className="uploaded-pdf">PDF File: {mainFile.name}</p>
                    )}
                  </div>
                )}
              </div>
            </div>

            {/* Sub-Input Files */}
          
            <label>Are you a student?</label>
            <div className='sub-inputs m-0 row'>
              {[1, 2, 3].map((item, index) => (
                <div key={`sub-input-${index}`} className="input-container col-sm-4">
                  <div className="file-input">
                    <label className="file-label">
                      {/* Change the title and image for each input */}
                      {index === 0 && (
                        <>
                          <img src={certificate} alt="Certificate" />
                          <span>Your school enrollment certificate</span>
                        </>
                      )}
                      {index === 1 && (
                        <>
                          <img src={groupId} alt="guarantor" />
                          <span> Your guarantor’s ID</span>
                        </>
                      )}
                      {index === 2 && (
                        <>
                          <img src={payslip} alt="payslip" />
                          <span>Your guarantor’s last payslip or tax return</span>
                        </>
                      )}
                      <input
                        type="file"
                        accept=".pdf, .png, .jpg, .jpeg"
                        onChange={(e) => handleFileChange(e, index)}
                      />
                    </label>
                    {subFiles[index - 1] && (
                      <div className="uploaded-file">
                        {subFiles[index - 1].type.startsWith('image/') ? (
                          <img
                            src={URL.createObjectURL(subFiles[index - 1])}
                            alt={`Sub File ${index}`}
                            className="uploaded-image"
                          />
                        ) : (
                          <p className="uploaded-pdf">PDF File: {subFiles[index - 1].name}</p>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>




            {/* Last Input File */}
            <label className="file-label">Are you a professional ?</label>
            <div className="input-container">
              <label className="file-label">
                <img className="d-block" src={inVoice} alt="invoice" />
                <span className='last-span'>Upload your last payslip or tax declaration</span>
              </label>
              <div className="file-input">
                <input
                  type="file"
                  accept=".pdf, .png, .jpg, .jpeg"
                  onChange={(e) => handleFileChange(e, 4)}
                />
                {newFile && (
                  <div className="uploaded-file">
                    {newFile.type.startsWith('image/') ? (
                      <img
                        src={URL.createObjectURL(newFile)}
                        alt="Last File"
                        className="uploaded-image"
                      />
                    ) : (
                      <p className="uploaded-pdf">PDF File: {newFile.name}</p>
                    )}
                  </div>
                )}
              </div>
            </div>
            </div>

           {/* ******************* */}
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
