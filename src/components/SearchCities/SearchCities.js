import React from 'react';
import Search from './Search/Search';
import Cribes from './Cribes/Cribes';
import CityResult from './CityResult/CityResult';
import { useLocation } from 'react-router-dom';

const SearchCities = () => {
  // Obtenir l'URL actuelle
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  console.log(searchParams)
  // Utiliser l'objet URLSearchParams pour extraire les paramètres de l'URL

   console.log(searchParams.get('city'))
  // Obtenir la valeur du paramètre "city"
  const cityParam = searchParams.get('city');
  console.log(cityParam)
  
  if (cityParam) {
    const city = cityParam.toLowerCase()
    return (
      <div>
        <CityResult city={city} />
        <Search />
        <Cribes />
      </div>
    );
  } else {
    
    return (
      <div>
        <Search />
        <Cribes />
      </div>
    );
  }
};

export default SearchCities;
