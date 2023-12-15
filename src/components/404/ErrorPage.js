import React, { useEffect } from 'react'
import error from "../../assets/Groupe 1152 1.svg"
import "./ErrorPage.css"
import { Helmet } from 'react-helmet'
import {URL} from '../Variables'
import ReactGA from 'react-ga';

const ErrorPage = () => {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);
  return (
  
    <>
    <Helmet>
        <title>Error page</title>
        <meta
          name="description"
          content="Fine Cribs, beautiful flatshares designed for communal living"
          />
          <link rel="canonical" href={`${URL}`} />
          
      </Helmet>
    <div className='container'>
      <div className='row justify-content-center'>
        <div className='col-xl-10 col-md-12'>

          <div className='Error d-flex justify-content-center align-items-center flex-md-nowrap flex-wrap'>
            <img src={error} alt='oups'></img>
            <div className='Error-content'>
              <h1>Oops ! There is nothing here</h1>
              <p>Page not found</p>
              <button className='Search-btn' onClick={()=>window.location.href='/'}>Go to the home page</button>
            </div>
          </div>

        </div>
      </div>
    </div>
    </>
  )
}

export default ErrorPage
