import React, { useEffect, useRef, useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import City from "./City/City";
import { ExploreCitiesTable } from "../../../Data/Data";
import "./ExploreMore.css";
import { BsArrowRight} from 'react-icons/bs';
import { BsArrowLeft } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

const ExploreMore = () => {
  const API_KEY = 'a2b18f9cfb72eb93f3ce6b1c30372b59';
  const API_URL = 'http://dev.niceroom.sofis-info.com/api/lots/list';
  const navigate= useNavigate();
  const [lotData, setLotData] = useState([]);
 
  useEffect(() => {
    const headers = {
      'apiKey': `${API_KEY}`,
    };

    fetch(API_URL, { method: 'GET', mode: 'cors', headers })
      .then(response => response.json())
      .then(data => {
        setLotData(data.data.lots);
        console.log(data.data.lots);
      })
      .catch(error => {
        console.error('Erreur lors de la récupération des données :', error);
      });
  }, [API_URL, API_KEY]);
 
  
  
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
      breakpoint: { max: 992, min: 576 },
      items: 2.5
    },
    mobile: {
      breakpoint: { max: 576, min: 0 },
      items: 1.8
    }
  };
 
  
  const handleClick = (city) => {
    const searchParams = new URLSearchParams({ city }).toString();
    const url = `/search-cities?${searchParams}`;
    navigate(url);
  };
  
  const city = ExploreCitiesTable.map(city => {
    
      // Trouvez le nombre de chambres correspondant à la ville actuelle
      const filteredRooms = lotData.filter(room => {
        if (room.apartment && room.apartment.building && room.apartment.building.city) {
          return room.apartment.building.city.toLowerCase() === city.city.toLowerCase();
        
        }
       
        return false; // Retourner false si les données ne sont pas disponibles
      });
      console.log(filteredRooms)
        console.log(city.src)
        console.log(city.city)
      return <City src={city.src} city={city.city} count={filteredRooms.length} handleClick={() => handleClick(city.city)}/>;
    });
    
   


  const carouselRef = useRef(null);

  const [isPrevActive, setIsPrevActive] = useState(true); // Initialement actif
  const [isNextActive, setIsNextActive] = useState(true); // Initialement actif

  const onClickPrev = () => {
    if (carouselRef.current) {
      setIsPrevActive(true); // active le bouton "Prev" lorsqu'il est cliqué
      setIsNextActive(false); // désactive le bouton "Next"
      carouselRef.current.previous();
    }
  };

  const onClickNext = () => {
    if (carouselRef.current) {
      setIsPrevActive(false); // désactive le bouton "Prev"
      setIsNextActive(true); // active le bouton "Next" lorsqu'il est cliqué
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
          {city}
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
            <BsArrowRight className="arrow-icon"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ExploreMore;
