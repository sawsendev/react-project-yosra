import React, { useEffect, useState } from "react";
import './Cribes.css';
import AlertCribes from '../AlertCribes/AlertCribes';
import Crib from '../../Crib/Crib';
import { useLocation, useNavigate } from 'react-router-dom';
import noRooms from "../../../assets/Group 24.svg";
import CribMap from '../MapContainer/CribMap';
import loading1 from '../../../assets/Fichier-1.gif'
import axios from "axios";
const Cribes = () => {
  const [cribsData, setCribsData] = useState([]);
  const [searchResult, setSearchResult] = useState([]);
  const [coordinates, setCoordinates] = useState([]);
  const [dataLoaded, setDataLoaded] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [lastPage, setLastPage] = useState(1);
  const [loading, setLoading] = useState(true)
  const API_KEY = 'a2b18f9cfb72eb93f3ce6b1c30372b59';
  const API_URL2 = 'http://dev.niceroom.sofis-info.com/api/lots/search';
  const API_URL3 = " http://dev.niceroom.sofis-info.com/api/lots/maps"
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const navigate = useNavigate();
  const [mapData , setMapData]=useState({});
  const cityParam = searchParams.get('city');
  const dateParam = searchParams.get('date');
  const priceMinParam = searchParams.get('priceMin');
  const priceMaxParam = searchParams.get('priceMax');
  const sortByParam = searchParams.get('sortBy');
  const searchParamsExist = cityParam || dateParam || priceMinParam || priceMaxParam || sortByParam;

const fetchDataFromAPI = async (page) => {
  try {
    const headers = {
      'apiKey': `${API_KEY}`,
    };
    const response = await fetch(`${API_URL2}?page=${page}`, {
      method: 'POST',
      mode: 'cors',
      headers,
    });

    const data = await response.json();

    setLastPage(data.data.lots.last_page);

    // Transformez data.data.lots.data en tableau si ce n'est pas déjà le cas
    const dataArray = Array.isArray(data.data.lots.data)
      ? data.data.lots.data
      : Object.values(data.data.lots.data);

    if (currentPage === 1) {
      // Si c'est la première page, réinitialisez les données de recherche
      setCribsData(dataArray);
      console.log(dataArray);
    } else {
      // Sinon, ajoutez les nouvelles données de recherche
      setCribsData((prevData) => [...prevData, ...dataArray]);
      console.log(dataArray);
    }

    setDataLoaded(true);
  } catch (error) {
    console.error('Erreur lors de la récupération des données :', error);
  }
};


  const fetchDataFromAPI2 = async (page) => {
    if (searchParamsExist) {
      const formData = {
        city: cityParam,
        date: dateParam,
        price_min: priceMinParam,
        price_max: priceMaxParam,
        sort_by: sortByParam,
      };
  
      try {
        const response = await fetch(`${API_URL2}?page=${page}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'apiKey': API_KEY,
          },
          body: JSON.stringify(formData),
        });
  
        if (response.ok) {
          const data = await response.json();
          setLastPage(data.data.lots.last_page);
  
          // Transformez data.data.lots.data en tableau si ce n'est pas déjà le cas
          const dataArray = Array.isArray(data.data.lots.data)
            ? data.data.lots.data
            : Object.values(data.data.lots.data);
  
          if (currentPage === 1) {
            // Si c'est la première page, réinitialisez les données de recherche
            setSearchResult(dataArray);
            console.log(dataArray);
          } else {
            // Sinon, ajoutez les nouvelles données de recherche
            setSearchResult((prevData) => [...prevData, ...dataArray]);
            console.log(dataArray);
          }
  
          setDataLoaded(true);
        }
      } catch (error) {
        console.error('Erreur lors de la récupération des données :', error);
      }
    }
  };
  
  useEffect(() => {
    const fetchMapData = async () => {
      const formData = {
        city: cityParam,
        date: dateParam,
        price_min: priceMinParam,
        price_max: priceMaxParam,
        sort_by: sortByParam,
      };
  
      try {
        const response = await fetch(`${API_URL3}`, {
          method: "POST",
          headers: {
            'Content-Type': 'application/json',
            'apiKey': API_KEY,
          },
          body: JSON.stringify(formData),
        });
  
        if (response.ok) {
          const data = await response.json();
          setMapData(data.data.lots);
          console.log(data);
  
          const dataArray = Array.isArray(data.data.lots)
            ? data.data.lots
            : Object.values(data.data.lots);
  
          // Mapper dataArray pour obtenir un tableau de tableaux avec id, latitude et longitude
          const coordinatesArray = dataArray.map(item => [
            item.id,
            item.apartment.building.latitude,
            item.apartment.building.longitude
          ]);
  
          console.log('Coordinates Array:', coordinatesArray);
  
          // Mettre à jour l'état des coordonnées
          setCoordinates(coordinatesArray);
        } else {
          console.error('Erreur de réponse HTTP :', response.status);
          throw new Error('La requête a échoué avec un statut différent de 200');
        }
      } catch (error) {
        console.error('Erreur lors de la récupération des données :', error);
      }
    };
  
    fetchMapData();
  }, [cityParam, dateParam, priceMinParam, priceMaxParam, sortByParam]);
  
  console.log(coordinates)

  const handleScroll = () => {
  if (window.innerHeight + window.scrollY < document.documentElement.offsetHeight && currentPage < lastPage) {
    setCurrentPage(currentPage + 1);
  }
};


console.log(cribsData)
  
 console.log(currentPage)
 console.log(lastPage)
  useEffect(() => {
    if (!searchParamsExist) {
      navigate('/search-cities');
      fetchDataFromAPI(currentPage);
    }
    else{
      fetchDataFromAPI2(currentPage);
    }
  }, [currentPage,searchParamsExist]);

  useEffect(() => {
    // Attachez le gestionnaire d'événements de scroll à la fenêtre
    window.addEventListener('scroll', handleScroll);

    // Assurez-vous de retirer l'écouteur lorsque le composant est démonté
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [currentPage, lastPage]);
  

  console.log(searchResult)
  console.log(cityParam) 
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const handleGetCoordinates = async (city) => {
    const url = `https://nominatim.openstreetmap.org/search?format=json&q=${city}`;
  
    try {
      const response = await axios.get(url);
      if (response.status === 200) {
        const data = response.data;
        console.log('API Response:', data); // Log the API response data
        if (data && data.length > 0) {
          setLatitude(parseFloat(data[0].lat));
          setLongitude(parseFloat(data[0].lon));
          console.log('Received coordinates:', data[0].lat, data[0].lon);
        } else {
          console.log('No data found for the city.');
        }
      } else {
        console.log(`Request failed with status code ${response.status}.`);
      }
    } catch (error) {
      console.error('Error fetching data from OpenStreetMap API:', error);
    }
  };
  useEffect(() => {
    handleGetCoordinates(cityParam);
  }, [cityParam]);
  
  useEffect(() => {
    if (currentPage === lastPage)
    {setLoading(false);}
  }, [currentPage,lastPage]);


  return (
    <div className='Cribes-container container-fluid'>
      {searchResult.length > 0 && (
        <h2>
          {searchParamsExist
            ? `Our cribs in ${searchResult[0].apartment.building.city}`
            : 'All our cribs'}
        </h2>
      )}

    
 
     <div  className='content-page'>
  <div className='row row-cribes'>
    <div className='col-lg-7'>
  
    {!dataLoaded && (
    <div className="container">
    <div className='left d-flex '>
        <img src={loading1} alt="Loading" style={{width:"100px", height:"100px",  margin: "0 auto"}}/>
        </div>
        </div>
     ) }
      {dataLoaded ? (
        searchParamsExist && searchResult.length > 0 ? (
          <Crib cribs={searchResult} />
        ) : (
          !searchParamsExist && cribsData.length > 0 ? (
            <Crib cribs={cribsData} />
          ) : (
            <div className='container'>
              <div className='No-rooms-content'>
                <div className='left d-flex '>
                  <img className='ImageNoRooms' src={noRooms} alt='no rooms icon' />
                  <span>No rooms available</span>
                  <button className='button'>Show first availabilities</button>
                </div>
              </div>
            </div>
          )
        )
      ) : null}
      {loading && loading&&(
    <div className="container">
    <div className='left d-flex '>
        <img src={loading1} alt="Loading" style={{width:"100px", height:"100px",  margin: "0 auto"}}/>
        </div>
        </div>
     ) }
    </div>




          <div className='Maps col-lg-5'>
            <div className={`maps-block`}>
            
            {longitude && latitude && (
            <CribMap
  coordinates={coordinates}
  showPopup={true}
  data={searchParamsExist ? searchResult : cribsData}
  longitude={longitude}
  latitude={latitude}


/>)}

            </div>
          </div>
        </div>
      </div>
      <AlertCribes className='alert' />
    </div>
  );
};

export default Cribes;
