import React, { useEffect, useState } from 'react';
import './Cribes.css';
import AlertCribes from '../AlertCribes/AlertCribes';
import Crib from '../../Crib/Crib';
import InfiniteScroll from 'react-infinite-scroll-component';
import MapWithMarker from '../../MapWithMarker/MapWithMarker';
import { useSearch } from '../Search/SearchContext';
import { useNavigate } from 'react-router-dom';

const Cribes = () => {
  const [cribsData, setCribsData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const [hasMore,setHasMore]=useState(true); // Vous pouvez définir cette valeur en fonction de votre logique de pagination
  const staticCoordinates = [
    [43.70328975790311, 7.1704107912588055],
    [43.705, 7.175],
    [43.706, 7.178], 
    [43.701, 7,300], 
    [43.704, 7.166],
    
  ];
  const [isFirstLoad,setIsFirstLoad]=useState(true)
  const { searchResults, isUpdateResultsClicked } = useSearch();
  const API_KEY = 'a2b18f9cfb72eb93f3ce6b1c30372b59';
  const API_URL = 'http://dev.niceroom.sofis-info.com/api/lots/list';
  const navigate=useNavigate()

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
          // Utilisez isUpdateResultsClicked pour décider quel ensemble de données afficher
          if (isUpdateResultsClicked) {
            if (searchResults.length > 0) {
              // Affichez les résultats de la recherche
              setCribsData((prevData) => [...prevData, ...filteredNewCribs]);
            } else {
              setHasMore(false); // Plus de cribs à charger car les résultats de recherche sont vides
            }
          } else {
            // Affichez cribsData
            setCribsData((prevData) => [...prevData, ...filteredNewCribs]);
          }
  
          setCurrentPage(page + 1);
        }
      }
    } catch (error) {
      console.error('Erreur lors de la récupération des données :', error);
    }
  };
  console.log('le resultat est',searchResults)
 

  useEffect(() => {
    fetchDataFromAPI(currentPage);
    setIsFirstLoad(false);
  }, [currentPage]);
  
  const redirectToNoRoom = () => {
    navigate('/noRoom');
  };
  console.log(isUpdateResultsClicked)

  return (
    <div className='Cribes-container container-fluid'>
      <h2>Our cribs in Nice</h2>
      <h5>Nice</h5>
      <div className='content-page'>
        <div className='row'>
          <div className='col-lg-7'>
          <InfiniteScroll
  dataLength={
    isUpdateResultsClicked && searchResults
      ? searchResults.length
      : cribsData.length
  }
  next={() => fetchDataFromAPI(currentPage)}
  hasMore={hasMore}
>
{searchResults && searchResults.data && searchResults.data.lots && searchResults.data.lots.length > 0 ? (
              <Crib cribs={searchResults.data.lots} />
            ) : (
              isFirstLoad ? redirectToNoRoom() : <Crib cribs={cribsData} />
            )}


</InfiniteScroll>

          </div>
          <div className='Maps col-lg-5'>
            <div className='maps-block'>
              <MapWithMarker coordinates={staticCoordinates}/>
            </div>
          </div>
        </div>
      </div>
  
      <AlertCribes className='alert'/>
    </div>
  );
}  
export default Cribes;