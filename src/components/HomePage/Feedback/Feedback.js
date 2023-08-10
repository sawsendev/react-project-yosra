import React from 'react'
import "./Feedback.css"
import {FeedbacksTable} from "../../../Data/Data"


const Feedback = () => {
  return (
    <div className='Feedback-container container'>
      <h3>Our flatmates talk about their experience with Fine cribs</h3>
      <div className="row Feedback-container">
            {FeedbacksTable.map((feedback, index) => {
              return (
                <>
                  <div key={index} className='feedback-icons-li col-lg-4 col-md-6 col-sm-12'>
                      <img src= {feedback.src} alt="icons" className="image-fluid"/>
                      <div className='feedback-icons-container'>
                        <div className='feedback-icons-content'>                   
                           <span>{feedback.name}</span>
                           <p>{feedback.content}</p>
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
