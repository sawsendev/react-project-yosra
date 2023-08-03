import React from 'react'
import "./ExploreMore.css"
import {ExploreCitiesTable} from "../../../Data/Data"


const ExploreMore = () => {
  return (
    <div className='Explore-container'>
      <h2>Explore our cities</h2>
      <p>Located in several European cities, we offer premium accommodation for you to feel at home wherever you go</p>
      <ul className="Explore-more-container-ul">
            {ExploreCitiesTable.map((city, index) => {
              return (
                <>
                  <li key={index} className='Explore-more-icons-li'>
                      <img src= {city.src} alt="icons"/>
                      <div className='Explore-more-icons-container'>
                        <div className='Explore-more-icons-content'>                   
                           <h3>{city.city}</h3>
                           <p>{city.count} rooms</p>
                        </div>
                      </div>
                  </li>
                </>
              );
            })}
          </ul>
    </div>
  )
}

export default ExploreMore
