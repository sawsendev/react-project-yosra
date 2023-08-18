import React, {useState} from 'react'
import "./Search.css"


const Search = () => {
const [selectedCountry, setselectedCountry]=useState("")
  const handleSelect=(e)=>{
      setselectedCountry(e.target.value)
      console.log(e.target.value)
  }


  return (
    <div className='Search-container'>
      <h3>Refine your search</h3>
       <div className='Form-cities container'>
       <form className='row'>
       <div className='Form-city col-lg-3 col-md-6 col-sm-12'>
          <label for="countries">City</label>
          <select name="countries" id="countries-id" onChange={handleSelect} value={selectedCountry} >
              <option value="" selected disabled>Select your country</option>
              <option value="Nice">Nice</option>
              <option value="Paris">Paris</option>
              <option value="Canada">Canada</option>
              <option value="Tunisia">Tunisia</option>
          </select>
        </div>


        <div className='Form-city col-lg-2 col-md-6 col-sm-12 mx-2'>
          <label for="cars">Move in date</label>
         <input type="date" name="date" required placeholder='Move in date'/>
        </div>


        <div className='Form-city col-lg-2 col-md-6 col-sm-12'>
          <label for="cars">Price range</label>
         <input type="text" placeholder='1€ - 500 €' required/>
         {/* <input type="range" required/> */}
        </div>


        <div className='Form-city col-lg-2 col-md-6 col-sm-12 mx-2'>
          <label for="price">Sort by</label>
          <select name="price" id="countries-id">
              <option value="" selected disabled>Sorted by</option>
              <option value="descending">Descending price</option>
              <option value="ascending" >Ascending price</option>              
          </select>
        </div>


        <button className='Search-cribs-btn col-lg-2 col-md-6 col-sm-12'>Update results</button>

    
       </form>
       </div>
    </div>
  )
}

export default Search
