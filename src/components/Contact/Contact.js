import React from 'react'
import ContactForm from './ContactForm'
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';


const Contact = () => {
  return (
    <>
    <Breadcrumbs/>
    <div className='Contact-container row'>
      <div className='col-md-6'></div>
      <ContactForm/>
    </div>
    </>
  )
}

export default Contact
