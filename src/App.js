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






function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar/>
      <Routes>
        <Route path="/" element={<Homepage/>} /> 
        <Route path="/SearchCities" element={<SearchCities/>} /> 
        <Route path="/Cms" element={<Cms/>} /> 
        <Route path="/Faq" element={<Faqspage/>} />     
        <Route path="/Error" element={<ErrorPage/>} /> 
      </Routes>
      <Faq/>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
