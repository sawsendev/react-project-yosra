import React from 'react'
import "./ExploreMore.css"
import {ExploreCitiesTable} from "../../../Data/Data"
import room_icon from "../../../assets/Union 4 2.svg"


const ExploreMore = () => {
  return (
    <div className='Explore-container container'>
      <h2>Explore our cities</h2>
      <p>Located in several European cities, we offer premium accommodation for you to feel at home wherever you go</p>
      <div className="Explore-more-container row container">
            {ExploreCitiesTable.map((city, index) => {
              return (
                <>
                  <div key={index} className='Explore-more-countries col-lg-3 col-md-4 col-12 py-2'>
                      <div className='Pictures-countries'>
                      <img src= {city.src} alt="countries"/>

                      </div>
                      <div className='Explore-more-countries-container'>
                        <div className='Explore-more-countries-content'>                   
                           <h3>{city.city}</h3>
                           <div className='d-flex align-items-center Room-content'>
                            <img src={room_icon} alt='icon'/>
                           <p>{city.count} rooms</p>
                           </div>
                        </div>
                      </div>
                  </div>
                </>
              );
            })}
          </div>
    </div>
  )
}

export default ExploreMore
