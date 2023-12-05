import React, { useEffect, useRef, useState } from 'react';
import City from "./City/City";
import { ExploreCitiesTable } from "../../../Data/Data";
import "./ExploreMore.css";

import { useNavigate } from 'react-router-dom';

const ExploreMoreLarge = () => {
  const API_KEY = 'a2b18f9cfb72eb93f3ce6b1c30372b59';
  const API_URL = 'https://admin.finecribs.com/api/lots/city';
  const navigate= useNavigate();
  const [lotData, setLotData] = useState([]);

  useEffect(() => {
    let isMounted = true;
  
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
  
        if (!isMounted) return;
  
        const responseData = await response.json();
  
        if (responseData) {
          setLotData(responseData);
        } else {
          console.error('Données inattendues de l\'API :', responseData);
          setLotData([]);
        }
      } catch (error) {
        console.error('Erreur lors de la récupération des données :', error);
        if (isMounted) {
          setLotData([]);
        }
      }
    };
  
    fetchData();
  
    return () => {
      isMounted = false;
    };
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
    const countInfo = cityData.find(cityInfo => cityInfo.city_country.toLowerCase().includes(city.city.toLowerCase()));
    const count = countInfo ? countInfo.count_lots : null;
  
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

export default ExploreMoreLarge;
