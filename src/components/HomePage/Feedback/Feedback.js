import React from 'react'
import "./Feedback.css"
import {FeedbacksTable} from "../../../Data/Data"


const Feedback = () => {
  return (
    <div className='Feedback-container mb-5 pb-4 container'>
      <h2>Our flatmates talk about their experience with Fine cribs</h2>
      <div className="row Feedback-container">
            {FeedbacksTable.map((feedback, index) => {
              return (
                <>
                  <div key={index} className='feedback-icons-li d-flex gap-3 col-lg-4 col-md-12 my-4'>
                     <div className='row align-items-center'>
                      <div className='col-auto'>
                      <img src= {feedback.src} alt="icons" className="image-fluid"/>
                      </div>
                      <div className='feedback-icons-container col ps-1'>
                        <div className='feedback-icons-content'>                   
                           <span>{feedback.name}</span>
                           <p>{feedback.content}</p>
                        </div>
                      </div>
                     </div>
                  </div>
                </>
              );
            })}
          </div>
    </div>
  )
}
export default Feedback
