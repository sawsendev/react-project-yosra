import React, { useState } from 'react'
import "./Intro.css"
import { useNavigate } from 'react-router-dom'
import SelectCity from '../../SelectCity/SelectCity';

const Intro = () => {
  const[city,setCity]=useState('');
  const[date,setDate]=useState('');
  
  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const navigate=useNavigate()
  
  const handleClick=()=>{
    const searchParams = new URLSearchParams({ city, date }).toString();
    const url = `/search-cities?${searchParams}`;
    navigate(url)
  }
  return (
    <div className='Intro-container d-block py-md-5 py-4 container-fluid mb-md-5 mb-4'>
      <div className='Content-container'>
        <h1>we create beautiful spaces for communal living for you to</h1>
        <h2>discover, share, and make new friends</h2>
        <div className='Input-container d-flex justify-content-between'>
          <div className='input-group input-country'>
          <SelectCity onChange={(selectedValue) => setCity(selectedValue.value)} />
          </div>
          <div className='input-group input-date'>
            <input type="date" name="dob" data-placeholder="Move in date" required aria-required="true" className='Select-country-container w-100'onChange={handleDateChange}/>
          </div>
          <button className='Search-btn' onClick={handleClick}>Search & book</button>
        </div>
      </div>
    </div>
  )
}

export default Intro
