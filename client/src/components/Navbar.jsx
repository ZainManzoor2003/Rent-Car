import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ isMobile = false, showHamburger = false }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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
        <ul className={`nav-list ${isMobile ? 'mobile-nav-list' : ''}`}>
          <li className="nav-item">
            <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>Home</Link>
          </li>
          <li className="nav-item dropdown" onMouseEnter={!isMobile ? toggleDropdown : undefined} onMouseLeave={!isMobile ? closeDropdown : undefined}>
            <a href="#pages" className="nav-link" onClick={isMobile ? toggleDropdown : undefined}>
              Pages
              <span className="dropdown-arrow" style={{right:'0px'}}>{isDropdownOpen ? '▲' : '▼'}</span>
            </a>
            {isDropdownOpen && (
              <ul className={`dropdown-menu ${isMobile ? 'mobile-dropdown-menu' : ''}`}>
                <li><Link to="/" className={`dropdown-link ${location.pathname === '/' ? 'active' : ''}`}>Home</Link></li>
                <li><Link to="/destinations" className={`dropdown-link ${location.pathname === '/destinations' ? 'active' : ''}`}>Destinations</Link></li>
                <li><Link to="/blog" className={`dropdown-link ${location.pathname === '/blog' ? 'active' : ''}`}>Blog</Link></li>
                <li><Link to="/check-rates" className={`dropdown-link ${location.pathname === '/check-rates' ? 'active' : ''}`}>Check Rates</Link></li>
                <li><Link to="/book" className={`dropdown-link ${location.pathname === '/book' ? 'active' : ''}`}>Book</Link></li>
                <li><Link to="/transportation" className={`dropdown-link ${location.pathname === '/transportation' ? 'active' : ''}`}>Transportation</Link></li>
                <li><Link to="/contact" className={`dropdown-link ${location.pathname === '/contact' ? 'active' : ''}`}>Contact</Link></li>
                <li><Link to="/vehicle-types" className={`dropdown-link ${location.pathname === '/vehicle-types' ? 'active' : ''}`}>Vehicle Types</Link></li>
              </ul>
            )}
          </li>
          <li><Link to="/services" className={`nav-link ${location.pathname === '/services' ? 'active' : ''}`}>Services</Link></li>
          <li><Link to="/shop" className={`nav-link ${location.pathname === '/shop' ? 'active' : ''}`}>Shop</Link></li>
          <li className="nav-item">
            <Link to="/contact" className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`}>Contact</Link>
          </li>
        </ul>
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
