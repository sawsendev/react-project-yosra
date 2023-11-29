import React, { useState } from 'react';
import LazyLoad from 'react-lazyload';
import { Badge } from 'react-bootstrap';
import locationIcon from '../../assets/pin 2.svg';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import promoImage from '../../assets/Group 104.svg';
import imageParDefaut from '../../assets/room/Group 116.svg';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';

import './Crib.css';

const Crib = ({ cribs }) => {
  if (!cribs || cribs.length === 0) {
    return null;
  }

  const customArrowStyles = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  };

  return (
    <div>
      <ul className='row Rooms-cribes'>
        {cribs.map((crib, index) => (
          <CribItem key={index} crib={crib} />
        ))}
      </ul>
    </div>
  );
};

const CribItem = ({ crib }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const totalImages = crib.media
    ? crib.media
        .filter((media) => media.mime_type.startsWith('image') && media.collection_name !== 'floorpan')
        .slice(0, 6).length
    : 0;

  const goToPrevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? totalImages - 1 : prevIndex - 1));
  };

  const goToNextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex === totalImages - 1 ? 0 : prevIndex + 1));
  };

  const [showArrows, setShowArrows] = useState(false);

  const handleMouseEnter = (show) => {
    setShowArrows(show);
  };
  const dateAujourdhui = new Date();
const dateDemain = new Date(dateAujourdhui);
dateDemain.setDate(dateAujourdhui.getDate() + 1);

const formattedDateAujourdhui = `${(dateAujourdhui.getDate() < 10 ? '0' : '')}${dateAujourdhui.getDate()}/${(dateAujourdhui.getMonth() < 9 ? '0' : '')}${dateAujourdhui.getMonth() + 1}/${dateAujourdhui.getFullYear()}`;

const formattedDateDemain = `${(dateDemain.getDate() < 10 ? '0' : '')}${dateDemain.getDate()}/${(dateDemain.getMonth() < 9 ? '0' : '')}${dateDemain.getMonth() + 1}/${dateDemain.getFullYear()}`;
const formatDate = (dateString) => {
  const date = new Date(dateString);
  const day = date.getDate();
  const month = date.getMonth() + 1; // Les mois commencent à 0
  return `${day < 10 ? `0${day}` : day}/${month < 10 ? `0${month}` : month}`;
};

   
  return (
    <li className='col-lg-4 col-md-6 col-12'>
      <div className='item-cribe'>
        <div className='Item-badge'>
        <Badge className='notify-badge'>
        {
  (crib.availability_date === formattedDateAujourdhui || crib.availability_date === formattedDateDemain)
    ? 'Available Now'
    : `Avail. on ${formatDate(crib.availability_date)}`
}
  </Badge>

          {crib.promo && crib.promo === 1 && (
            <img src={promoImage} alt='Promo' className='promo-image' />
          )}

          <div className="custom-carousel-container">
            <Carousel
              showStatus={false}
              showArrows={false}
              showThumbs={false}
              dynamicHeight={false}
              useKeyboardArrows={false}
              selectedItem={activeIndex}
            >
              {crib.media && crib.media.length > 0 ? (
                crib.media
                  .filter((media) => media.mime_type.startsWith('image') && media.collection_name !== 'floorpan')
                  .slice(0, 6)
                  .map((image, index) => (
                    <div
                      className='room'
                      onClick={() => (window.location.href = `/room/${crib.id}`)}
                    >
                      <LazyLoad height={200} offset={100}>
                        <img
                          className="img-fluid"
                          src={image.original_url}
                          alt={`Room ${index}`}
                        />
                      </LazyLoad>
                    </div>
                  ))
              ) : (
                <div
                  className='room'
                  onClick={() => (window.location.href = `/room/${crib.id}`)}
                >
                  <LazyLoad height={200} offset={100}>
                    <img className="img-fluid" src={imageParDefaut} alt="Im" />
                  </LazyLoad>
                </div>
              )}
            </Carousel>
            <div
  className={`custom-prev-arrowc ${showArrows ? '' : 'hidden-arrow'}`} // Commencez par masquer les flèches
  onMouseEnter={() => handleMouseEnter(true)} // Affichez les flèches au survol
  onMouseLeave={() => handleMouseEnter(false)} // Masquez les flèches lorsque le survol se termine
  onClick={goToPrevSlide}
  style={{
    position: 'absolute',
    top: '50%',
    left: 0,
    transform: 'translateY(-50%)',
  }}
>
  <BsArrowLeft />
</div>

<div
 className={`custom-next-arrowc ${showArrows ? '' : 'hidden-arrow'}`} // Commencez par masquer les flèches
  onMouseEnter={() => handleMouseEnter(true)} // Affichez les flèches au survol
  onMouseLeave={() => handleMouseEnter(false)} // Masquez les flèches lorsque le survol se termine
  onClick={goToNextSlide}
  style={{
    position: 'absolute',
    top: '50%',
    right: 0,
    transform: 'translateY(-50%)',
  }}
>
  <BsArrowRight />
</div>

          </div>
        </div>
        <div className='Rooms-content'>
          <h3>
            {crib.apartment.title}-{crib.title}
          </h3>
          <div className='d-flex mb-1'>
            <img src={locationIcon} alt="location icon" />
            <p>{crib.apartment.building.address}</p>
          </div>
          {crib.promo && crib.promo === 1 ? (
            <div >
              <span className='crib_promo'>
                <span className='price_loyer'>{crib.tarif_promo} €</span> /month
              </span>
             
    <p className='promo'>1st month rent {crib.tarif_promo}€ then {crib.loyer_hc + crib.charges}€ </p>
           
            </div>
          ) : (
            <span> 
              <span className='price_loyer'>
                {crib.loyer_hc + crib.charges} €
              </span>{' '}
              /month
            </span>
          )}
        </div>
      </div>
    </li>
  );
};

export default Crib;
