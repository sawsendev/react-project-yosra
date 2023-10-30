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
  const [staticCoordinates, setStaticCoordinates] = useState([]);
  const [itemsToDisplay, setItemsToDisplay] = useState(9);
  const [dataLoaded, setDataLoaded] = useState(false);

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
  const [lastPage, setLastPage] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const fetchDataFromAPI = async () => {
    try {
      const headers = {
        'apiKey': `${API_KEY}`,
      };
      const response = await fetch(`${API_URL}?page=${currentPage}`, {
        method: 'GET',
        mode: 'cors',
        headers,
      });

      const data = await response.json();
      console.log(data);

      if (currentPage === 1) {
        // Si c'est la première page, réinitialisez les données
        setCribsData(data.data.lots.data);
        // Mettez à jour lastPage avec la valeur de la dernière page
        setLastPage(data.data.lots.last_page);
      } else {
        // Sinon, ajoutez les nouvelles données
        setCribsData((prevData) => [...prevData, ...data.data.lots.data]);
      }
      setDataLoaded(true);
    } catch (error) {
      console.error('Erreur lors de la récupération des données :', error);
    }
  };

  useEffect(() => {
    if (!searchParamsExist) {
      // Réinitialisez la page lorsque les paramètres de recherche changent
      setCurrentPage(1);
      setItemsToDisplay(9); // Réinitialisez le nombre d'éléments à afficher
      navigate('/search-cities');
      fetchDataFromAPI();
    }
  }, [searchParamsExist]);

  useEffect(() => {
    // Mettez à jour la page lorsque vous atteignez la fin des données
    if (itemsToDisplay >= (searchParamsExist ? searchResult.length : cribsData.length)) {
      // Vérifiez si vous avez encore des pages à charger
      if (currentPage < lastPage) {
        // Si oui, augmentez la page actuelle et chargez les données
        fetchDataFromAPI();
      }
    }
  }, [itemsToDisplay, currentPage, lastPage]);

  const fetchNextPage = async () => {
    if (currentPage <= lastPage) {
      setCurrentPage((prevPage) => prevPage + 1);
     
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
          console.log(data);

          if (page === 1) {
            // Si c'est la première page, réinitialisez les données de recherche
            setSearchResult(data.lots.data);
          } else {
            // Sinon, ajoutez les nouvelles données de recherche
            setSearchResult((prevData) => [...prevData, ...data.lots.data]);
          }

          const extractedCoordinates = data.lots.data.map(crib => {
            const latitude = crib.apartment.building.latitude;
            const longitude = crib.apartment.building.longitude;
            return [latitude, longitude];
          });

          setStaticCoordinates(extractedCoordinates);
        } else {
          console.error('Erreur lors de la requête POST');
        }
      } catch (error) {
        console.error('Erreur lors de la récupération des données :', error);
      }
    }
  };


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
        <p>
          Loading ...
        </p>
      )}

      <div className='content-page'>
        <div className='row row-cribes'>
          <div className='col-lg-7'>
          <InfiniteScroll
              dataLength={itemsToDisplay}
              next={fetchNextPage} // Chargez davantage d'éléments
              hasMore={currentPage <= lastPage}
              loader={<p>Loading ...</p>} // Affichez un indicateur de chargement
              style={{ overflowX: 'hidden' }}
            >
              {searchParamsExist && dataLoaded ? (
                searchResult.length > 0 ? (
                  <Crib cribs={searchResult} />
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
              ) : (
                dataLoaded && (
                  <Crib cribs={cribsData} />
                )
              )}
            </InfiniteScroll>
          </div>

          <div className='Maps col-lg-5'>
            <div className={`maps-block`}>
              <CribMap
                coordinates={staticCoordinates}
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
