import React from 'react'
import sendImg from "../../assets/send 1.svg"
import ContactForm from '../Contact/ContactForm'

const BookingRoom = () => {
  return (
    <div className='container'>
      <h3>52 Rue Vernier, Nice - Room 5</h3>
      <span>Private room in Nice</span>
      <div className='d-flex'>
         <img src={sendImg} alt='send icon'></img>
         <p>Send your application</p>
      </div>
      <input type='text' value="Room [53 Boulevard Sola – Room 1] " required></input>
      <ContactForm/>
    </div>
  )
}

export default BookingRoom
