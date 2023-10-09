import React from 'react'
import room from '../../assets/bacdbb_723fc3ba38f34640b08464a29a8990c9_mv2-1.jpg'
import { Badge } from 'react-bootstrap';
import  locationIcon  from '../../assets/pin 2.svg';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Link } from 'react-router-dom';
import promoImage from '../../assets/Group 104.svg'
const Crib = ({ cribs }) => {
  if (!cribs || cribs.length === 0) {
    return <p>No cribs available</p>;
  }

  return (
    <div>
      <ul className='row Rooms-cribes'>
        {cribs.map((crib, index) => (
          <li className='col-lg-4 col-md-6 col-12' key={index}>
            <div className='item-cribe'>
              <div className='Item-badge'>
              {crib.rent_status && crib.rent_status === true && <Badge className='notify-badge'>Available now</Badge>}
              {crib.promo && crib.promo === 1 && (
                  <img src={promoImage} alt='Promo' className='promo-image' />
                )}
                <Link to={`/room/${crib.id}`}>
                <img className="img-fluid" src={room} alt="photo_fine_cribs" />
                </Link>

              </div>
              <div className='Rooms-content'>
                <h3>{crib.apartment.title}-{crib.title}</h3>
                <div className='d-flex mb-1'>
                  <img src={locationIcon} alt="location icon"/>
                  <p>{crib.apartment.building.address}</p>
                </div>
                <span>{crib.loyer_hc}€/ month</span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Crib;