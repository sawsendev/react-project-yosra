import React from 'react'
import {IconsTable} from "../../../Data/Data"
import "./Reactions.css"

const Reactions = () => {
  return (
    <div className='reactions-block container mb-5'>
       <div className="row py-2">
            {IconsTable.map((icon, index) => {
              return (
                <>
                  <div key={index} className='col-lg-3 col-6'>
                  {index === 0 && (
                        <>
                          <div className='row justify-content-start'>
                            <img className='col-auto' src= {icon.src} alt="icons"/>
                            <div className='col-auto'>
                            <h3>{icon.count}</h3>
                            <p>{icon.content}</p></div>
                          </div>
                        </>
                  )}
                  {index === 1 && (
                        <>
                          <div className='row justify-content-center'>
                            <img className='col-auto' src= {icon.src} alt="icons"/>
                            <div className='col-auto'>
                            <h3>{icon.count}</h3>
                            <p>{icon.content}</p></div>
                          </div>
                        </>
                  )}
                  {index === 2 && (
                        <>
                          <div className='row justify-content-center'>
                            <img className='col-auto' src= {icon.src} alt="icons"/>
                            <div className='col-auto'>
                            <h3>{icon.count}</h3>
                            <p>{icon.content}</p></div>
                          </div>
                        </>
                  )}
                  {index === 3 && (
                        <>
                          <div className='row justify-content-end'>
                            <img className='col-auto' src= {icon.src} alt="icons"/>
                            <div className='col-auto'>
                            <h3>{icon.count}</h3>
                            <p>{icon.content}</p></div>
                          </div>
                        </>
                  )}
                   
                  </div>
                </>
              );
            })}
          </div>
    </div>
  )
}

export default Reactions
