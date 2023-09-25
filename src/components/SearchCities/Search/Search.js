import React, {useEffect, useState} from 'react'
import "./Search.css"
import PriceRangeSlider from  './PriceRangeSlider'
import Select from 'react-select';


const Search = () => {
const [selectedCountry, setselectedCountry]=useState("")
const [isSliderVisible, setIsSliderVisible] = useState(false);
const [isMenuOpen, setIsMenuOpen] = useState(false);
const [options, setOptions] = useState([]);
const [selectedOption, setSelectedOption] = useState(null);
const [priceRange, setPriceRange] = useState([1, 500]);
const handleToggleSlider = () => {
  setIsSliderVisible(!isSliderVisible);
};
const handleChange = (option) => {
  setSelectedOption(option);
};

const updateSelectedOption = (range) => {
  setSelectedOption({
    label: `${range[0]}€ - ${range[1]}€`, // Mise à jour de l'étiquette directement
    value: range.join('-')
  });
};
const handlePriceRangeChange = (newValue) => {
  setPriceRange(newValue);
  updateSelectedOption(newValue);
};


const updatePlaceholderText = () => {
  if (selectedOption) {
    return selectedOption.label; // Utilisez l'étiquette de l'option sélectionnée comme placeholder
  } else {
    return 'Select a price range';
  }
};

useEffect(() => {
  // Mettre à jour le placeholder chaque fois que selectedOption change
  const placeholderText = updatePlaceholderText();
  setSelectedOption({ ...selectedOption, placeholder: placeholderText });
}, [selectedOption]);
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
  noOptionsMessage: (base) => ({
    ...base,
    display: 'none' // Masquer le message "No options"
  }),
};


  const handleSelect=(e)=>{
      setselectedCountry(e.target.value)
      console.log(e.target.value)
  }
  const handleClearAll = () => {
    // Réinitialiser l'intervalle choisi à sa valeur par défaut
    setPriceRange([1, 500]);
    // Réinitialiser l'option sélectionnée à null
    setSelectedOption(null);
  };

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
  options={options}
  onChange={handleChange}
  value={selectedOption} // Utilisez directement selectedOption ici
  menuIsOpen={isMenuOpen}
  isSearchable={false}
  placeholder={updateSelectedOption}  // Utilisez directement selectedOption ici

/>

                </div>
                {isSliderVisible && (
                  <div className='slider-container container'>
                  <div className='price'>
                  <h5> Price per month</h5>
                  <div className='clear-icon' onClick={handleClearAll}>
                  <h6>Clear all</h6>
                  <svg xmlns="http://www.w3.org/2000/svg" height="11" viewBox="0 0 20 20" width="11">
                            <path d="M0 0h24v24H0z" fill="none"/>
                            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" fill="rgba(160, 169, 178, 1)"/>
                          </svg>
              </div>
              </div>
                    <PriceRangeSlider
                     value={priceRange}
                     onChange={handlePriceRangeChange} 
              />
        
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
