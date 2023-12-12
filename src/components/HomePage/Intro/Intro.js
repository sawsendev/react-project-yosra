import React, { useState } from 'react'
import "./Intro.css"
import { useNavigate } from 'react-router-dom'
import SelectCity from '../../SearchCities/Search/SelectCity/SelectCity';
import calendarIcon from '../../../assets/calendar.svg'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { format } from 'date-fns';
const Intro = ({backgroundImage}) => {
  const[city,setCity]=useState('');
  const[date,setDate]=useState(''); 
  
  const handleCustomInputInChange = (date) => {
    setDate(date||null);
  };
  const handleMoveInDateChange = (date) => {
 
      setDate(date||null); // Stockez la date telle quelle
    
  };
  const CustomInput = ({ value, onClick, onChange, name }) => (
    <div className="input-datepicker" onClick={onClick}>
      <input
        type="text"
        name={name}
        className='Select-country-container w-100'
        value={value}
        placeholder="Move in date"
       
        onChange={onChange}
      />
      <span className="calendar-icon">
        <img src={calendarIcon} alt="Calendar" />
      </span>
    </div>
  );
 
  const navigate=useNavigate()
  
   
  const handleClick = () => {
    const formattedDate = date ? format(new Date(date), 'yyyy-MM-dd') : '';
    const searchParams = new URLSearchParams({ city });
  
    // Ajouter la date uniquement si elle n'est pas vide
    if (formattedDate) {
      searchParams.append('date', formattedDate);
    }
  
    const url = `/search-cities?${searchParams.toString()}`;
    navigate(url);
  };
  
  
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1); 

  return (
    <div className='Intro-container d-block py-md-5 py-4 container-fluid mb-md-5 mb-4'  style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className='Content-container'>
        <h1>We create beautiful spaces designed for communal living where you can </h1>
        <h2>connect, explore and make new friends</h2>
        <div className='Input-container d-flex justify-content-between'>
          <div className='input-group input-country'>
         <SelectCity text='Where will you go?' onChange={(selectedValue) => setCity( selectedValue.value)} alert={true}/>
          </div>
          <div className='input-group'> 
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
          <button className='Search-btn' onClick={handleClick}>Search & book</button>
        </div>
      </div>
    </div>
  )
}

export default Intro
