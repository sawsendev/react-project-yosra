import React from 'react';
import './CityResult.css'
const CityResult = ({city}) => {
const capitalizedCity = city.charAt(0).toUpperCase() + city.slice(1);
const backgroundImage = require(`../../../assets/${city}.png`);

const cityTexts = {
  nice: "Sunny boulevards, international allure, and Riviera charm",
  bologna: "A town of hidden gems",
  florence: "Lose yourself as you wander through the city's narrow lanes",
};
const cityDescription = cityTexts[city.toLowerCase()] || "";

  return (
    <div className='page-container-city'  style={{ backgroundImage: `url(${backgroundImage})` }} >

    <div className='container'>
      <div className='content-container-city'>
        <h1>{capitalizedCity}</h1>
        <p>{cityDescription}</p>
      </div>
    </div>
  </div>

  );
}; 

export default CityResult;