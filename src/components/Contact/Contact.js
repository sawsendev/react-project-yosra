import React from 'react'
import ContactForm from './ContactForm'
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';
import { Helmet } from 'react-helmet';


const Contact = () => {
  return (
    <>
    <Helmet>
      <title>Contact</title>
      <meta
          name="description"
          content="Fine Cribs, beautiful flatshares designed for communal living"
          />
    </Helmet>
    <Breadcrumbs/>
    <div className='Contact-container row m-0'>
      <div className='col-md-5'></div>
      <ContactForm/>
    </div>
    </>
  )
}

export default Contact
