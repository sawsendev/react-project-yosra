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
      <div className='d-flex'>
      <div className='Cribes-icons-container'> 
          <ul className='row'>
            {CribesTable.map((cribe, index) => {
              return (
                <div className='col-lg-3 col-md-3 col-12'>
                  <li key={index}>
                    <div className='Item-badge'>
                      <Badge bg="success" className='notify-badge'>Available now</Badge>
                      <img src= {cribe.src[0].src_room} alt="icons"/>
                      </div>
                      <div>
                      <h3>{cribe.content}</h3>
                      <p>{cribe.adress}</p>
                      <p> {cribe.price}/ month</p></div>
                  </li>
                </div>
              );
            })}
            <h3>You don’t find what you are looking for? </h3>
            <button>Create un alert</button>

          </ul>
      </div>

      <div className='Maps'>
        <MapContainer/>
      </div>

      </div>
    </div>
  )
}

export default Cribes
