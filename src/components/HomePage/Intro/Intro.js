import React from 'react'
import "./Intro.css"

const Intro = () => {
  return (
    <div className='Intro-container d-block py-5 container-fluid mb-5'>
      <div className='Content-container'>
        <h3>we create beautiful spaces for communal living for you to</h3>
        <h2>discover, share, and make new friends</h2>
        <div className='Input-container d-flex justify-content-between'>
          <div className='input-group input-country'>
            <select name="countries" id="countries-id" className='Select-country-container w-100'>
                <option value="" selected>Where will you go ?</option>
                <option value="saab">Paris</option>
                <option value="mercedes">Paris</option>
                <option value="audi">Paris</option>
            </select>
          </div>
          <div className='input-group input-date'>
            <input type="date" name="dob" data-placeholder="Move in date" required aria-required="true" className='Select-country-container w-100'/>
          </div>
          <button className='Search-btn'>Search & book</button>
        </div>
      </div>
    </div>
  )
}

export default Intro
