import React from 'react'
// import "./Search.scss"
import "./Search.css"


const Search = () => {
  return (
    <div className='Search-container'>
      <h3>Refine your search</h3>
       <div className='Form-cities'>
       <form>
          <label for="cars">City</label>
              <select name="cars" id="cars">
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
              </select>
          <label for="date">Move in date</label><br></br>
          <input type="date" id="date"/><br></br>
          <label for="range">Price range</label><br></br>
          <input type="range" min="0" max="40" id='range'/><br></br>
          <label for="cars">Sorted by</label>
              <select name="cars" id="cars">
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
              </select>
          <input type="submit" value="Update results"/>


          {/* ***************** */}



{/* 
          <div id="debt-amount-slider">
			<input type="radio" name="debt-amount" id="1" value="1" required/>
			<label for="1" data-debt-amount="< $10k"></label>
			<input type="radio" name="debt-amount" id="2" value="2" required/>
			<label for="2" data-debt-amount="$10k-25k"></label>
			<input type="radio" name="debt-amount" id="3" value="3" required/>
			<label for="3" data-debt-amount="$25k-50k"></label>
			<input type="radio" name="debt-amount" id="4" value="4" required/>
			<label for="4" data-debt-amount="$50k-100k"></label>
			<input type="radio" name="debt-amount" id="5" value="5" required/>
			<label for="5" data-debt-amount="$100k+"></label>
			<div id="debt-amount-pos"></div>
		</div> */}

    
       </form>
       </div>
    </div>
  )
}

export default Search
