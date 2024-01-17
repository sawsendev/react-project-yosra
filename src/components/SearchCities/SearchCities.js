import React, { useEffect } from 'react';
import Search from './Search/Search';
import Cribes from './Cribes/Cribes';
import CityResult from './CityResult/CityResult';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { URL } from '../Variables'
import ReactGA from 'react-ga';

const SearchCities = () => {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  const cityParam = searchParams.get('city');
  if (cityParam) {
    const city = cityParam.toLowerCase()
    return (
      <div>
        <Helmet>
          <title>Search Result Page</title>
          <meta
            name="description"
            content="Fine Cribs, beautiful flatshares designed for communal living"
          />

          <link rel="canonical" href={`${URL}/search-cities`} />
          <script type="application/ld+json">
            {`
          {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Search Result Page",
    "url": "https://finecribs.com/search-cities",
    "description": "page de recherche par ville "
  }
  
  `}
          </script>
        </Helmet>
        <CityResult city={city} />
        <Search />
        <Cribes />
      </div>
    );
  } else {

    return (
      <div>
        <Search />
        <Cribes />
      </div>
    );
  }
};

export default SearchCities;
