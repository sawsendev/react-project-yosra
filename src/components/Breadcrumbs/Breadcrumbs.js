import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Breadcrumbs.css';
import { VscHome, VscChevronRight } from 'react-icons/vsc';

function Breadcrumbs({ path, customRoutes = [], lotData }) {
  const location = useLocation();
  const currentPath = path || location.pathname;

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

  // Add custom routes dynamically
  customRoutes.forEach((route, index) => {
    breadcrumbElements.push(
      <React.Fragment key={`customRoute${index}`}>
        <VscChevronRight className="crumb-separator" />
        <div className="crumb">
          <Link to={route.path} className="breadcrumb-link">
            {route.label}
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
