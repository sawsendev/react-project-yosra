import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import LazyLoad from 'react-lazyload';
import 'leaflet/dist/leaflet.css'
import { Carousel } from 'react-responsive-carousel';
import locationIcon from '../../../assets/pin 2.svg';
import promoImage from '../../../assets/Group 104.svg';
import { Badge } from 'react-bootstrap';
import imageParDefaut from '../../../assets/room/Group 116.svg';

const CribMap = ({ coordinates, showPopup, data ,latitude,longitude,zoom }) => {
  
  const customIcon = (it) => {
    if (it && typeof it === 'object' && 'loyer_hc' in it) {
      const price = it.loyer_hc + it.charges;
      return new L.divIcon({
        className: 'custom-icon',
        html: price ? `<div class="marker-label">${price}€</div>` : '',
      });
    } else {
      return new L.divIcon({
        className: 'custom-icon',
        html: '',
      });
    }
  };
  const dateAujourdhui = new Date();
  const dateDemain = new Date(dateAujourdhui);
  dateDemain.setDate(dateAujourdhui.getDate() + 1);
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getUTCDate();
    const month = date.getUTCMonth() + 1; // Les mois commencent à 0
    return `${day < 10 ? `0${day}` : day}/${month < 10 ? `0${month}` : month}`;
  };
  const formattedDateAujourdhui = `${(dateAujourdhui.getDate() < 10 ? '0' : '')}${dateAujourdhui.getDate()}/${(dateAujourdhui.getMonth() < 9 ? '0' : '')}${dateAujourdhui.getMonth() + 1}/${dateAujourdhui.getFullYear()}`;

const formattedDateDemain = `${(dateDemain.getDate() < 10 ? '0' : '')}${dateDemain.getDate()}/${(dateDemain.getMonth() < 9 ? '0' : '')}${dateDemain.getMonth() + 1}/${dateDemain.getFullYear()}`;
 
    
return (
  <MapContainer
    center={[latitude, longitude]}
    zoom={zoom}
    style={{ height: '765px', width: '100%' }}
  >
    <TileLayer
      url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    />
    {coordinates.map((coordArray, index) => {
        if (Array.isArray(coordArray) && coordArray.length === 3) {
          const [externalId, latitude, longitude] = coordArray;
         
          let item;

          if (typeof data === 'object' && !Array.isArray(data) && data.hasOwnProperty('id')) {
            // Si data a une propriété 'id', il est considéré comme un objet unique
           
            item = data;
          } else {
            // Sinon, on suppose que data est un objet contenant plusieurs objets, cherchez celui avec le bon ID
         
            const dataArray = Object.values(data);
            item = dataArray.find((dataItem) => dataItem && dataItem.id === externalId);
          }
          
          
          
          
          
          

          
          
  
        if (!isNaN(latitude) && !isNaN(longitude) && latitude !== null && longitude !== null && item) {
          

          return (
            <Marker
              key={externalId}
              position={[latitude, longitude]}
              icon={customIcon(item)}
            >
           
             {showPopup && item ? (
                <Popup>
                  <div className='popup_itemcribe'>
                    <div className='item-cribe'>
                      <div className='Item-badge'>
                        <Badge className='notify-badge'>
                          {
                            (item.availability_date === formattedDateAujourdhui ||
                              item.availability_date === formattedDateDemain ||
                              new Date(item.availability_date) < dateAujourdhui)
                              ? 'Available Now'
                              : `Avail. on ${formatDate(item.availability_date)}`
                          }
                        </Badge>

                        {item.promo && item.promo === 1 && (
                          <img src={promoImage} alt='Promo' className='promo-image' />
                        )}

                        <div className="custom-carousel-container">
                          {item.media ? (
                            <Carousel showStatus={false} showArrows={false} showThumbs={false} dynamicHeight={false} useKeyboardArrows={false}>
                              {item.media
                                .filter(
                                  (media) =>
                                    media.mime_type.startsWith('image') &&
                                    media.collection_name !== 'floorpan'
                                )
                                .slice(0, 2)
                                .map((image, index) => (
                                  <div className='room' onClick={() => (window.location.href =  `/room/${item.id}`)} key={index}>
                                    <div>
                                      <LazyLoad height={200} offset={100}>
                                        <img className="img-fluid" src={image.original_url} alt="Im" />
                                      </LazyLoad>
                                    </div>
                                  </div>
                                ))}
                            </Carousel>
                          ) : (
                            <div className='room' onClick={() => (window.location.href =  `/room/${item.id}`)} key={index}>
                              <div>
                                <LazyLoad height={200} offset={100}>
                                  <img
                                    className="img-fluid"
                                    src={imageParDefaut}
                                    alt="Im"
                                  />
                                </LazyLoad>
                              </div>
                            </div>
                          )}
                        </div>

                        <div className='Rooms-content'>
                          {item && item.title && <h3>
                            {item.apartment.title}-{item.title}
                          </h3>}
                          <div className='d-flex mb-1'>
                            <img src={locationIcon} alt="location icon" />
                            {item && item.apartment && item.apartment.building && <p>{item.apartment.building.address}</p>}
                          </div>
                          {item.promo && item.promo === 1 ? (
                            <div>
                              <span className='crib_promo'>
                                <span className='price_loyer'>{item.tarif_promo} €</span> /month
                              </span>

                              <div className='promo'>1st month rent {item.tarif_promo}€ then {item.loyer_hc + item.charges}€ </div>

                            </div>
                          ) : (
                            <span>
                              <span className='price_loyer'>
                                {item.loyer_hc + item.charges} €
                              </span>{' '}
                              /month
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </Popup>
              ) : <p> no map</p>}

            </Marker>
          );
        }
      }
      return <p> no map</p>;
    })}
  </MapContainer>
);
};

export default CribMap;