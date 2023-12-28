import React, { useRef, useState } from 'react'
import "./Room.css"
import CarrouselImages from "./RoomImages"
import RoomModalMedia from "./RoomModal/RoomModalMedia"
import "../SearchCities/Cribes/Cribes.css"
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs'
import plan from '../../assets/room/icons/plan.svg'
import bedroom from '../../assets/room/icons/bedroom.svg'
import roomies from '../../assets/room/icons/roomies.svg'
import elevator from '../../assets/room/icons/elevator.svg'
import energy from '../../assets/room/icons/energy.svg'
import doublebed from '../../assets/room/icons/doublebed.svg'
import wardrobe from '../../assets/room/icons/wardrobe.svg'
import sofa from '../../assets/room/icons/sofa.svg'
import terrace from '../../assets/room/icons/terrace.svg'
import airconditioner from '../../assets/room/icons/air-conditioner.svg'
import location from '../../assets/room/icons/pin.svg'
import elevator1 from '../../assets/room/icons/elevator1.svg'
import view from '../../assets/room/icons/view.svg'
import cleaning from '../../assets/room/icons/cleaning.svg'
import group from '../../assets/room/icons/Group.svg'
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
import water from '../../assets/room/widget/water.svg'
import plug from '../../assets/room/widget/plug.svg'
import insurance from '../../assets/room/widget/insurance.svg'
import wifi from '../../assets/room/widget/wifi.svg'
import heater from '../../assets/heater 1.png'
import cable from '../../assets/room/widget/cable-tv.svg'
import wipe from '../../assets/room/widget/wipe.svg'
import { PiInfo } from "react-icons/pi";
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import building from '../../assets/room/icons/payment.png'
import Crib from '../Crib/Crib'
import CribMap from '../SearchCities/MapContainer/CribMap'
import ErrorPage from '../404/ErrorPage'
import bathroom from "../../assets/room/icons/wash-basin (1).png"
import desk from "../../assets/room/icons/working.png"
import closet from "../../assets/room/icons/closet.png"
import bed from "../../assets/room/icons/bed.png"
import furniture from "../../assets/room/icons/living-room.png"
import { Helmet } from 'react-helmet'
import { URL } from '../Variables';
import ReactGA from 'react-ga';
import whatsapp from '../../assets/Group 127.svg';
import email from '../../assets/mail (2).png';
import { EmailShareButton ,WhatsappShareButton } from 'react-share';
import loading1 from '../../assets/load.gif';

