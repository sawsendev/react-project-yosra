import React from 'react'
import {CribesTable} from "../../../Data/Data"
import "./Cribes.css"
import Badge from 'react-bootstrap/Badge';
import MapContainer from '../MapContainer/MapContainer';



const Cribes = () => {

  return (
    <div className='Cribes-container container-fluid'>
      <h3>Our cribs in Nice</h3>
      <h5>Nice</h5>
      <div className='row'>
        <div className='col-lg-7'> 
            <ul className='row'>
              {CribesTable.map((cribe, index) => {
                return (
                  <li className='col-lg-4 col-md-3 col-12'>
                    <div key={index}>
                      <div className='Item-badge'>
                        <Badge bg="success" className='notify-badge'>Available now</Badge>
                        <img class="img-fluid" src= {cribe.src[0].src_room} alt="photo_fine_cribs"/>
                        </div>
                        <div>
                        <h3>{cribe.content}</h3>
                        <p>{cribe.adress}</p>
                        <p> {cribe.price}/ month</p></div>
                    </div>
                  </li>
                );
              })}
            </ul>
        </div>
        <div className='Maps col-lg-5'>
          <MapContainer/>
        </div>
      </div>
      <h3>You don’t find what you are looking for? </h3>
              <button>Create un alert</button>
    </div>
  )
}

export default Cribes
