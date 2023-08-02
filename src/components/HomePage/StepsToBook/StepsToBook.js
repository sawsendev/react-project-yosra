import React from 'react'
import {StepsTable} from "../../../Data/Data"
import "./StepsToBook.css"


const StepsToBook = () => {
  return (
    <div className='Steps-to-book-container'>
      <h3>The 4 steps to book your room</h3>
      <p>Moving to a new city should be all about new experiences. To make your life easy, we craft beautiful spaces that feel just 
        like home so that you can just drop your suitcases and have a great time. Simple, as it should be.</p>
        <div className='Steps-container'>
          <div className='Step'>
          <ul className="Reasons-icons-container-ul">
            {StepsTable.map((icon, index) => {
              return (
                <>
                  <li key={index} className='Reasons-icons-li'>
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
        </div>
    </div>
  )
}

export default StepsToBook
