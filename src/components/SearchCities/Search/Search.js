import React from 'react'
import "./Search.css"


const Search = () => {
  return (
    <div className='Search-container'>
      <h3>Refine your search</h3>
       <div className='Form-cities'>
       <form>
       <div className='Form-city Select-country-container'>
          <label for="cars">City</label>
          <select name="countries" id="countries-id">
              <option value="Nice" selected>Nice</option>
              <option value="saab">Saab</option>
              <option value="mercedes">Mercedes</option>
              <option value="audi">Audi</option>
          </select>
        </div>


        <div className='Form-city Select-country-container'>
          <label for="cars">Move in date</label>
         <input type="date" name="dob" required/>
        </div>


        <div className='Form-city Select-country-container'>
          <label for="cars">Price range</label>
         <input type="text" placeholder='1€ - 500 €' required/>
         {/* <input type="range" required/> */}
        </div>




        <div className='Form-city Select-country-container'>
          <label for="cars">Sort by</label>
          <select name="countries" id="countries-id">
              <option value="Descending price" selected>Descending price</option>
              <option value="saab">Saab</option>
              <option value="mercedes">Mercedes</option>
              <option value="audi">Audi</option>
          </select>
        </div>
        <button className='Search-btn S-btn'>Update results</button>

    
       </form>
       </div>
    </div>
  )
}

export default Search
