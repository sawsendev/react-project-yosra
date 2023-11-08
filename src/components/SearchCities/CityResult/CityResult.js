import React from 'react';
import './CityResult.css'
const CityResult = ({city}) => {
const capitalizedCity = city.charAt(0).toUpperCase() + city.slice(1);
const backgroundImage = require(`../../../assets/${city}.png`);

  return (
    <div className='page-container-city'  style={{ backgroundImage: `url(${backgroundImage})` }} >

    <div className='container'>
      <div className='content-container-city'>
        <h1>{capitalizedCity}</h1>
        <p>A place where you learn to become a local. A town of hidden gems</p>
      </div>
    </div>
  </div>

  );
}; 

export default CityResult;