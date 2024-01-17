import React from 'react'
import Reactions from './Reactions/Reactions';
import ReasonToRent from './ReasonToRent/ReasonToRent';
import StepsToBook from './StepsToBook/StepsToBook';
import Intro from './Intro/Intro';
import Feedback from './Feedback/Feedback';
import ExploreMore from './ExploreMore/ExploreMore';
import './Homepage.css'
import { useState } from 'react';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { URL } from '../Variables'
import ReactGA from 'react-ga';

const Homepage = () => {
  const API_KEY = 'a2b18f9cfb72eb93f3ce6b1c30372b59';
  const API_URL = 'https://admin.finecribs.com/api/lots/city';

  const [lotData, setLotData] = useState([]);
  const [data, setData] = useState(null);

  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);
  
  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      try {
        const headers = {
          'apiKey': `${API_KEY}`,
        };

        const response = await fetch(`${API_URL}`, {
          method: 'GET',
          mode: 'cors',
          headers,
        });

        if (!isMounted) return;

        const responseData = await response.json();

        if (responseData) {
          setLotData(responseData);
        } else {
          console.error('Données inattendues de l\'API :', responseData);
          setLotData([]);
        }
      } catch (error) {
        console.error('Erreur lors de la récupération des données :', error);
        if (isMounted) {
          setLotData([]);
        }
      }
    };

    fetchData();

    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const headers = {
          'apiKey': `${API_KEY}`,
        };

        const response = await fetch('https://admin.finecribs.com/api/homepage', {
          method: 'GET',
          mode: 'cors',
          headers,
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const result = await response.json();
        if (
          result &&
          result.data &&
          result.data.page &&
          result.data.page.media &&
          result.data.page.media.length > 0
        ) {
          const originalUrl = result.data.page.media[0].original_url;
          setData(originalUrl);
        }

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);


  return (
    <div id='Home' className='homepage-container'>
      <Helmet>
        <title>Fine cribs</title>
        <meta
          name="description"
          content="Fine Cribs, beautiful flatshares designed for communal living"
        />
        
        <link rel="canonical" href={`${URL}`} />
        <script type="application/ld+json">
          {`
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Fine Cribs",
      "url": "https://finecribs.com/",
      "logo": "/src/assets/logo.svg"
    }
  `}
        </script>

      </Helmet>
      <Intro backgroundImage={data} />
      <Reactions></Reactions>
      <ExploreMore lotData={lotData} />
      <ReasonToRent />
      <StepsToBook />
      <Feedback />
    </div>
  )
}

export default Homepage