const Room = () => {
  const { id } = useParams();
  const [lotData, setLotData] = useState({});
  const API_KEY = 'a2b18f9cfb72eb93f3ce6b1c30372b59';
  const API_URL = `https://admin.finecribs.com/api/lot/${id}`;
  const API_URL2 = 'https://admin.finecribs.com/api/lots/recommendation';
  const [latitude, setLatitude] = useState(null)
  const [longitude, setLongitude] = useState(null)
  const shareUrl = `https://finecribs.com/room/${id}`; 
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();
  const [price, setPrice] = useState('')
  const [city, setCity] = useState('')

  const [randomCribData, setRandomCribData] = useState([]);
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);
  useEffect(() => {
    setIsLoading(true);
    const headers = {
      'apiKey': `${API_KEY}`,
    };


    fetch(API_URL, { method: 'GET', mode: 'cors', headers })
      .then(response => response.json())
      .then(data => {
        setLotData(data.data.lot);
        setCity(data.data.lot.apartment.building.city);
        const latitude = data.data.lot.apartment.building.latitude;
        setLatitude(latitude)
        const longitude = data.data.lot.apartment.building.longitude;
        setLongitude(longitude)
        const id = data.data.lot.id
        setPrice(data.data.lot.loyer_hc + data.data.lot.charges)
        if (!isNaN(latitude) && !isNaN(longitude)) {
          const newCoordinates = [[id, latitude, longitude]];
          setStaticCoordinates(newCoordinates);
        }
      })
      .catch(error => {
        console.error('Erreur lors de la récupération des données :', error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [API_URL, API_KEY]);

  useEffect(() => {
    const fetchData = async () => {
      const headers = {
        'apiKey': `${API_KEY}`,
        'Content-Type': 'application/json',
      };
  
      if (city && id) {
        const requestBody = {
          city: city,
          lot_id: id
        };
  
        try {
          setTimeout(async () => {
            const response = await fetch(API_URL2, {
              method: 'POST',
              mode: 'cors',
              headers,
              body: JSON.stringify(requestBody),
            });
  
            const data = await response.json();
  
            if (data && data.data && data.data.lots) {
              const allCribs = data.data.lots;
  
              const cribsArray = Object.values(allCribs);
              setRandomCribData(cribsArray);
            } else {
              console.error('API response structure is not as expected:', data);
            }
          }, 1000);
        } catch (error) {
          console.error('Erreur lors de la récupération des données:', error);
        }
      }
    };
  
    fetchData();
  }, [API_URL2, API_KEY, city]);
  
  const [staticCoordinates, setStaticCoordinates] = useState([]);
  const calculateAge = (dateOfBirth) => {
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
  const [showMore, setShowMore] = useState(false);
  const [descriptionHeight, setDescriptionHeight] = useState('auto');
  const descriptionRef = useRef(null);
  
  useEffect(() => {
    if (descriptionRef.current) {
      const height = descriptionRef.current.clientHeight;
      if (height > 400) {
        setDescriptionHeight('25em');
      } else {
        setDescriptionHeight('auto');
      }
    }
  }, [lotData?.description]);

  const handleShowMoreClick = () => {
    setShowMore(!showMore);
  };
  const dateAujourdhui = new Date();
    const dateDemain = new Date(dateAujourdhui);
    dateDemain.setDate(dateAujourdhui.getDate() + 1);
  
    const formattedDateAujourdhui = `${(dateAujourdhui.getDate() < 10 ? '0' : '')}${dateAujourdhui.getDate()}/${(dateAujourdhui.getMonth() < 9 ? '0' : '')}${dateAujourdhui.getMonth() + 1}/${dateAujourdhui.getFullYear()}`;
  
    const formattedDateDemain = `${(dateDemain.getDate() < 10 ? '0' : '')}${dateDemain.getDate()}/${(dateDemain.getMonth() < 9 ? '0' : '')}${dateDemain.getMonth() + 1}/${dateDemain.getFullYear()}`;
    const formatDate = (dateString) => {
      const date = new Date(dateString);
      const day = date.getUTCDate();
      const month = date.getUTCMonth() + 1;
      const year = date.getUTCFullYear();
    
      return `${day < 10 ? `0${day}` : day}/${month < 10 ? `0${month}` : month}/${year}`;
    };
    

    const isoFormattedDateAujourdhui = formattedDateAujourdhui.split('/').reverse().join('-');
    const isoFormattedDateDemain = formattedDateDemain.split('/').reverse().join('-');
  
    const availabilityDatePart = lotData && lotData.availability_date ? lotData.availability_date.split('T')[0] : '';


  const calculateRent = (lotData) => {
    const isoFormattedDateAujourdhui = formattedDateAujourdhui.split('/').reverse().join('-');
  
    const availabilityDatePart = lotData && lotData.availability_date
    ? (lotData.availability_date.split('T')[0] || '')
    : '';
  
    return availabilityDatePart > isoFormattedDateAujourdhui ;
  };
  
 
  const rent = calculateRent(lotData);
  console.log(rent) //si c true loué 

  if (isLoading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <img src={loading1} alt="Loading" style={{ width: '120px', height: '120px' }} />
      </div>
    );
  }
  

  if (!lotData) {
    return <ErrorPage />;
  }
  
//   function oneYearFromToday() {
//     var today = new Date();
//     var lastYear = new Date(today);
//     lastYear.setFullYear(today.getFullYear() + 1);
//     return lastYear;
// }


  

  return (
    <>
      <Helmet>
        <title>Room</title>
        <meta
          name="description"
          content="Fine Cribs, beautiful flatshares designed for communal living"
        />
        <link rel="canonical" href={`${URL}/room/${id}`} />
      </Helmet>
      {lotData && lotData.apartment && lotData.apartment.building && lotData.apartment.building.city && (
        <Breadcrumbs
          path={`/`}
          customRoutes={[
            {
              path: `/search-cities?city=${lotData.apartment.building.city}`,
              label: `${lotData.apartment.building.city}`
            }
          ]}

        />)}
        <div className='pageroom-container'>
        <div className='container'>
          <div className='row'>
            <div className='col-large col-lg-8'>
              <div className='d-flex justify-content-end mb-2 gap-2'>
                <span>Share on : </span>
                <div className='d-flex gap-2'>

                <WhatsappShareButton url={shareUrl} >
                <img src={whatsapp} alt='whatsapp' className='social-media'/>
                 </WhatsappShareButton>
                 <EmailShareButton body={`Check out this room : ${shareUrl}`} >
                 <img src={email} alt='email' className= 'email-icon'/>
                 </EmailShareButton>
  
                </div>
              </div>

              <div className='carousel-images'>
                <CarrouselImages lotData={lotData} openModalWithTab1={openModalWithTab1} openModalWithTab2={openModalWithTab2}
                openModalWithTab3={openModalWithTab3} openModalWithTab4={openModalWithTab4}
                
                />

                

              </div>

              <RoomModalMedia isOpen={modalIsOpen} closeModal={closeModal} activeTab={activeTab} setActiveTab={setActiveTab} lotData={lotData} />

              <div className='title mt-4'>
                {lotData && lotData.apartment && lotData.apartment.title && lotData.title && (
                  <h1>{lotData.apartment.title} - {lotData.title}</h1>
                )}
                {lotData && lotData.apartment && lotData.apartment.building && lotData.apartment.building.city && (
                  <div className='prv'>Private room in {lotData.apartment.building.city}</div>)}
              </div>
              <div className='characteristics mt-3 mb-4'>
                {lotData && lotData.apartment && lotData.apartment.m2 && (
                  <div className='btn-char'><img src={plan} alt="plan" />Apartement ({lotData.apartment.m2}m2)</div>)}
                {lotData && lotData.area !== 0 && (
                  <div className='btn-char'><img src={bedroom} alt="bedroom" />Room ({lotData.area}m2)</div>)}
                {lotData && lotData.apartment && lotData.apartment.rooms && (
                  <div className='btn-char'><img src={roomies} alt="roomies" />{lotData.apartment.rooms} Roomies</div>)}
                {lotData && lotData.apartment && lotData.apartment.floor && (
                  <div className='btn-char'><img src={elevator} alt="floor" />{lotData.apartment.floor}
                    {getFloorSuffix(lotData.apartment.floor)}</div>)}
                {lotData && lotData.apartment && lotData.apartment.energy_rating && (
                  <div className='btn-char'><img src={energy} alt="energy" />{lotData.apartment.energy_rating}+++</div>)}
              </div>
              <div className='description pt-2 mb-4'>
                {lotData && lotData.description && (
                  <div
                    ref={descriptionRef}
                    style={{ maxHeight: showMore ? 'none' : descriptionHeight, overflow: 'hidden' }}
                  >
                    <h2>The Crib</h2>
                    <div dangerouslySetInnerHTML={{ __html: lotData.description }} />
                  </div>
                )}
                {descriptionHeight === '25em' && (
                  <div className='showmore' onClick={handleShowMoreClick}>
                    {showMore ? 'Read Less' : 'Read More'}
                  </div>
                )}
              </div>
              <div className='amenities'>
                <h2>Amenities</h2>
                {lotData && lotData.options && Object.keys(lotData.options).length > 0 && (
                  <>
                    {Object.keys(lotData.options).every((optionId) => {
                      const id = parseInt(optionId);
                      return (id !== 71 || id !== 74 || id !== 75 || id !== 73);
                    }) && Object.keys(lotData.options).length !== 4 && <h3>Room</h3>}
                  </>
                )}


                {lotData.options && lotData.options.length > 0 && (
                  <div className='characteristics pieces mb-2'>
                    {[
                      { title: "Double bed", icon: doublebed },
                      { title: "Wardrobe", icon: wardrobe },
                      { title: "Sofa", icon: sofa },
                      { title: "Private bathroom", icon: bathroom },
                      { title: "Desk", icon: desk },
                      { title: "Armchair", icon: sofa },
                      { title: "Closet", icon: closet },
                      { title: "Bed", icon: bed },
                      { title: "Room furniture", icon: furniture },
                      { title: "Blanket & Pillows", icon: pillow }


                    ].map((option) => (
                      lotData.options.some((opt) => opt.title_en === option.title) && (
                        <div className='btn-char' key={option.title}>
                          <img src={option.icon} alt={option.title} className='opt-room-icons' />
                          {option.title}
                        </div>

                      )
                    ))}
                  </div>

                )}
                {lotData.apartment && lotData.apartment.options && Object.keys(lotData.apartment.options).length > 0 && (
                  <h3>Apartment</h3>)}
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
                      { title: "Dryer", icon: dryer },
                      { title: "Vacuum cleaner", icon: vacuum },
                      { title: "Ironing set", icon: ironing },
                      { title: "Cleaning tools", icon: tools },
                    ].map((char) => (
                      lotData.apartment.options.some((option) => option.title_en === char.title) && (
                        <div className='btn-char' key={char.title}>
                          <img src={char.icon} alt={char.title} className='opt-room-icons' />
                          {char.title}
                        </div>
                      )
                    ))}
                  </div>
                )}


              </div>
              <div className='flatmates'>
                <h2 className='mb-3'>Flatmates</h2>
                <div className='row '>


                  {lotData &&
                    lotData.apartment &&
                    lotData.apartment.flat_mates_infos &&
                    Array.isArray(lotData.apartment.flat_mates_infos) &&
                    lotData.apartment.flat_mates_infos
                      .sort((a, b) => {
                        // Triez les chambres en fonction de leur numéro
                        const roomNumberA = parseInt(a.title.replace('Room', ''), 10);
                        const roomNumberB = parseInt(b.title.replace('Room', ''), 10);
                        return roomNumberA - roomNumberB;
                      })
                      .map((locataire, index) => (
                        <div className='col-md-4' key={index}>
                          <div className='panel mb-3'>
                            <div className='icon'>
                              {locataire.locataire_info && locataire.locataire_info.genre === 0 ? (
                                <img src={man} alt={index} />
                              ) : locataire.locataire_info && locataire.locataire_info.genre === 1 ? (
                                <img src={woman} alt={index} />
                              ) : ((locataire.locataire_info === null)) ? (
                                <img src={block} alt={index} />
                              ) : null}
                            </div>

                            <div className='text'>
                              {locataire.title && locataire.title.replace('Room', 'Bedroom')}


                              {((calculateRent(locataire) === true ))? (
                                <span className='status'>Booked</span>
                              ) : (
                                <button 
                                  type='button'
                                  className='btn-visit'
                                  onClick={() => {
                                    navigate(`../room/${locataire.id}`);
                                    window.scrollTo(0, 0); 
                                  }}
                                >
                                  Visit
                                </button>
                              )}

                              <p style={{ display: 'block', width: '100%' }} >
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
                <h2 className='mb-3'>Neighborhood</h2>
                <div className='map'>
                  {longitude && latitude && (
                    <CribMap coordinates={staticCoordinates} showPopup={false} data={lotData} latitude={latitude}
                      longitude={longitude} zoom={15}
                    />)}
                </div>
              </div>
              <div className='local-desc mt-3 mb-md-4 pb-3'>
                {lotData.description_quartier && (
                  <div>

                    <div dangerouslySetInnerHTML={{ __html: lotData.description_quartier }} />
                  </div>)}
              </div>
              <div className='recommandation mt-3 mb-lg-5 pb-4 d-md-block d-none'>
                <h2 className='mb-3'>You might also be interested in the following properties</h2>
                {randomCribData && <Crib cribs={randomCribData} />}
              </div>
            </div>
            <div className='col-widget col-lg-4'>
              <div className='widget mb-3'>

                <p className='head-widget'>
                <div>
    {lotData && lotData.availability_date && (
        <>
            
            {(
                availabilityDatePart === isoFormattedDateAujourdhui ||
                availabilityDatePart === isoFormattedDateDemain
            ) ? (
              <div>
              <img src={check} alt="Available" />
                <span>Available Now</span>
                </div>
            ) : (
               
                  <div>
                  <img src={check} alt="Available" />
                    <span>Available on {formatDate(lotData.availability_date)}</span>
                    </div>
                
            )}
        </>
    )}
</div>


                </p>


                <hr />
                {/* {lotData.loyer_hc && lotData.charges ? (
                  <p className='text-center price'>{lotData.loyer_hc+lotData.charges} € /<small>month</small></p>
                  ) : null} */}
                {lotData.promo && lotData.promo === 1 && (
                  <small className='mb-2 crib_promo d-flex align-items-baseline'><span className="me-auto">1° month rent</span><span className='price_loyer'>{lotData.tarif_promo} €</span> /month</small>
                )}
                <small className="d-flex align-items-baseline"><span className="me-auto">Monthly rent</span><span className='price_loyer'>{lotData.loyer_hc + lotData.charges} €</span> /month</small>
                <br />
                {lotData.max_benefit ? (
                  <div className='text-center assistance'>
                    CAF assistance <PiInfo className='info' />
                    <span className='green'> up to -{lotData.max_benefit}€ </span>
                  </div>
                ) : null}
                <p className='h4 status mt-3'>Rent is all inclusive</p>
                {lotData.water !== 0 && (<p className='status mb-2'><img src={water} alt="Water" className='icon' /> Water</p>)}
                {lotData.electricity !== 0 && (
                  <p className='status mb-2'><img src={plug} className='icon' alt="plug" /> Electricity</p>
                )}
                {lotData.gas !== 0 && (
                  <p className='status mb-2'><img src={group} className='icon' alt="plug" /> Gaz</p>
                )}
                {lotData.home_insurance !== 0 && (<p className='status mb-2'><img src={insurance} className='icon' alt="insurance" /> Housing insurance</p>)}
                {lotData.wi_fi !== 0 && (<p className='status mb-2'><img src={wifi} className='icon' alt="wifi" /> Wi - Fi</p>)}
                {lotData.cable_tv !== 0 && (<p className='status mb-2'><img src={cable} className='icon' alt="cable tv" /> Cable tv</p>)}
                {lotData.cleaning !== 0 && (<p className='status mb-2'><img src={wipe} className='icon' alt="wipe" /> Cleaning</p>)}
                {lotData.heating !== 0 && (<p className='status mb-2'><img src={heater} className='icon' alt="wipe" /> Heating</p>)}
                {lotData.building_service_charge !== 0 && (<p className='status mb-2'><img src={building} className='icon' alt="wipe" /> Building Service Charge</p>)}

                <button className='btn btn-submit mt-3'
                  onClick={() => {
                    navigate(`/booking-enquiry/${id}`)
                    window.scrollTo(0, 0);
                  }}>

                  Apply for this room</button>
              </div>
              <div className='widget-info mb-3'>
                <h5>Fine cribs promise</h5>
                <p>Our team has meticulously renovated, furnished and equipped this apartment
                  to provide you with an unparalleled experience of design, comfort, and exceptional services .</p>
              </div>
              <div className='recommandation mt-3 mb-lg-5 pb-4 d-md-none'>
                <h2 className='mb-3'>You might also be interested in the following properties</h2>
                {/* {randomCribData && <Crib cribs={randomCribData} />} */}
              </div>


            </div>
          </div>


        </div>
      </div>
    </>
  )
}

export default Room