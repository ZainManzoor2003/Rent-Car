import React, { useState } from 'react';
import './Book.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import car1 from '../assets/ChatGPT Image Oct 18_ 2025_ 12_18_09 PM.png';
import car2 from '../assets/ChatGPT Image Oct 18_ 2025_ 12_18_11 PM.png';
import car3 from '../assets/ChatGPT Image Oct 18_ 2025_ 12_18_12 PM.png';
import car4 from '../assets/ChatGPT Image Oct 18_ 2025_ 12_18_13 PM.png';
import car5 from '../assets/ChatGPT Image Oct 18_ 2025_ 12_18_14 PM.png';
import car6 from '../assets/ChatGPT Image Oct 18_ 2025_ 12_18_17 PM.png';
import car7 from '../assets/ChatGPT Image Oct 18_ 2025_ 12_18_24 PM.png';

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
              <iframe 
                src="https://www.youtube.com/embed/NBrQRy1OslE"
                title="Luxury Transportation Services In Chicago"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="video-iframe"
              ></iframe>
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
                  <img src={car1} alt="Airport Transportation" className="service-img" />
                </div>
                <h3>Airport Transportation</h3>
                <p>O'Hare & Midway with flight tracking.</p>
                <a href="#" className="book-link">Book</a>
              </div>
              <div className="service-card">
                <div className="service-image">
                  <img src={car2} alt="Group Transportation" className="service-img" />
                </div>
                <h3>Group Transportation</h3>
                <p>Sprinters & buses for 10-50.</p>
                <a href="#" className="book-link">Book</a>
              </div>
              <div className="service-card">
                <div className="service-image">
                  <img src={car3} alt="Corporate Transportation" className="service-img" />
                </div>
                <h3>Corporate Transportation</h3>
                <p>Executive sedans & SUVs.</p>
                <a href="#" className="book-link">Book</a>
              </div>
              <div className="service-card">
                <div className="service-image">
                  <img src={car4} alt="Special Occasions" className="service-img" />
                </div>
                <h3>Special Occasions</h3>
                <p>Proms, concerts, nights out.</p>
                <a href="#" className="book-link">Book</a>
              </div>
              <div className="service-card">
                <div className="service-image">
                  <img src={car5} alt="Wedding Transportation" className="service-img" />
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
                  <img src={car1} alt="Executive Sedan" className="fleet-img" />
                </div>
                <h3>Executive Sedan</h3>
                <p>3 passengers • 3 bags</p>
                <a href="#" className="calculate-rate-link">Calculate rate</a>
              </div>
              <div className="fleet-card">
                <div className="fleet-image">
                  <img src={car2} alt="Luxury SUV" className="fleet-img" />
                </div>
                <h3>Luxury SUV</h3>
                <p>6 passengers • 6 bags</p>
                <a href="#" className="calculate-rate-link">Calculate rate</a>
              </div>
              <div className="fleet-card">
                <div className="fleet-image">
                  <img src={car6} alt="Executive Sprinter" className="fleet-img" />
                </div>
                <h3>Executive Sprinter</h3>
                <p>14 passengers • 12 bags</p>
                <a href="#" className="calculate-rate-link">Calculate rate</a>
              </div>
              <div className="fleet-card">
                <div className="fleet-image">
                  <img src={car7} alt="Shuttle Bus" className="fleet-img" />
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

        {/* Transparent Billing & Cancellation Section */}
        <div className="billing-cancellation-section">
          <div className="billing-cancellation-container">
            <h2 className="section-title">Transparent Billing & Cancellation</h2>
            
            <div className="policies-grid">
              <div className="policy-card">
                <h3 className="policy-title">Credit Card Policy</h3>
                <ul className="policy-list">
                  <li>Card required to secure all reservations.</li>
                  <li>Sedans & SUVs: charged 1 hour before pickup.</li>
                  <li>Limos, Sprinters & Buses: charged 48 hours before pickup.</li>
                </ul>
              </div>
              
              <div className="policy-card">
                <h3 className="policy-title">Cancellation Policy</h3>
                <ul className="policy-list">
                  <li>Sedans & SUVs: free cancellation up to 1 hour prior.</li>
                  <li>Limos, Sprinters & Buses: free cancellation up to 72 hours prior.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* What Our Customers Say Section */}
        <div className="testimonials-section">
          <div className="testimonials-container">
            <h2 className="section-title">What Our Customers Say</h2>
            
            <div className="testimonials-grid">
              <div className="testimonial-card">
                <div className="stars">★★★★★</div>
                <p className="testimonial-text">"GREAT COMPANY! Mr. T was awesome—friendly, professional, and great customer service. Highly recommend!"</p>
                <p className="customer-name">— Tory Lane</p>
              </div>
              
              <div className="testimonial-card">
                <div className="stars">★★★★★</div>
                <p className="testimonial-text">"On time for O'Hare pickup, spotless SUV, seamless experience from booking to drop-off."</p>
                <p className="customer-name">— A. Patel</p>
              </div>
              
              <div className="testimonial-card">
                <div className="stars">★★★★★</div>
                <p className="testimonial-text">"Used for a wedding shuttle—fantastic coordination and courteous chauffeurs."</p>
                <p className="customer-name">— M. Rivera</p>
              </div>
            </div>
          </div>
        </div>

        {/* Frequently Asked Questions Section */}
        <div className="faq-section">
          <div className="faq-container">
            <h2 className="section-title">Frequently Asked Questions</h2>
            
            <div className="faq-grid">
              <div className="faq-card">
                <h3 className="faq-question">How much does it cost to rent a limo in Chicago?</h3>
                <p className="faq-answer">Rates vary by vehicle, date, distance, and duration. Use the Check Rates page for instant pricing or call 855-286-6691.</p>
              </div>
              
              <div className="faq-card">
                <h3 className="faq-question">What if my flight is delayed?</h3>
                <p className="faq-answer">We track flights in real time and adjust. Waiting time applies after a certain period.</p>
              </div>
              
              <div className="faq-card">
                <h3 className="faq-question">Do you provide safety car seats?</h3>
                <p className="faq-answer">Yes—upon request. Add during booking or contact us in advance.</p>
              </div>
              
              <div className="faq-card">
                <h3 className="faq-question">Are you open on holidays?</h3>
                <p className="faq-answer">Yes. We operate 24/7/365—including holidays.</p>
              </div>
              
              <div className="faq-card">
                <h3 className="faq-question">Will the driver help with luggage?</h3>
                <p className="faq-answer">Absolutely. Curbside assistance is standard.</p>
              </div>
              
              <div className="faq-card">
                <h3 className="faq-question">Which cities do you serve?</h3>
                <p className="faq-answer">All Chicagoland (O'Hare, Midway, suburbs) and regional MI, OH, IA, MO.</p>
              </div>
              
              <div className="faq-card">
                <h3 className="faq-question">When is my card charged and what's the cancellation policy?</h3>
                <p className="faq-answer">Sedans & SUVs: charged 1 hour before pickup; free cancellation up to 1 hour prior. Limos, Sprinters & Buses: charged 48 hours before pickup; free cancellation up to 72 hours prior.</p>
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
