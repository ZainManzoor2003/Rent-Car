import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/Logo.png';

const Navbar = ({ isMobile = false, showHamburger = false }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLightMode, setIsLightMode] = useState(false);
  const [isPagesDropdownOpen, setIsPagesDropdownOpen] = useState(false);
  const location = useLocation();

  // Initialize light mode state on component mount
  useEffect(() => {
    const isLightModeActive = document.body.classList.contains('light-mode');
    setIsLightMode(isLightModeActive);
  }, []);

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
    const newLightMode = !isLightMode;
    setIsLightMode(newLightMode);
    
    // Apply light mode styles to document
    if (newLightMode) {
      document.documentElement.style.setProperty('--bg-primary', '#ffffff');
      document.documentElement.style.setProperty('--bg-secondary', '#f5f5f5');
      document.documentElement.style.setProperty('--bg-card', '#ffffff');
      document.documentElement.style.setProperty('--text-primary', '#000000');
      document.documentElement.style.setProperty('--text-secondary', '#333333');
      document.documentElement.style.setProperty('--border-color', '#e0e0e0');
      document.body.classList.add('light-mode');
    } else {
      document.documentElement.style.setProperty('--bg-primary', '#000000');
      document.documentElement.style.setProperty('--bg-secondary', '#121212');
      document.documentElement.style.setProperty('--bg-card', '#121212');
      document.documentElement.style.setProperty('--text-primary', '#ffffff');
      document.documentElement.style.setProperty('--text-secondary', '#cccccc');
      document.documentElement.style.setProperty('--border-color', '#333333');
      document.body.classList.remove('light-mode');
    }
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
                <Link to="/blog" className="dropdown-item" onClick={closePagesDropdown}>
                  Blog
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
            <div className="mobile-nav-header">
              <div className="mobile-nav-logo">
                <div className="mobile-nav-logo-icon">E</div>
                <div className="mobile-nav-logo-text">Eminent Limo</div>
              </div>
              <button className="close-mobile-nav" onClick={toggleMobileMenu}>
                ×
              </button>
            </div>
            <div className="mobile-nav-content">
              <ul className="mobile-nav-list">
                <li className="nav-item">
                  <Link to="/book" className={`nav-link ${location.pathname === '/book' ? 'active' : ''}`} onClick={toggleMobileMenu}>
                    Book Online
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/services" className={`nav-link ${location.pathname === '/services' ? 'active' : ''}`} onClick={toggleMobileMenu}>
                    Services
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/vehicle-types" className={`nav-link ${location.pathname === '/vehicle-types' ? 'active' : ''}`} onClick={toggleMobileMenu}>
                    Vehicle Types
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/contact" className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`} onClick={toggleMobileMenu}>
                    Contact
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/check-rates" className={`nav-link ${location.pathname === '/check-rates' ? 'active' : ''}`} onClick={toggleMobileMenu}>
                    Check Rates
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/destinations" className={`nav-link ${location.pathname === '/destinations' ? 'active' : ''}`} onClick={toggleMobileMenu}>
                    Destinations
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/transportation" className={`nav-link ${location.pathname === '/transportation' ? 'active' : ''}`} onClick={toggleMobileMenu}>
                    Transportation
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/shop" className={`nav-link ${location.pathname === '/shop' ? 'active' : ''}`} onClick={toggleMobileMenu}>
                    Shop
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/blog" className={`nav-link ${location.pathname === '/blog' ? 'active' : ''}`} onClick={toggleMobileMenu}>
                    Blog
                  </Link>
                </li>
              </ul>
              
              <div className="mobile-nav-buttons">
                <button className="mobile-light-mode-btn" onClick={toggleLightMode}>
                  Light Mode
                </button>
                <Link to="/check-rates" className="mobile-check-rates-btn" onClick={toggleMobileMenu}>
                  Check Rates
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
