import { BrowserRouter, Routes, Route} from 'react-router-dom';
import React, { useEffect } from 'react';
import "./App.css"
import Faq from "./components/HomePage/Faq/Faq";
import Footer from "./components/Footer/Footer";
import NavBar from './components/NavBar/NavBar';
import Homepage from './components/HomePage/Homepage';
import SearchCities from './components/SearchCities/SearchCities';
import Cms from './components/CMS/Cms';
import ErrorPage from './components/404/ErrorPage';
import Faqspage from './components/Faqspage/Faqspage';
import Room from './components/Room/Room';
import Contact from './components/Contact/Contact';
import BookingRoom from './components/BookingRoom/BookingRoom';
import ProposeApartment from './components/ProposeApartment/ProposeApartment';
import ReactGA from "react-ga"



function App() {
  useEffect(() => {
    const TRACKING_ID = "G-1K58YXV1ZE"
    ReactGA.initialize(TRACKING_ID)
    ReactGA.pageview(window.location.pathname + window.location.search)
  }, [])

  return (
    <div>
      <BrowserRouter>
        <NavBar/>
    
       
      <Routes>
    
        <Route path='/' index element={<Homepage/>} /> 
        <Route path="/search-cities" element={<SearchCities/>} /> 
        <Route path="/page/:slug" element={<Cms/>} /> 
        <Route path="/faq" element={<Faqspage/>} />     
        <Route path="/room/:id" element={<Room/>} /> 
        <Route path="/contact" element={<Contact/>} /> 
        <Route path="/booking-enquiry/:id" element={<BookingRoom/>} /> 
        <Route path="/i-propose-an-apartment" element={<ProposeApartment/>}/>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    
      <Faq/>
      <Footer/>
    
      </BrowserRouter>
    </div>
  );
}

export default App;
