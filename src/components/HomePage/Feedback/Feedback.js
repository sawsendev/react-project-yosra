import React from 'react'
import "./Feedback.css"
import {FeedbacksTable} from "../../../Data/Data"


const Feedback = () => {
  return (
    <div className='Feedback-container'>
      <h3>Our flatmates talk about their experience with Fine cribs</h3>
      <ul className="Explore-more-container-ul">
            {FeedbacksTable.map((feedback, index) => {
              return (
                <>
                  <li key={index} className='feedback-icons-li'>
                      <img src= {feedback.src} alt="icons"/>
                      <div className='feedback-icons-container'>
                        <div className='feedback-icons-content'>                   
                           <h4>{feedback.name}</h4>
                           <p>{feedback.content}</p>
                        </div>
                      </div>
                  </li>
                </>
              );
            })}
          </ul>
    </div>
  )
}

export default Feedback
