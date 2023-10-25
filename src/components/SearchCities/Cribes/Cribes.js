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
  const [hasMore, setHasMore] = useState(true); // Initialisez hasMore à true pour permettre le chargement initial.
  const [staticCoordinates, setStaticCoordinates] = useState([]);

  const API_KEY = 'a2b18f9cfb72eb93f3ce6b1c30372b59';
  const API_URL = 'http://dev.niceroom.sofis-info.com/api/lots/list';

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

  const fetchDataFromAPI = async (page) => {
    try {
      const headers = {
        'apiKey': `${API_KEY}`,
      };

      const response = await fetch(`${API_URL}?page=${page}&limit=${itemsPerPage}`, {
        method: 'GET',
        mode: 'cors',
        headers
      });

      const data = await response.json();
      console.log(data);

      if (data && data.data && data.data.lots) {
        if (data.data.lots.length > 0) {
          // Si de nouvelles données sont disponibles, mettez à jour la liste cribsData
          setCribsData(prevCribs => [...prevCribs, ...data.data.lots]);
        } 

        // Extraction des coordonnées et mise à jour de staticCoordinates
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
    if (!searchParamsExist) {
      navigate('/search-cities');
      fetchDataFromAPI(currentPage);
    }
  }, [cribsData]);

  useEffect(() => {
    if (searchParamsExist) {
      const formData = {
        city: cityParam,
        date: dateParam,
        price_min: priceMinParam,
        price_max: priceMaxParam,
        sort_by: sortByParam,
      };

      fetch('http://dev.niceroom.sofis-info.com/api/lots/search', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'apiKey': API_KEY,
        },
        body: JSON.stringify(formData),
      })
        .then((response) => response.json())
        .then((data) => {
          setSearchResult(data.data.lots);

          // Extraction des coordonnées et mise à jour de staticCoordinates
          const extractedCoordinates = data.data.lots.map(crib => {
            const latitude = crib.apartment.building.latitude;
            const longitude = crib.apartment.building.longitude;
            return [latitude, longitude];
          });

          setStaticCoordinates(extractedCoordinates);
        })
        .catch((error) => {
          console.error('Erreur lors de la requête POST :', error);
        });
    }
  }, [searchParamsExist, cityParam, dateParam, priceMinParam, priceMaxParam, sortByParam]);



  console.log(staticCoordinates);
  const validStaticCoordinates = staticCoordinates.filter(coord => coord !== null && Array.isArray(coord) && coord.length === 2);
  const totalDataCount = searchParamsExist ? searchResult.length : cribsData.length;
  const dataDisplayedCount = currentPage * itemsPerPage;
  console.log(totalDataCount)
  
  return (
    <div className='Cribes-container container-fluid'>
      <h2>Our cribs in Nice </h2>
      <h5>Nice</h5>
      <div className='content-page'>
        <div className='row row-cribes'>
          <div className='col-lg-7'>
            <InfiniteScroll
              dataLength={searchParamsExist ? searchResult.length : cribsData.length}
              next={() => setCurrentPage(currentPage + 1)}
              hasMore={()=> setHasMore(dataDisplayedCount < totalDataCount)}
              loader={<h4>loading....</h4>}
              style={{ overflowX: 'hidden' }}
            >
              {searchParamsExist && searchResult.length > 0 ? (
                <Crib cribs={searchResult.slice(0, currentPage * itemsPerPage)} />
              ) : (
                searchParamsExist && searchResult.length === 0 ? (
                  <div className='container'>
                    <div className='No-rooms-content'>
                      <div className='left d-flex '>
                        <img className='ImageNoRooms' src={noRooms} alt='no rooms icon' />
                        <span>No rooms available</span>
                        <button className='button'>Show first availabilities</button>
                      </div>
                    </div>
                  </div>
                ) : (
                  <Crib cribs={cribsData.slice(0, currentPage * itemsPerPage)} />
                )
              )}
            </InfiniteScroll>
          </div>

          {!(searchParamsExist && searchResult.length === 0) ? (
            <div className='Maps col-lg-5'>
              <div className={`maps-block`}>
                <CribMap coordinates={validStaticCoordinates} showPopup={true}/> {/* Render the CribMap component here */}
              </div>
            </div>
          ) : null}
        </div>
      </div>
      <AlertCribes className='alert' />
    </div>
  );
};

export default Cribes;
