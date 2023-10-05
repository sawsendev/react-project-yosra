import React, { useState } from 'react';
import "./Search.css";
import Select from 'react-select';

import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const Search = () => {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [priceRange, setPriceRange] = useState([1, 1000]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [date, setDate] = useState("");
  const [sortBy, setSortBy] = useState(""); 
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // Parsez les paramètres de l'URL ici
    const searchParams = new URLSearchParams(location.search);
    const cityParam = searchParams.get('city');
    const dateParam = searchParams.get('date');
    const priceMinParam = searchParams.get('priceMin');
    const priceMaxParam = searchParams.get('priceMax');
    const sortByParam = searchParams.get('sortBy');

    // Mettez à jour l'état local avec les valeurs des paramètres de l'URL
    setSelectedCountry(cityParam || "");
    setDate(dateParam || "");
    setSortBy(sortByParam || "");

    // Mise à jour de l'état priceRange si priceMinParam et priceMaxParam existent
    if (priceMinParam && priceMaxParam) {
      setPriceRange([parseInt(priceMinParam), parseInt(priceMaxParam)]);
    }
  }, [location.search]);

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

  const handleSubmit = (e) => {
    e.preventDefault();
    const searchParams = new URLSearchParams();
    searchParams.append('city', selectedCountry);
    searchParams.append('date', date);
    searchParams.append('sortBy', sortBy);
    searchParams.append('priceMin', priceRange[0]); // Ajout de priceMin
    searchParams.append('priceMax', priceRange[1]); // Ajout de priceMax
  
    const url = `/searchcities?${searchParams.toString()}`;
    navigate(url);
  };
  
  const handleChangeDate = (e) => {
    setDate(e.target.value);
  };
  const handleChangeSortBy = (e) => {
    setSortBy(e.target.value);
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
                <select name="countries" id="countries-id" className='form-control' onChange={(e) => setSelectedCountry(e.target.value)} value={selectedCountry}>
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
                <input type="date" name="date" className='form-control' placeholder='Move in date' value={date} onChange={handleChangeDate} />
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
                      max={1000}
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
                <select name="price" id="countries-id" className='form-control' onChange={handleChangeSortBy} value={sortBy}>
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
