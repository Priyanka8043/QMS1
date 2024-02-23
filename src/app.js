import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/navbar';
import Home from './pages/home';
import AboutUs from './pages/aboutUs';
import Services from './pages/services';
import Client from './pages/client'
import ContactUs from './pages/contactUs'
import US from './pages/US';
import Career from './pages/Career'
import Footer from './components/footer'


const MyApp = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/ushealthcare" element={<US />} />
        <Route path="/career" element={<Career />} />
        <Route path="/clients" element={<Client/>} />
        <Route path="/contact" element={<ContactUs/>} />
        
      </Routes>
      <Footer/>
    </div>
  );
};

export default MyApp;
