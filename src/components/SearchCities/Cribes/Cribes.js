import React, { useEffect, useState } from 'react';
import "./Cribes.css";
import AlertCribes from '../AlertCribes/AlertCribes';
import Crib from '../../Crib/Crib';

const Cribes = () => {
  const [cribsData, setCribsData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const API_KEY = 'a2b18f9cfb72eb93f3ce6b1c30372b59';
  const API_URL = 'http://dev.niceroom.sofis-info.com/api/lots/list';

  const fetchDataFromAPI = () => {
    const headers = {
      'apiKey': `${API_KEY}`,
    };

    fetch(API_URL, { method: 'GET', mode: 'cors', headers })
      .then(response => response.json())
      .then(data => {
        if (data && data.data && data.data.lots) {
          setCribsData(data);
        }
      })
      .catch(error => {
        console.error('Erreur lors de la récupération des données :', error);
      });
  };

  useEffect(() => {
    fetchDataFromAPI();
  }, []);

  const totalPages = Math.ceil((cribsData.data?.lots?.length || 0) / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const currentCribes = cribsData.data?.lots?.slice(startIndex, endIndex) || [];

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className='Cribes-container container-fluid'>
      <h2>Our cribs in Nice</h2>
      <h5>Nice</h5>
      <div className='content-page'>
        <div className='row'>
          <div className='col-lg-7'>
            {currentCribes.length > 0 ? (
              <Crib cribs={currentCribes} />
            ) : (
              <p>Loading...</p>
            )}
            <div className="container pagination">
              <button onClick={prevPage}>Previous</button>
              <span>{currentPage} / {totalPages}</span>
              <button onClick={nextPage}>Next</button>
            </div>
          </div>
          <div className='Maps col-lg-5'>
            <div className='maps-block'>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d92299.17724850951!2d7.1704107912588055!3d43.70328975790311!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12cdd0106a852d31%3A0x40819a5fd979a70!2sNice%2C%20France!5e0!3m2!1sen!2stn!4v1694711910064!5m2!1sen!2stn" width="742" height="765" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
        </div>
      </div>

      <AlertCribes className="alert"/>
    </div>
  );
}

export default Cribes;
