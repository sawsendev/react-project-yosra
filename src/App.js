import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "./App.css"
import Faq from "./components/HomePage/Faq/Faq";
import Footer from "./components/Footer/Footer";
import NavBar from './components/NavBar/NavBar';
import Homepage from './components/HomePage/Homepage';
import SearchCities from './components/SearchCities/SearchCities';




function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar/>
      <Routes>
        <Route path="/" element={<Homepage/>} /> 
        <Route path="/SearchCities" element={<SearchCities/>} />    
      </Routes>
      <Faq/>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
