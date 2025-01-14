import React, { useEffect, useState } from "react";
import './Cribes.css';
import AlertCribes from '../AlertCribes/AlertCribes';
import Crib from '../../Crib/Crib';
import { useLocation, useNavigate } from 'react-router-dom';
import noRooms from "../../../assets/Group 24.svg";
import CribMap from '../MapContainer/CribMap';
import loading1 from '../../../assets/load.gif';
import axios from "axios";
import { Helmet } from "react-helmet";
import { URL } from '../../Variables'
import nomap from '../../../assets/connection-error (1) 1.svg'
const Cribes = () => {
  const [cribsData, setCribsData] = useState([]);
  const [searchResult, setSearchResult] = useState([]);
  const [coordinates, setCoordinates] = useState([]);
  const [dataLoaded, setDataLoaded] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [lastPage, setLastPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [API_KEY] = useState('a2b18f9cfb72eb93f3ce6b1c30372b59');
  const [API_URL2] = useState('https://admin.finecribs.com/api/lots/search');
  const [API_URL3] = useState('https://admin.finecribs.com/api/lots/maps');
  const API_URL4 = 'https://admin.finecribs.com/api/lots/searchkeyword'
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const navigate = useNavigate();
  const [mapData, setMapData] = useState({});
  const [zoom, setZoom] = useState(14);
  const cityParam = searchParams.get('city');
  const dateParam = searchParams.get('date');
  const priceMinParam = searchParams.get('priceMin');
  const priceMaxParam = searchParams.get('priceMax');
  const sortByParam = searchParams.get('sortBy');
  const keyWordParam = searchParams.get('keyword')
  const searchParamsExist = cityParam || dateParam || priceMinParam || priceMaxParam || sortByParam;
  const [latitude, setLatitude] = useState();
  const [longitude, setLongitude] = useState();

  function formatDate(dateParam) {
    if (!dateParam) {
      return null;
    }

    const dateObject = new Date(dateParam);

    const year = dateObject.getFullYear();
    const month = (dateObject.getMonth() + 1).toString().padStart(2, '0');
    const day = dateObject.getDate().toString().padStart(2, '0');

    const formattedDate = `${year}-${month}-${day}`;
    return formattedDate;
  }
  const fetchMapData = async () => {
    const formData = {
      city: cityParam,
      date: dateParam ? formatDate(dateParam) : null,
      price_min: priceMinParam,
      price_max: priceMaxParam,
    };
    try {
      const response = await fetch(`${API_URL3}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'apiKey': API_KEY,
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        const data = await response.json();
        setMapData(data.data.lots);

        const dataArray = Array.isArray(data.data.lots)
          ? data.data.lots
          : Object.values(data.data.lots);

        const coordinatesArray = dataArray.map(item => [
          item.id,
          item.apartment_building_latitude,
          item.apartment_building_longitude
        ]);
        setCoordinates(coordinatesArray);
      } else {
        console.error('Erreur de réponse HTTP :', response.status);
        throw new Error('La requête a échoué avec un statut différent de 200');
      }
    } catch (error) {
      console.error('Erreur lors de la récupération des données :', error);
    }
  };
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
      if (response.ok) {
        const data = await response.json();

        setLastPage(data.data.lots.last_page);

        const dataArray = Array.isArray(data.data.lots.data)
          ? data.data.lots.data
          : Object.values(data.data.lots.data);

        if (currentPage === 1) {
          setCribsData(dataArray);
        } else {
          setCribsData((prevData) => [...prevData, ...dataArray]);
        }
      } else {
        console.error('Erreur de réponse HTTP :', response.status);
        throw new Error('La requête a échoué avec un statut différent de 200');
      }
    } catch (error) {
      console.error('Erreur lors de la récupération des données :', error);
    } finally {
      setLoading(false);
      setDataLoaded(true);
    }
  };
  const fetchDataFromAPI2 = async (page) => {
    if (searchParamsExist) {
      const formData = {
        city: cityParam,
        date: dateParam,
        price_min: priceMinParam,
        price_max: priceMaxParam,
        sortBy: sortByParam,
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

          const dataArray = Array.isArray(data.data.lots.data)
            ? data.data.lots.data
            : Object.values(data.data.lots.data);

          if (currentPage === 1) {
            setSearchResult(dataArray);
          } else {
            setSearchResult((prevData) => [...prevData, ...dataArray]);
          }
        } else {
          console.error('Erreur de réponse HTTP :', response.status);
          throw new Error('La requête a échoué avec un statut différent de 200');
        }
      } catch (error) {
        console.error('Erreur lors de la récupération des données :', error);
      } finally {
        setLoading(false);
        setDataLoaded(true);
      }
    }
  };
  const fetchData = async (page) => {
    if (keyWordParam) {
      const formData = {
        keyword: keyWordParam,
      };
      try {
        const response = await fetch(`${API_URL4}?page=${page}`, {
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
          const dataArray = Array.isArray(data.data.lots.data)
            ? data.data.lots.data
            : Object.values(data.data.lots.data);

          if (currentPage === 1) {
            setCribsData(dataArray);
          } else {
            setCribsData((prevData) => [...prevData, ...dataArray]);
          }
        } else {
          console.error('Erreur de réponse HTTP :', response.status);
          throw new Error('La requête a échoué avec un statut différent de 200');
        }
      } catch (error) {
        console.error('Erreur lors de la récupération des données :', error);
      } finally {
        setLoading(false);
        setDataLoaded(true);
      }
    }
  };
  const handleScroll = () => {
    if (window.innerHeight + window.scrollY < document.documentElement.offsetHeight && currentPage < lastPage && !loading) {
      setCurrentPage(currentPage + 1);
      setLoading(true);
    }
  };
  const handleGetCoordinates = async (city) => {
    if (!city) {
      city = 'Bastia';
      setZoom(6);
    }
    const url = `https://nominatim.openstreetmap.org/search?format=json&q=${city}`;
    try {
      const response = await axios.get(url);
      if (response.status === 200) {
        const data = response.data;
        if (data && data.length > 0) {
          setLatitude(parseFloat(data[0].lat));
          setLongitude(parseFloat(data[0].lon));
        } else {

        }
      } else {

      }
    } catch (error) {
      console.error('Error fetching data from OpenStreetMap API:', error);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      const newZoom = window.innerWidth < 768 ? 13 : 14;
      setZoom(newZoom);
    };
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (searchParams)
      fetchMapData();
  }, [cityParam, dateParam, priceMinParam, priceMaxParam, sortByParam]);

  useEffect(() => {
    if (!searchParams)
      fetchMapData();
  }, []);
  useEffect(() => {
    if ((!searchParamsExist) && (keyWordParam)) {
      fetchData(currentPage);
    }

  }, [searchParamsExist, keyWordParam, currentPage]);

  useEffect(() => {
    if ((!searchParamsExist) && (!keyWordParam)) {
      navigate('/search-cities');
      fetchDataFromAPI(currentPage);
    } else {
      fetchDataFromAPI2(currentPage);
    }
  }, [currentPage, searchParamsExist]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [currentPage, handleScroll, lastPage]);

  useEffect(() => {
    handleGetCoordinates(cityParam);
  }, [cityParam]);



  return (
    <div className='Cribes-container container-fluid'>
      <Helmet>
        <title> Search Result Page </title>
        <meta
          name="description"
          content="Fine Cribs, beautiful flatshares designed for communal living"
        />
        <link rel="canonical" href={`${URL}`} />
      </Helmet>
      {searchResult.length > 0 && (
        <h2>
          {cityParam
            ? `Our cribs in ${cityParam}`
            : 'Our cribs'}
        </h2>
      )}
      {cribsData.length > 0 && (
        <h2>
          {keyWordParam && `Result of search "${keyWordParam}"`}
        </h2>
      )}
      <div className='content-page'>
        <div className='row row-cribes'>
          <div className='col-lg-7'>
            {!dataLoaded && (
              <div className="container">
                <div className='left d-flex '>
                  <img src={loading1} alt="Loading" style={{ width: "120px", height: "120px", margin: "120px auto" }} />
                </div>
              </div>
            )}
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
                        {/* {dateParam && (
                          <button className='button'>Show first availabilities</button>)} */}
                      </div>
                    </div>
                  </div>
                )
              )
            ) : null}
            {loading && (
              <div className="container">
                <div className='left d-flex '>
                  <img src={loading1} alt="Loading" style={{ width: "120px", height: "120px", margin: "0 auto" }} />
                </div>
              </div>
            )}
          </div>
          <div className='Maps col-lg-5'>
            <div className={`maps-block`}>
              {longitude && latitude ? (
                <CribMap
                  coordinates={coordinates}
                  showPopup={true}
                  data={mapData}
                  longitude={longitude}
                  latitude={latitude}
                  zoom={zoom}
                />
              ) : (
                <div className="d-flex flex-column align-items-center m-5">
                  <img src={nomap} alt="nomap" className="" />
                  <p className="map-error mt-3"> Unable to load the Map !</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <AlertCribes className='alert' />
    </div>
  );
};

export default Cribes;
