import React, { useState } from 'react'
import StepsToBook from "../HomePage/StepsToBook/StepsToBook"
import "./BookingRoom.scss"
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
            <div className='d-flex align-items-center Booking-content-application'>
              <img src={sendImg} alt='send icon'/>
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
    
            <h3 className='Booking-content-heading'>Looking to speed up the booking process?  Save time by completing your file now
            (optional)</h3>
            {/* Upload  */}
           
              <input id="file-upload" type="file" name="fileUpload" accept="image/*" />
              <label className='Input-upload' for="file-upload" id="file-drag">
                <img id="file-image" src={upload} alt="Preview"/>
                <div id="start">
                  <div id="notimage">Upload identity card </div>
                </div>
                <div id="response" class="hidden">
                  <div id="messages"></div>
                  <progress class="progress" id="file-progress" value="0">
                    <span>0</span>%
                  </progress>
                </div>
              </label>
            
            <h3 className='Booking-content-heading'>Are you a student?</h3>
            <div className='row'>
              <div className='col-md-4 col-xs-12'>
                  {/* Upload  */}
                  <input id="file-upload" type="file" name="fileUpload" accept="image/*" />
                  <label  className='Input-upload' for="file-upload" id="file-drag">
                    <img id="file-image" src={certificate} alt="Preview"/>
                    <div id="start">
                      <div id="notimage">Your school enrollment
                       certificate </div>
                    </div>
                    <div id="response" class="hidden">
                      <div id="messages"></div>
                      <progress class="progress" id="file-progress" value="0">
                        <span>0</span>%
                      </progress>
                    </div>
                  </label>
              </div>
              <div className='col-md-4 col-xs-12'>
                {/* Upload  */}
                        
                <input id="file-upload" type="file" name="fileUpload" accept="image/*" />
                      <label  className='Input-upload' for="file-upload" id="file-drag">
                        <img id="file-image" src={groupId} alt="Preview"/>
                        <div id="start">
                            <div id="notimage">Your guarantor’s ID </div>
                          </div>
                        <div id="response" class="hidden">
                        <div id="messages"></div>
                        <progress class="progress" id="file-progress" value="0">
                        <span>0</span>%
                        </progress>
                        </div>
                      </label>                
              </div>
              <div className='col-md-4 col-xs-12'>
                      {/* Upload  */}
              
                  <input id="file-upload" type="file" name="fileUpload" accept="image/*" />
                  <label  className='Input-upload' for="file-upload" id="file-drag">
                    <img id="file-image" src={inVoice} alt="Preview"/>
                    <div id="start">
                      <div id="notimage"> Select a file or drag here</div>
                      <div id="notimage" class="hidden">Your guarantor’s
 last payslip or tax return </div>
                    </div>
                    <div id="response" class="hidden">
                      <div id="messages"></div>
                      <progress class="progress" id="file-progress" value="0">
                        <span>0</span>%
                      </progress>
                    </div>
                  </label>
              </div>
            </div>

            <h3 className='Booking-content-heading'>Are you a professional ?</h3>
            {/* Upload  */}
           
              <input id="file-upload" type="file" name="fileUpload" accept="image/*" />
              <label  className='Input-upload' for="file-upload" id="file-drag">
                <img id="file-image" src={payslip} alt="Preview"/>
                <div id="start">
                  <div id="notimage">Upload your last payslip or tax declaration </div>
                </div>
                <div id="response" class="hidden">
                  <div id="messages"></div>
                  <progress class="progress" id="file-progress" value="0">
                    <span>0</span>%
                  </progress>
                </div>
              </label>
              <button type="submit" class="btn btn-primary btn-block mb-4 float-end bg-dark">Apply</button>
            
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
