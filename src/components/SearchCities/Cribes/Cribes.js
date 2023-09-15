import React from 'react'
import {CribesTable} from "../../../Data/Data"
import "./Cribes.css"
import Badge from 'react-bootstrap/Badge';
// import MapContainer from '../MapContainer/MapContainer';
import  locationIcon  from '../../../assets/pin 2.svg';
import AlertCribes from '../AlertCribes/AlertCribes';




const Cribes = () => {

  return (
    <div className='Cribes-container container-fluid'>
      <h2>Our cribs in Nice</h2>
      <h5>Nice</h5>
      <div className='content-page'>
        <div className='row'>
          <div className='col-lg-7'> 
              <ul className='row Rooms-cribes'>
                {CribesTable.map((cribe, index) => {
                  return (
                    <li className='col-lg-4 col-md-6 col-12'>
                      <div key={index} className='item-cribe'>
                        <div className='Item-badge'>
                          <Badge className='notify-badge'>Available now</Badge>
                          <img class="img-fluid" src= {cribe.src[0].src_room} alt="photo_fine_cribs"/>
                        </div>
                        <div className='Rooms-content'>
                          <h3>{cribe.content}</h3>
                          <div className='d-flex mb-1'>
                            <img src={locationIcon} alt="location icon"></img>
                            <p>{cribe.adress}</p>
                          </div>
                          <span> {cribe.price}/ month</span>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
          </div>
          <div className='Maps col-lg-5'>

          </div>
        </div>
        <div className='maps-block'>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d92299.17724850951!2d7.1704107912588055!3d43.70328975790311!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12cdd0106a852d31%3A0x40819a5fd979a70!2sNice%2C%20France!5e0!3m2!1sen!2stn!4v1694711910064!5m2!1sen!2stn" width="742" height="765" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>

      <AlertCribes className="alert"/>
    </div>
  )
}

export default Cribes
