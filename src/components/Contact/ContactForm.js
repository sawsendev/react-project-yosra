import React, {useState} from 'react'
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import "./Contact.css"



const ContactForm = () => {
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
      <form className='col-md-5 me-auto'>
        <h3>We are here to help</h3>
        <h2 className='contact-heading'>Leave a message</h2>
        <div class="row mb-4">
            <div class="col-sm-6">
                <div class="form-outline">
                    <label class="form-label" for="form6Example1">First name</label>
                    <input type="text" id="form6Example1" class="form-control" />
                </div>
            </div>
            <div class="col-sm-6">
                <div class="form-outline">
                    <label class="form-label" for="form6Example2">Last name</label>
                    <input type="text" id="form6Example2" class="form-control" />
                </div>
            </div>
        </div>

        <div className='row'>
             <div class="form-outline col-sm-6 mb-4">
                  <label class="form-label" for="form6Example3">Email*</label>
                  <input type="email" id="form6Example3" class="form-control" />
             </div>

            <div class="form-outline col-sm-6 mb-4">
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


        <div class="form-outline mb-4">
            <label class="form-label" for="form6Example7">Type here</label>
            <textarea class="form-control" id="form6Example7" rows="2"></textarea>
        </div>

          <button type="submit" class="btn btn-primary btn-block mb-4 float-end bg-dark">Send message</button>
    </form>
  )
}

export default ContactForm
