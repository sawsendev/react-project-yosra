import React from 'react'
import LazyLoad from 'react-lazyload';
import { Badge } from 'react-bootstrap';
import  locationIcon  from '../../assets/pin 2.svg';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import promoImage from '../../assets/Group 104.svg';
import imageParDefaut from '../../assets/room/Group 116.svg'
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
                { crib.rent_status === false && (<Badge className='notify-badge'>Available now</Badge>)}
                {crib.promo && crib.promo === 1 && (
                  <img src={promoImage} alt='Promo' className='promo-image' />
                )}

                <div className="custom-carousel-container">
                <Carousel showStatus={false} showArrows={false} showThumbs={false} dynamicHeight={false} useKeyboardArrows={false}>
  {crib && crib.media && crib.media.some((media) => media.mime_type.startsWith('image')) ? (
    crib.media
      .filter((media) => media.mime_type.startsWith('image') && media.collection_name !== 'floorpan'))
      .map((image, index) => (
        <Link to={`/room/${crib.id}`} key={index}>
          <div>
            <img
              className="img-fluid"
              src={image.original_url}
              alt={`Room ${index}`}
              />
          </div>
        </Link>
      )
  ) : (
   
    <Link to={`/room/${crib.id}`}>
      <div>
        <img
          className="img-fluid"
          src={imageParDefaut}
          alt="Im"
          style={{ width: '100%', height: '100%' }}
        />
      </div>
    </Link>
  )}
</Carousel>





                  <Carousel showStatus={false} showArrows={false} showThumbs={false} dynamicHeight={false} useKeyboardArrows={false}>
                  {crib && crib.media && crib.media.some((media) => media.mime_type.startsWith('image')) ? (
                    crib.media
                      .filter((media) => media.mime_type.startsWith('image'))
                      .map((image, index) => (
                        <Link to={`/room/${crib.id}`} key={index}>
                          <div>
                            <LazyLoad height={200} offset={100}>
                              <img
                                className="img-fluid"
                                src={image.original_url}
                                alt={`Room ${index}`}
                                />
                              </LazyLoad>
                          </div>
                        </Link>
                      ))
                  ) : (
                  
                    <Link to={`/room/${crib.id}`}>
                      <div>
                        <img
                          className="img-fluid"
                          src={imageParDefaut}
                          alt="Im"
                          style={{ width: '100%', height: '100%' }}
                        />
                      </div>
                    </Link>
                  )}
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