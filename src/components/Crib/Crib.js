import React from 'react'
import room1 from '../../assets/img-room-1.jpg'
import room2 from '../../assets/img-room-2.jpg'
import { Badge } from 'react-bootstrap';
import  locationIcon  from '../../assets/pin 2.svg';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import promoImage from '../../assets/Group 104.svg';
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

                <div className="custom-carousel-container">
                  <Carousel showStatus={false} showArrows={false} showThumbs={true} dynamicHeight={false} useKeyboardArrows={false}>
                    <Link to={`/room/${crib.id}`}>
                      <div>
                        <img className="img-fluid" src={room1} alt="photo_fine_cribs" />
                      </div>
                    </Link>
                    <Link to={`/room/${crib.id}`}>
                      <div>
                        <img className="img-fluid" src={room2} alt="photo_fine_cribs" />
                      </div>
                    </Link>
                    {/* Add more images here as needed */}
                  </Carousel>
                </div>
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