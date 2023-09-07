import React from 'react'
import ContactForm from './ContactForm'
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';


const Contact = () => {
  return (
    <>
    <Breadcrumbs/>
    <div className='Contact-container row m-0'>
      <div className='col-md-5'></div>
      <ContactForm/>
    </div>
    </>
  )
}

export default Contact
