import React from 'react'
import "./AlertCribes.css"
import bell from "../../../assets/bell 1.svg"


const AlertCribes = () => {
  return (
    <div className='alert text-center mt-5 row'>
    <div className="col-lg-7 d-flex flex-column align-items-center">
      <h2>You don't find what you are looking for? </h2>
      <button className='btn btn-alert'>
        <img src={bell} alt='bell' />
        Create an alert
      </button>
    </div>
  </div>
  )
}

export default AlertCribes
