import React from 'react'
import error from "../../assets/Groupe 1152 1.svg"

const ErrorPage = () => {
  return (
    <div className='container-fluid'>
       <img src={error} alt='oups'></img>
       <div>
        <h3>Oops ! There is nothing here</h3>
        <p>Page not found</p>
        <button className='Search-btn'>Go to the home page</button>
       </div>
    </div>
  )
}

export default ErrorPage
