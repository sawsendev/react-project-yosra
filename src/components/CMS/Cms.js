import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';
import { Helmet } from 'react-helmet';
import { URL } from '../Variables'
import ReactGA from 'react-ga';
import loading1 from '../../assets/load.gif';
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
        const slug = data && data.data && data.data.page && data.data.page.slug;
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, [API_URL]);
  const titre = data?.data?.page?.titre;
  const description = data?.data?.page?.description;
  const metaDescription = data?.data?.page?.meta_description;
  return (
    <>
      <Helmet>
        <title>{titre}</title>
        <meta name="description" content={metaDescription} />
        <link rel="canonical" href={`${URL}`} />
        <script type="application/ld+json">
            {`
 {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "${titre}",
  "url": "${URL}",
  "description": "page cms"
}

  
  `}
          </script>
      </Helmet>
      <Breadcrumbs
        path={`/`}
        customRoutes={[
          {
            path: `/page/${slug}`,
            label: `${slug}`
          }
        ]} />
        <div className='Cms-container'>
        <div className='container pb-5'>
          {titre ? (
            <>
              <h1 className='Cms-header'>{titre}</h1>
              <div className='Cms-content-first'>
                {data.data && data.data.page && data.data.page.description ? (
                  <div dangerouslySetInnerHTML={{ __html: data.data.page.description }}></div>
                ) : (
                  <div style={{ display: 'flex', justifyContent: 'center', alignItems:  'center', height: '100vh' }}>
                    <img src={loading1} alt="Loading" style={{ width: '120px', height: '120px' }} />
                  </div>
                )}
              </div>
            </>
          ) : (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
              <img src={loading1} alt="Loading" style={{ width: '120px', height: '120px' }} />
            </div>
          )}
        </div>
      </div>
    </>
  );
};
export default Cms;
