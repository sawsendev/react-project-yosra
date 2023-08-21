import React from 'react'
import {StepsTable} from "../../../Data/Data"
import "./StepsToBook.css"


const StepsToBook = () => {
  return (
    <div className='Steps-to-book-container  mb-5 container'>
      <h3 className='mb-2'>The 4 steps to book your room</h3>
      <p>Moving to a new city should be all about new experiences. To make your life easy, we craft beautiful spaces that feel just 
        like home so that you can just drop your suitcases and have a great time. Simple, as it should be.</p>
        <div className='row'>
            {StepsTable.map((icon, index) => {
              return (
                <>
                 <div key={index}  className='align-items-start Steps-icons-container py-0 col-lg-3 col-md-12 '>
                  <div className='row h-100 p-2'>
                        <div className='Steps-icons-container-ul d-flex p-2 gap-2'>
                        <div className="col-auto">                  
                          <img src= {icon.src} alt="icons"/>
                        </div>
                      <div className='Steps-icons-container col'>
                          <h3 className='m-0'>{icon.count}</h3>
                          <p>{icon.content}</p>
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
export default StepsToBook
