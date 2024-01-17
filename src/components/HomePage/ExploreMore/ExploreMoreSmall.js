import React, { useEffect, useRef, useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import City from "./City/City";
import { ExploreCitiesTable } from "../../../Data/Data";
import "./ExploreMore.css";
import { BsArrowRight } from 'react-icons/bs';
import { BsArrowLeft } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

const ExploreMoreSmall = ({ lotData }) => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1200 },
      items: 3
    },
    desktop: {
      breakpoint: { max: 1200, min: 992 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 992, min: 576 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 576, min: 0 },
      items: 1
    }
  };
  const handleClick = (e, city) => {
    e.preventDefault()
    const searchParams = new URLSearchParams({ city }).toString();

    const url = `/search-cities?${searchParams}`;
    window.location.href = url;
  };
  const cityData = lotData.data && lotData.data.cities ? lotData.data.cities : [];
  const cities = ExploreCitiesTable.map(city => {
    const cityInfo = cityData.find(cityInfo => cityInfo.city_country.toLowerCase().startsWith(city.city.toLowerCase()));
    const count = cityInfo ? cityInfo.count_lots : null;
    return (
      <City
        src={city.src}
        city={city.city}
        count={count}
        handleClick={(e) => handleClick(e, city.city)}
      />
    );
  });
  const carouselRef = useRef(null);
  const [isPrevActive, setIsPrevActive] = useState(true);
  const [isNextActive, setIsNextActive] = useState(true);
  const onClickPrev = () => {
    if (carouselRef.current) {
      carouselRef.current.previous();
    }
  };
  const onClickNext = () => {
    if (carouselRef.current) {
      carouselRef.current.next();
    }
  };
  const onMouseUp = () => {
    setIsPrevActive(true); // Réactive les deux boutons lorsque vous relâchez le clic
    setIsNextActive(true);
  };

  return (
    <div className='Explore-container container'>
      <h2>Explore our cities</h2>
      <p className='mb-4'>Located in several European cities, we offer premium accommodation for you to feel at home wherever you go</p>
      <div>
        <Carousel
          ref={carouselRef}
          responsive={responsive}
          infinite={true}
          containerClass="carousel-container"
        >
          {cities}
        </Carousel>
        <div className="button-container">
          <div
            onClick={onClickPrev}
            onMouseUp={onMouseUp}
            className={`custom-prev-arrow `}
          >
            <BsArrowLeft className="arrow-icon" />
          </div>
          <div
            onClick={onClickNext}
            onMouseUp={onMouseUp}
            className={`custom-next-arrow`}
          >
            <BsArrowRight className="arrow-icon" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ExploreMoreSmall;
