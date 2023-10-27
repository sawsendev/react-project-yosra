import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import LazyLoad from 'react-lazyload';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import locationIcon from '../../../assets/pin 2.svg';
import promoImage from '../../../assets/Group 104.svg';
import { Badge } from 'react-bootstrap';
import imageParDefaut from '../../../assets/room/Group 116.svg';



const CribMap = ({ coordinates, showPopup, data,price }) => {
  const customIcon = new L.divIcon({
    className: 'custom-icon',
    html: price ? `<div class="marker-label">${price}€</div>` : '',
  });
  return (
    <MapContainer
      center={[43.70328975790311, 7.1704107912588055]}
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
              <Marker key={index} position={coordArray} icon={customIcon}>
                {showPopup && data && data[0] ? (
                  <Popup>
                    <div className='popup_itemcribe'>
                      <div className='item-cribe'>
                        <div className='Item-badge'>
                          {data[0].rent_status === false && (
                            <Badge className='notify-badge'>Available now</Badge>
                          )}
                          {data[0].promo && data[0].promo === 1 && (
                            <img src={promoImage} alt='Promo' className='promo-image' />
                          )}

                          <div className="custom-carousel-container">
                            {data[0].media ? (
                              <Carousel showStatus={false} showArrows={false} showThumbs={false} dynamicHeight={false} useKeyboardArrows={false}>
                                {data[0].media
                                  .filter(
                                    (media) =>
                                      media.mime_type.startsWith('image') &&
                                      media.collection_name !== 'floorpan'
                                  )
                                  .slice(0, 2)
                                  .map((image, index) => (
                                    <Link to={`/room/${data[0].id}`} key={index}>
                                      <div>
                                        <LazyLoad height={200} offset={100}>
                                          <img className="img-fluid" src={image.original_url} alt="Im" />
                                        </LazyLoad>
                                      </div>
                                    </Link>
                                  ))}
                              </Carousel>
                            ) : (
                              // Si aucune image ne satisfait les conditions, afficher une image par défaut
                              <Link to={`/room/${data[0].id}`}>
                                <div>
                                  <LazyLoad height={200} offset={100}>
                                    <img
                                      className="img-fluid"
                                      src={imageParDefaut}
                                      alt="Im"
                                    />
                                  </LazyLoad>
                                </div>
                              </Link>
                            )}
                          </div>

                          {data[0] ? (
                            <div className='Rooms-content'>
                              <h3>{data[0].apartment.title}-{data[0].title}</h3>
                              <div className='d-flex mb-1'>
                                <img src={locationIcon} alt="location icon" />
                                <p>{data[0].apartment.building.address}</p>
                              </div>
                              <span className='pricecrib'>{data[0].loyer_hc} € /month</span>
                            </div>
                          ) : null}
                        </div>
                      </div>
                    </div>
                  </Popup>
                ) : null}
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
