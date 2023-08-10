import React from 'react'
import {IconsTable} from "../../../Data/Data"
import "./Reactions.css"

const Reactions = () => {
  return (
    <div className='container'>
       <div className="list-icons-container row py-3">
            {IconsTable.map((icon, index) => {
              return (
                <>
                  <div key={index} className='col-lg-3 col-md-4 col-sm-6 col-12 p-3 d-flex'>
                      <img src= {icon.src} alt="icons"/>
                      <div></div>
                      <div className='Icons-container'>
                      <h3>{icon.count}</h3>
                      <p>{icon.content}</p></div>
                  </div>
                </>
              );
            })}
          </div>
    </div>
  )
}

export default Reactions
