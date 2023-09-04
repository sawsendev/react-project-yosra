import React from 'react'
import "./Faq.css"
import arrow from "../../../assets/right-arrow 1.svg"



const Faq = () => {
  const handleFaqButtonClick = () => {
    window.location.href='/faq'
  };
  return (
    <> <div className='Faq-container'> 
       <div>
      <h3>Frequently asked questions</h3>
      <p>The most common questions that you might have before booking a room with us.</p>
    
    
     <button className='Faq-btn' onClick={handleFaqButtonClick}>Go to our FAQ page 
     <img  className='ms-2' src={arrow} alt='icon'/>
     </button></div></div></>
  )
}
export default Faq
