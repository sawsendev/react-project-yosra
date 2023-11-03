import React from 'react'
import LazyLoad from 'react-lazyload';
import { Badge } from 'react-bootstrap';
import  locationIcon  from '../../assets/pin 2.svg';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import promoImage from '../../assets/Group 104.svg';
import imageParDefaut from '../../assets/room/Group 116.svg'
import { useRef } from 'react';
import { useState } from 'react';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import './Crib.css';
const Crib = ({ cribs }) => {
  const [isPrevActive, setIsPrevActive] = useState(true);
  const [isNextActive, setIsNextActive] = useState(true);
  const carouselRef = useRef(null);

  const onClickPrev = () => {
    if (carouselRef.current) {
      setIsNextActive(true); // Réactive la flèche "next"
      carouselRef.current.previous();
      if (carouselRef.current.state.currentSlide === 3) {
        setIsPrevActive(false); // Désactive la flèche "précédent"
      }
    }
  };
  

  const onClickNext = () => {
    if (carouselRef.current) {
      carouselRef.current.next();
      const filteredImages = cribs.media.filter((image) =>
        image.mime_type.startsWith('image') && image.collection_name !== 'floorpan'
      );
      if (carouselRef.current.state.currentSlide === filteredImages.length ) {
        setIsNextActive(false);
      }
      setIsPrevActive(true);
    }
  };

  const onMouseUp = () => {
    setIsPrevActive(true);
    setIsNextActive(true);
  };

  if (!cribs || cribs.length === 0) {
    return null;
  }

  return (
    <div>
      <ul className='row Rooms-cribes'>
        {cribs.map((crib, index) => (
          <li className='col-lg-4 col-md-6 col-12' key={index}>
            <div className='item-cribe'>
              <div className='Item-badge'>
                { crib.rent_status === false && (<Badge className='notify-badge'>Available now</Badge>)}
                {crib.promo && crib.promo === 1 && (
                  <img src={promoImage} alt='Promo' className='promo-image' />
                )}

                <div className="custom-carousel-container">
                <Carousel showStatus={false} showArrows={false} showThumbs={false} dynamicHeight={false} useKeyboardArrows={false}>
                {
  crib &&
  crib.media &&
  crib.media.some((media) => media.mime_type.startsWith('image')) ? (
    // Filtrer les images qui satisfont les conditions
    crib.media
      .filter(
        (media) =>
          media.mime_type.startsWith('image') &&
          media.collection_name !== 'floorpan'
      )
      .slice(0, 6) // Obtenir au maximum 4 images
      .map((image, index) => (
        <Link to={`/room/${crib.id}`} key={index}>
          <div>
            <LazyLoad height={200} offset={100}>
              <img
                className="img-fluid"
                src={image.original_url}
                alt={`Room ${index}`}
              />
            </LazyLoad>
          </div>
        </Link>
      ))
  ) : (
    // Si aucune image ne satisfait les conditions, afficher une image par défaut
    <Link to={`/room/${crib.id}`}>
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
  )
}


</Carousel>
 {cribs.media && cribs.media.length > 1 && (
<div className="button-container">
          <div
            onClick={onClickPrev}
            onMouseUp={onMouseUp}
            className={`custom-prev-arrow ${isPrevActive ? '' : 'disabled'}`}
          >
            <BsArrowLeft className="arrow-icon" />
          </div>
          <div
            onClick={onClickNext}
            onMouseUp={onMouseUp}
            className="custom-next-arrow"
          >
            <BsArrowRight className="arrow-icon" />
          </div>
        </div>)}
                </div>
              </div>
              <div className='Rooms-content'>
                <h3>{crib.apartment.title}-{crib.title}</h3>
                <div className='d-flex mb-1'>
                  <img src={locationIcon} alt="location icon"/>
                  <p>{crib.apartment.building.address}</p>
                </div>
                {crib.promo && crib.promo === 1 ? (
                  <span className='crib_promo'><span className='price_loyer'>{crib.tarif_promo} €</span> /month</span>
                ) : (
                  <span><span className='price_loyer'>{crib.loyer_hc+crib.charges} €</span> /month</span>
                )}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Crib;