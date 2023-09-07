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
      <h3>Our cribs in Nice</h3>
      <h5>Nice</h5>
      <div className='row'>
        <div className='col-lg-7'> 
            <ul className='row Rooms-cribes'>
              {CribesTable.map((cribe, index) => {
                return (
                  <li className='col-lg-4 col-md-6 col-12'>
                    <div key={index}>
                      <div className='Item-badge'>
                        <Badge className='notify-badge'>Available now</Badge>
                        <img class="img-fluid" src= {cribe.src[0].src_room} alt="photo_fine_cribs"/>
                      </div>
                      <div className='Rooms-content'>
                        <h3>{cribe.content}</h3>
                        <div className='d-flex'>
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
      <AlertCribes className="alert"/>
    </div>
  )
}

export default Cribes
