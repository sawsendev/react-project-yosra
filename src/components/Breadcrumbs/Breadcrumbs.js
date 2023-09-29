import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Breadcrumbs.css';
import { VscHome, VscChevronRight } from 'react-icons/vsc';

function Breadcrumbs({ path }) {
  const location = useLocation();
  const currentPath = path || location.pathname; // Utilisez le chemin spécifié s'il est fourni, sinon, utilisez le chemin de l'URL actuelle

  const homeCrumb = (
    <div className="crumb" key="home">
      <VscHome className="home-icon" />
      <Link to="/" className="breadcrumb-link">
        Home
      </Link>
    </div>
  );

  const pathSegments = currentPath.split('/').filter(segment => segment !== '');
  const breadcrumbElements = pathSegments.map((segment, index, array) => {
    const currentPath = `/${array.slice(0, index + 1).join('/')}`;

    return (
      <React.Fragment key={currentPath}>
        <VscChevronRight className="crumb-separator" />
        <div className="crumb">
          <Link to={currentPath} className="breadcrumb-link">
            {segment}
          </Link>
        </div>
      </React.Fragment>
    );
  });

  return (
    <div className="breadcrumbs container">
      {homeCrumb}
      {breadcrumbElements}
    </div>
  );
}

export default Breadcrumbs;