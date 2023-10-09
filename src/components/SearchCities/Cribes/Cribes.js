import React, { useEffect, useState } from 'react';
import './Cribes.css';
import AlertCribes from '../AlertCribes/AlertCribes';
import Crib from '../../Crib/Crib';
import InfiniteScroll from 'react-infinite-scroll-component';
import MapWithMarker from '../../MapWithMarker/MapWithMarker';
import { useLocation, useNavigate } from 'react-router-dom';
import noRooms from "../../../assets/Group 24.svg"


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
  const navigate=useNavigate()

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
  
      const response = await fetch(`${API_URL}?page=${page}&limit=${itemsPerPage}`, {
        method: 'GET',
        mode: 'cors',
        headers
      });
  
      const data = await response.json();
      console.log(data)
  
      if (data && data.data && data.data.lots) {
        // Use currentPage to determine the starting position of elements to display
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        const newCribs = data.data.lots.slice(startIndex, endIndex);
  
        // Check if the new cribs are not already present in cribsData
        const filteredNewCribs = newCribs.filter((newCrib) => {
          return !cribsData.some((existingCrib) => existingCrib.id === newCrib.id);
        });
  
        if (filteredNewCribs.length === 0) {
          setHasMore(false); // No more cribs to load
        } else {
          // Show cribsData
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
      navigate('/searchCities');
      
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
          setSearchResult(data.data.lots);
          })
        .catch((error) => {
          console.error('Erreur lors de la requête POST :', error);
        });
    }
  }, [searchParamsExist, cityParam, dateParam, priceMinParam, priceMaxParam, sortByParam]);
  useEffect(() => {
    console.log(searchResult); 
  }, [searchResult]);

  
  const [isOuterDivFixed, setIsOuterDivFixed] = useState(false);

  // Add a scroll event listener to monitor the scroll position
  useEffect(() => {
    const handleScroll = () => {
      const outerDiv = document.querySelector('.infinite-scroll-component__outerdiv');

      if (outerDiv) {
        const scrollY = window.scrollY;
        const outerDivHeight = outerDiv.clientHeight;

        // Check if the conditions are met to add the "fixed" class
        if (outerDivHeight > 800 && scrollY > 700) {
          setIsOuterDivFixed(true);
        } else {
          setIsOuterDivFixed(false);
        }
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
              style={{ overflowX: 'hidden' }}
            >
 {searchParamsExist && searchResult.length > 0 ? (
  <>
    <Crib cribs={searchResult} />
  </>
) : (
  searchParamsExist && searchResult.length === 0 ? (
    <div className='container'>
    <div className='No-rooms-content'>
      <div className='left d-flex '>
        <img className='ImageNoRooms' src={noRooms} alt='no rooms icon'/>
        <span>No rooms available</span>
        <button className='button'>Show first availabilities</button>
      </div>
    </div>
    </div>
  ) : (
    <>
    <Crib cribs={cribsData} />
  </>
  )
)}


            </InfiniteScroll>
          </div>

          {!(searchParamsExist && searchResult.length === 0) ? (
  <div className='Maps col-lg-5'>
    <div className={`maps-block ${isOuterDivFixed ? 'fixed' : ''}`}>
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
) : null}

        </div>
      </div>
      <AlertCribes className='alert' />
    </div>
  
  );
};

export default Cribes;
