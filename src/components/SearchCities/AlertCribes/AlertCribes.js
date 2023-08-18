import React from 'react'
import "./AlertCribes.css"
import  alertIcon  from '../../../assets/Tracé 166.svg';


const AlertCribes = () => {
  return (
       <div className='Alerte-cribes'>
          <h3>You don’t find what you are looking for? </h3>
          <button> <img src={alertIcon} alt='alert icon'/>Create un alert</button>
      </div>
  )
}

export default AlertCribes
