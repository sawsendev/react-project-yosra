import React, { useEffect, useState } from 'react';
import { useNavigate, useParams} from 'react-router-dom';
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';
//import { Helmet } from 'react-helmet-async';

const Cms =()=> {
  const { id } = useParams();

  const [data, setData] = useState(null);
  const navigate=useNavigate();
  const API_KEY = 'a2b18f9cfb72eb93f3ce6b1c30372b59';
  const API_URL = `http://dev.niceroom.sofis-info.com/api/cms/page/${id}`; // Use the slug in the API URL

  useEffect(() => {
    // Define headers with the API key
    const headers = {
      'apiKey': `${API_KEY}`,
    };

    // Make a GET request to the API using the slug
    fetch(API_URL, { method: 'GET',mode: 'cors',headers })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
        console.log(data)
        const slug = data && data.data && data.data.page && data.data.page.slug;
        console.log(slug)
        navigate(`/pages/${slug}`);

      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, [API_URL,navigate,id]);
console.log(data)
  const titre = data && data.data && data.data.page && data.data.page.titre;

  console.log(titre);
  // const description=data && data.data && data.data.page && data.data.page.description;
  // const metaDescription=data && data.data && data.data.page && data.data.page.meta_description;
   


  
   


  

  return (
     <>
    {/* //   <Helmet>
    //   <title>{titre}</title>
    //   {description &&  <meta name="description" content={description} />}
    //   <meta name="og:description" content={metaDescription} />
    // </Helmet> */}
    <Breadcrumbs/>
    <div className='Cms-container'>
      <div className='container'>
        {titre ? (
          <>
            <h1 className='Cms-header'>{titre}</h1>
            <div className='Cms-content-first'>
        <h3>1. Introduction</h3>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the1500s, specimen book. It has 
survived not only five centuries  but also the leap into electronic typesetting, remaining .</p>
       </div>

       <div className='Cms-content-first'>
        <h3>2. Contrat</h3>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the1500s, specimen book. It has 
survived not only five centuries  but also the leap into electronic typesetting, remaining .</p>
       </div>


       <div className='Cms-content-first'>
        <h3>3. Lorem Ipsum</h3>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the1500s, specimen book. It has 
survived not only five centuries  but also the leap into electronic typesetting, remaining .</p>
        <ol type="a">
          <li> Nom de l'article</li>
          <li> Photos(s) de l'article</li>
          <li> Description de l'article</li>
          <li> Tailles et couleurs disponibles</li>
        </ol>
       </div>

       <div className='Cms-content-first'>
        <h3>3. Lorem Ipsum</h3>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the1500s, specimen book. It has 
survived not only five centuries  but also the leap into electronic typesetting, remaining .</p>
       </div>


          </>
        ) : (
          <p>Loading data...</p>
        )}
      </div>
    </div>
  </>
  

  );
}

export default Cms
