import React, { useState } from 'react';
import './Transportation.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import car1 from '../assets/ChatGPT Image Oct 18_ 2025_ 12_18_09 PM.png';
import car2 from '../assets/ChatGPT Image Oct 18_ 2025_ 12_18_11 PM.png';
import car3 from '../assets/ChatGPT Image Oct 18_ 2025_ 12_18_12 PM.png';
import car4 from '../assets/ChatGPT Image Oct 18_ 2025_ 12_18_13 PM.png';

const Transportation = () => {
 
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
              <h1>McCormick Place Transportation</h1>
              <p>Heading to a trade show or conference at McCormick Place? Eminent Limo provides private black car service, executive SUVs, Sprinter vans, and group shuttles with curbside pickups at the correct campus gate—including Gate 40 at the West Building during major events.</p>
              
              <div className="cta-buttons">
                <button className="calculate-rate-btn" onClick={() => document.getElementById('rate-form').scrollIntoView()}>
                  Book Online
                </button>
                <button className="open-full-page-btn" onClick={openInNewTab}>
                  Check Rates
                </button>
                <button className="open-full-page-btn" onClick={openInNewTab}>
                  View Fleet
                </button>
              </div>
            </div>
          </div>
          

          <div className="right-section">
            <div className="video-placeholder">
              <div className="video-content">
                <p className="video-subtitle">Plan Your Arrival</p>
                <h2 className="video-title">Gates • Lots • Pickups</h2>
              </div>
            </div>
          </div>
        </div>

       

        {/* Distance & Travel Time Section */}
        <div className="distance-section">
          <div className="distance-container">
            <h2 className="distance-title">Distance & Travel Time to McCormick Place</h2>
            <div className="distance-cards">
              <div className="distance-card">
                <h3 className="distance-card-title">O'Hare International Airport (ORD)</h3>
                <p className="distance-details">~16.7 miles • ~25-45 min*</p>
              </div>
              <div className="distance-card">
                <h3 className="distance-card-title">Midway International Airport (MDW)</h3>
                <p className="distance-details">~11 miles • ~20-35 min*</p>
              </div>
              <div className="distance-card">
                <h3 className="distance-card-title">Downtown Chicago (The Loop)</h3>
                <p className="distance-details">~2.9 miles • ~8-15 min*</p>
              </div>
            </div>
            <p className="distance-disclaimer">*Live traffic & event load-in/out can affect times; we adjust staging accordingly.</p>
          </div>
        </div>

         {/* McCormick Place Information Section */}
         <div className="mccormick-info-section">
          <div className="mccormick-container">
          <h2 className="distance-title">Entrances, Parking & Transportation Gates</h2>
            <div className="info-cards">
              {/* Main Entrances Card */}
              <div className="info-card">
                <h3 className="card-title">Main Entrances</h3>
                <ul className="entrance-list">
                  <li>
                    <strong>North & South:</strong> 2301 S. Dr. Martin Luther King Jr. Dr., Chicago
                  </li>
                  <li>
                    <strong>West:</strong> 2301 S. Indiana Ave., Chicago
                  </li>
                  <li>
                    <strong>Lakeside Center & Arie Crown Theater:</strong> 2301 S. DuSable Lake Shore Dr., Chicago
                  </li>
                  <li>
                    <strong>Wintrust Arena:</strong> 200 E. Cermak Rd., Chicago, IL 60616
                  </li>
                </ul>
                <div className="card-links">
                  <a href="#" className="info-link">Official Getting Here</a>
                  <a href="#" className="info-link">Campus Map (PDF)</a>
                </div>
              </div>

              {/* Parking & Gates Card */}
              <div className="info-card">
                <h3 className="card-title">Parking & Gates</h3>
                <ul className="parking-list">
                  <li>Lot A for North/South/West events; Lot C for Lakeside Center/Arie Crown.</li>
                  <li>During major shows, rideshare/ground pickups often use Gate 40 (West) on S. Indiana Ave.</li>
                  <li>We coordinate curbside in real time—your chauffeur texts updates and staging ETA.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Service Description Section */}
        <div className="service-description-section">
          <div className="service-description-container">
            <h2 className="service-title">Black Car, Executive SUV, Sprinter & Bus Service</h2>
            <div className="service-content">
              <p className="service-paragraph">
                Whether you need a discreet executive sedan, a luxury SUV for team travel, a Sprinter van for 11-14 passengers, or a shuttle bus for larger groups, Eminent Limo provides reliable convention logistics to and from McCormick Place and the greater Chicago area.
              </p>
              <p className="service-paragraph">
                Popular routes include <a href="#" className="service-link">O'Hare (ORD)</a> ⇌ McCormick Place, <a href="#" className="service-link">Midway (MDW)</a> ⇌ McCormick Place, the Loop/West Loop hotel district, and evening transfers to Magnificent Mile, River North, West Loop, and Navy Pier. <a href="#" className="service-link">View our full fleet below or book online.</a>
              </p>
            </div>
          </div>
        </div>

        {/* Fleet Section */}
        <div className="fleet-section">
          <div className="fleet-container">
            <h2 className="fleet-title">Our Fleet for McCormick Place</h2>
            <div className="fleet-cards">
              <div className="fleet-card">
                <div className="fleet-image">
                  <img src={car1} alt="Executive Sedan" className="fleet-img" />
                </div>
                <h3 className="fleet-card-title">Executive Sedan</h3>
                <p className="fleet-card-details">3 pax • Solo or small team</p>
                <a href="#" className="fleet-link">Calculate Rate</a>
              </div>
              <div className="fleet-card">
                <div className="fleet-image">
                  <img src={car2} alt="Luxury SUV" className="fleet-img" />
                </div>
                <h3 className="fleet-card-title">Luxury SUV</h3>
                <p className="fleet-card-details">6 pax • Comfort + luggage</p>
                <a href="#" className="fleet-link">Calculate Rate</a>
              </div>
              <div className="fleet-card">
                <div className="fleet-image">
                  <img src={car3} alt="Sprinter Van" className="fleet-img" />
                </div>
                <h3 className="fleet-card-title">Sprinter Van</h3>
                <p className="fleet-card-details">11-14 pax • Group shuttle</p>
                <a href="#" className="fleet-link">Calculate Rate</a>
              </div>
              <div className="fleet-card">
                <div className="fleet-image">
                  <img src={car4} alt="Minibus / Coach" className="fleet-img" />
                </div>
                <h3 className="fleet-card-title">Minibus / Coach</h3>
                <p className="fleet-card-details">23-50 pax • Large group</p>
                <a href="#" className="fleet-link">Calculate Rate</a>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="faq-section">
          <div className="faq-container">
            <h2 className="faq-title">McCormick Place Transportation — FAQ</h2>
            <div className="faq-grid">
              <div className="faq-item">
                <h3 className="faq-question">Where do I get picked up at McCormick Place?</h3>
                <p className="faq-answer">For large shows, rideshare and ground pickups commonly use Gate 40 at the West Building (S. Indiana Ave). Your chauffeur will text exact curb details and coordinate staging.</p>
              </div>
              <div className="faq-item">
                <h3 className="faq-question">How far is McCormick Place from O'Hare and Midway?</h3>
                <p className="faq-answer">Roughly ~16-17 miles from ORD (25-45 minutes) and ~11 miles from MDW (20-35 minutes), depending on traffic and event load-in/out windows.</p>
              </div>
              <div className="faq-item">
                <h3 className="faq-question">Which parking lot should I use?</h3>
                <p className="faq-answer">Lot A is primary for North, South, and West Buildings; Lot C is primary for Lakeside Center/Arie Crown Theater. Always check your event's instructions.</p>
              </div>
              <div className="faq-item">
                <h3 className="faq-question">Do you support groups and VIP moves?</h3>
                <p className="faq-answer">Yes—Sprinters (11-14), minibuses, and full coaches. We can marshal and stagger boarding for multi-vehicle loads.</p>
              </div>
              <div className="faq-item">
                <h3 className="faq-question">Can you track flights for airport arrivals?</h3>
                <p className="faq-answer">Absolutely. We track ORD/MDW flights and sync your driver's staging time, then meet you curbside at the right gate.</p>
              </div>
            </div>
          </div>
        </div>

        

        <div className="ready-to-ride-banner">
          <div className="banner-content">
            <div className="banner-text">
              <h2>Arriving at McCormick Place?</h2>
              <p>We'll meet you at the right gate with real-time coordination.</p>
            </div>
            <button className="banner-cta">Book Now</button>
          </div>
        </div>

        </div>
      <Footer />
    </>
  );
};

export default Transportation;
