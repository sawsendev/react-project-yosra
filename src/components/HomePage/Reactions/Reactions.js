import React from 'react'
import {IconsTable} from "../../../Data/Data"
import "./Reactions.css"

const Reactions = () => {
  return (
    <div>
       <ul className="list-icons-container">
            {IconsTable.map((icon, index) => {
              return (
                <>
                  <li key={index} className='list-icons'>
                      <img src= {icon.src} alt="icons"/>
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
