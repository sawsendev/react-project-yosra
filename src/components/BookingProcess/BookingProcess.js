import React from 'react'
import "./BookingProcess.css"
import RoomProcessPic from '../../assets/bacdbb_eaa5dabd9a4a4182871bd934709fb0be~mv2 1.svg'

const BookingProcess = () => {
  return (
    <div className='Book-container d-flex container'>
       <div className='row'>
        <div className='col-xm-12'>
         <img className='img-responsive w-100' src={RoomProcessPic} alt="room processPic"/>
         <h3 className='Book-container-heading'>Booking process</h3>
         <div className='Progress-bar'>
        <div className='d-flex align-items-center justify-content-start Progress-paragraph'>
          <div class="steps">
            <span><i class="fa fa-check">&#10004;</i></span>
          </div>
          <p className='m-2'>Find your room</p>
        </div>


         <span class="line"></span>
            

          <div className='d-flex align-items-center justify-content-start Progress-paragraph'>
            <div class="steps">
              <span><i class="fa fa-check">2</i></span>
            </div>
            <p className='m-2'>Submit your application</p>
          </div>



            <span class="line"></span>

          <div className='d-flex align-items-center justify-content-start Progress-paragraph'>
           <div class="steps">
              <span class="font-weight-bold">3</span>
            </div>
            <p className='m-2'>Sign the tenancy agreement</p>

          </div>
          <span class="line"></span>


          <div className='d-flex align-items-center justify-content-start Progress-paragraph'>
          <div class="steps">
              <span class="font-weight-bold">4</span>
            </div>
            <p className='m-2'>Move in</p>
          </div>

         </div>
        </div>
       </div>
       
       
       <div className='row'>
        <div className='col-xm-12'>
         <h3 className='Book-container-heading'>Payments</h3>
         <div className='Progress-bar'>
        <div className='d-flex align-items-baseline justify-content-start margin-bottom-min-20'>
          <div class="steps">
            <span><i class="fa fa-check">1</i></span>
          </div>
          <div className='Payments-steps m-2'>
            <span className='mb-0'>Now</span>
            <p className='mb-0'>Nothing to pay</p>
          </div>
        </div>


         <span class="line"></span>
            

          <div className='d-flex align-items-baseline justify-content-start margin-bottom-min-20'>
            <div class="steps">
              <span><i class="fa fa-check">2</i></span>
            </div>
            <div className='Payments-steps m-2'>
              <span>Upon signing the tenancy agreement </span>
              <div className='Fee row'>
                 <p className=' col-auto mb-0'>Administration fee</p>
                 <span className='col-auto mb-0'>€250</span>
              </div>
          </div>
          </div>



            <span class="line"></span>

          <div className='d-flex align-items-baseline justify-content-start margin-bottom-min-40'>
           <div class="steps">
              <span class="font-weight-bold">3</span>
            </div>
            <div className='Payments-steps m-2'>
              <span>Before check-in</span>
              <div className='Fee row'>
                 <p className='col-auto mb-0'>1° month rent</p>
                 <span className='col-auto mb-0'>€542</span>
              </div>
              <div className='Fee row'>
                 <p className='col-auto mb-0'>Deposit</p>
                 <span className='col-auto mb-0'>€400</span>
              </div>
            </div>

          </div>
          <span class="line"></span>


          <div className='d-flex align-items-baseline justify-content-start margin-bottom-min-40'>
          <div class="steps">
              <span class="font-weight-bold">4</span>
            </div>
            <div className='Payments-steps m-2'>
              <span>During your stay</span>
              <div className='Fee row'>
                 <p className='col-md-5 mb-0'>Monthly rent</p>
                 <span className='col-md-5 mb-0'>€600</span>
              </div>
            </div>
          </div>

          <span class="line"></span>


          <div className='d-flex align-items-baseline justify-content-start margin-bottom-min-40'>
          <div class="steps">
              <span class="font-weight-bold">5</span>
            </div>
            <div className='Payments-steps m-2'>
              <span>Afrer your stay</span>
              <p>Deposit reimbursement</p>
            </div>

          </div>

         </div>
        </div>
       </div>
    </div>
  )
}

export default BookingProcess
