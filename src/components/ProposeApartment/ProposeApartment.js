import React, { useState } from 'react';
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';
import './ProposeApartment.css'
import ProposeModal from "./ProposeModal/ProposeModal"
import image1 from '../../assets/XMLID_287_.svg'
import image2 from '../../assets/businessman.svg'
import image3 from '../../assets/Groupe 1261.svg'
import image4 from '../../assets/Groupe 1320 1.svg'
import image5 from '../../assets/g441.svg'
import image6 from '../../assets/good-quality.svg'
import image7 from '../../assets/sketch.svg'
import image8 from '../../assets/img-left.png'
import image9 from '../../assets/img-right.png'
import after1 from '../../assets/before-after/after1.jpg';
import after2 from '../../assets/before-after/after2.jpg';
import after3 from '../../assets/before-after/after3.jpg';
import after4 from '../../assets/before-after/after4.jpg';
import after5 from '../../assets/before-after/after5.jpg';
import build from '../../assets/build.svg'
import before1 from '../../assets/before-after/before1.jpg';
import before2 from '../../assets/before-after/before2.jpg';
import before3 from '../../assets/before-after/before3.jpg';
import before4 from '../../assets/before-after/before4.jpg';
import before5 from '../../assets/before-after/before5.jpg';
import process1 from '../../assets/process/process1.svg'
import process2 from '../../assets/process/process2.svg'
import process3 from '../../assets/process/process3.svg'
import process4 from '../../assets/process/process4.svg'
import process5 from '../../assets/process/process5.svg'
import Feedback from '../HomePage/Feedback/Feedback';
import { LiaEnvelope } from "react-icons/lia";
import { useNavigate } from 'react-router-dom';


