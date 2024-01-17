import React from 'react'
import room_icon from "../../../../assets/Union 4 2.svg"
import "./City.css"

const City = React.memo(({ src, city, count, handleClick }) => {
  return (
    <div className='city-item' onClick={handleClick}>
      <div className='Pictures-countries'>
        <img className='img-responsive' src={src} alt="countries" />
      </div>
      <div >
        <div className='d-flex justify-content-between align-items-center mt-2 infoRoom Explore-more-countries-content'>
          <h3 >{city}</h3>
          <div className='d-flex align-items-center Room-content'>
            <img src={room_icon} alt='icon' />
            <p>{count} rooms</p>
          </div>
        </div>
      </div>
    </div>

  )

})

export default City
