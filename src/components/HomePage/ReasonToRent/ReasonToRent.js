import React from 'react'
import "./ReasonToRent.css"
import {ReasonsTable} from "../../../Data/Data"


const ReasonToRent = () => {
  return (
    <div className='Reason-to-rent-container container-fluid'>
      <h3>Why to rent a room in one of our apartments</h3>
      <p>Moving to a new city should be all about new experiences. To make your life easy, we craft beautiful spaces that feel just 
        like home so that you can just drop your suitcases and have a great time. Simple, as it should be.</p>
        
          <ul className="row">
            {ReasonsTable.map((icon, index) => {
              return (
                <>
                  <li key={index} className='Reasons-icons-li col-lg-4 col-md-6 col-sm-12'>
                      <img src= {icon.src} alt="icons"/>
                      <div className='Reasons-icons-container'>
                      <h3>{icon.count}</h3>
                      <p>{icon.content}</p></div>
                  </li>
                </>
              );
            })}
          </ul>
    </div>
  )
}


export default ReasonToRent
