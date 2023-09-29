import React, { useRef, useState } from 'react'
import "./Room.css"
import CarrouselImages from "./RoomImages"
import RoomModalMedia from "./RoomModal/RoomModalMedia"
import "../SearchCities/Cribes/Cribes.css"
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs'
import iconimgs from '../../assets/room/icons/bedroom.svg'
import iconvideos from '../../assets/room/icons/videos.svg'
import iconvisit from '../../assets/room/icons/visits.svg'
import plan from '../../assets/room/icons/plan.svg'
import bedroom from '../../assets/room/icons/bedroom.svg'
import roomies from '../../assets/room/icons/roomies.svg'
import elevator from '../../assets/room/icons/elevator.svg'
import energy from '../../assets/room/icons/energy.svg'
import doublebed from '../../assets/room/icons/doublebed.svg'
import workspace from '../../assets/room/icons/workspace.svg'
import wardrobe from '../../assets/room/icons/wardrobe.svg'
import sofa from '../../assets/room/icons/sofa.svg'
import terrace from '../../assets/room/icons/terrace.svg'
import airconditioner from '../../assets/room/icons/air-conditioner.svg'
import location from '../../assets/room/icons/pin.svg'
import elevator1 from '../../assets/room/icons/elevator1.svg' 
import view from '../../assets/room/icons/view.svg'
import cleaning from '../../assets/room/icons/cleaning.svg'
import fkitchen from '../../assets/room/icons/fkitchen.svg'
import kitchenware from '../../assets/room/icons/kitchenware.svg'
import dishes from '../../assets/room/icons/dishes.svg'
import dishwasher from '../../assets/room/icons/dishwasher.svg'
import microwave from '../../assets/room/icons/microwave.svg'
import shower from '../../assets/room/icons/shower.svg'
import washer from '../../assets/room/icons/washer.svg'
import pillow from '../../assets/room/icons/pillow.svg'
import dryer from '../../assets/room/icons/dryer.svg'
import vacuum from '../../assets/room/icons/vacuum.svg'
import ironing from '../../assets/room/icons/ironing.svg'
import tools from '../../assets/room/icons/tools.svg'
import block from '../../assets/room/icons/block.svg'
import woman from '../../assets/room/icons/woman.svg'
import man from '../../assets/room/icons/man.svg'
import Badge from 'react-bootstrap/Badge';

import locationIcon  from '../../assets/pin 2.svg';

import check from '../../assets/room/widget/check.svg'
import water from '../../assets/room/widget/water.svg'
import plug from '../../assets/room/widget/plug.svg'
import insurance from '../../assets/room/widget/insurance.svg'
import wifi from '../../assets/room/widget/wifi.svg'
import cable from '../../assets/room/widget/cable-tv.svg'
import wipe from '../../assets/room/widget/wipe.svg'

import { PiInfo } from "react-icons/pi";
import Crib from '../Crib/Crib';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';




