import React, { useRef } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import City from "./City/City"
import {ExploreCitiesTable} from "../../../Data/Data"
import "./ExploreMore.css"
import { BsArrowRightCircle } from 'react-icons/bs'
import { BsArrowLeftCircle}  from'react-icons/bs'


const ExploreMore = () => {

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1200 },
      items: 4
    },
    desktop: {
      breakpoint: { max: 1200, min: 992 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 992, min: 808 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 808, min: 0 },
      items: 1
    }
  };

  const city = ExploreCitiesTable.map(city=><City src={city.src} city={city.city} count={city.count}/>)
  const carouselRef = useRef(null);

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
  return (
    <div className='container'>
      <h2>Explore our cities</h2>
      <p>Located in several European cities, we offer premium accommodation for you to feel at home wherever you go</p>
      <div>
      <Carousel
        ref={carouselRef}
        responsive={responsive}
        infinite={true}
        containerClass="carousel-container"
        swipeable={false}
        showDots={false}
      >
        {city}
      </Carousel>
      <div className="button-container">
        <div onClick={onClickPrev} className="custom-prev-arrow">
          <BsArrowLeftCircle className="arrow-icon" />
        </div>
        <div onClick={onClickNext} className="custom-next-arrow">
          <BsArrowRightCircle className="arrow-icon"  />
        </div>
      </div>
    </div>
    </div>
)
}

export default ExploreMore
