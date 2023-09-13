import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Breadcrumbs.css';
import { VscHome, VscChevronRight } from "react-icons/vsc";

function Breadcrumbs() {
  const location = useLocation();
  console.log(location);

  const crumbs = location.pathname.split("/")
    .filter(crumb => crumb !== '')
    .map((crumb, index, array) => {
      const currentLink = `/${array.slice(0, index + 1).join('/')}`;
      const decodedCrumb = decodeURIComponent(crumb); // Décodez le crumb
      return (
        <React.Fragment key={crumb}>
          <VscChevronRight className="crumb-separator" />
          <div className='crumb'>
            <Link to={currentLink} className="breadcrumb-link">{decodedCrumb}</Link>
          </div>
        </React.Fragment>
      );
    });

  const homeCrumb = (
    <div className='crumb' key="home">
      <VscHome className="home-icon" />
      <Link to="/home" className="breadcrumb-link-h">
        Home
      </Link>
    </div>
  );

  return (
    <div className='breadcrumbs container'>
      {homeCrumb}
      <div className="crumbs-container">
        {crumbs}
      </div>
    </div>
  );
}

export default Breadcrumbs;
