import React from 'react'
import "./Faq.css"
import arrow from "../../../assets/right-arrow 1.svg"

const Faq = () => {
  return (
    <><div className='Faq-container w-100 container-fluid'> 
      <h3>Frequently asked questions</h3>
      <p>The most common questions that you might have before booking a room with us.</p>
    </div>
    <button className='Faq-btn'>Go to our FAQ page 
    <img  className='ms-2' src={arrow} alt='icon'/>
    </button></>
  )
}

export default Faq
