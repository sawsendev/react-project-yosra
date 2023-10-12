import React, { useState } from 'react'
import "./Intro.css"
import { useNavigate } from 'react-router-dom'
import SelectCity from '../../SelectCity/SelectCity';
import calendarIcon from '../../../assets/calendar.svg'; 
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

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
  
  const [selectedDate, setSelectedDate] = useState(null);
  const CustomInput = ({ value, onClick }) => (
    <div className="input-datepicker" onClick={onClick}>
      <input type="text" name="dob" 
        value={value}
        placeholder="Move in date" className='Select-country-container w-100' onChange={handleDateChange} required aria-required="true"/>
      <span className="calendar-icon">
        <img src={calendarIcon} alt="Calendar" />
      </span>
    </div>
  );

  return (
    <div className='Intro-container d-block py-md-5 py-4 container-fluid mb-md-5 mb-4'>
      <div className='Content-container'>
        <h1>we create beautiful spaces for communal living for you to</h1>
        <h2>discover, share, and make new friends</h2>
        <div className='Input-container d-flex justify-content-between'>
          <div className='input-group input-country'>
          <SelectCity onChange={(selectedValue) => setCity(selectedValue.value)} />
          </div>
          <div className='input-group'>
            
                <DatePicker
                  selected={selectedDate}
                  onChange={(date) => setSelectedDate(date)}
                  customInput={<CustomInput />}
                />
          </div>
          <button className='Search-btn' onClick={handleClick}>Search & book</button>
        </div>
      </div>
    </div>
  )
}

export default Intro
