import React, { useEffect, useState } from 'react';
import LazyLoad from 'react-lazyload';
import './Cribes.css';
import AlertCribes from '../AlertCribes/AlertCribes';
import Crib from '../../Crib/Crib';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useLocation, useNavigate } from 'react-router-dom';
import noRooms from "../../../assets/Group 24.svg"
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

import { Badge } from 'react-bootstrap';
import  locationIcon  from '../../../assets/pin 2.svg';
import promoImage from '../../../assets/Group 104.svg';
import imageParDefaut from '../../../assets/room/Group 116.svg';
import room1 from '../../../assets/room/room-21.jpg'
import room2 from '../../../assets/room/room-22.jpg'
import { Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';

const Cribes = () => {

 
  
  const [cribsData, setCribsData] = useState([]);
  const [searchResult, setSearchResult] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [staticCoordinates,setStaticCoordinates] =useState([]);

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
  const itemsPerPage = 6; 
  const [lastLoadedPage, setLastLoadedPage] = useState(0);
  
  const fetchDataFromAPI = async (page) => {
    try {
      if (page !== lastLoadedPage) {
        setLastLoadedPage(page);
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
          if (page === 1) {
            setCribsData(data.data.lots);
          } else {
            setCribsData(prevCribs => [...prevCribs, ...data.data.lots]);
          }
  
          if (data.data.lots.length < itemsPerPage) {
            setHasMore(false);
          }
  
          // Extraction des coordonnées et mise à jour de staticCoordinates
          const extractedCoordinates = data.data.lots.map(crib => {
            const latitude = crib.apartment.building.latitude;
            const longitude = crib.apartment.building.longitude;
            return [latitude, longitude];
          });
          
  
          setStaticCoordinates(extractedCoordinates);
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
  }, []);

  useEffect(() => {
    if (!searchParamsExist) {
      navigate('/search-cities');
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
  
  useEffect(() => {
    console.log(searchResult); 
  }, [searchResult]); 
  const customIcon = new L.divIcon({
    className: 'custom-icon',
    html: '<div class="marker-label">400€</div>',
  });
  
  
console.log(staticCoordinates)
const validStaticCoordinates = staticCoordinates.filter(coord => coord !== null && Array.isArray(coord) && coord.length === 2);

  return (
    <div className='Cribes-container container-fluid'>
      <h2>Our cribs in Nice </h2>
      <h5>Nice</h5>
      <div className='content-page'>
        <div className='row row-cribes'>
          <div className='col-lg-7'>
            <InfiniteScroll
              dataLength={
                searchParamsExist
                  ? searchResult && Array.isArray(searchResult)
                    ? searchResult.length || 0
                    : 0
                  : cribsData && Array.isArray(cribsData)
                  ? cribsData.length || 0
                  : 0
              }
              next={() => fetchDataFromAPI(currentPage)}
              hasMore={hasMore}
              loader={<h4>loading....</h4>}
              style={{ overflowX: 'hidden' }}
            >
              {searchParamsExist && Array.isArray(searchResult) && searchResult.length > 0 ? (
                <Crib cribs={searchResult} />
              ) : (
                searchParamsExist && Array.isArray(searchResult) && searchResult.length === 0 ? (
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
                  <Crib cribs={cribsData} />
                )
              )}
            </InfiniteScroll>
          </div>
  
          {!(searchParamsExist && Array.isArray(searchResult) && searchResult.length === 0) ? (
            <div className='Maps col-lg-5'>
              <div className={`maps-block `}>
              <MapContainer
  center={[43.70328975790311, 7.1704107912588055]}
  zoom={13}
  style={{ height: '765px', width: '100%' }}
>
  <TileLayer
    url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  />
  {validStaticCoordinates.map((coordArray, index) => {
  if (Array.isArray(coordArray) && coordArray.length === 2) {
    const [latitude, longitude] = coordArray;
    if (!isNaN(latitude) && !isNaN(longitude) && latitude !== null && longitude !== null) {
      return (
          <Marker key={index} position={coordArray} icon={customIcon}>
            <Popup>
              <div className='popup_itemcribe'>
                <div className='item-cribe'>
                  <div className='Item-badge'>
                    <Badge className='notify-badge'>Available now</Badge>
                    <img src={promoImage} alt='Promo' className='promo-image' />
                    <div className="custom-carousel-container">
                      <Carousel showStatus={false} showArrows={false} showThumbs={false} dynamicHeight={false} useKeyboardArrows={false}>
                        <Link to='#'>
                          <div>
                            <LazyLoad height={200} offset={100}>
                              <img className="img-fluid" src={room1} alt="Im" style={{ width: '100%', height: '100%' }} />
                            </LazyLoad>
                          </div>
                        </Link>
                        <Link to='#'>
                          <div>
                            <LazyLoad height={200} offset={100}>
                              <img className="img-fluid" src={imageParDefaut} alt="Im" style={{ width: '100%', height: '100%' }} />
                            </LazyLoad>
                          </div>
                        </Link>
                        <Link to='#'>
                          <div>
                            <LazyLoad height={200} offset={100}>
                              <img className="img-fluid" src={room2} alt="Im" style={{ width: '100%', height: '100%' }} />
                            </LazyLoad>
                          </div>
                        </Link>
                      </Carousel>
                    </div>
                    <div className='Rooms-content'>
                      <h3>17 Récamier - #room 5</h3>
                      <div className='d-flex mb-1'>
                        <img src={locationIcon} alt="location icon" />
                        <p>47 rue Pierre Audry, 69009 Lyon</p>
                      </div>
                      <span className='pricecrib'>400€/ month</span>
                    </div>
                  </div>
                </div>
              </div>
            </Popup>
          </Marker>
        );
      }
    }
    return null; // Ignorer les coordonnées invalides
  })}
</MapContainer>


              </div>
            </div>
          ) : null}
        </div>
      </div>
      <AlertCribes className='alert' />
    </div>
  );
  }

export default Cribes;