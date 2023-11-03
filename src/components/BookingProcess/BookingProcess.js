import React from 'react'
import "./BookingProcess.css"


const BookingProcess = ({cribs}) => {
  const firstImage = cribs.media.find(
    (media) => media.mime_type.startsWith('image') && media.collection_name !== 'floorpan'
  );
  
  const images = cribs && cribs.media ? cribs.media.filter(item => item.mime_type.startsWith('image')) : [];
  console.log("les images",images)
  return (
    <div className='Book-container d-flex container'>
       <div className='row'>
        <div className='col-xm-12'>
        {firstImage ? (
  <img
    className="img-responsive w-100"
    src={firstImage.original_url}
    alt="room processPic"
  />
) : null}
         <h3 className='Book-container-heading'>Booking process</h3>
         <div className='Progress-bar'>
        <div className='d-flex align-items-center justify-content-start Progress-paragraph'>
          <div class="steps done">
            <span>
            <svg xmlns="http://www.w3.org/2000/svg" height="22" viewBox="0 0 22 22" width="22"><path d="M0 0h24v24H0z" fill="none"/><path style={{color:'#fff',fill:'#fff'}} d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" fill="#fff"/></svg>
              {/* <i class="fa fa-check">&#10004;</i> */}
            </span>
          </div>
          <p className='mx-2'>Find your room</p>
        </div>


         <span class="line"></span>
            

          <div className='d-flex align-items-center justify-content-start Progress-paragraph'>
            <div class="steps current">
              <span class="font-weight-bold">2</span>
            </div>
            <p className='mx-2'>Submit your application</p>
          </div>



            <span class="line"></span>

          <div className='d-flex align-items-center justify-content-start Progress-paragraph'>
           <div class="steps">
              <span class="font-weight-bold">3</span>
            </div>
            <p className='mx-2'>Sign the tenancy agreement</p>

          </div>
          <span class="line"></span>


          <div className='d-flex align-items-center justify-content-start Progress-paragraph'>
          <div class="steps">
              <span class="font-weight-bold">4</span>
            </div>
            <p className='mx-2'>Move in</p>
          </div>

         </div>
        </div>
       </div>
       
       
       <div className='row payment-row'>
        <div className='col-xm-12'>
         <h3 className='Book-container-heading'>Payments</h3>
         <div className='Progress-bar'>
        <div className='d-flex align-items-start justify-content-start'>
          <div class="steps current">
            <span class="font-weight-bold">1</span>
          </div>
          <div className='Payments-steps px-2'>
            <span className='mb-0'>Now</span>
            <p className='mb-0'>Nothing to pay</p>
          </div>
        </div>


         <span class="line line-1"></span>
            

          <div className='d-flex align-items-start justify-content-start'>
            <div class="steps">
              <span class="font-weight-bold">2</span>
            </div>
            <div className='Payments-steps px-2'>
              <span>Upon signing the tenancy agreement </span>
              {cribs && cribs.admin_fee && (<div className='Fee row justify-content-between'>
               <p className=' col-auto mb-0'>Administration fee</p>
                 <span className='col-auto mb-0'>€{cribs.admin_fee}</span> 
              </div>)}
          </div>
          </div>



            <span class="line line-2"></span>

          <div className='d-flex align-items-start justify-content-start'>
           <div class="steps">
              <span class="font-weight-bold">3</span>
            </div>
            <div className='Payments-steps px-2'>
              <span>Before check-in</span>
              {cribs && cribs.tarif_promo && 
              <div className='Fee row justify-content-between'>
                 <p className='col-auto mb-0'>1° month rent</p> 
                 <span className='col-auto mb-0'>€{cribs.tarif_promo}</span>
              </div>}
              {cribs && cribs.garantie && 
              <div className='Fee row justify-content-between'>
                 <p className='col-auto mb-0'>Deposit</p> 
                 <span className='col-auto mb-0'>€{cribs.garantie}</span>
              </div>}
            </div>

          </div>
          <span class="line line-3"></span>


          <div className='d-flex align-items-start justify-content-start'>
          <div class="steps">
              <span class="font-weight-bold">4</span>
            </div>
            <div className='Payments-steps px-2'>
              <span>During your stay</span>
              { cribs && cribs.loyer_hc && cribs.charges &&
              <div className='Fee row justify-content-between'>
                 <p className='col-auto mb-0'>Monthly rent</p>
                 <span className='col-auto mb-0'>€{cribs.loyer_hc+cribs.charges}</span>
              </div>}
            </div>
          </div>

          <span class="line line-4"></span>


          <div className='d-flex align-items-start justify-content-start'>
          <div class="steps">
              <span class="font-weight-bold">5</span>
            </div>
            <div className='Payments-steps px-2'>
              <span>After your stay</span>
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
