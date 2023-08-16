import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "./App.css"
import Faq from "./components/HomePage/Faq/Faq";
import Footer from "./components/Footer/Footer";
import NavBar from './components/NavBar/NavBar';
import Homepage from './components/HomePage/Homepage';
import SearchCities from './components/SearchCities/SearchCities';
import Cms from './components/CMS/Cms';
import ErrorPage from './components/404/ErrorPage';
import Faqspage from './components/Faqspage/Faqspage';
import NoRoom from './components/SearchCities/NoRoom/NoRoom';
import Contact from './components/Contact/Contact';
import BookingRoom from './components/BookingRoom/BookingRoom';
import Breadcrumbs from './components/Breadcrumbs/Breadcrumbs';






function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar/>
        <Breadcrumbs/>

      <Routes>
        <Route path='/home' element={<Homepage/>} /> 
        <Route path="/searchCities" element={<SearchCities/>} /> 
        <Route path="/cms" element={<Cms/>} /> 
        <Route path="/faq" element={<Faqspage/>} />     
        <Route path="*" element={<ErrorPage/>} /> 
        <Route path="/noRoom" element={<NoRoom/>} /> 
        <Route path="/contact" element={<Contact/>} /> 
        <Route path="/propose" element={<BookingRoom/>} /> 
      </Routes>
      <Faq/>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
