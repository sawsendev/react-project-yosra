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


  const [mainFile, setMainFile] = useState(null);

  // State for sub-files
  const [subFiles, setSubFiles] = useState([null, null, null]); // Initialize with three null values

  // State for new file
  const [newFile, setNewFile] = useState(null);

  // Handle main file change
  const handleMainFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setMainFile(selectedFile);
  };

  // Handle sub-file change
  const handleSubFileChange = (e, subIndex) => {
    const selectedFile = e.target.files[0];
    const newSubFiles = [...subFiles];
    newSubFiles[subIndex - 1] = selectedFile; // Adjust subIndex to match array index
    setSubFiles(newSubFiles);
  };

  // Handle new file change
  const handleNewFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setNewFile(selectedFile);
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
            <div className='d-flex align-items-start align-items-center Booking-content-application'>
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
      {UploadArray.map((item, index) => (
        <div key={`input-${index}`} className="input-container">
          <label className="file-label">{item.heading}</label>
          <div className="file-input">
            <input
              id={`file-upload-${index}`}
              type="file"
              accept=".pdf, image/*"
              onChange={(e) => {
                if (index === 0) {
                  handleMainFileChange(e);
                } else {
                  handleSubFileChange(e, index);
                }
              }}
            />
            {index === 0 && mainFile && (
              <div className="uploaded-file">
                {mainFile.type.startsWith('image/') ? (
                  <img
                    src={URL.createObjectURL(mainFile)}
                    alt={`Image 1`}
                    className="uploaded-image"
                  />
                ) : (
                  <p className="uploaded-pdf">PDF File: {mainFile.name}</p>
                )}
              </div>
            )}
            {index > 0 && subFiles[index - 1] && (
              <div className="uploaded-file">
                {subFiles[index - 1].type.startsWith('image/') ? (
                  <img
                    src={URL.createObjectURL(subFiles[index - 1])}
                    alt={`Sub Image ${index}`}
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
