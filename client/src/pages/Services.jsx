import React, { useState } from 'react';
import './Services.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import car1 from '../assets/ChatGPT Image Oct 18_ 2025_ 12_18_09 PM.png';
import car2 from '../assets/ChatGPT Image Oct 18_ 2025_ 12_18_11 PM.png';
import car3 from '../assets/ChatGPT Image Oct 18_ 2025_ 12_18_12 PM.png';
import car4 from '../assets/ChatGPT Image Oct 18_ 2025_ 12_18_13 PM.png';

const Services = () => {
 
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
              <h1>Our Services</h1>
              <p>Whether you have a wedding, special occasion, corporate event, group outing, or just need to get to or from the airport – Eminent Limo has an entire fleet of luxury vehicles to get you where you need to be.</p>
              
              <div className="cta-buttons">
                <button className="calculate-rate-btn" onClick={() => document.getElementById('rate-form').scrollIntoView()}>
                  Book a ride today!
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
                <p className="video-subtitle">Luxury Transportation Services In Chicago</p>
                <h2 className="video-title">Airport • Group • Events • Weddings</h2>
              </div>
            </div>
          </div>
        </div>
         {/* Service Cards Section */}
         <div className="service-cards-section">
          <div className="service-cards-container">
            <div className="service-card">
              <div className="service-image">
                <img src={car1} alt="Airport Transportation" className="service-img" />
              </div>
              <h3>Airport Transportation</h3>
              <p>Flying in/out of O'Hare (ORD) or Midway (MDW)? Enjoy a comfortable, on-time ride to and from the airport. Professional black car service across Chicagoland.</p>
              <a href="#" className="check-rates-link">CHECK RATES</a>
            </div>

            <div className="service-card">
              <div className="service-image">
                <img src={car2} alt="Group Transportation" className="service-img" />
              </div>
              <h3>Group Transportation</h3>
              <p>Sprinters (11-14) and buses (23-50) for teams, tours, and events. Perfect for sports teams, corporate groups, and large parties.</p>
              <a href="#" className="check-rates-link">CHECK RATES</a>
            </div>

            <div className="service-card">
              <div className="service-image">
                <img src={car3} alt="Corporate Transportation" className="service-img" />
              </div>
              <h3>Corporate Transportation</h3>
              <p>In town for a conference, corporate event, or business meeting? Choose from sedans to 50-passenger buses for the finest corporate transportation.</p>
              <a href="#" className="check-rates-link">CHECK RATES</a>
            </div>
          </div>
        </div>

        {/* Our Fleet Section */}
        <div className="fleet-section">
          <div className="fleet-container">
            <div className="fleet-header">
              <h2>Our Fleet</h2>
              <p>Choose from a large fleet, ranging from two-passenger economy sedans to 50-passenger buses. Sprinter vans and minibuses are perfect for group transportation needs.</p>
            </div>
            
            <div className="fleet-cards">
              <div className="fleet-card">
                <div className="fleet-image">
                  <img src={car1} alt="Airport Fleet" className="fleet-img" />
                </div>
                <div className="fleet-label airport">Airport</div>
                <h3>Luxury SUV</h3>
                <p>6 passengers • 6 bags</p>
                <a href="#" className="calculate-rate-link">Calculate Rate</a>
              </div>

              <div className="fleet-card">
                <div className="fleet-image">
                  <img src={car2} alt="Group Fleet" className="fleet-img" />
                </div>
                <div className="fleet-label group">Group</div>
                <h3>Standard Shuttle Sprinter</h3>
                <p>11 passengers • 11 bags</p>
                <a href="#" className="calculate-rate-link">Calculate Rate</a>
              </div>

              <div className="fleet-card">
                <div className="fleet-image">
                  <img src={car3} alt="Group Fleet" className="fleet-img" />
                </div>
                <div className="fleet-label group">Group</div>
                <h3>Large Shuttle Sprinter</h3>
                <p>14 passengers • 14 bags</p>
                <a href="#" className="calculate-rate-link">Calculate Rate</a>
              </div>

              <div className="fleet-card">
                <div className="fleet-image">
                  <img src={car4} alt="Large Group Fleet" className="fleet-img" />
                </div>
                <div className="fleet-label large-group">Large Group</div>
                <h3>Minibus</h3>
                <p>23 passengers • 23 bags</p>
                <a href="#" className="calculate-rate-link">Calculate Rate</a>
              </div>
            </div>
          </div>
        </div>

        {/* Calculate Rate Banner */}
        <div className="rate-banner">
          <div className="rate-banner-content">
            <div className="rate-banner-text">
              <h2>Calculate an Instant Rate</h2>
              <p>Check hourly rates and get instant pricing for your service.</p>
            </div>
            <div className="rate-banner-buttons">
              <button className="calculate-rates-btn">CALCULATE RATES</button>
              <button className="book-online-btn">Book Online</button>
            </div>
          </div>
        </div>

        {/* Customer Testimonials Section */}
        <div className="customer-testimonials-section">
          <div className="customer-testimonials-container">
            <h2>Here's What Our Customers Are Saying...</h2>
            
            <div className="customer-testimonials-cards">
              <div className="customer-testimonial-card">
                <div className="customer-stars">★★★★★</div>
                <p>"I used Eminent Limo for a job interview trip to Des Plaines. The driver was prompt, respectful, and understanding. He even offered me water and orange juice. Highly recommend!"</p>
                <div className="customer-reviewer">Christopher Coker</div>
              </div>

              <div className="customer-testimonial-card">
                <div className="customer-stars">★★★★★</div>
                <p>"We booked a Sprinter van for a corporate outing. The vehicle was spacious, clean, and the driver was professional. Easy to coordinate with and made our event seamless."</p>
                <div className="customer-reviewer">Corporate Client, Naperville</div>
              </div>

              <div className="customer-testimonial-card">
                <div className="customer-stars">★★★★★</div>
                <p>"Professional, clean vehicles and excellent communication. Highly recommend for ORD/MDW transfers and events. Will definitely use again!"</p>
                <div className="customer-reviewer">Google Verified Review</div>
              </div>
            </div>

            <div className="customer-review-links">
              <a href="#" className="customer-review-link">Eminent Limo Google Reviews</a>
              <span className="customer-dot">•</span>
              <a href="#" className="customer-review-link">Eminent Limo Yelp Reviews</a>
              <span className="customer-dot">•</span>
              <a href="#" className="customer-review-link">Eminent Limo Facebook Reviews</a>
            </div>
          </div>
        </div>

        {/* Call to Action Sections */}
        <div className="cta-sections">
          <div className="cta-container">
            <div className="cta-section book-cta">
              <h2>Book Your Limo Service Now</h2>
              <p>Secure, fast, and convenient.</p>
              <button className="cta-btn book-btn">BOOK ONLINE</button>
            </div>

            <div className="cta-section inquire-cta">
              <h2>Inquire About Our Transportation</h2>
              <p>Have questions? Talk to dispatch.</p>
              <button className="cta-btn call-btn">GIVE US A CALL</button>
            </div>
          </div>
        </div>

       
        </div>
      <Footer />
    </>
  );
};

export default Services;
