import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';

const Cms = () => {
  const { id } = useParams(); // Obtenez l'ID à partir de l'URL
  const [pageContent, setPageContent] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Utilize the ID to obtain the slug from the API
    fetch(`http://dev.niceroom.sofis-info.com/api/cms/page/${id}`, { mode: 'no-cors' })
      .then(response => response.json())
      .then(data => {
        setPageContent(data); 
        if (data.slug) {
          navigate.replace(`/cms/page/${data.slug}`);
        }
      })
      .catch(error => {
        console.error('Erreur de requête :', error);
      
      });
  }, [id, navigate]);

  if (!pageContent) {
    return <p>Chargement en cours...</p>;
  }

  return (
    <>
    <Breadcrumbs/>
    <div className='Cms-container'>
    
      <div className='container'>
       <h1 className='Cms-header'>{pageContent.title}</h1>
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

      </div>
    </div>
    </>
  )
}

export default Cms
