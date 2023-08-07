import React from 'react'
import {CribesTable} from "../../../Data/Data"


const Cribes = () => {

  return (
    <div className='Cribes-container'>
      <h3>Our cribs in Nice</h3>
      <h5>Nice</h5>
      <div className='Cribes'> 
          <ul className="list-icons-container-ul">
            {CribesTable.map((cribe, index) => {
              return (
                <>
                  <li key={index} className='Reasons-icons-li'>
                      <img src= {cribe.src} alt="icons"/>
                      <div className='Reasons-icons-container'>
                      <h3>{cribe.content}</h3>
                      <p>{cribe.adress}</p>
                      <p> {cribe.price}/ month</p></div>
                  </li>
                </>
              );
            })}
            <h3>You don’t find what you are looking for? </h3>
            <button>Create un alert</button>

          </ul>
          <div className='Maps'>

          </div>
        </div>
    </div>
  )
}

export default Cribes