const Room = () => {
  const{id}=useParams();
  const[lotData,setLotData]=useState({});
  const API_KEY = 'a2b18f9cfb72eb93f3ce6b1c30372b59';
  const API_URL = `http://dev.niceroom.sofis-info.com/api/lot/${id}`;
  const navigate= useNavigate();

  useEffect(()=>{
    
      const headers = {
        'apiKey': `${API_KEY}`,
      };
  
      fetch(API_URL, { method: 'GET', mode: 'cors', headers })
        .then(response => response.json())
        .then(data => {
        
            setLotData(data.data.lot);
            console.log(data.data.lot)        
        })
        .catch(error => {
          console.error('Erreur lors de la récupération des données :', error);
        });
    
  },[API_URL,API_KEY])
   


  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('tab1');

  const openModalWithTab1 = () => {
    setActiveTab('tab1');
    setModalIsOpen(true);
  };

  const openModalWithTab2 = () => {
    setActiveTab('tab2');
    setModalIsOpen(true);
  };

  const openModalWithTab3 = () => {
    setActiveTab('tab3');
    setModalIsOpen(true);
  };

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };
  
    return (
      <>
      {lotData && lotData.apartment && lotData.apartment.title && lotData.title && (
      <Breadcrumbs path={`/${lotData.apartment.title} - ${lotData.title}`}/> )}
      <div className='pageroom-container'>
        <div className='container'>
          <div className='row'>
            <div className='col-large col-lg-8'>
              <div className='carousel-images'>
                {/* <img src={room} alt="room" className="img-fluid"/> */}

                <CarrouselImages />
                
                <div className='medias'>
                  <button type='button' className='btn-media' onClick={openModalWithTab1} id="photos-btn"><img src={iconimgs} alt="photos"/> photos</button>
                  <button type='button' className='btn-media' onClick={openModalWithTab2} id="video-btn"><img src={iconvideos} alt="videos"/> video</button>
                  <button type='button' className='btn-media' onClick={openModalWithTab3} id="visit-btn"><img src={iconvisit} alt="visit"/> 360° visit</button>
                  {/* <button type='button' className='btn-media' onClick={openModal} id="media-btn"><img src={iconimgs} alt="media"/> Medias</button> */}
                </div>

              </div>

              <RoomModalMedia isOpen={modalIsOpen} closeModal={closeModal} activeTab={activeTab} setActiveTab={setActiveTab} />

              <div className='title mt-4'>
              {lotData && lotData.apartment && lotData.apartment.title && lotData.title && (
               <h1>{lotData.apartment.title} - {lotData.title}</h1>
                )}
                <h2>Private room in Nice</h2>
              </div>
              <div className='characteristics mt-3 mb-4'>
                <div className='btn-char'><img src={plan} alt="plan"/>Apartement (76m2)</div>
                <div className='btn-char'><img src={bedroom} alt="bedroom"/>Room (12m2)</div>
                <div className='btn-char'><img src={roomies} alt="roomies"/>4 Roomies</div>
                <div className='btn-char'><img src={elevator} alt="floor"/>2ndFloor</div>
                <div className='btn-char'><img src={energy} alt="energy"/> A+++</div>
              </div>
              <div className='description pt-2 mb-4'>
                <h2>The crib</h2>
                <p>Located in the lovely neighbourhood of Riquier, in the immediate vicinity of the Riquier train station, 53 Bd Pierre 
                Sola is the ideal location for those commuting to Monaco daily, or for those wanting a central but quiet location. The 
                apartment is only 10-minute walk from the port, the old city and Place Garibaldi where you will find plenty of bars and 
                restaurants…</p>
              </div>
              <div className='amenities'>
                <h2>Amenities</h2>
                <h3>Room</h3>
                {lotData.options && (
  <div className='characteristics pieces mb-4'>
    {[
      { title: "Double bed", icon: doublebed },
      { title: "Workspace", icon: workspace },
      { title: "Wardrobe", icon: wardrobe },
      { title: "Sofa", icon: sofa },
      { title: "Terrace", icon: terrace },
      { title: "A/C", icon: airconditioner },
    ].map((option) => (
      lotData.options.some((opt) => opt.title_en === option.title) && (
        <div className='btn-char' key={option.title}>
          <img src={option.icon} alt={option.title} />
          {option.title}
        </div>
      )
    ))}
  </div>
)}

                <h3>Apartment level</h3>
                <div className='characteristics pieces mb-4'>
                  <div className='btn-char'><img src={location} alt="Central location"/>Central location</div>
                  <div className='btn-char'><img src={sofa} alt="Fully furnished"/>Fully furnished</div>
                  <div className='btn-char'><img src={airconditioner} alt="Air-conditioner"/>A/C</div>
                  <div className='btn-char'><img src={elevator1} alt="Elevator"/>Elevator</div>
                  <div className='btn-char'><img src={view} alt="Beautiful view"/>Beautiful view</div>

                  <div className='btn-char'><img src={cleaning} alt="Cleaning"/>Cleaning</div>
                  <div className='btn-char'><img src={terrace} alt="Balcony"/>Balcony</div>
                  <div className='btn-char'><img src={fkitchen} alt="Furnished kitchen"/>Furnished kitchen</div>
                  <div className='btn-char'><img src={kitchenware} alt="Kitchenware"/>Kitchenware</div>
                  <div className='btn-char'><img src={dishes} alt="Dishes and cutlery"/>Dishes and cutlery</div>

                  <div className='btn-char'><img src={dishwasher} alt="Dishwasher"/>Dishwasher</div>
                  <div className='btn-char'><img src={microwave} alt="Microwave"/>Microwave</div>
                  <div className='btn-char'><img src={shower} alt="Shower"/>Shower</div>
                  <div className='btn-char'><img src={washer} alt="Washing machine"/>Washing machine</div>
                  <div className='btn-char'><img src={pillow} alt="Blanket & Pillows"/>Blanket & Pillows</div>

                  <div className='btn-char'><img src={dryer} alt="Dryer"/>Dryer</div>
                  <div className='btn-char'><img src={vacuum} alt="Vacuum"/>Vacuum cleaner</div>
                  <div className='btn-char'><img src={ironing} alt="Ironing set"/>Ironing set</div>
                  <div className='btn-char'><img src={tools} alt="Cleaning tools"/>Cleaning tools</div>
                </div>
              </div>
              <div className='flatmates'>
                <h2 className='mb-3'>Flatmates</h2>
                <div className='row'>
                  <div className='col-md-4'>
                    <div className='panel mb-3'>
                      <div className='icon'>
                        <img src={block} alt="Bedroom 1"/>
                      </div>
                      <div className='text'>
                        <p>Bedroom 1</p>
                        <button type='button' className='btn-visit'>Visit</button>
                      </div>
                    </div>
                  </div>
                  <div className='col-md-4'>
                    <div className='panel mb-3'>
                      <div className='icon'>
                        <img src={woman} alt="Bedroom 2"/>
                      </div>
                      <div className='text'>
                        <p>Bedroom 2 <span className='status'>Booked</span></p>
                        <p>Name last name | 25 yrs.</p>
                      </div>
                    </div>
                  </div>
                  <div className='col-md-4'>
                    <div className='panel mb-3'>
                      <div className='icon'>
                        <img src={man} alt="Bedroom 3"/>
                      </div>
                      <div className='text'>
                        <p>Bedroom 3 <span className='status'>Booked</span></p>
                        <p>Name last name | 20 yrs.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='map-local mt-3 mb-3 pb-3'>
                <h2 className='mb-3'>Where is the accommodation located</h2>
                <div className='map'>
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d92299.17724850951!2d7.1704107912588055!3d43.70328975790311!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12cdd0106a852d31%3A0x40819a5fd979a70!2sNice%2C%20France!5e0!3m2!1sen!2stn!4v1694711910064!5m2!1sen!2stn" width="920" height="340" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
              </div>
              <div className='local-desc mt-3 mb-4 pb-3'>
                <h2>Neighborhood description</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
                standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to</p>
              </div>
              <div className='recommandation mt-3 mb-lg-5 pb-4 d-md-block d-none'>
                <h2 className='mb-3'>You might also be interested in the following properties</h2>
                {/* <Crib cribs={3}/> */}
              </div>
            </div>
            <div className='col-widget col-lg-4'>
                <div className='widget mb-3'>
                  <p className='head-widget'><img src={check} alt="Available"/>Available now</p>
                  <hr/>
                  <p className='text-center price'>650€/<small> month</small></p>
                  <div className='text-center assistance'>CAF assistance <PiInfo className='info'/> <span className='green'>( up to -258€ )</span></div>
                  <p className='h4 status'>Rent is all inclusive</p>
                  <p className='status'><img src={water} alt="Water"/> Water</p>
                  <p className='status'><img src={plug} alt="plug"/> Electricity,gas</p>
                  <p className='status'><img src={insurance} alt="insurance"/> Housing insurance</p>
                  {lotData.wi_fi !== 0 &&(<p className='status'><img src={wifi} alt="wifi"/> Wi - Fi</p>)}
                  <p className='status'><img src={cable} alt="cable tv"/> Cable tv</p>
                  <p className='status'><img src={wipe} alt="wipe"/> Cleaning</p>
                  <button className='btn btn-submit' onClick={()=>{navigate(`/BookingEnquiry/${id}`)}}>

                  Apply for this room</button>
                </div>
                <div className='widget-info mb-3'>
                  <h5>Fine cribs promise</h5>
                  <p>Our teams have renovated, furnished, equipped
                  and decorated this apartment to offer you an
                  experience of design, comfort and uparallefled
                  services.</p>
                </div>
                <div className='recommandation mt-3 mb-lg-5 pb-4 d-md-none'>
                  <h2 className='mb-3'>You might also be interested in the following properties</h2>
                  {/* <Crib cribs={2}/> */}
                </div>


            </div>
          </div>
          

        </div>
      </div>
      </>
    )
  }

export default Room