import React, { useEffect, useRef, useState } from 'react';
import City from "./City/City";
import { ExploreCitiesTable } from "../../../Data/Data";
import "./ExploreMore.css";
import { BsArrowRight} from 'react-icons/bs';
import { BsArrowLeft } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

const ExploreMore = () => {
  const API_KEY = 'a2b18f9cfb72eb93f3ce6b1c30372b59';
  const API_URL = 'https://admin.finecribs.com/api/lots/city';
  const navigate= useNavigate();
  const [lotData, setLotData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const headers = {
          'apiKey': `${API_KEY}`,
        };
  
        const response = await fetch(`${API_URL}`, {
          method: 'GET',
          mode: 'cors',
          headers,
        });
  
        const responseData = await response.json();
       
        if (responseData) {
          setLotData(responseData);
        } else {
          console.error('Données inattendues de l\'API :', responseData);
          setLotData([]); // En cas d'erreur, affectez un tableau vide
        }
      } catch (error) {
        console.error('Erreur lors de la récupération des données :', error);
        setLotData([]); // En cas d'erreur, affectez un tableau vide
      }
    };
  
    fetchData();
  }, []);

  console.log(lotData);

  const handleClick = (e, city) => {
    e.preventDefault();
    const searchParams = new URLSearchParams({ city }).toString();
    console.log(city);
    const url = `/search-cities?${searchParams}`;
    window.location.href=url;
  };

  const cityData = lotData.data && lotData.data.cities ? lotData.data.cities : [];

  const cities = ExploreCitiesTable.map(city => {
    const cityInfo = cityData.find(cityInfo => cityInfo.city_country.toLowerCase().startsWith(city.city.toLowerCase()));
    const count = cityInfo ? cityInfo.count_lots : 0;
  
    return (
      <City
        key={city.city} // Add a unique key for each city
        src={city.src}
        city={city.city}
        count={count}
        handleClick={(e) => handleClick(e, city.city)}
      />
    );
  });

  return (
    <div className='Explore-container container'>
      <h2>Explore our cities</h2>
      <p className='mb-4'>Located in several European cities, we offer premium accommodation for you to feel at home wherever you go</p>
   
        <div className="city-list d-flex justify-content-center flex-nowrap">
          {cities}
        </div>
  
    </div>
  )
}

export default ExploreMore;
