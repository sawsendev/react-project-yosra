import React from 'react'
import "./Intro.css"

const Intro = () => {
  return (
    <div className='Intro-container container-fluid'>
      <div className='Content-container'>
        <h3>we create beautiful spaces for communal living for you to</h3>
        <h2>discover, share, and make new friends</h2>
        <div className='Input-container'>
          <div className='List-select'>
          <select name="countries" id="countries-id" className='Select-country-container'>
              <option value="" selected>Where will you go ?</option>
              <option value="saab">Saab</option>
              <option value="mercedes">Mercedes</option>
              <option value="audi">Audi</option>
          </select>
          </div>
          <div className='Movie-date'>
         <input type="date" name="dob" data-placeholder="Move in date" required aria-required="true" className='Select-country-container'/>
          </div>
          <div>
            <button className='Search-btn'>Search & book</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Intro
