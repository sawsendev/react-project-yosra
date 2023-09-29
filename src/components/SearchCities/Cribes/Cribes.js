import React, { useEffect, useState } from 'react';
import './Cribes.css';
import AlertCribes from '../AlertCribes/AlertCribes';
import Crib from '../../Crib/Crib';
import InfiniteScroll from 'react-infinite-scroll-component';
import MapWithMarker from '../../MapWithMarker/MapWithMarker';

const Cribes = () => {
  const [cribsData, setCribsData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const hasMore = true; // Vous pouvez définir cette valeur en fonction de votre logique de pagination
  const staticCoordinates = [
    [43.70328975790311, 7.1704107912588055],
    [43.705, 7.175],
    [43.706, 7.178], 
    [43.701, 7,300], 
    [43.704, 7.166],
    
  ];
  

  const API_KEY = 'a2b18f9cfb72eb93f3ce6b1c30372b59';
  const API_URL = 'http://dev.niceroom.sofis-info.com/api/lots/list';

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

        setCribsData((prevData) => [...prevData, ...newCribs]);
        setCurrentPage(page + 1);
      }
    } catch (error) {
      console.error('Erreur lors de la récupération des données :', error);
    }
  };

  useEffect(() => {
    fetchDataFromAPI(currentPage);
  }, [currentPage]);

  return (
    <div className='Cribes-container container-fluid'>
      <h2>Our cribs in Nice</h2>
      <h5>Nice</h5>
      <div className='content-page'>
        <div className='row'>
          <div className='col-lg-7'>
            <InfiniteScroll
              dataLength={cribsData.length}
              next={() => fetchDataFromAPI(currentPage)}
              hasMore={hasMore}
              endMessage={<p>No more cribs available</p>}
            >
              {cribsData.length > 0 ? (
                <Crib cribs={cribsData} />
              ) : (
                <p>Loading...</p>
              )}
            </InfiniteScroll>
          </div>
          <div className='Maps col-lg-5'>
            <div className='maps-block'>
            <MapWithMarker coordinates={staticCoordinates} />


            </div>
          </div>
        </div>
      </div>

      <AlertCribes className="alert" />
    </div>
  );
}

export default Cribes;
