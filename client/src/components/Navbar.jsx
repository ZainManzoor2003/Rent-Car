import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/Logo.png';

const Navbar = ({ isMobile = false, showHamburger = false }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLightMode, setIsLightMode] = useState(false);
  const [isPagesDropdownOpen, setIsPagesDropdownOpen] = useState(false);
  const location = useLocation();

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleLightMode = () => {
    setIsLightMode(!isLightMode);
  };

  const togglePagesDropdown = () => {
    setIsPagesDropdownOpen(!isPagesDropdownOpen);
  };

  const closePagesDropdown = () => {
    setIsPagesDropdownOpen(false);
  };

  return (
    <>
      {/* Hamburger Menu Button */}
      {showHamburger && !isMobileMenuOpen && (
        <button className="hamburger-menu" onClick={toggleMobileMenu}>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>
      )}

      {/* Desktop/Mobile Navbar */}
      <nav className={`navbar ${isMobile ? 'mobile-navbar' : ''}`}>
        {/* Logo Section */}
        <div className="navbar-logo">
          <Link to="/" className="logo-link">
            <div className="logo-container">
              <div className="logo-gradient"></div>
              <span className="logo-text">Eminent Limo</span>
            </div>
          </Link>
        </div>
        
        {/* Navigation Links */}
        <ul className={`nav-list ${isMobile ? 'mobile-nav-list' : ''}`}>
          <li className="nav-item">
            <Link to="/book" className={`nav-link ${location.pathname === '/book' ? 'active' : ''}`}>Book Online</Link>
          </li>
          <li className="nav-item">
            <Link to="/services" className={`nav-link ${location.pathname === '/services' ? 'active' : ''}`}>Services</Link>
          </li>
          <li className="nav-item">
            <Link to="/vehicle-types" className={`nav-link ${location.pathname === '/vehicle-types' ? 'active' : ''}`}>Vehicle Types</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`}>Contact</Link>
          </li>
          <li className="nav-item dropdown-container">
            <button 
              className={`nav-link dropdown-toggle ${isPagesDropdownOpen ? 'active' : ''}`}
              onClick={togglePagesDropdown}
              onMouseEnter={() => setIsPagesDropdownOpen(true)}
            >
              Pages
            </button>
            {isPagesDropdownOpen && (
              <div 
                className="dropdown-menu"
                onMouseLeave={closePagesDropdown}
              >
                <Link to="/check-rates" className="dropdown-item" onClick={closePagesDropdown}>
                  Check Rates
                </Link>
                <Link to="/destinations" className="dropdown-item" onClick={closePagesDropdown}>
                  Destinations
                </Link>
                <Link to="/transportation" className="dropdown-item" onClick={closePagesDropdown}>
                  Transportation
                </Link>
                <Link to="/shop" className="dropdown-item" onClick={closePagesDropdown}>
                  Shop
                </Link>
              </div>
            )}
          </li>
        </ul>

        {/* Right Section - Buttons */}
        <div className="navbar-right">
          <button className="light-mode-btn" onClick={toggleLightMode}>
            Light Mode
          </button>
          <Link to="/check-rates" className="check-rates-btn" style={{ borderRadius: '25px' }}>
            Check Rates
          </Link>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {showHamburger && isMobileMenuOpen && (
        <div className="mobile-nav-overlay" onClick={toggleMobileMenu}>
          <div className="mobile-nav" onClick={(e) => e.stopPropagation()}>
            <button className="close-mobile-nav" onClick={toggleMobileMenu}>
              ×
            </button>
            <Navbar isMobile={true} />
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
