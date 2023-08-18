import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import City from "./City/City"
import {ExploreCitiesTable} from "../../../Data/Data"
import "./ExploreMore.css"



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
      breakpoint: { max: 992, min: 768 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 1
    }
  };

  const city = ExploreCitiesTable.map(city=><City src={city.src} city={city.city} count={city.count}/>)
  return (
    <>
        <div className='container'>
        <h2>Explore our cities</h2>
        <p>Located in several European cities, we offer premium accommodation for you to feel at home wherever you go</p>
        <Carousel 
         responsive={responsive}
         infinite={true}
         containerClass="carousel-container"
         swipeable={false}>
         {city}
       </Carousel>
        </div>
    </>
  )
}

export default ExploreMore
