import React, { useState } from 'react';
import './Search.css';
import { useSearch } from './SearchContext';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import { HiChevronDown } from "react-icons/hi2";
import { HiChevronUp } from "react-icons/hi2";
import { HiXMark } from "react-icons/hi2";


const Search = () => {
  const [selectedCountry, setselectedCountry] = useState("");
  const [priceRange, setPriceRange] = useState([1, 500]);
  const [isSliderVisible, setIsSliderVisible] = useState(false);
  const [isUpdateResultsClicked, setIsUpdateResultsClicked] = useState(false);

  const [date, setDate] = useState("");
  const [sortBy, setSortBy] = useState(""); 


  const navigate=useNavigate()

  const handlePriceRangeChange = (newPriceRange) => {
    setPriceRange(newPriceRange);
  };

  const toggleSliderVisibility = () => {
    setIsSliderVisible(!isSliderVisible);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Extract the values from the form fields
      const formData = {
        city: selectedCountry,
        minPrice: priceRange[0],
        maxPrice: priceRange[1],
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
      console.log('successful');
      console.log(searchResults);
    } catch (error) {
      console.error('Error during search:', error);
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
                <input type="date" name="date" className='form-control' placeholder='Move in date'  onChange={handleChangeDate} />
              </div>
            </div>

            <div className='Form-city col-lg-3 col-md-6 col-sm-12 p-0'>
              <label htmlFor="price">Price range</label>
              
              <div className='select-wrapper'>
                <div className='select-container'>
                  <div className='custom-select' onClick={toggleSliderVisibility}>
                    {isSliderVisible ? (
                      <>
                        <span>Price Range: {priceRange[0]}€ - {priceRange[1]}€</span>
                        <HiChevronUp />
                      </>
                    ) : (
                      <>
                        <span>Select a price range</span>
                        <HiChevronDown />
                      </>
                    )}
                  </div>
                </div>
                {isSliderVisible && (
                  <div className='slider-container container'>
                    <button className="close-price-slide" onClick={toggleSliderVisibility}>Clear All <HiXMark/></button>
                    <div className='price'>
                      <h5>Price per month</h5>
                      <Slider
                        min={1}
                        max={500}
                        value={priceRange}
                        onChange={handlePriceRangeChange}
                        range
                      />
                      <span className='price-range-input'><label>{priceRange[0]}€</label> <label>{priceRange[1]}€</label></span>
                    </div>
                  </div>
                )}
              </div>
            </div>
            
            <div className='Form-city col-lg-3 col-md-6 col-sm-12 p-0'>
              <label htmlFor="price">Sort by</label>
              <div className='input-select'>
                <select name="price" id="countries-id" className='form-control' onChange={handleChangeSortBy}>
                  <option value="" disabled>Sorted by</option>
                  <option value="desc">Descending price</option>
                  <option value="asc">Ascending price</option>
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