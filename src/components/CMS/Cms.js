import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';
import { Helmet } from 'react-helmet';
import {URL} from '../Variables'
import ReactGA from 'react-ga';
const Cms = () => {
  const { slug } = useParams();
  const [data, setData] = useState(null);

  const API_KEY = 'a2b18f9cfb72eb93f3ce6b1c30372b59';
  const API_URL = `https://admin.finecribs.com/api/cms/page/${slug}`;

  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);
  

  useEffect(() => {
    const headers = {
      'apiKey': `${API_KEY}`,
    };

    fetch(API_URL, { method: 'GET', mode: 'cors', headers })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
        console.log(data);
        const slug = data && data.data && data.data.page && data.data.page.slug;
        console.log(slug);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, [API_URL]);

  console.log(data);

  const titre = data?.data?.page?.titre;
  const description = data?.data?.page?.description;
  const metaDescription = data?.data?.page?.meta_description;

  console.log(titre);

  return (
    <>
      <Helmet>
        <title>{titre}</title>
        <meta name="description" content={metaDescription} />
        <link rel="canonical" href={`${URL}`} />
      </Helmet>

      <Breadcrumbs 
      path={`/`}
      customRoutes={[
        {
          path:`/page/${slug}`,
          label: `${slug}`
        }
      ]}/>

      <div className='Cms-container'>
        <div className='container'>
          {titre ? (
            <>
              <h1 className='Cms-header'>{titre}</h1>
              <div className='Cms-content-first'>
                {data.data && data.data.page && data.data.page.description ? (
                  <div dangerouslySetInnerHTML={{ __html: data.data.page.description }}></div>
                ) : (
                  <div>Loading data...</div>
                )}
              </div>
            </>
          ) : (
            <p>Loading data...</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Cms;
