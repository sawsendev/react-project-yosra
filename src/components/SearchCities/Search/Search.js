import React, { useState } from 'react';
import "./Search.css";
import Select from 'react-select';
import calendarIcon from '../../../assets/calendar.svg'
import loop from '../../../assets/Vector.svg'
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import SelectCity from './SelectCity/SelectCity';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { format } from 'date-fns';
import { parse } from 'date-fns';
import { AiOutlineClose } from 'react-icons/ai';



const Search = () => {
  const API_KEY = 'a2b18f9cfb72eb93f3ce6b1c30372b59';
  const API_URL = `https://admin.finecribs.com/api/lot/maxprice`;
  const [lotData, setLotData] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [date, setDate] = useState("");
  const [sortBy, setSortBy] = useState("");
  const location = useLocation();
  const [isSliderOpen, setIsSliderOpen] = useState(false)
  const [city, setCity] = useState("")
  const [isSliderVisible, setIsSliderVisible] = useState(false);
  const [keyWord, setKeyWord] = useState("")
  const [active, setActive] = useState(true)


  const handleSliderOpen = () => {
    setIsSliderVisible(true);
  };

  const handleSliderClose = () => {
    if (isSliderVisible) {
      setIsSliderVisible(false);
    } else {
      setIsSliderOpen(false);
    }
  };

  const navigate = useNavigate()



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

  const CustomInput = ({ value, onClick, onChange, name }) => (
    <div className="input-datepicker" onClick={onClick}>
      <input
        type="text"
        name={name}
        className='form-control'
        placeholder='Move in date'
        value={value}
        onChange={onChange}
      />
      <span className="calendar-icon">
        <img src={calendarIcon} alt="Calendar" />
      </span>
    </div>
  );
  const handleChangeSortBy = (e) => {
    setSortBy(e.target.value);
  };
  const handleKeyWordChange = (e) => {
    const newKeyword = e.target.value;
    setKeyWord(newKeyword);

    if (newKeyword.trim() === '') {
      setActive(true);
    } else {
      setActive(false);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const headers = {
          'apiKey': API_KEY,
        };

        const response = await fetch(API_URL, { method: 'GET', mode: 'cors', headers });
        if (!response.ok) {
          throw new Error('Response not OK');
        }

        const data = await response.json();
        setLotData(data.data.lot);



      } catch (error) {
        console.error('Erreur lors de la récupération des données :', error);
      }
    };

    fetchData();
  }, [API_URL, API_KEY]);

  const [max, setMax] = useState(2000)
  const [priceRange, setPriceRange] = useState([0, max]);

  useEffect(() => {
    // Calculer max après la récupération des données
    const loyerHc = lotData && lotData.loyer_hc ? parseInt(lotData.loyer_hc, 10) : 0;
    const charges = lotData && lotData.charges ? parseInt(lotData.charges, 10) : 0;

    // Mettre à jour max seulement si le prix de l'API est supérieur à la valeur actuelle
    if (loyerHc + charges > max) {
      setMax(loyerHc + charges);

    }

    // Mettre à jour priceRange avec la nouvelle valeur de max

  }, [lotData, max]);




  useEffect(() => {
    // Mettre à jour priceRange avec la nouvelle valeur de max
    setPriceRange([0, max]);
  }, [max]);




  useEffect(() => {
    // Parsez les paramètres de l'URL ici
    const searchParams = new URLSearchParams(location.search);
    const cityParam = searchParams.get('city');
    const dateParam = searchParams.get('date');
    const priceMinParam = searchParams.get('priceMin');
    const priceMaxParam = searchParams.get('priceMax');
    const sortByParam = searchParams.get('sortBy');
    const keyWordParam = searchParams.get('keyWord')

    if (keyWord) {
      setCity(keyWordParam);
    }
    // Mettez à jour l'état local avec les valeurs des paramètres de l'URL
    if (cityParam) {
      setCity(cityParam);
    }
    setDate(dateParam ? parse(dateParam, 'yyyy-MM-dd', new Date()) : "");
    setSortBy(sortByParam || "");

    // Mise à jour de l'état priceRange si priceMinParam et priceMaxParam existent
    if (priceMinParam && priceMaxParam) {
      setPriceRange([parseInt(priceMinParam), parseInt(priceMaxParam)]);
    }
    if (priceMaxParam && priceMinParam) {
      const parsedMax = parseInt(priceMaxParam);
      const parcedMin = parseInt(priceMinParam)
      setPriceRange([parcedMin, parsedMax]);
    }
  }, [location.search]);
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

    searchParams.append('city', city);


    if (date) {
      searchParams.append('date', format(date, 'yyyy-MM-dd'));
    }
    searchParams.append('sortBy', sortBy);
    searchParams.append('priceMin', priceRange[0]);
    searchParams.append('priceMax', priceRange[1]);


    const url = `/search-cities?${searchParams.toString()}`;
    navigate(url);
    window.location.reload();
  };
  const handleSubmit2 = (e) => {
    e.preventDefault();
    const searchParams = new URLSearchParams();
    if (keyWord) {
      searchParams.append('keyword', keyWord)
    }

    const url = `/search-cities?${searchParams.toString()}`;
    navigate(url);
    window.location.reload();

  }

  const handleIconClick = () => {
    setIsSliderVisible(false);
  };


  const handleCustomInputInChange = (date) => {
    setDate(date || null);
  };
  const handleMoveInDateChange = (date) => {

    setDate(date || null);

  };

  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);

  const handleSliderClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div className='Search-container'>
      <div className="container">
        <h2>Refine your search</h2>
        <div className='Form-cities'>
          <form className='' onSubmit={handleSubmit}>
            <div className={`row justify-content-between gap-lg-2 gap-0 m-0 align-items-end ${!active ? 'disabled' : ''}`}>
              <div className='Form-city col-lg-3 col-md-6 col-sm-12 p-0'>
                <label htmlFor="countries">City</label>
                <div className='input-select'>
                  <SelectCity text='Where will you go?'
                    onChange={(selectedValue) => { setCity(selectedValue.value); }}
                    city={city}
                    alert={true}

                  />

                  <input type="hidden" name="city" value={city} id="city-input" />
                </div>
              </div>

              <div className='Form-city col-lg-3 col-md-6 col-sm-12 p-0'>
                <label htmlFor="cars">Move in date</label>
                <div className='input-date'>
                  <DatePicker
                    selected={date}
                    name="date"
                    dateFormat="dd/MM/yyyy"
                    onChange={handleMoveInDateChange}
                    customInput={
                      <CustomInput
                        value={date}
                        onChange={handleCustomInputInChange}
                        name="date"

                      />
                    }
                    minDate={tomorrow}
                  />

                </div>
              </div>

              <div className='Form-city col-lg-3 col-md-6 col-sm-12 p-0'>
                <label htmlFor="price">Price range</label>

                <div className='select-wrapper'>
                  <div className='select-container'>
                    <Select
                      styles={customStyles}
                      onMenuOpen={handleSliderOpen}
                      options={[]}
                      onChange={() => { }}
                      value={selectValue}
                      isSearchable={false}
                      placeholder="Select a price range"
                      closeMenuOnSelect={false}
                      isDisabled={isSliderVisible} // Désactive le Select lors de l'ouverture du slider
                    />
                  </div>

                  {isSliderVisible && (
                    <div className='slider-container container'>
                      <div className='d-flex flex-row-reverse flex-wrap align-content-center justify-content-between'>
                        <AiOutlineClose className='close-icon' onClick={() => setIsSliderVisible(false)} />
                        <h5>Price per month</h5>
                      </div>
                      <div className='price'>
                        <Slider
                          min={0}
                          max={max}
                          value={priceRange}
                          onChange={handlePriceRangeChange}
                          range
                        />
                      </div>
                      <div>
                        <span className='price-range-input'>
                          <label>{priceRange[0]}€</label>
                          <label>{priceRange[1]}€</label>
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className='Form-city col-lg-3 col-md-6 col-sm-12 p-0'>
                <label htmlFor="price">Sort by</label>
                <div className='input-select'>
                  <select name="price" id="countries-id" className='form-control' onChange={handleChangeSortBy} value={sortBy} disabled={!active}>
                    <option value="">Sorted by</option>
                    <option value="desc">Descending price</option>
                    <option value="asc">Ascending price</option>
                    <option value="av">Availability</option>
                  </select>
                </div>
              </div>

              <div className="form-search-btn col-lg-2 col-md-6 col-sm-12 p-md-0 d-flex flex-row-reverse">
                <button className='Search-cribs-btn' type='submit'>Update results</button>
              </div>
            </div>
            <div className='Form-city mt-4'>
              <div className='d-md-flex flex-row align-items-center justify-content-start gap-2'>
                <label>Keyword Search</label>
                <div className='input-keyword'>
                  <input
                    type="text"
                    name="KeyWord"
                    value={keyWord}
                    className='form-control'
                    placeholder='Keyword'
                    onChange={handleKeyWordChange}
                  />
                  <span className='vertical-line'></span>
                  <span className="calendar-icon" onClick={handleSubmit2}>
                    <img src={loop} alt="loop" className='loop' />
                  </span>
                </div>
              </div>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default Search;