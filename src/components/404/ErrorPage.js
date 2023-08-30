import React from 'react'
import error from "../../assets/Groupe 1152 1.svg"
import "./ErrorPage.css"

const ErrorPage = () => {
  return (
    <div className='container d-flex Error'>
       <img src={error} alt='oups'></img>
       <div className='Error-content'>
        <h3>Oops ! There is nothing here</h3>
        <p>Page not found</p>
        <button className='Search-btn' onClick={()=>window.location.href='/Home'}>Go to the home page</button>
       </div>
    </div>
  )
}

export default ErrorPage
