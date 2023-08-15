import React from 'react'
import "./BookingProcess.css"
import RoomProcessPic from '../../assets/bacdbb_eaa5dabd9a4a4182871bd934709fb0be~mv2 1.svg'

const BookingProcess = () => {
  return (
    <div className='Book-container container'>
       <div className='row'>
        <div className='col-xm-12'>
         <img src={RoomProcessPic} alt="room processPic"/>
         <h3>Booking process</h3>
         <div className='Progress-bar'>
        <div className='d-flex align-items-center'>
          <div class="steps">
            <span><i class="fa fa-check">&#10004;</i></span>
          </div>
          <p>Find your room</p>
        </div>


         <span class="line"></span>
            

          <div className='d-flex align-items-center'>
            <div class="steps">
              <span><i class="fa fa-check">2</i></span>
            </div>
            <p>Submit your application</p>
          </div>



            <span class="line"></span>

          <div className='d-flex align-items-center'>
           <div class="steps">
              <span class="font-weight-bold">3</span>
            </div>
            <p>Sign the tenancy agreement</p>

          </div>

          <div className='d-flex align-items-center'>
          <div class="steps">
              <span class="font-weight-bold">4</span>
            </div>
            <p>Move in</p>
          </div>

         </div>
        </div>
       </div>
       
       
       <div className='row'>
        <div className='col-xm-12'>
         <h3>Payments</h3>
         <div className='Progress-bar'>
        <div className='d-flex align-items-center'>
          <div class="steps">
            <span><i class="fa fa-check">&#10004;</i></span>
          </div>
          <p>Find your room</p>
        </div>


         <span class="line"></span>
            

          <div className='d-flex align-items-center'>
            <div class="steps">
              <span><i class="fa fa-check">2</i></span>
            </div>
            <p>Submit your application</p>
          </div>



            <span class="line"></span>

          <div className='d-flex align-items-center'>
           <div class="steps">
              <span class="font-weight-bold">3</span>
            </div>
            <p>Sign the tenancy agreement</p>

          </div>

          <div className='d-flex align-items-center'>
          <div class="steps">
              <span class="font-weight-bold">4</span>
            </div>
            <p>Move in</p>
          </div>

         </div>
        </div>
       </div>
    </div>
  )
}

export default BookingProcess
