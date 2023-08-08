import React from 'react'
import {IconsTable} from "../../../Data/Data"
import "./Reactions.css"

const Reactions = () => {
  return (
    <div className='container-fluid'>
       <ul className="list-icons-container row d-flex">
            {IconsTable.map((icon, index) => {
              return (
                <>
                  <li key={index} className='list-icons col-lg-3 col-md-4 col-6'>
                      <img src= {icon.src} alt="icons"/>
                      <div></div>
                      <div className='Icons-container'>
                      <h3>{icon.count}</h3>
                      <p>{icon.content}</p></div>
                  </li>
                </>
              );
            })}
          </ul>
    </div>
  )
}

export default Reactions
