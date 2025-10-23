import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import Contact from './components/Contact';
import Blog from './components/Blog';
import CheckRates from './pages/CheckRates';
import Services from './pages/Services';
import Shop from './pages/Shop';
import './App.css';
import Destinations from './pages/Destinations';
import Book from './pages/Book';
import VehiceTypes from './pages/VehicleTypes';
import Transportation from './pages/Transportation';

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/check-rates" element={<CheckRates />} />
          <Route path="/services" element={<Services />} />
          <Route path="/book" element={<Book />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/vehicle-types" element={<VehiceTypes />} />
          <Route path="/transportation" element={<Transportation />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App
