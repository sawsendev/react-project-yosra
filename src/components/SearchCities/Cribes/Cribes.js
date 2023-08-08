import React from 'react'
import {CribesTable} from "../../../Data/Data"
import "./Cribes.css"
import map from "../../../assets/Image 10 1.svg"

const Cribes = () => {

  return (
    <div className='Cribes-container container-fluid'>
      <h3>Our cribs in Nice</h3>
      <h5>Nice</h5>
      <div className='d-flex justify-content-between'>
      <div className='Cribes-icons-container row'> 
          <ul className='col-lg-7 col-md-4 col-12'>
            {CribesTable.map((cribe, index) => {
              return (
                <>
                  <li key={index}>
                      <img src= {cribe.src} alt="icons"/>
                      <div>
                      <h3>{cribe.content}</h3>
                      <p>{cribe.adress}</p>
                      <p> {cribe.price}/ month</p></div>
                  </li>
                </>
              );
            })}
          </ul>

          <div className='Alerte-cribes'>
              <h3>You don’t find what you are looking for? </h3>
              <button className='Search-btn Cribes-btn'>Create un alert</button>
            </div>
      </div>

      <div className='Maps col-lg-5'>
        <img src={map} alt='map'></img>
      </div>

      </div>
    </div>
  )
}

export default Cribes
