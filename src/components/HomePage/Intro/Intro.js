import React, { useState } from 'react'
import "./Intro.css"
import { useNavigate } from 'react-router-dom'
import SelectCity from '../../SelectCity/SelectCity';
import calendarIcon from '../../../assets/calendar.svg'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { format } from 'date-fns';
const Intro = () => {
  const[city,setCity]=useState('');
  const[date,setDate]=useState('');
  
  const handleCustomInputInChange = (date) => {
    setDate(date);
  };
  const handleMoveInDateChange = (date) => {
    if (date) {
      setDate(date); // Stockez la date telle quelle
    }
  };
  const CustomInput = ({ value, onClick, onChange, name }) => (
    <div className="input-datepicker" onClick={onClick}>
      <input
        type="text"
        name={name}
        className='Select-country-container w-100'
        value={value}
        placeholder="Move in date"
        required
        readOnly
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
    const searchParams = new URLSearchParams({ city, date: formattedDate }).toString();
    const url = `/search-cities?${searchParams}`;
    navigate(url);
  };
  
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1); 

  return (
    <div className='Intro-container d-block py-md-5 py-4 container-fluid mb-md-5 mb-4'>
      <div className='Content-container'>
        <h1>we create beautiful spaces for communal living for you to</h1>
        <h2>discover, share, and make new friends</h2>
        <div className='Input-container d-flex justify-content-between'>
          <div className='input-group input-country'>
         <SelectCity text='Where will you go?' onChange={(selectedValue) => setCity( selectedValue.value)} />
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
