import React, {useState} from 'react'
import "./Contact.css"
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';



const Contact = () => {
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
    <div className='Contact-container row'>
      <div className='col-lg-7 col-md-4 col-sm-12 w-100'></div>
      <form className='container col-lg-5 col-md-4 col-sm-12'>
        <h3>We are here to help</h3>
        <span>Leave a message</span>
        <div class="row mb-4">
            <div class="col">
            <div class="form-outline">
                <label class="form-label" for="form6Example1">First name</label>
                <input type="text" id="form6Example1" class="form-control" />
            </div>
            </div>
            <div class="col">
            <div class="form-outline">
                <label class="form-label" for="form6Example2">Last name</label>
                <input type="text" id="form6Example2" class="form-control" />
            </div>
            </div>
        </div>

        <div className='row'>
            <div class="form-outline col mb-4">
                <label class="form-label" for="form6Example3">Email*</label>
                <input type="email" id="form6Example3" class="form-control" />
            </div>

            <div class="form-outline col mb-4">
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
    </div>
  )
}

export default Contact
