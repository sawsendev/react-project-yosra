import React from 'react'
import "./Room.css"
import "../SearchCities/Cribes/Cribes.css"
import Badge from 'react-bootstrap/Badge';
import {CribesTable} from "../../Data/Data";
import  locationIcon  from '../../assets/pin 2.svg';
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';
import iconimgs from '../../assets/room/imgs.svg'
import iconvideos from '../../assets/room/videos.svg'
import iconvisit from '../../assets/room/visits.svg'
import plan from '../../assets/room/plan.svg'
import bedroom from '../../assets/room/bedroom.svg'
import roomies from '../../assets/room/roomies.svg'
import elevator from '../../assets/room/elevator.svg'
import energy from '../../assets/room/energy.svg'
import room from '../../assets/room/room.jpg';


const Room = () => {
    return (
      <>
      <Breadcrumbs/>
      <div className='pageroom-container'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-8'>
              <div className='image'>
                <img src={room} alt="room" className="img-fluid"/>
                <div className='medias'>
                  <div className='btn-media'><img src={iconimgs} alt="photos"/>photos</div>
                  <div className='btn-media'><img src={iconvideos} alt="videos"/>video</div>
                  <div className='btn-media'><img src={iconvisit} alt="visit"/>360° visit</div>
                </div>
              </div>
              <div className='title'>
                <h1>52 Rue Vernier, Nice - Room 5</h1>
                <h2>Private room in Nice</h2>
              </div>
              <div className='characteristics'>
                <div className='btn-char'><img src={plan} alt="plan"/>Apartement (76m2)</div>
                <div className='btn-char'><img src={bedroom} alt="bedroom"/>Room (12m2)</div>
                <div className='btn-char'><img src={roomies} alt="roomies"/>4 Roomies</div>
                <div className='btn-char'><img src={elevator} alt="floor"/>2ndFloor</div>
                <div className='btn-char'><img src={energy} alt="energy"/> A+++</div>
              </div>
              <div className='description'>
                <h2>The crib</h2>
                <p>Located in the lovely neighbourhood of Riquier, in the immediate vicinity of the Riquier train station, 53 Bd Pierre 
                Sola is the ideal location for those commuting to Monaco daily, or for those wanting a central but quiet location. The 
                apartment is only 10-minute walk from the port, the old city and Place Garibaldi where you will find plenty of bars and 
                restaurants…</p>
              </div>
              <div className='amenities'>
                <h2>Amenities</h2>
                <h3>Room</h3>
                <h3>Apartment level</h3>
              </div>
              <div className='flatmates'>
                <h2>Flatmates</h2>
              </div>
              <div className='map-local'>
                <h2>Where is the accommodation located</h2>
              </div>
              <div className='local-desc'>
                <h2>Neighborhood description</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
                standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to</p>
              </div>
              <div className='recommandation'>
                <h2>You might also be interested in the following properties</h2>
              <ul className='row Rooms-cribes'>
                {CribesTable.slice(0, 3).map((cribe, index) => {
                  return (
                    <li className='col-lg-4 col-md-6 col-12'>
                      <div key={index} className='item-cribe'>
                        <div className='Item-badge'>
                          <Badge className='notify-badge'>Available now</Badge>
                          <img class="img-fluid" src= {cribe.src[0].src_room} alt="photo_fine_cribs"/>
                        </div>
                        <div className='Rooms-content'>
                          <h3>{cribe.content}</h3>
                          <div className='d-flex mb-1'>
                            <img src={locationIcon} alt="location icon"></img>
                            <p>{cribe.adress}</p>
                          </div>
                          <span> {cribe.price}/ month</span>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
              </div>
            </div>
            <div className='col-md-4'>
                <div className='widget'>
                  <p className='head-widget'>Available now</p>
                  <hr/>
                  <p className='text-center price'>650€/month</p>
                  <div className='text-center assistance'>CAF assistance  <span className='green'>( up to -258€ )</span></div>
                  <p className='h4 status'>Rent is all inclusive</p>
                  <p className='status'>Water</p>
                  <p className='status'>Electricity,gas</p>
                  <p className='status'>Housing insurance</p>
                  <p className='status'>Wi - Fi</p>
                  <p className='status'>Cable tv</p>
                  <p className='status'>Cleaning</p>
                  <button className='btn btn-submit'>Apply for this room</button>
                </div>
                <div className='widget-info'>
                  <h5>Fine cribs promise</h5>
                  <p>Our teams have renovated, furnished, equipped
                  and decorated this apartment to offer you an
                  experience of design, comfort and uparallefled
                  services.</p>
                </div>
            </div>
          </div>
        </div>
      </div>
      </>
    )
  }

export default Room