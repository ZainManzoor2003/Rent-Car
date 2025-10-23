import React, { useState } from 'react';
import './Book.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Book = () => {
 
  const openInNewTab = () => {
    console.log('Opening rates in new tab');
  };

  return (
    <>
      <div className="checkrates-page">
        <div className="navbar-container">
          <Navbar showHamburger={true} />
        </div>

        <div className="checkrates-content">
          <div className="left-section">
            <div className="hero-content">
              <h1>Book Your Luxury Ride in Minutes</h1>
              <p>Where sophistication meets simplicity. Airport transfers, corporate hours, weddings, and more—serving Chicago, O'Hare, Midway, and all suburbs 24/7.</p>
              
              <div className="cta-buttons">
                <button className="calculate-rate-btn" onClick={() => document.getElementById('rate-form').scrollIntoView()}>
                  Start Reservation
                </button>
                <button className="open-full-page-btn" onClick={openInNewTab}>
                  Check Rates
                </button>
              </div>
            </div>
          </div>
          

          <div className="right-section">
            <div className="video-placeholder">
              <div className="video-content">
                <p className="video-subtitle">Where Luxury Meets Simplicity</p>
                <h2 className="video-title">Promo Video Placeholder</h2>
              </div>
            </div>
          </div>
        </div>

        {/* Book Online Section */}
        <div className="book-online-section">
          <div className="book-online-container">
            <div className="book-online-header">
              <h2>Book Online</h2>
              <p>Luxury rides across Chicagoland — reserve in minutes.</p>
              <div className="widget-status">Widget not loaded</div>
            </div>

            <div className="widget-controls">
              <button className="load-widget-btn">Load Booking Widget</button>
              <a href="#" className="open-new-tab-link">Open in new tab</a>
            </div>

            <div className="widget-preview">
              <div className="loading-placeholder">
                <div className="loading-bar"></div>
                <div className="loading-bar"></div>
                <div className="loading-bar"></div>
              </div>
              
              <div className="widget-placeholder">
                <p className="widget-text">Widget preview placeholder</p>
                <p className="widget-instruction">Click Load Booking Widget to initialize.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Popular Booking Options Section */}
        <div className="booking-options-section">
          <div className="booking-options-container">
            <div className="booking-options-header">
              <h2>Popular Booking Options</h2>
            </div>
            <div className="options-grid">
              <div className="option-card">
                <h3>Airport Transfer — O'Hare</h3>
                <p>Opens full-page booking (prefill params)</p>
              </div>
              <div className="option-card">
                <h3>Airport Transfer — Midway</h3>
                <p>Opens full-page booking (prefill params)</p>
              </div>
              <div className="option-card">
                <h3>Corporate Hourly — SUV</h3>
                <p>Opens full-page booking (prefill params)</p>
              </div>
              <div className="option-card">
                <h3>Point-to-Point — Sedan</h3>
                <p>Opens full-page booking (prefill params)</p>
              </div>
              <div className="option-card">
                <h3>Sprinter — 14 Passengers</h3>
                <p>Opens full-page booking (prefill params)</p>
              </div>
              <div className="option-card">
                <h3>Minibus — 23 Passengers</h3>
                <p>Opens full-page booking (prefill params)</p>
              </div>
              <div className="option-card">
                <h3>Wedding Shuttle — Sprinter</h3>
                <p>Opens full-page booking (prefill params)</p>
              </div>
              <div className="option-card">
                <h3>Downtown ↔ Rosemont</h3>
                <p>Opens full-page booking (prefill params)</p>
              </div>
            </div>
          </div>
        </div>

        {/* Seamless Travel Section */}
        <div className="seamless-travel-section">
          <div className="seamless-travel-container">
            <div className="seamless-travel-header">
              <h2>Seamless Travel, Every Time</h2>
            </div>
            <div className="services-grid">
              <div className="service-card">
                <div className="service-image">
                  <span>Image</span>
                </div>
                <h3>Airport Transportation</h3>
                <p>O'Hare & Midway with flight tracking.</p>
                <a href="#" className="book-link">Book</a>
              </div>
              <div className="service-card">
                <div className="service-image">
                  <span>Image</span>
                </div>
                <h3>Group Transportation</h3>
                <p>Sprinters & buses for 10-50.</p>
                <a href="#" className="book-link">Book</a>
              </div>
              <div className="service-card">
                <div className="service-image">
                  <span>Image</span>
                </div>
                <h3>Corporate Transportation</h3>
                <p>Executive sedans & SUVs.</p>
                <a href="#" className="book-link">Book</a>
              </div>
              <div className="service-card">
                <div className="service-image">
                  <span>Image</span>
                </div>
                <h3>Special Occasions</h3>
                <p>Proms, concerts, nights out.</p>
                <a href="#" className="book-link">Book</a>
              </div>
              <div className="service-card">
                <div className="service-image">
                  <span>Image</span>
                </div>
                <h3>Wedding Transportation</h3>
                <p>Shuttle service all day.</p>
                <a href="#" className="book-link">Book</a>
              </div>
            </div>
          </div>
        </div>
        {/* Our Fleet Section */}
        <div className="our-fleet-section">
          <div className="our-fleet-container">
            <div className="our-fleet-header">
              <h2>Our Fleet</h2>
            </div>
            <div className="fleet-grid">
              <div className="fleet-card">
                <div className="fleet-image">
                  <span>Image</span>
                </div>
                <h3>Executive Sedan</h3>
                <p>3 passengers • 3 bags</p>
                <a href="#" className="calculate-rate-link">Calculate rate</a>
              </div>
              <div className="fleet-card">
                <div className="fleet-image">
                  <span>Image</span>
                </div>
                <h3>Luxury SUV</h3>
                <p>6 passengers • 6 bags</p>
                <a href="#" className="calculate-rate-link">Calculate rate</a>
              </div>
              <div className="fleet-card">
                <div className="fleet-image">
                  <span>Image</span>
                </div>
                <h3>Executive Sprinter</h3>
                <p>14 passengers • 12 bags</p>
                <a href="#" className="calculate-rate-link">Calculate rate</a>
              </div>
              <div className="fleet-card">
                <div className="fleet-image">
                  <span>Image</span>
                </div>
                <h3>Shuttle Bus</h3>
                <p>44 passengers</p>
                <a href="#" className="calculate-rate-link">Calculate rate</a>
              </div>
            </div>
          </div>

        {/* Booking Steps Section */}
        <div className="booking-steps-section">
          <div className="booking-steps-container">
            <div className="booking-steps-header">
              <h2>Booking is as simple as 1-2-3-4</h2>
            </div>
            <div className="steps-grid">
              <div className="step-card">
                <h3>Ride Info</h3>
                <p>Pickup, drop-off, passengers, and luggage.</p>
              </div>
              <div className="step-card">
                <h3>Select Vehicle</h3>
                <p>Sedans, SUVs, Sprinters, and buses for every occasion.</p>
              </div>
              <div className="step-card">
                <h3>Final Details</h3>
                <p>Contact email and phone for confirmation and updates.</p>
              </div>
              <div className="step-card">
                <h3>Complete Booking</h3>
                <p>Secure card on file; add flight info and promo codes.</p>
              </div>
            </div>
          </div>
        </div>

        </div>
        </div>
      <Footer />
    </>
  );
};

export default Book;
