import React, { useEffect, useState } from 'react';
import './Cribes.css';
import AlertCribes from '../AlertCribes/AlertCribes';
import Crib from '../../Crib/Crib';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useLocation, useNavigate } from 'react-router-dom';
import noRooms from "../../../assets/Group 24.svg";
import CribMap from '../MapContainer/CribMap';

const Cribes = () => {
  const [cribsData, setCribsData] = useState([]);
  const [searchResult, setSearchResult] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [staticCoordinates, setStaticCoordinates] = useState([]);
  const [itemsToDisplay, setItemsToDisplay] = useState(9);
  const [dataLoaded,setDataLoaded]=useState(false)
 
  const API_KEY = 'a2b18f9cfb72eb93f3ce6b1c30372b59';
  const API_URL = 'http://dev.niceroom.sofis-info.com/api/lots/list';
  const API_URL2 = 'http://dev.niceroom.sofis-info.com/api/lots/search';

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const navigate = useNavigate();

  const cityParam = searchParams.get('city');
  const dateParam = searchParams.get('date');
  const priceMinParam = searchParams.get('priceMin');
  const priceMaxParam = searchParams.get('priceMax');
  const sortByParam = searchParams.get('sortBy');
  const searchParamsExist = cityParam || dateParam || priceMinParam || priceMaxParam || sortByParam;
  const itemsPerPage = 9;


  const fetchDataFromAPI = async () => {
    try {
      const headers = {
        'apiKey': `${API_KEY}`,
      };

      const response = await fetch(`${API_URL}`, {
        method: 'GET',
        mode: 'cors',
        headers
      });

      const data = await response.json();
      console.log(data);

      if (data && data.data && data.data.lots) {
        if (data.data.lots.length > 0) {
          setCribsData(data.data.lots);
       
        }
        
        const extractedCoordinates = data.data.lots.map(crib => {
          const latitude = crib.apartment.building.latitude;
          const longitude = crib.apartment.building.longitude;
          return [latitude, longitude];
        });
      

        setStaticCoordinates(extractedCoordinates);
      }
    } catch (error) {
      console.error('Erreur lors de la récupération des données :', error);
    }
  };

  useEffect(() => {
    const fetchDataFromAPI2 = async () => {
      if (searchParamsExist) {
        const formData = {
          city: cityParam,
          date: dateParam,
          price_min: priceMinParam,
          price_max: priceMaxParam,
          sort_by: sortByParam,
        };
  
        try {
          const response = await fetch(`${API_URL2}`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'apiKey': API_KEY,
            },
            body: JSON.stringify(formData),
          });
  
          if (response.ok) {
            const data = await response.json();
  
            // Mettre à jour searchResult
            setSearchResult(data.data.lots);
            setDataLoaded(true);
            console.log(dataLoaded);
  
            const extractedCoordinates = data.data.lots.map(crib => {
              const latitude = crib.apartment.building.latitude;
              const longitude = crib.apartment.building.longitude;
              return [latitude, longitude];
            });
  
            // Mettre à jour staticCoordinates
            setStaticCoordinates(extractedCoordinates);
          } else {
            console.error('Erreur lors de la requête POST');
          }
        } catch (error) {
          console.error('Erreur lors de la récupération des données :', error);
        }
      }
    };
  
    // Appeler fetchDataFromAPI2 lorsque searchParamsExist est vrai
    if (searchParamsExist) {
      fetchDataFromAPI2();
    }
  }, [searchParamsExist, cityParam, dateParam, priceMinParam, priceMaxParam, sortByParam]);
  
  useEffect(() => {
    if (!searchParamsExist) {
      navigate('/search-cities');
    
        fetchDataFromAPI();
        console.log(cribsData);
      
    }
  }, [searchParamsExist]);
  
  
   console.log(searchResult)

  





  console.log(staticCoordinates);
  const validStaticCoordinates = staticCoordinates.filter(coord => coord !== null && Array.isArray(coord) && coord.length === 2);

  const dataDisplayedCount = currentPage * itemsPerPage;


  console.log(dataDisplayedCount);

  return (
    <div className='Cribes-container container-fluid'>
    {searchResult.length > 0 && (
  <h2>
    {searchParamsExist
      ? `Our cribs in ${searchResult[0].apartment.building.city}`
      : 'All our cribs'}
  </h2>
)}

  
{!dataLoaded && (
  <div>
  <iframe src="https://giphy.com/embed/uIJBFZoOaifHf52MER" width="480" height="439"  class="giphy-embed" allowFullScreen></iframe>
  <p>
  <a href="https://giphy.com/gifs/UniversalMusicIndia-elvish-dg-immortals-bawli-uIJBFZoOaifHf52MER">via GIPHY</a></p>
  </div>
  )}

      <div className='content-page'>
        <div className='row row-cribes'>
          <div className='col-lg-7'>
          <InfiniteScroll
  dataLength={itemsToDisplay}
  next={() => setItemsToDisplay(prevItems => prevItems + itemsPerPage)}
  hasMore={itemsToDisplay < (searchParamsExist ? searchResult.length : cribsData.length)}
  loader={null}
  style={{ overflowX: 'hidden' }}
>
  {searchParamsExist && searchResult.length > 0 ? (
    <Crib cribs={searchResult.slice(0, itemsToDisplay)} />
  ) : (
    searchResult.length === 0 && dataLoaded && (
      <div className='container'>
        <div className='No-rooms-content'>
          <div className='left d-flex '>
            <img className='ImageNoRooms' src={noRooms} alt='no rooms icon' />
            <span>No rooms available</span>
            <button className='button'>Show first availabilities</button>
          </div>
        </div>
      </div>
    ))
  }
</InfiniteScroll>






          </div>

         
            <div className='Maps col-lg-5'>
              <div className={`maps-block`}>
              <CribMap
  coordinates={validStaticCoordinates}
  showPopup={true}
  data={searchParamsExist ? searchResult : cribsData}
  price={searchParamsExist ? (searchResult[0] ? searchResult[0].loyer_hc : null) : (cribsData[0] ? cribsData[0].loyer_hc : null)}
/>

              </div>
            </div>
         
        </div>
      </div>
      <AlertCribes className='alert' />
    </div>
  );
};

export default Cribes;
