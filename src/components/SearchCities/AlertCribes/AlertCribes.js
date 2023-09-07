import React from 'react'
import "./AlertCribes.css"
import bell from "../../../assets/bell 1.svg"


const AlertCribes = () => {
  return (
    <div className='alert text-center mt-5'>
    <div className="d-flex flex-column align-items-center my-container">
      <h3>You don't find what you are looking for? </h3>
      <button className='mt-2 p-2 px-4'>
        <img className='me-2' src={bell} alt='bell' />
        Create an alert
      </button>
    </div>
  </div>
  )
}

export default AlertCribes
