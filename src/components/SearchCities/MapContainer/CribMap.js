import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import LazyLoad from 'react-lazyload';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import locationIcon from '../../../assets/pin 2.svg';
import promoImage from '../../../assets/Group 104.svg';
import room1 from '../../../assets/room/room-21.jpg';
import { Badge } from 'react-bootstrap';
import room2 from '../../../assets/room/room-22.jpg';
import imageParDefaut from '../../../assets/room/Group 116.svg';
const customIcon = new L.divIcon({
  className: 'custom-icon',
  html: '<div class="marker-label">400€</div>',
});

const CribMap = ({ coordinates , showPopup }) => {
    // function calculateCenter(coordinates) {
    //     if (coordinates.length === 0) {
    //       return [0, 0]; // Centre par défaut s'il n'y a pas de coordonnées
    //     } else if (coordinates.length === 1) {
    //       return coordinates[0]; // Si un seul élément, utilisez-le comme centre
    //     } else {
    //       const totalLat = coordinates.reduce((sum, coord) => sum + parseFloat(coord[0]), 0);
    //       const totalLng = coordinates.reduce((sum, coord) => sum + parseFloat(coord[1]), 0);
      
    //       const centerLat = totalLat / coordinates.length;
    //       const centerLng = totalLng / coordinates.length;
      
    //       return [centerLat, centerLng];
    //     }
    //   }
      
      
    //   const center = calculateCenter(coordinates);
  return (
    <MapContainer
      center={[43.70328975790311,7.1704107912588055]}
      zoom={12}
      style={{ height: '765px', width: '100%' }}
    >
      <TileLayer
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {coordinates.map((coordArray, index) => {
        if (Array.isArray(coordArray) && coordArray.length === 2) {
          const [latitude, longitude] = coordArray;
          if (!isNaN(latitude) && !isNaN(longitude) && latitude !== null && longitude !== null) {
            return (
              <Marker key={index} position={coordArray} icon={customIcon} 
              >
               {showPopup && (
                <Popup>
                  <div className='popup_itemcribe'>
                  <div className='item-cribe'>
                                  <div className='Item-badge'>
                                    <Badge className='notify-badge'>Available now</Badge>
                                    <img src={promoImage} alt='Promo' className='promo-image' />
                                    <div className="custom-carousel-container">
                                      <Carousel showStatus={false} showArrows={false} showThumbs={false} dynamicHeight={false} useKeyboardArrows={false}>
                                        <Link to='#'>
                                          <div>
                                            <LazyLoad height={200} offset={100}>
                                              <img className="img-fluid" src={room1} alt="Im" style={{ width: '100%', height: '100%' }} />
                                            </LazyLoad>
                                          </div>
                                        </Link>
                                        <Link to='#'>
                                          <div>
                                            <LazyLoad height={200} offset={100}>
                                              <img className="img-fluid" src={imageParDefaut} alt="Im" style={{ width: '100%', height: '100%' }} />
                                            </LazyLoad>
                                          </div>
                                        </Link>
                                        <Link to='#'>
                                          <div>
                                            <LazyLoad height={200} offset={100}>
                                              <img className="img-fluid" src={room2} alt="Im" style={{ width: '100%', height: '100%' }} />
                                            </LazyLoad>
                                          </div>
                                        </Link>
                                      </Carousel>
                                    </div>
                                    <div className='Rooms-content'>
                                      <h3>17 Récamier - #room 5</h3>
                                      <div className='d-flex mb-1'>
                                        <img src={locationIcon} alt="location icon" />
                                        <p>47 rue Pierre Audry, 69009 Lyon</p>
                                      </div>
                                      <span className='pricecrib'>400€/ month</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
              
                </Popup>)}
              </Marker>
            );
          }
        }
        return null;
      })}
    </MapContainer>
  );
};

export default CribMap;
