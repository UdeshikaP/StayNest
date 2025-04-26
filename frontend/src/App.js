import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './component/Header';
import HeroSection from './component/HeroSection';
import BookingForm from './component/BookingForm';
import Home from './pages/Home/home';
import AboutUs from './pages/About/aboutUs';
import ContactUs from './pages/Contact/contact';
import Rooms from './pages/Rooms/rooms';
import Menus from './pages/Menu/menuItem';
import Events from './pages/Events/events';
import Footer from './component/Footer';

import './App.css';

function App() {
  return (
    <Router> 
    <div className="App">
      <Header />
      <HeroSection />
      {/* <BookingForm /> */}
      <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/about-us" element={<AboutUs/>}/>
          <Route path='/contact' element={<ContactUs/>}/>
          <Route path='/room-details' element={<Rooms/>}/>
          <Route path='/menu-item' element={<Menus/>}/>
          <Route path='/events' element={<Events/>}/>
        </Routes>
    </div>
    <Footer />

    </Router>
    
  );
}

export default App;
