import React, { useRef, useState, useEffect } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { BsArrowRight, BsArrowLeft } from 'react-icons/bs';
import { useParams } from 'react-router-dom';
// import default_img from '../../assets/room/default_image.jpg';
import default_img from '../../assets/noimage-197x197.svg';


const CarrouselImages = () => {
  const { id } = useParams();
  const [lotData, setLotData] = useState({});
  const API_KEY = 'a2b18f9cfb72eb93f3ce6b1c30372b59';
  const API_URL = `http://dev.niceroom.sofis-info.com/api/lot/${id}`;

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

  }, [API_URL, API_KEY])

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
      setIsPrevActive(true);
      setIsNextActive(false);
      carouselRef.current.previous();
    }
  };

  const onClickNext = () => {
    if (carouselRef.current) {
      setIsPrevActive(false);
      setIsNextActive(true);
      carouselRef.current.next();
    }
  };

  const onMouseUp = () => {
    setIsPrevActive(true);
    setIsNextActive(true);
  };

  return (
  <div className='img-items'>
  {lotData.media && lotData.media.length > 0 ? (
    <Carousel
      ref={carouselRef}
      responsive={responsive}
      infinite={true}
      containerClass="carousel-container"
    >
      {lotData.media.map((image, index) => (
        <div key={index} className='item-img'>
          <img src={image.original_url} alt={image.name} className="img-fluid" />
        </div>
      ))}
    </Carousel>
  ) : (
    <div className='default-img'>
      <img src={default_img} alt="default image" className="img-fluid" />
    </div>
  )}

  {lotData.media && lotData.media.length > 1 && (
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
