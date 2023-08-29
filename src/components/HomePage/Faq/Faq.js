import React from 'react'
import "./Faq.css"
import arrow from "../../../assets/right-arrow 1.svg"
import { useNavigate } from 'react-router-dom';


const Faq = () => {
  const navigate = useNavigate();

  const handleFaqButtonClick = () => {
    navigate('/faq');
  };
  return (
    <><div className='Faq-container w-100 container-fluid'> 
      <h3>Frequently asked questions</h3>
      <p>The most common questions that you might have before booking a room with us.</p>
    </div>
    
    <button className='Faq-btn' onClick={handleFaqButtonClick}>Go to our FAQ page 
    <img  className='ms-2' src={arrow} alt='icon'/>
    </button></>
  )
}

export default Faq
