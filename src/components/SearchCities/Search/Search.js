import React, {useState} from 'react'
import "./Search.css"
import PriceRangeSlider from  './PriceRangeSlider'
import Select from 'react-select';


const Search = () => {
const [selectedCountry, setselectedCountry]=useState("")
const [isSliderVisible, setIsSliderVisible] = useState(false);

const handleToggleSlider = () => {
  setIsSliderVisible(!isSliderVisible);
};

const customStyles = {
  control: (provided) => ({
    ...provided,
    backgroundColor: '#fff',
    border: '1px solid #ccc',
    cursor: 'pointer',
    margin: '0', // Ajoutez le style margin
    padding: '0px', // Ajoutez le style padding
  }),
  indicatorSeparator: (provided) => ({
    ...provided,
    display: 'none',
  }),
  dropdownIndicator: (provided) => ({
    ...provided,
    cursor: 'pointer',
  }),
};


  const handleSelect=(e)=>{
      setselectedCountry(e.target.value)
      console.log(e.target.value)
  }

  const emptyOptions = [];
  return (
    <div className='Search-container'>
       <div class="container">
      <h2>Refine your search</h2>
       <div className='Form-cities'>
       <form className='row justify-content-between gap-xl-3 gap-lg-2 gap-0 m-0 align-items-end'>
       <div className='Form-city col-lg-3 col-md-6 col-sm-12 p-0'>
          <label for="countries">City</label>
          <div className='input-select'>
            <select name="countries" id="countries-id" className='form-control' onChange={handleSelect} value={selectedCountry} >
                <option value="" selected disabled>Select your country</option>
                <option value="Nice">Nice</option>
                <option value="Paris">Paris</option>
                <option value="Canada">Canada</option>
                <option value="Tunisia">Tunisia</option>
            </select>
          </div>
        </div>


        <div className='Form-city col-lg-3 col-md-6 col-sm-12 p-0'>
          <label for="cars">Move in date</label>
          <div className='input-date'>
            <input type="date" name="date" className='form-control' required placeholder='Move in date'/>
          </div>
        </div>


        <div className='Form-city col-lg-3 col-md-6 col-sm-12 p-0'>
          <label for="cars">Price range</label>
        
        <div className='select-wrapper'>
                <div className='select-container'>
                  <Select
                    styles={customStyles}
                    onMenuOpen={handleToggleSlider}
                    options={emptyOptions} // Liste vide d'options
                    isSearchable={false} // Désactiver la recherche
                  />
                </div>
                {isSliderVisible && (
                  <div className='slider-container container'>
                   <h5> Price per month</h5>
                    <PriceRangeSlider />
                  </div>
                )}
              </div>
    </div>






        <div className='Form-city col-lg-3 col-md-6 col-sm-12 p-0'>
          <label for="price">Sort by</label>
          <div className='input-select'>
            <select name="price" id="countries-id" className='form-control'>
                <option value="" selected disabled>Sorted by</option>
                <option value="descending">Descending price</option>
                <option value="ascending" >Ascending price</option>              
            </select>
          </div>
        </div>

        <div className='form-search-btn col-lg-2 col-md-6 col-sm-12 p-0'>
          <button className='Search-cribs-btn '>Update results</button>
        </div>
    
       </form>
       </div>
       </div>
    </div>
  )
}

export default Search
