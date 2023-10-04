import React, { useState } from 'react';
import "./Search.css";
import Select from 'react-select';
import { useSearch } from './SearchContext';

const Search = () => {
  const [selectedCountry, setselectedCountry] = useState("");
  const [priceRange, setPriceRange] = useState([1, 500]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUpdateResultsClicked, setIsUpdateResultsClicked] = useState(false);

  const { setSearchResults } = useSearch();
  const API_KEY = 'a2b18f9cfb72eb93f3ce6b1c30372b59';

  const customStyles = {
    control: (provided) => ({
      ...provided,
      backgroundColor: '#fff',
      border: '1px solid #ccc',
      cursor: 'pointer',
      margin: '0',
      padding: '0px',
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
      display: 'none'
    }),
  };

  const handlePriceRangeChange = (newValue) => {
    setPriceRange(newValue);
  };

  const formatPriceRangeLabel = (priceRange) => {
    return `${priceRange[0]}€ - ${priceRange[1]}€`;
  };

  const selectValue = { label: formatPriceRangeLabel(priceRange), value: `${priceRange[0]}-${priceRange[1]}` };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Extraire les valeurs des champs du formulaire
      const formData = {
        city: selectedCountry, 
      };
  
      
      const response = await fetch('http://dev.niceroom.sofis-info.com/api/lots/search', {
        method: 'POST',
        headers: {
          'apiKey': `${API_KEY}`,
          'Content-Type': 'application/json', 
        },
        body: JSON.stringify(formData), 
      });
      const searchResults = await response.json();
      setSearchResults(searchResults);
      setIsUpdateResultsClicked(true);
      console.log('successful')
      console.log(searchResults)
    } catch (error) {
      console.error('Erreur lors de la recherche :', error);
    }
  };
  


  return (
    <div className='Search-container'>
      <div className="container">
        <h2>Refine your search</h2>
        <div className='Form-cities'>
          <form className='row justify-content-between gap-xl-3 gap-lg-2 gap-0 m-0 align-items-end' onSubmit={handleSubmit}>
            <div className='Form-city col-lg-3 col-md-6 col-sm-12 p-0'>
              <label htmlFor="countries">City</label>
              <div className='input-select'>
                <select name="countries" id="countries-id" className='form-control' onChange={(e) => setselectedCountry(e.target.value)} value={selectedCountry}>
                  <option value="" disabled>Select your country</option>
                  <option value="Nice">Nice</option>
                  <option value="Paris">Paris</option>
                  <option value="Canada">Canada</option>
                  <option value="Tunisia">Tunisia</option>
                </select>
              </div>
            </div>

            <div className='Form-city col-lg-3 col-md-6 col-sm-12 p-0'>
              <label htmlFor="cars">Move in date</label>
              <div className='input-date'>
                <input type="date" name="date" className='form-control' required placeholder='Move in date' />
              </div>
            </div>

            <div className='Form-city col-lg-3 col-md-6 col-sm-12 p-0'>
              <label htmlFor="price">Price range</label>
              <div className='select-wrapper'>
                <div className='select-container'>
                  <Select
                    styles={customStyles}
                    onMenuOpen={() => setIsMenuOpen(true)}
                    onMenuClose={() => setIsMenuOpen(false)}
                    options={[]}
                    onChange={() => {}}
                    menuIsOpen={isMenuOpen}
                    value={selectValue}
                    isSearchable={false}
                    placeholder="Select a price range"
                  />
                </div>
                <div className='slider-container container'>
                  <div className='price'>
                    <h5> Price per month</h5>
                    <input
                      type="range"
                      min={1}
                      max={500}
                      value={priceRange[1]}
                      onChange={(e) => handlePriceRangeChange([priceRange[0], Number(e.target.value)])}
                    />
                    <span>{formatPriceRangeLabel(priceRange)}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className='Form-city col-lg-3 col-md-6 col-sm-12 p-0'>
              <label htmlFor="price">Sort by</label>
              <div className='input-select'>
                <select name="price" id="countries-id" className='form-control'>
                  <option value="" disabled>Sorted by</option>
                  <option value="descending">Descending price</option>
                  <option value="ascending">Ascending price</option>
                </select>
              </div>
            </div>

            <div className='form-search-btn col-lg-2 col-md-6 col-sm-12 p-0'>
              <button className='Search-cribs-btn' type='submit'>Update results</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Search;
