import React from 'react'
import "./ReasonToRent.css"
import {ReasonsTable} from "../../../Data/Data"


const ReasonToRent = () => {
  return (
    <div className='Reason-to-rent-container d-block container py-2 mt-lg-5 mt-4 mb-0'>
      <h2>Why to rent a room in one of our apartments</h2>
      <p>Moving to a new city should be all about new experiences. To make your life easy, we create beautiful spaces that feel just 
        like home so that you can just drop your suitcases and have a great time. Simple, as it should be.</p>
        <div className="row">
            {ReasonsTable.map((icon, index) => {
              return (
                <>
                  <div key={index} className='align-items-start col-lg-4 gap-3 col-md-12 col-sm-12 '>
                    <div className='row reasons-icons-item'>
                      <div className='col-auto'>
                      <img src= {icon.src} alt="icons"/>
                      </div>
                      <div className='Reasons-icons-container col'>
                      <h3>{icon.count}</h3>
                      <p>{icon.content}</p>
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


export default ReasonToRent
