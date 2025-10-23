import React, { useState } from 'react';
import './VehicleTypes.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const VehiceTypes = () => {
 
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
              <h1>Fleet Vehicles | Eminent Limo</h1>
              <p>From executive sedans and SUVs to Sprinter vans, stretch limos, and shuttle buses—our fleet is built for airport transfers, corporate travel, special occasions, and weddings across Chicagoland.</p>
              
              <div className="cta-buttons">
                <button className="calculate-rate-btn" onClick={() => document.getElementById('rate-form').scrollIntoView()}>
                  Book a Now
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
                <p className="video-subtitle">Explore Our Luxury Fleet</p>
                <h2 className="video-title">Executive • Luxury • Group</h2>
              </div>
            </div>
          </div>
        </div>

        {/* Vehicle Types Section */}
        <div className="vehicle-types-section">
          <div className="vehicle-types-container">
            <h2 className="section-title">SUVs</h2>
            <p className="section-subtitle">Calculate an Instant Rate</p>
            
            <div className="vehicle-cards">
              {/* Executive SUV Card */}
              <div className="vehicle-card">
                <div className="vehicle-image">
                  <div className="image-placeholder">Fleet Image Placeholder</div>
                </div>
                <div className="vehicle-content">
                  <div className="vehicle-header">
                    <h3 className="vehicle-title">Executive SUV</h3>
                    <span className="vehicle-tag executive">Executive</span>
                  </div>
                  <p className="vehicle-capacity">7 Seats • 6 Luggage</p>
                  <ul className="vehicle-features">
                    <li>Up to 6-7 passengers (family friendly)</li>
                    <li>All-wheel drive for all-season confidence</li>
                    <li>Captain's chairs (select models) & rear climate controls</li>
                    <li>Rear entertainment ready (HDMI/USB on select vehicles)</li>
                    <li>Large cargo area fits up to 6 suitcases</li>
                    <li>Easy curbside access with power liftgate</li>
                    <li>Ideal for airport transfers & corporate groups</li>
                  </ul>
                  <div className="vehicle-actions">
                    <button className="book-now-btn">Book Now</button>
                    <button className="check-rates-btn">Check Rates</button>
                  </div>
                </div>
              </div>

              {/* Luxury SUV Card */}
              <div className="vehicle-card">
                <div className="vehicle-image">
                  <div className="image-placeholder">Fleet Image Placeholder</div>
                </div>
                <div className="vehicle-content">
                  <div className="vehicle-header">
                    <h3 className="vehicle-title">Luxury SUV</h3>
                    <span className="vehicle-tag luxury">Luxury</span>
                  </div>
                  <p className="vehicle-capacity">6 Seats • 6 Luggage</p>
                  <ul className="vehicle-features">
                    <li>Up to 6 passengers in luxury configuration</li>
                    <li>Nappa leather, ambient lighting, acoustic glass</li>
                    <li>Panoramic roof & heated second row</li>
                    <li>Premium audio with Bluetooth & rear controls</li>
                    <li>Multiple USB-C ports + 110V household outlet</li>
                    <li>Generous cargo for 6 carry-on bags</li>
                    <li>Perfect for VIP movements & special nights out</li>
                  </ul>
                  <div className="vehicle-actions">
                    <button className="book-now-btn">Book Now</button>
                    <button className="check-rates-btn">Check Rates</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Party Buses Section */}
        <div className="vehicle-types-section">
          <div className="vehicle-types-container">
            <h2 className="section-title">Party Buses</h2>
            <p className="section-subtitle">Calculate an Instant Rate</p>
            
            <div className="vehicle-cards">
              {/* Party Sprinter Limo Card */}
              <div className="vehicle-card">
                <div className="vehicle-image">
                  <div className="image-placeholder">Fleet Image Placeholder</div>
                </div>
                <div className="vehicle-content">
                  <div className="vehicle-header">
                    <h3 className="vehicle-title">Party Sprinter Limo</h3>
                    <span className="vehicle-tag large">Large</span>
                  </div>
                  <p className="vehicle-capacity">16 Seats • 7 Luggage</p>
                  <ul className="vehicle-features">
                    <li>Up to 16 passengers</li>
                    <li>Limo-style bench seating with dance-floor aisle</li>
                    <li>Dual subwoofers, Bluetooth, and club lighting</li>
                    <li>Wet bar with cooler (ice/water included)</li>
                    <li>USB charging & phone-mount shelves</li>
                    <li>Perfect for concerts, bachelor/ette parties</li>
                    <li>Rear storage for jackets & small bags</li>
                  </ul>
                  <div className="vehicle-actions">
                    <button className="book-now-btn">Book Now</button>
                    <button className="check-rates-btn">Check Rates</button>
                  </div>
                </div>
              </div>

              {/* 30 Passengers Party Bus Card */}
              <div className="vehicle-card">
                <div className="vehicle-image">
                  <div className="image-placeholder">Fleet Image Placeholder</div>
                </div>
                <div className="vehicle-content">
                  <div className="vehicle-header">
                    <h3 className="vehicle-title">30 Passengers Party Bus</h3>
                    <span className="vehicle-tag executive">Executive</span>
                  </div>
                  <p className="vehicle-capacity">30 Seats • 7 Luggage</p>
                  <ul className="vehicle-features">
                    <li>Up to 30 passengers</li>
                    <li>Standing-friendly interior with handrails</li>
                    <li>Raised perimeter seating & large aisle</li>
                    <li>Club-grade audio/lighting & big-screen TV</li>
                    <li>Coolers, cupholders, and bottle racks</li>
                    <li>On-board hostess station (select units)</li>
                    <li>Great for nightlife routes & tailgates</li>
                  </ul>
                  <div className="vehicle-actions">
                    <button className="book-now-btn">Book Now</button>
                    <button className="check-rates-btn">Check Rates</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Luxury Vans Section */}
        <div className="vehicle-types-section">
          <div className="vehicle-types-container">
            <h2 className="section-title">Luxury Vans</h2>
            <p className="section-subtitle">Calculate an Instant Rate</p>
            
            <div className="vehicle-cards">
              {/* Standard Shuttle Sprinter Card */}
              <div className="vehicle-card">
                <div className="vehicle-image">
                  <div className="image-placeholder">Fleet Image Placeholder</div>
                </div>
                <div className="vehicle-content">
                  <div className="vehicle-header">
                    <h3 className="vehicle-title">Standard Shuttle Sprinter</h3>
                    <span className="vehicle-tag standard">Standard</span>
                  </div>
                  <p className="vehicle-capacity">11 Seats • 11 Luggage</p>
                  <ul className="vehicle-features">
                    <li>Up to 11 passengers + matched luggage</li>
                    <li>High roof for easy stand-up entry</li>
                    <li>Forward-facing seats with individual headrests</li>
                    <li>Overhead parcel racks (select models)</li>
                    <li>Rear luggage bay fits 11 carry-ons</li>
                    <li>12V & USB charging throughout cabin</li>
                    <li>Great for airport shuttles & group outings</li>
                  </ul>
                  <div className="vehicle-actions">
                    <button className="book-now-btn">Book Now</button>
                    <button className="check-rates-btn">Check Rates</button>
                  </div>
                </div>
              </div>

              {/* Large Shuttle Sprinter Card */}
              <div className="vehicle-card">
                <div className="vehicle-image">
                  <div className="image-placeholder">Fleet Image Placeholder</div>
                </div>
                <div className="vehicle-content">
                  <div className="vehicle-header">
                    <h3 className="vehicle-title">Large Shuttle Sprinter</h3>
                    <span className="vehicle-tag large">Large</span>
                  </div>
                  <p className="vehicle-capacity">14 Seats • 14 Luggage</p>
                  <ul className="vehicle-features">
                    <li>Up to 14 passengers</li>
                    <li>High-capacity rear cargo for 14 carry-on bags</li>
                    <li>Upgraded suspension for a smoother ride</li>
                    <li>LED interior lighting with wide entry step</li>
                    <li>Dedicated rear AC & heat controls</li>
                    <li>Multiple USB charge points per row</li>
                    <li>Ideal for conferences, team travel, tours</li>
                  </ul>
                  <div className="vehicle-actions">
                    <button className="book-now-btn">Book Now</button>
                    <button className="check-rates-btn">Check Rates</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="ready-to-ride-banner">
          <div className="banner-content">
            <div className="banner-text">
              <h2>Ready to Ride in Style?</h2>
              <p>Lock in your rate and reserve your luxury experience today.</p>
            </div>
            <button className="banner-cta">Book Now</button>
          </div>
        </div>

        </div>
      <Footer />
    </>
  );
};

export default VehiceTypes;
