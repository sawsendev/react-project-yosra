import React from 'react'
import "./Intro.css"

const Intro = () => {
  return (
    <div className='Intro-container container-fluid'>
      <div className='Content-container'>
        <h3>we create beautiful spaces for communal living for you to</h3>
        <h2>discover, share, and make new friends</h2>
        <div className='Input-container row'>
          <select name="countries" id="countries-id" className='Select-country-container col-lg-4 me-2'>
              <option value="" selected>Where will you go ?</option>
              <option value="saab">Paris</option>
              <option value="mercedes">Paris</option>
              <option value="audi">Paris</option>
          </select>
         <input type="date" name="dob" data-placeholder="Move in date" required aria-required="true" className='Select-country-container me-2 col-lg-4'/>
            <button className='Search-btn col-lg-4'>Search & book</button>
        </div>
      </div>
    </div>
  )
}

export default Intro
