import React, { useEffect, useState } from 'react';

const SelectCity = ({ onChange, city ,text ,alert , id,name }) => {
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState(''); // Initialisez selectedCity avec la valeur de city

  const API_KEY = 'a2b18f9cfb72eb93f3ce6b1c30372b59';
  const API_URL = 'https://admin.finecribs.com/api/building/cities';

  
  useEffect(() => {
    if (name !== 'cityalert'){
    // Vous pouvez accéder à la valeur de l'URL ici et l'initialiser dans selectedCity
    const searchParams = new URLSearchParams(window.location.search);
    const cityParam = searchParams.get('city');
    if (cityParam) {
      setSelectedCity(cityParam);
    }}
    if(alert){
  fetchDataFromAPI();}
  
  }, [alert]); 
  
  useEffect(() => {
    setSelectedCity(city);
  }, [city]);

  const fetchDataFromAPI = async () => {
    try {
      const response = await fetch(API_URL, {
        method: 'GET',
        headers: {
          apiKey: API_KEY,
        },
      });

      if (!response.ok) {
        throw new Error('Erreur lors de la requête API');
      }

      const data = await response.json();
      if (data && data.data.cities) {
        const citiesArray = data.data.cities;
        setCities(citiesArray);
      } else {
        console.error('Les données de la ville sont manquantes dans la réponse API.');
      }
    } catch (error) {
      console.error('Erreur lors de la récupération des données :', error);
    }
  };

  const handleCityChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedCity(selectedValue);
    onChange({ label: selectedValue, value: selectedValue });

  };

  return (
    <select id={id} name="countries" className='Select-country-container w-100' onChange={handleCityChange} value={selectedCity}>
      <option value="">{text}</option>
      {cities && cities.map((city, index) => (
        <option key={index} value={city}>
          {city}
        </option>
      ))}
    </select>
  );
};

export default SelectCity;
