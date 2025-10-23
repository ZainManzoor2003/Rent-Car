import React from 'react';
import Navbar from './Navbar';
import './Header.css';
import logo from '../assets/Logo.png';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
           <div className="navbar-logo">
          <Link to="/" className="logo-link">
            <img src={logo} alt="Eminent Limo" className="logo-img" />
          </Link>
        </div>
        
        </div>
        <div className="desktop-nav">
          <Navbar showHamburger={true} />
        </div>
      </div>
      <main className="main-content">
        <div className="hero-section">
          <h1 className="hero-title">
            Quick and affordable<br />
            car rentals
          </h1>
          <button className="cta-button">
            Book your ride now
            <span className="button-arrow">↗</span>
          </button>
        </div>
      </main>
    </header>
  );
};

export default Header;
