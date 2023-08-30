import React from 'react'
import "./NoRoom.css"
import noRooms from "../../../assets/Group 24.svg"
import AlertCribes from '../AlertCribes/AlertCribes'

import  Search  from '../Search/Search'

const NoRoom = () => {
  return (
    <>
    <Search/>
    <div className='container No-rooms-container'>
      <div className='No-rooms-content row'>
            <div className='left d-flex col-lg-6 col-12'>
                    <h3>Our cribs in Nice</h3>
                    <img className='ImageNoRooms' src={noRooms} alt='no rooms icon'/>
                    <span>No rooms available</span>
                    <button>Show first availabilities</button>
            </div>
            <div className='right col-lg-6 col-12'>
                    
            </div>
      </div>
    <AlertCribes/>
    </div>
    </>
  )
}

export default NoRoom
