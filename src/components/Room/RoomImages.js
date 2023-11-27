import React, { useRef, useState, useEffect } from 'react';
import LazyLoad from 'react-lazyload';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { BsArrowRight, BsArrowLeft } from 'react-icons/bs';
import { useParams } from 'react-router-dom';
import default_img from '../../assets/noimage-197x197.svg';
import promoImage from '../../assets/Group 104.svg';

const CarrouselImages = () => {
  const { id } = useParams();
  const [lotData, setLotData] = useState({});
  const API_KEY = 'a2b18f9cfb72eb93f3ce6b1c30372b59';
  const API_URL = `https://admin.finecribs.com/api/lot/${id}`;

  useEffect(() => {
    const headers = {
      'apiKey': `${API_KEY}`,
    };

    fetch(API_URL, { method: 'GET', mode: 'cors', headers })
      .then(response => response.json())
      .then(data => {
        setLotData(data.data.lot);
        console.log(data.data.lot);
      })
      .catch(error => {
        console.error('Erreur lors de la récupération des données :', error);
      });

  }, [API_URL, API_KEY]);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1200 },
      items: 1
    },
    desktop: {
      breakpoint: { max: 1200, min: 992 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 992, min: 576 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 576, min: 0 },
      items: 1
    }
  };

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
      const filteredImages = lotData.media.filter((image) =>
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

  return (
    <div className='img-items'>
        {lotData && lotData.promo && lotData.promo === 1 && (
            <div className="promo-badge">
              <img src={promoImage} alt='Promo' className='promo-image' />
            </div>
          )}
      {lotData && lotData.media && lotData.media.length > 0 ? (
        <Carousel
          ref={carouselRef}
          responsive={responsive}
          infinite={true}
          containerClass="carousel-container"
        >
          {lotData.media.map((image, index) => (
            (image.mime_type.startsWith('image') && image.collection_name !== 'floorpan') && (
              <div key={index} className='item-img'>
                <LazyLoad height={500} offset={900}>
                  <img src={image.original_url} alt={image.name} className="img-fluid img" />
                </LazyLoad>
              </div>
            )
          ))}
        </Carousel>
      ) : (
        <div className='default-img'>
          <img src={default_img} alt="default" className="img-fluid" />
        </div>
      )}

      {lotData && lotData.media && lotData.media.length > 1 && (
        <div className="button-container" >
        
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
            className={`custom-next-arrow ${isNextActive ? '' : 'disabled'}`}
          >
            <BsArrowRight className="arrow-icon" />
          </div>
        </div>
      )}
    </div>
  );
};

export default CarrouselImages;
