import React from 'react'
import room_icon from "../../../../assets/Union 4 2.svg"
import "./City.css"


const City = (props) => {
  return (
<div className='city-item'>
    <div className='Pictures-countries'>
    <img className='img-responsive' src= {props.src} alt="countries"/>
    </div>
    
    <div >
      <div className='d-flex justify-content-between align-items-center mt-2 infoRoom Explore-more-countries-content'>                   
         <h3 >{props.city}</h3>
         <div className='d-flex align-items-center Room-content'>
          <img src={room_icon} alt='icon'/>
         <p>{props.count} rooms</p>
         </div>
      </div>
    </div>
</div> 

                      
  )
}

export default City
