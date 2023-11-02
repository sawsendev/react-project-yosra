import React, { useState } from 'react'
import "./Room.css"
import CarrouselImages from "./RoomImages"
import RoomModalMedia from "./RoomModal/RoomModalMedia"
import "../SearchCities/Cribes/Cribes.css"
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs'
import iconimgs from '../../assets/room/icons/bedroom.svg'
import iconvideos from '../../assets/room/icons/videos.svg'
import iconvisit from '../../assets/room/icons/visits.svg'
import iconfloorplan from '../../assets/room/icons/floorplan.svg'
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
import check from '../../assets/room/widget/check.svg'
import check2 from '../../assets/room/widget/check2.svg'
import water from '../../assets/room/widget/water.svg'
import plug from '../../assets/room/widget/plug.svg'
import insurance from '../../assets/room/widget/insurance.svg'
import wifi from '../../assets/room/widget/wifi.svg'
import cable from '../../assets/room/widget/cable-tv.svg'
import wipe from '../../assets/room/widget/wipe.svg'
import { PiInfo } from "react-icons/pi";
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import MapWithMarker from '../MapWithMarker/MapWithMarker'
import Crib from '../Crib/Crib'
import CribMap from '../SearchCities/MapContainer/CribMap'



const Room = () => {
  const{id}=useParams();
  const[lotData,setLotData]=useState({});
  const API_KEY = 'a2b18f9cfb72eb93f3ce6b1c30372b59';
  const API_URL = `http://dev.niceroom.sofis-info.com/api/lot/${id}`;
  const API_URL2 = 'http://dev.niceroom.sofis-info.com/api/lots/list';
  const [latitude,setLatitude]=useState(null)
  const [longitude,setLongitude]=useState(null)

  const navigate= useNavigate();
  const [price,setPrice]=useState('')

  const [randomCribData, setRandomCribData] = useState([]);
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  
 
  useEffect(() => {
    const headers = {
      'apiKey': `${API_KEY}`,
    };
  
    fetch(API_URL2, { method: 'GET', mode: 'cors', headers })
      .then(response => response.json())
      .then(data => {
        const allCribs = data.data.lots;
        
        const cribsInSameCity = allCribs.filter(crib => 
          lotData.apartment && lotData.apartment.building &&
          crib.apartment && crib.apartment.building &&
          crib.apartment.building.city === lotData.apartment.building.city
        );
        
        // Utilisez la fonction de mélange pour mélanger les "cribs"
        shuffleArray(cribsInSameCity);
        
        // Sélectionnez les 3 premiers "cribs" aléatoires (ou moins si la liste est plus courte)
        const randomCribs = cribsInSameCity.slice(0, 3);
        setRandomCribData(randomCribs);
  
        console.log('Random Cribs:', randomCribs);
        console.log(randomCribData)
       
      })
      .catch(error => {
        console.error('Erreur lors de la récupération des données :', error);
      });
  }, [API_URL, API_KEY, lotData.apartment]);


  const [staticCoordinates, setStaticCoordinates] = useState([]);
  

  useEffect(() => {
    const headers = {
      'apiKey': `${API_KEY}`,
    };
  
    fetch(API_URL, { method: 'GET', mode: 'cors', headers })
      .then(response => response.json())
      .then(data => {
        setLotData(data.data.lot);
        console.log(data.data.lot);     
        console.log(data.data.lot.rent_status);
        const latitude = data.data.lot.apartment.building.latitude;
        setLatitude(latitude)
        const longitude = data.data.lot.apartment.building.longitude;
        setLongitude(longitude)
        const id =data.data.lot.id
        setPrice(data.data.lot.loyer_hc+data.data.lot.charges)
        if (!isNaN(latitude) && !isNaN(longitude)) {
          const newCoordinates = [[id,longitude, latitude]];
          setStaticCoordinates(newCoordinates);
        }   
      })
      .catch(error => {
        console.error('Erreur lors de la récupération des données :', error);
      });
  }, [API_URL, API_KEY]);

  
  const calculateAge=(dateOfBirth)=> {
    const dob = new Date(dateOfBirth);
    const today = new Date();
    const ageDiff = today - dob;
    const ageDate = new Date(ageDiff);
  
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }
  


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

  const openModalWithTab4 = () => {
    setActiveTab('tab4');
    setModalIsOpen(true);
  };


  const closeModal = () => {
    setModalIsOpen(false);
  };  
  const showElectricity = lotData.electricity !== 0;
  const showGas = lotData.gaz !== 0;
  let electricityAndGas = '';

  if (showElectricity && showGas) {
    electricityAndGas = 'Electricity, Gas';
  } else if (showElectricity) {
    electricityAndGas = 'Electricity';
  } else if (showGas) {
    electricityAndGas = 'Gas';
  }
  const getFloorSuffix = (floorNumber) => {
    if (floorNumber === 1) {
      return "st";
    } else if (floorNumber === 2) {
      return "nd";
    } else if (floorNumber === 3) {
      return "rd";
    } else {
      return "th";
    }
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
                {lotData && lotData.media && lotData.media
                 .filter((media) => media.mime_type.startsWith('image')&&
                  media.collection_name !== 'floorpan').length >0 && (
                 <button type='button' className='btn-media' onClick={openModalWithTab1} id="photos-btn">
                 <img src={iconimgs} alt="photos"/> photos</button>)}
                 {lotData && lotData.media && lotData.media.some((media) => media.mime_type.startsWith('video')) && (
    <button type='button' className='btn-media' onClick={openModalWithTab2} id="video-btn">
        <img src={iconvideos} alt="videos"/> video
    </button>
)}
                  {lotData && lotData.image_360 && (
                  <button type='button' className='btn-media' onClick={openModalWithTab3} id="visit-btn">
                  <img src={iconvisit} alt="visit"/> 360° visit</button>)}

                  {lotData && lotData.media && lotData.media 
                            .filter((media) =>media.collection_name === 'floorpan').length >0 && (
                  <button type='button' className='btn-media' onClick={openModalWithTab4} id="floorplan-btn">
                  <img src={iconfloorplan} alt="floorplan"/> flooplan</button>)}
                  {/* <button type='button' className='btn-media' onClick={openModal} id="media-btn"><img src={iconimgs} alt="media"/> Medias</button> */}
                </div>

              </div>

              <RoomModalMedia isOpen={modalIsOpen} closeModal={closeModal} activeTab={activeTab} setActiveTab={setActiveTab} lotData={lotData}/>

              <div className='title mt-4'>
              {lotData && lotData.apartment && lotData.apartment.title && lotData.title && (
               <h1>{lotData.apartment.title} - {lotData.title}</h1>
                )}
                {lotData && lotData.apartment && lotData.apartment.building&&lotData.apartment.building.city&&(
                <h2>Private room in {lotData.apartment.building.city}</h2>)}
              </div>
              <div className='characteristics mt-3 mb-4'>
                <div className='btn-char'><img src={plan} alt="plan"/>Apartement (76m2)</div>
                {lotData && lotData.area!==0 &&  (
                <div className='btn-char'><img src={bedroom} alt="bedroom"/>Room ({lotData.area}m2)</div>)}
                {lotData && lotData.apartment && lotData.apartment.rooms &&  (
                <div className='btn-char'><img src={roomies} alt="roomies"/>{lotData.apartment.rooms} Roomies</div>)}
                {lotData && lotData.apartment && lotData.apartment.floor &&  (
                <div className='btn-char'><img src={elevator} alt="floor"/>{lotData.apartment.floor}
                  {getFloorSuffix(lotData.apartment.floor)}</div>)}
                {lotData && lotData.apartment && lotData.apartment.energy_rating &&  (
                <div className='btn-char'><img src={energy} alt="energy"/>{lotData.apartment.energy_rating}+++</div>)}
              </div>
              <div className='description pt-2 mb-4'>
                {lotData.description && (
                  <div>
                    <h2>The crib</h2>
                    <div dangerouslySetInnerHTML={{ __html: lotData.description }} />
                  </div>)}
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
                 {lotData.apartment &&lotData.apartment.options && Object.keys(lotData.apartment.options).length > 0 &&(
                 <h3>Apartment level</h3>)}
                 {lotData.apartment && lotData.apartment.options && (
                 <div className='characteristics pieces mb-4'>
                 {[
                 { title: "Central location", icon: location },
                 { title: "Fully furnished", icon: sofa },
                 { title: " A/C", icon: airconditioner },
                 { title: "Elevator", icon: elevator1 },
                 { title: "Beautiful view", icon: view },
                 { title: "Cleaning", icon: cleaning },
                 { title: "Balcony", icon: terrace },
                 { title: "Furnished kitchen", icon: fkitchen },
                 { title: "Kitchenware", icon: kitchenware },
                 { title: "Dishes and cutlery", icon: dishes },
                 { title: "Dishwasher", icon: dishwasher },
                 { title: "Microwave", icon: microwave },
                 { title: "Shower", icon: shower },
                 { title: "Washing machine", icon: washer },
                 { title: "Blanket & Pillows", icon: pillow },
                 { title: "Dryer", icon: dryer },
                 { title: "Vacuum cleaner", icon: vacuum },
                 { title: "Ironing set", icon: ironing },
                 { title: "Cleaning tools", icon: tools },
                 ].map((char) => (
                 lotData.apartment.options.some((option) => option.title_en === char.title) && (
                 <div className='btn-char' key={char.title}>
                 <img src={char.icon} alt={char.title} />
                 {char.title}
                 </div>
                 )
                 ))}
                 </div>
                 )}


              </div>
              <div className='flatmates'>
                <h2 className='mb-3'>Flatmates</h2>
                  <div className='row'>
              {/* {lotData ? (
  <div className='col-md-4'>
    <div className='panel mb-3'>
      <div className='icon'>
        <img src={block} alt="Bedroom 1"/>
      </div>
      <div className='text'>
        <p>{lotData.title &&lotData.title.replace('Room', 'Bedroom')}</p>
       {lotData &&lotData.rent_status===false && (<button type='button' className='btn-visit'>Visit</button>)}
       
        {lotData &&lotData.rent_status===true &&(<span className='status'> Booked</span>)}
       
      </div>
    </div>
  </div>
) : null} */}

                  {lotData &&
  lotData.apartment &&
  lotData.apartment.flat_mates_infos &&
  Array.isArray(lotData.apartment.flat_mates_infos) &&
  lotData.apartment.flat_mates_infos
.map((locataire, index) => (
  <div className='col-md-4' key={index}>
    <div className='panel mb-3'>
    <div className='icon'>
  {locataire.locataire_info && locataire.locataire_info.genre === 0 ? (
    <img src={man} alt={index} />
  ) : locataire.locataire_info && locataire.locataire_info.genre === 1 ? (
    <img src={woman} alt={index} />
  ) :((locataire.title && locataire.title === lotData.title) || locataire.rent_status === false) ? (
    <img src={block} alt={index} />
  ) : null}
</div>

      <div className='text'>
     {locataire.title &&locataire.title.replace('Room', 'Bedroom')} 
     
    
      {locataire.rent_status === true ? (
            <span className='status'>Booked</span>
          ) : (
            <button type='button' className='btn-visit' onClick={()=>{navigate(`../room/${locataire.id}`)}}>Visit</button>
          )}

     <p style={{display:'block', width:'100%'}} > 
  {locataire.locataire_info && locataire.locataire_info.name && (
    <span>{locataire.locataire_info.name}  </span>
  )}
  {locataire.locataire_info && locataire.locataire_info.date_of_birth && (
    <span> | {calculateAge(locataire.locataire_info.date_of_birth)} yrs.</span>
  )}
</p>

  

      </div>
    </div>
  </div>
))}

  </div>
</div>

              

              <div className='map-local mt-3 mb-3 pb-3'>
                <h2 className='mb-3'>Where is the accommodation located</h2>
                <div className='map'>
                {longitude && latitude && (
                <CribMap coordinates={staticCoordinates} showPopup={false} data={lotData} latitude={latitude}
                  longitude={longitude}
                 /> )}
                </div>
              </div>
              <div className='local-desc mt-3 mb-4 pb-3'>
                {lotData.description_quartier && (
                  <div>
                    <h2>Neighborhood description</h2>
                    <div dangerouslySetInnerHTML={{ __html: lotData.description_quartier }} />
                  </div>)}
              </div>
              <div className='recommandation mt-3 mb-lg-5 pb-4 d-md-block d-none'>
                <h2 className='mb-3'>You might also be interested in the following properties</h2>
                {randomCribData&&<Crib cribs={randomCribData} /> }
              </div>
            </div>
            <div className='col-widget col-lg-4'>
                <div className='widget mb-3'>
                {lotData.rent_status===false ? (
               <p className='head-widget'><img src={check} alt="Available"/> Available now</p>
                 ) : (
                    <p className='head-widgett'><img src={check2} alt="Available"/> Not available</p>
                    )}
                  <hr/>
                  {lotData.loyer_hc && lotData.charges ? (
                  <p className='text-center price'>{lotData.loyer_hc+lotData.charges} € /<small>month</small></p>
                  ) : null}
                  {lotData.max_benefit ? (
                  <div className='text-center assistance'>
                   CAF assistance <PiInfo className='info' />
                   <span className='green'>( up to -{lotData.max_benefit}€ )</span>
                   </div>
                  ) : null}
                  <p className='h4 status'>Rent is all inclusive</p>
                  {lotData.water !== 0 &&(<p className='status'><img src={water} alt="Water"/> Water</p>)}
                  {electricityAndGas && (
                  <p className='status'><img src={plug} alt="plug"/> {electricityAndGas}</p>
                  )}
                  {lotData.home_insurance !== 0 &&(<p className='status'><img src={insurance} alt="insurance"/> Housing insurance</p>)}
                  {lotData.wi_fi !== 0 &&(<p className='status'><img src={wifi} alt="wifi"/> Wi - Fi</p>)}
                  {lotData.cable_tv !== 0 &&(<p className='status'><img src={cable} alt="cable tv"/> Cable tv</p>)}
                  {lotData.cleaning !== 0 &&(<p className='status'><img src={wipe} alt="wipe"/> Cleaning</p>)}
                  <button className='btn btn-submit' onClick={()=>{navigate(`/booking-enquiry/${id}`)}}>

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
                 {randomCribData&&<Crib cribs={randomCribData}/> }
                </div>


            </div>
          </div>
          

        </div>
      </div>
      </>
    )
  }

export default Room