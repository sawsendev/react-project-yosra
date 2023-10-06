import React, { useEffect, useState } from 'react';
import './Cribes.css';
import AlertCribes from '../AlertCribes/AlertCribes';
import Crib from '../../Crib/Crib';
import InfiniteScroll from 'react-infinite-scroll-component';
import MapWithMarker from '../../MapWithMarker/MapWithMarker';
import { useLocation } from 'react-router-dom';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

const Cribes = () => {
  const customIcon = new L.divIcon({
    className: 'custom-icon',
    html: '<div class="marker-label">400$</div>',
  });
  const [cribsData, setCribsData] = useState([]);
  const [searchResult, setSearchResult] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const [hasMore, setHasMore] = useState(true);
  const staticCoordinates = [
    [43.70328975790311, 7.1704107912588055],
    [43.705, 7.175],
    [43.706, 7.178],
    [43.701, 7, 300],
    [43.704, 7.166],
  ];


  const API_KEY = 'a2b18f9cfb72eb93f3ce6b1c30372b59';
  const API_URL = 'http://dev.niceroom.sofis-info.com/api/lots/list';

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  const cityParam = searchParams.get('city');
  const dateParam = searchParams.get('date');
  const priceMinParam = searchParams.get('price_min');
  const priceMaxParam = searchParams.get('price_max');
  const sortByParam = searchParams.get('sort_by');
  const searchParamsExist = cityParam || dateParam || priceMinParam || priceMaxParam || sortByParam;

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
      console.log(data)
  
      if (data && data.data && data.data.lots) {
        // Utilisez currentPage pour déterminer la position de départ des éléments à afficher
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        const newCribs = data.data.lots.slice(startIndex, endIndex);
  
        // Vérifiez si les nouveaux cribs ne sont pas déjà présents dans cribsData
        const filteredNewCribs = newCribs.filter((newCrib) => {
          return !cribsData.some((existingCrib) => existingCrib.id === newCrib.id);
        });
  
        if (filteredNewCribs.length === 0) {
          setHasMore(false); // Plus de cribs à charger
        } else {
          // Affichez cribsData
          setCribsData((prevData) => [...prevData, ...filteredNewCribs]);
          setCurrentPage(page + 1);
        }
      }
    } catch (error) {
      console.error('Erreur lors de la récupération des données :', error);
    }
  };


  useEffect(() => {
    if (!searchParamsExist) {
      fetchDataFromAPI(currentPage);
    }
  }, [currentPage, searchParamsExist]);


  useEffect(() => {
    if (!searchParamsExist) {
      fetchDataFromAPI(currentPage);
    }
  }, [currentPage, searchParamsExist]);

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
          console.log(formData);
          setSearchResult(data.data.lots);
          console.log(searchResult);
        })
        .catch((error) => {
          console.error('Erreur lors de la requête POST :', error);
        });
    }
  }, [searchParamsExist, cityParam, dateParam, priceMinParam, priceMaxParam, sortByParam]);

  
  const [isFixed, setIsFixed] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 700) {
        setIsFixed(true); // Add the "fixed" class when scrolled down 100px
      } else {
        setIsFixed(false); // Remove the "fixed" class when scrolled back up
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); 

  return (
    <div className='Cribes-container container-fluid'>
      <h2>Our cribs in Nice</h2>
      <h5>Nice</h5>
      <div className='content-page'>
        <div className='row row-cribes'>
          <div className='col-lg-7'>
            <InfiniteScroll
              dataLength={searchParamsExist ? searchResult.length : cribsData.length}
              next={() => fetchDataFromAPI(currentPage)}
              hasMore={hasMore}
            >
              {searchParamsExist ? (
                <Crib cribs={searchResult} />
              ) : (
                cribsData.length > 0 ? (
                  <Crib cribs={cribsData} />
                ) : (
                  <p>No cribs available</p>
                )
              )}
            </InfiniteScroll>
          </div>

          <div className='Maps col-lg-5'>
            <div className={`maps-block ${isFixed ? 'fixed' : ''}`}>
              <MapContainer
                center={[43.70328975790311, 7.1704107912588055]}
                zoom={13}
                style={{ height: '765px', width: '100%' }}
              >
                <TileLayer
                  url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                {staticCoordinates.map((coord, index) => (
                  <Marker key={index} position={coord} icon={customIcon}>
                    <Popup>400$</Popup>
                  </Marker>
                ))}
              </MapContainer>
            </div>
          </div>
        </div>
      </div>
      <AlertCribes className='alert' />
    </div>
  );
};

export default Cribes;
