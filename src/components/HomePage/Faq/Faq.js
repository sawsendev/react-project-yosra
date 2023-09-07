import React from 'react'
import "./Faq.css"
import arrow from "../../../assets/right-arrow 1.svg"



const Faq = () => {
  const handleFaqButtonClick = () => {
    window.location.href='/faq'
  };
  return (
    <> 
      <div className='Faq-container'> 
        <div className='container'>
          <h2>Frequently asked questions</h2>
          <p>The most common questions that you might have before booking a room with us.</p>
        </div>
        <button className='Faq-btn' onClick={handleFaqButtonClick}>Go to our FAQ page 
          <img src={arrow} alt='icon'/>
        </button>
      </div>
    </>
  )
}
export default Faq
