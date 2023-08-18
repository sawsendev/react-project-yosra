import React from 'react'
import {IconsTable} from "../../../Data/Data"
import "./Reactions.css"

const Reactions = () => {
  return (
    <div className='container'>
       <div className="row ms-auto py-2">
            {IconsTable.map((icon, index) => {
              return (
                <>
                  <div key={index} className='col-lg-3 col-6'>
                    <div className='row'>
                      <img className='col-auto' src= {icon.src} alt="icons"/>
                      <div className='col'>
                      <h3>{icon.count}</h3>
                      <p>{icon.content}</p></div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
    </div>
  )
}

export default Reactions
