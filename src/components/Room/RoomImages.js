import React, { useRef, useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { BsArrowRight, BsArrowLeft } from 'react-icons/bs';
import room from '../../assets/room/room.jpg';

const CarrouselImages = () => {

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

  const imageItems = () => {
    const images = [
      {
        src: room,
        alt: 'room 1',
      },
      {
        src: room,
        alt: 'room 2',
      },
    ];
  
    return images.map((image, index) => (
      <div key={index} className='item-img'>
        <img src={image.src} alt={image.alt} className="img-fluid" />
      </div>
    ));
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
            <Carousel
            ref={carouselRef}
            responsive={responsive}
            infinite={true}
            containerClass="carousel-container"
            >
                {imageItems()}
            </Carousel>
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
        </div>
  );
};

export default CarrouselImages;
