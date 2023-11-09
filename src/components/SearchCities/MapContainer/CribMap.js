import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import LazyLoad from 'react-lazyload';
import 'leaflet/dist/leaflet.css'
import { Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import locationIcon from '../../../assets/pin 2.svg';
import promoImage from '../../../assets/Group 104.svg';
import { Badge } from 'react-bootstrap';
import imageParDefaut from '../../../assets/room/Group 116.svg';

const CribMap = ({ coordinates, showPopup, data ,latitude,longitude,zoom  }) => {
  
  const customIcon = (item) => {
    if (item && typeof item === 'object' && 'loyer_hc' in item) {
      const price = item.loyer_hc + item.charges;
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
  
 
    
  return (
    <MapContainer
      center={[latitude,longitude]} 
      zoom={zoom}
      style={{ height: '765px', width: '100%' }}

    >
      <TileLayer
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
    {coordinates.map((coordArray, index) => {
    if (Array.isArray(coordArray) && coordArray.length === 3) {
      const [id, latitude, longitude] = coordArray;
      const item = Array.isArray(data) ? data.find((dataItem) => dataItem.id === id) : data;
       
      if (!isNaN(latitude) && !isNaN(longitude) && latitude !== null && longitude !== null) {
        return (
         
          <Marker
            key={id}
            position={[latitude, longitude]}
            icon={customIcon(item)} 
          >
   {showPopup && item ? (
  <Popup>
    <div className='popup_itemcribe'>
      <div className='item-cribe'>
        <div className='Item-badge'>
        {item.rent_status ? (
  <Badge className='notify-badge'>
    {item.availability_date ? `Avail. on ${item.availability_date.split('/')[0]}/${item.availability_date.split('/')[1]}` : 'Available Now'}
  </Badge>
) : (
  <Badge className='notify-badge'>
    Available Now
  </Badge>
)}
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
                    <Link to={`/room/${item.id}`} key={index}>
                      <div>
                        <LazyLoad height={200} offset={100}>
                          <img className="img-fluid" src={image.original_url} alt="Im" />
                        </LazyLoad>
                      </div>
                    </Link>
                  ))}
              </Carousel>
            ) : (
              <Link to={`/room/${item.id}`}>
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

          <div className='Rooms-content'>
          <h3>
            {item.apartment.title}-{item.title}
          </h3>
          <div className='d-flex mb-1'>
            <img src={locationIcon} alt="location icon" />
            <p>{item.apartment.building.address}</p>
          </div>
          {item.promo && item.promo === 1 ? (
            <div >
              <span className='crib_promo'>
                <span className='price_loyer'>{item.tarif_promo} €</span> /month
              </span>
             
    <p className='promo'>1st month rent {item.tarif_promo}€ then {item.loyer_hc + item.charges}€ </p>
           
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