const ProposeApartment =()=> {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };
  
  const navigate=useNavigate();
  return (
    <>
    <Breadcrumbs />

    <div className='page-container'>
      <div className='container'>
        <div className='content-container'>
          <h1>Rent your apartment to Fine cribs</h1>
          <p>Fine cribs provides landlords with secured rental income</p>
        </div>
      </div> 
    </div>

    <section className='landlords pt-lg-5 pt-4 pb-4'>
      <div className='container'>
        <h2 class="mb-lg-4 pb-lg-3 mb-4">Why landlords partner with Fine cribs </h2>
        <div className='row'>
          <div className='col-md-4'>
            <img src={image1} alt="Im1" className="img-fluid mb-3"/>
            <h3 className='mb-2'>We guarantee your rental income, without vacancies </h3>
            <p>Renting your apartment to Fine cribs means you can increase the rental income on your apartment. Fine cribs will pay you monthly rent even when your apartment is empty, allowing you to passively increase your income.</p>
          </div>
          <div className='col-md-4'>
            <img src={image2} alt="Im2" className="img-fluid mb-3"/>
            <h3 className='mb-2'> We increase the value of your property</h3>
            <p>Fine cribs increases the value of your apartment by executing smart renovations coordinated by our interior designers (at no cost for landlords) and converting vacant properties into nicely decorated, fully equipped homes.</p>
          </div>
          <div className='col-md-4'>
            <img src={image3} alt="Im3" className="img-fluid mb-3" />
            <h3 className='mb-2'> Fully managed professional maintenance</h3>
            <p>Our property management team takes care of the ongoing maintenance of your apartment so that your property is high standard.</p>
          </div>
        </div>
      </div>
    </section>

    <section className='guarantee pt-md-4 pb-4'>
      <div className='container'>
        <div className='row justify-content-between'>
          <div className='col-lg-7 col-md-8'>
            <h2 class="mb-3">The Fine cribs guarantee</h2>
            <p> We are a landlord, as you are. Fine cribs expertise lies in purchasing, designing and renovating beautiful spaces
             for communal living. When you rent your apartment to Fine cribs, you are guaranteed the we will manage 
            it with the same care that we put into managing our own apartments.</p>
          </div>
          <div className='col-md-4 d-flex justify-content-center align-items-center'>
            <img src={image4} alt="The Finecribs guarantee" className="img-fluid"/>
          </div>
        </div>
      </div>
    </section>

    <section className='process pt-lg-5 pt-md-4 pb-md-5 pb-4'>
      <div className='container'>
        <h2 className='mb-md-5 mb-4 pb-3'>Our process in a few simple steps</h2>
        <div className='process-content desktop'>
          <div className='col-left'> 
            <div className='box first'>
            <div className='hline first'><span className='circle'></span></div>
              <div className='image'>
                <img src={process1} alt="process 1" className="img-fluid"/>
              </div>
              <div className='text'>
                <h3>Rent your apartment to Fine cribs</h3>
                <p>If your apartments meets our criteria, we will make you
                an offer and explain the terms of the partnership</p>
              </div>
            </div>
            <div className='box second'>
              <div className='hline second'><span className='circle'></span></div>
              <div className='image'>
                <img src={process2} alt="process 2" className="img-fluid"/>
              </div>
              <div className='text'>
                <h3>We rent your apartment to tenants who match our selective criteria</h3>
                <p>Our interior designers will furnish and decorate the
                space. If needed, we will propose and execute some
                smart renovations (e.g. bathrooms)</p>
              </div>
            </div>
          </div>
          <div className='vertical-line'></div>
          <div className='col-right'>
            <div className='box first'>
              <div className='hline first'><span className='circle'></span></div>
              <div className='image'>
                <img src={process3} alt="process 3" className="img-fluid"/>
              </div>
              <div className='text'>
                <h3>Submit your property for review</h3>
                <p>Fill out our form and share some details about your 
                apartment (e.g. photos, location, number of 
                bedrooms), and leave your contact details </p>
              </div>
            </div>
            <div className='box second'>
              <div className='hline second'><span className='circle'></span></div>
              <div className='image'>
                <img src={process4} alt="process 4" className="img-fluid"/>
              </div>
              <div className='text'>
                <h3>We design, furnish & decorate your space</h3>
                <p>Our interior designers will furnish and decorate the 
                space. If needed, we will propose and execute some 
                smart renovations (e.g. bathrooms)</p>
              </div>
            </div>
            <div className='box third'>
              <div className='hline third'><span className='circle'></span></div>
              <div className='image'>
                <img src={process5} alt="process 5" className="img-fluid"/>
              </div>
              <div className='text'>
                <h3>Our maintenance team take care of your apartment along the way</h3>
                <p>Our qualified team will ensure the ongoing
                maintenance of your apartment from the first day, until
                the end of the tenancy</p>
              </div>
            </div>

          </div>
        </div>
        <div className='process-content mobile'>
          <div className='col-right'>
            <div className='box first'>
              <div className='image'>
                <img src={process3} alt="process 3" className="img-fluid"/>
              </div>
              <div className='text'>
                <h3>Submit your property for review</h3>
                <p>Fill out our form and share some details about your 
                apartment (e.g. photos, location, number of 
                bedrooms), and leave your contact details </p>
              </div>
            </div>
          </div>
          <div className='col-left'> 
            <div className='box first'>
              <div className='image'>
                <img src={process1} alt="process 1" className="img-fluid"/>
              </div>
              <div className='text'>
                <h3>Rent your apartment to Fine cribs</h3>
                <p>If your apartments meets our criteria, we will make you
                an offer and explain the terms of the partnership</p>
              </div>
            </div>
          </div>
          <div className='col-right'>
            <div className='box second'>
              <div className='image'>
                <img src={process4} alt="process 4" className="img-fluid"/>
              </div>
              <div className='text'>
                <h3>We design, furnish & decorate your space</h3>
                <p>Our interior designers will furnish and decorate the 
                space. If needed, we will propose and execute some 
                smart renovations (e.g. bathrooms)</p>
              </div>
            </div>
          </div>
          <div className='col-left'> 
            <div className='box second'>
              <div className='image'>
                <img src={process2} alt="process 2" className="img-fluid"/>
              </div>
              <div className='text'>
                <h3>We rent your apartment to tenants who match our selective criteria</h3>
                <p>Our interior designers will furnish and decorate the
                space. If needed, we will propose and execute some
                smart renovations (e.g. bathrooms)</p>
              </div>
            </div>
          </div>
          <div className='col-right'>
            <div className='box third'>
              <div className='image'>
                <img src={process5} alt="process 5" className="img-fluid"/>
              </div>
              <div className='text'>
                <h3>Our maintenance team take care of your apartment along the way</h3>
                <p>Our qualified team will ensure the ongoing
                maintenance of your apartment from the first day, until
                the end of the tenancy</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
    
    <section className='selection pt-lg-5 pt-md-4 pb-4 mb-lg-4'>
      <div className='container'>
        <div className='mb-md-5 mb-4'>
          <h2 className='mt-1'> How Fine cribs selects the apartments that we rent</h2>
          <p>When we rent an apartment, we look for 3 main things</p>
        </div>
        <div className='row'>
          <div className='col-md-4 mb-3 px-4'>
            <div className="row-line d-flex align-items-start justify-content-start">
              <div className='col-img pe-3'>
                <img src={image5} alt="Im5" className="img-fluid"/>
              </div>
              <div className='col'>
                <h3>Central location</h3>
                <p>Our tenants are looking for centrally located apartments in major European cities. Currently, we provide accommodation in 3 cities in France and Italy but we are constantly looking to expand our offer.</p>
              </div>
            </div>
          </div>

          <div className='col-md-4 mb-3 px-4'>
            <div className="row-line d-flex align-items-start justify-content-start">
              <div className='col-img pe-3'>
                <img src={image7} alt="Im7" className="img-fluid"/>
              </div>
              <div className='col'>
                <h3>Minimum surface</h3>
                <p>No rule is set in stone. However, we normally rent apartments with – or the potential to make - at least 3 bedrooms. However, we can rent bigger surfaces, typically up to houses with 10 bedrooms.</p>
              </div>
            </div>
          </div>
    
          <div className='col-md-4 mb-3 px-4'>
            <div className='row-line d-flex align-items-start justify-content-start'>
              <div className='col-img pe-3'>
                <img src={image6} alt="Im6" className="img-fluid"/>
              </div>
              <div className='col-9'>
                <h3>Good conditions</h3>
                <p >We believe that communal living should be about quality. Therefore, we will only consider spaces in overall good conditions, which can be converted into beautiful spaces with light interventions, smart refurbishing and good decoration.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

        <div className='block-btn-propose'>
          <button className='btn-propose' onClick={openModal} >
            <span className='btn-icon'><img src={build} alt='icon building' /></span>
            <span className='btn-txt'>I propose an apartement</span>
          </button>
        </div>

    <section className='page2-container mb-lg-5 mb-4'>
      <div className='container'>
        <div className='content2-container'>
          <h2>Not sure wether to rent or to sell your property</h2>
          <p>We are constantly looking for apartments to buy and transform into beautiful 
          spaces for communal living. If you are uncertain about renting or selling your 
            apartment, it’s worth having a chat.</p>
          <button className='btn btn-primary button-black' onClick={()=>{navigate(`/contact`)}}><LiaEnvelope className='icon-envelop'/>  I would like to get in touch</button>
        </div>
      </div>
    </section>
    <ProposeModal isOpen={modalIsOpen} closeModal={closeModal} />
    <section className='renovation pt-lg-5 pt-3 mb-md-5 pb-md-5 pb-4'>
      <div className='container'>
        <h2 className='mb-md-2 pb-2'>Examples of renovation</h2>
        <div className='row before-after'>
          <div className='col-md-6'>
            <div className='image-left'>
              <span class="badge badge-left">Before Fine cribs</span>
              <img src={before1} alt="Im8" className="img-fluid img"/>
            </div>
          </div>
          <div className='col-md-6'>
            <div className='image-right'>
              <span class="badge badge-right">After Fine cribs</span>
              <img src={after1} alt="Im9" className="img-fluid"/>
            </div>
          </div>
        </div>
        <div className='row before-after'>
          <div className='col-md-6'>
            <div className='image-left'>
              <span class="badge badge-left">Before Fine cribs</span>
              <img src={before2} alt="Im8" className="img-fluid img"/>
            </div>
          </div>
          <div className='col-md-6'>
            <div className='image-right'>
              <span class="badge badge-right">After Fine cribs</span>
              <img src={after2} alt="Im9" className="img-fluid"/>
            </div>
          </div>
        </div>
        <div className='row before-after'>
          <div className='col-md-6'>
            <div className='image-left'>
              <span class="badge badge-left">Before Fine cribs</span>
              <img src={before3} alt="Im8" className="img-fluid img"/>
            </div>
          </div>
          <div className='col-md-6'>
            <div className='image-right'>
              <span class="badge badge-right">After Fine cribs</span>
              <img src={after3} alt="Im9" className="img-fluid"/>
            </div>
          </div>
        </div>
        <div className='row before-after'>
          <div className='col-md-6'>
            <div className='image-left'>
              <span class="badge badge-left">Before Fine cribs</span>
              <img src={before4} alt="Im8" className="img-fluid img"/>
            </div>
          </div>
          <div className='col-md-6'>
            <div className='image-right'>
              <span class="badge badge-right">After Fine cribs</span>
              <img src={after4} alt="Im9" className="img-fluid"/>
            </div>
          </div>
        </div>
        <div className='row before-after'>
          <div className='col-md-6'>
            <div className='image-left'>
              <span class="badge badge-left">Before Fine cribs</span>
              <img src={before5} alt="Im8" className="img-fluid img"/>
            </div>
          </div>
          <div className='col-md-6'>
            <div className='image-right'>
              <span class="badge badge-right">After Fine cribs</span>
              <img src={after5} alt="Im9" className="img-fluid"/>
            </div>
          </div>
        </div>

      </div>
    </section>

     


  </>
  )
}

export default ProposeApartment;
