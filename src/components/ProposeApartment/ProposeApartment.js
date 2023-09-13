import React from 'react'
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';
import './ProposeApartment.css'
import image1 from '../../assets/XMLID_287_.svg'
import image2 from '../../assets/businessman.svg'
import image3 from '../../assets/Groupe 1261.svg'
import image4 from '../../assets/Groupe 1320 1.svg'
import image5 from '../../assets/g441.svg'
import image6 from '../../assets/good-quality.svg'
import image7 from '../../assets/sketch.svg'
import image8 from '../../assets/Groupe de masques 9.svg'
import image9 from '../../assets/Rectangle 5932.svg'
import Feedback from '../HomePage/Feedback/Feedback';

const ProposeApartment =()=> {
  return (
    <>
    <Breadcrumbs />
    <div className='page-container container-fluid d-block py-2'>
      <div className='content-container'>
        <h1>Rent your apartment to Finecribs</h1>
        <p>Finecribs provides landlords with secured rental income</p>
      </div>
    </div>
    <div className='container py-4'>
     <h2>Why landlords partner with Finecribs </h2>
     <div className='row py-4'>
     <div className='col md-4'>
          <img
          src={image1}
          alt="Im1"
          className="img-fluid py-3"
           />
         <h5 className='py-2'> We guarantee your rental income, without vacancies </h5>
        <p> Renting your apartment to Finecribs means you can increase the rental income on your apartment. Finecribs will pay you monthly rent even when your apartment is empty, allowing you to passively increase your income.</p>
     </div>
     <div className='col-md-4'>
     <img
          src={image2}
          alt="Im2"
          className="img-fluid py-3"
           />
         <h5 className='py-2'> We increase the value of your property</h5>
        <p>Finecribs increases the value of your apartment by executing smart renovations coordinated by our interior designers (at no cost for landlords) and converting vacant properties into nicely decorated, fully equipped homes.</p>
     </div>
     <div className='col-md-4'>
     <img
          src={image3}
          alt="Im3"
          className="img-fluid py-3"
           />
     <h5 className='py-2'> Fully managed professional maintenance</h5>
        <p>Our property management team takes care of the ongoing maintenance of your apartment so that your property is high standard</p>
     </div>

     </div>
     <div className='row'>
        <div className='col-md-8'>
            <h2> The Finecribs guarantee </h2>
            <p className='p1'> We are a landlord, as you are. Finecribs’ expertise lies in purchasing, designing and renovating beautiful spaces
             for communal living. When you rent your apartment to Finecribs, you are guaranteed the we will manage 
            it with the same care that we put into managing our own apartments.</p>
        </div>
        <div className='col-md-4 d-flex justify-content-center align-items-center '>
        <img
          src={image4}
          alt="Im3"
          className="img-fluid py-3"
           />
        </div>
     </div>
     <h2>Our process in a few simple steps</h2>
     <div className="d-flex justify-content-center align-items-center vline">
   
  
     <div className="d-flex align-items-center vline mt-5">
     <div className='row'>
      <div className='col-8'>
        <p> If your apartments meets our criteria, we will make you an offer and explain the terms of the partnership</p>
      </div>
     </div>
  <div className="horizontal-lines ">
   <div className='el-left '>
   <span className='ellipse'></span>
    <div className="horizontal-line"></div>
   </div>  
   <div className='el-left'>
   <span className='ellipse'></span>
    <div className="horizontal-line"></div>
    </div>
  </div>
  <div className="vertical-line"></div>
  <div className="horizontal-linesr">
    <div className='el-right'>
    <span className='ellipse mt-4'></span>
    <div className="horizontal-line mt-4"></div>
    </div>
    <div className='el-right'>
    <span className='ellipse'></span>
    <div className="horizontal-line"></div>
     </div>
    <div className='el-right'>
    <span className='ellipse mb-4'></span>
    <div className="horizontal-line mb-4"></div>
    </div>
  </div>
  <div></div>
</div>


     </div>
    



     <h2 className='mt-5'> How Finecribs selects the apartments that we rent</h2>
     <p> When we rent an apartment, we look for 3 main things</p>
     <div className='row mt-5'>
     <div className='col-md-4'>
     <div className="row">
     <div className='col-3'>
     <img src={image5} alt="Im5" className="img-fluid"/> </div>
     <div className='col-9'>
      <h5>Central location</h5>
      <p>Our tenants are looking for centrally located apartments in major European cities. Currently, we provide accommodation in 4 cities in France and Italy but we are constantly looking to expand our offer.</p>
     </div>
     </div>
     </div>
     <div className='col-md-4'>
     <div className="row">
     <div className='col-3'>
     <img src={image7} alt="Im7" className="img-fluid"/> </div>
     <div className='col-9'>
      <h5>Minimum surface</h5>
      <p>No rule is set in stone. However, we normally rent apartments with – or the potential to make - at least 3 bedrooms. However, we can rent bigger surfaces, typically up to houses with 10 bedrooms.</p>
     </div>
     </div>
     </div>
    
     <div className='col-md-4'>
     <div className='row'>
     <div className='col-3'>
     <img src={image6} alt="Im6" className="img-fluid"/> </div>
     <div className='col-9'>
      <h5>Good conditions</h5>
      <p >We believe that communal living should be about quality. Therefore, we will only consider spaces in overall good conditions, which can be converted into beautiful spaces with light interventions, smart refurbishing and good decoration.</p>
     </div>
     </div>
     </div>
     </div>
     </div>
     <div className='page2-container container-fluid d-block py-2'>
      <div className='content2-container'>
        <h1>Not sure wether to rent or to sell your property</h1>
        <p>We are constantly looking for apartments to buy and transform into beautiful 
        spaces for communal living. If you are uncertain about renting or selling your 
          apartment, it’s worth having a chat.</p>
        <button className='button-black'>I would like to get in touch</button>
      </div>
    </div>
    <div className='container'>
    <h2 className='mt-5 pt-3'>Examples of renovation</h2>
    <div className='row py-5 mb-5'>
      <div className='col-md-6'>
      <span class="badge2 badge bg-dark">Before Finecribs</span>
      <img src={image8} alt="Im8" className="img-fluid img"/>
      </div>
      <div className='col-md-6'>
      <span class="badge3 badge bg-dark">After Finecribs</span>
      <img src={image9} alt="Im9" className="img-fluid"/>
      </div>
    </div>

    </div>
      <Feedback/>


  </>
  )
}

export default ProposeApartment;
