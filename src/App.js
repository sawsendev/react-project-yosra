import { BrowserRouter, Routes, Route} from 'react-router-dom';
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
import Room from './components/Room/Room';
import Contact from './components/Contact/Contact';
import BookingRoom from './components/BookingRoom/BookingRoom';
import ProposeApartment from './components/ProposeApartment/ProposeApartment';




function App() {

  return (
    <div>
      <BrowserRouter>
        <NavBar/>
    

      <Routes>
        <Route path='/' index element={<Homepage/>} /> 
        <Route path="/searchCities" element={<SearchCities/>} /> 
        <Route path="/cms/page/:id" element={<Cms/>} /> 
        <Route path="/pages/:slug/" element={<Cms />} />
        <Route path="/faq" element={<Faqspage/>} />     
        <Route path="*" element={<ErrorPage/>} /> 
        <Route path="/noRoom" element={<NoRoom/>} /> 
        <Route path="/Room" element={<Room/>} /> 
        <Route path="/contact" element={<Contact/>} /> 
        <Route path="/BookingEnquiry" element={<BookingRoom/>} /> 
        <Route path="/I propose an apartment" element={<ProposeApartment/>}/>
       
      </Routes>
      <Faq/>
      <Footer/>
    
      </BrowserRouter>
    </div>
  );
}

export default App;
