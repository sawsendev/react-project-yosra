import React, { useState, useEffect } from 'react';
import "./Search.css";
import PriceRangeSlider from './PriceRangeSlider';
import Select from 'react-select';

const Search = () => {
  const [selectedCountry, setselectedCountry] = useState("");
  const [isSliderVisible, setIsSliderVisible] = useState(false);
  const [priceRange, setPriceRange] = useState([1, 500]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Nouveau state pour gérer la valeur de l'input du Select
  const [selectedPriceRangeLabel, setSelectedPriceRangeLabel] = useState("1€ - 500€");

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

  const handleToggleSlider = () => {
    setIsSliderVisible(!isSliderVisible);
  };

  const handlePriceRangeChange = (newValue) => {
    setPriceRange(newValue);

    // Mise à jour de la valeur de l'input du Select lorsque la plage de prix change
    const priceRangeLabel = `${newValue[0]}€ - ${newValue[1]}€`;
    setSelectedPriceRangeLabel(priceRangeLabel);
  };

  const handleSelectChange = (selectedOption) => {
    // Lorsque l'utilisateur sélectionne une option dans le Select,
    // nous ne faisons rien ici, nous laissons React Select gérer la sélection de l'option.
  };

  useEffect(() => {
    // Mettre à jour la valeur de l'input du Select lorsque la plage de prix change
    const priceRangeLabel = `${priceRange[0]}€ - ${priceRange[1]}€`;
    setSelectedPriceRangeLabel(priceRangeLabel);
  }, [priceRange]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Formulaire soumis avec les valeurs suivantes :');
    console.log('Selected Country:', selectedCountry);
    console.log('Selected Price Range:', priceRange);
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
                    onMenuOpen={handleToggleSlider}
                    onMenuClose={handleToggleSlider}
                    options={[]}
                    onChange={handleSelectChange}
                    menuIsOpen={isMenuOpen}
                    value={{ label: selectedPriceRangeLabel, value: priceRange.join('-') }}
                    isSearchable={false}
                    placeholder="Select a price range"
                  />
                </div>
                {isSliderVisible && (
                  <div className='slider-container container'>
                    <div className='price'>
                      <h5> Price per month</h5>
                      <PriceRangeSlider
                        value={priceRange}
                        onChange={handlePriceRangeChange}
                      />
                    </div>
                  </div>
                )}
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
