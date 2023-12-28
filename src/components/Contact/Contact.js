import React, { useEffect } from 'react'
import ContactForm from './ContactForm'
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';
import { Helmet } from 'react-helmet';
import {URL} from '../Variables'
import ReactGA from 'react-ga';
const Contact = () => {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);
  
  return (
    <>
    <Helmet>
      <title>Contact</title>
      <meta
          name="description"
          content="Fine Cribs, beautiful flatshares designed for communal living"
          />
          <link rel="canonical" href={`${URL}/contact`} />
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
