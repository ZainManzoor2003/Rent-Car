import React, { useState } from 'react';
import './VehicleTypes.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import car1 from '../assets/ChatGPT Image Oct 18_ 2025_ 12_18_09 PM.png';
import car2 from '../assets/ChatGPT Image Oct 18_ 2025_ 12_18_11 PM.png';
import car3 from '../assets/ChatGPT Image Oct 18_ 2025_ 12_18_12 PM.png';
import car4 from '../assets/ChatGPT Image Oct 18_ 2025_ 12_18_13 PM.png';
import car5 from '../assets/ChatGPT Image Oct 18_ 2025_ 12_18_14 PM.png';
import car6 from '../assets/ChatGPT Image Oct 18_ 2025_ 12_18_17 PM.png';

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

        {/* Vehicle Types Section */}
        <div className="vehicle-types-section">
          <div className="vehicle-types-container">
            <h2 className="section-title">SUVs</h2>
            <p className="section-subtitle">Calculate an Instant Rate</p>
            
            <div className="vehicle-cards">
              {/* Executive SUV Card */}
              <div className="vehicle-card">
                <div className="vehicle-image">
                  <img src={car1} alt="Executive SUV" className="vehicle-img" />
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
                  <img src={car2} alt="Luxury SUV" className="vehicle-img" />
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
                  <img src={car3} alt="Party Sprinter Limo" className="vehicle-img" />
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
                  <img src={car4} alt="30 Passengers Party Bus" className="vehicle-img" />
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
                  <img src={car5} alt="Standard Shuttle Sprinter" className="vehicle-img" />
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
                  <img src={car6} alt="Large Shuttle Sprinter" className="vehicle-img" />
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

        {/* Sedans Section */}
        <div className="vehicle-types-section">
          <div className="vehicle-types-container">
            <h2 className="section-title">Sedans</h2>
            <p className="section-subtitle">Calculate an Instant Rate</p>
            
            <div className="vehicle-cards">
              {/* Executive Sedan Card */}
              <div className="vehicle-card">
                <div className="vehicle-image">
                  <img src={car1} alt="Executive Sedan" className="vehicle-img" />
                </div>
                <div className="vehicle-content">
                  <div className="vehicle-header">
                    <h3 className="vehicle-title">Executive Sedan</h3>
                    <span className="vehicle-tag executive">Executive</span>
                  </div>
                  <p className="vehicle-capacity">3 Seats • 3 Luggage</p>
                  <ul className="vehicle-features">
                    <li>Up to 3 passengers</li>
                    <li>Premium leather interior with wood trim</li>
                    <li>Quiet cabin with excellent legroom</li>
                    <li>USB-A/C charging + 12V power outlet</li>
                    <li>Complimentary water & daily periodicals</li>
                    <li>Rear cargo fits 2 large suitcases or 3 carry-ons</li>
                    <li>Discreet black exterior — ideal for executives</li>
                  </ul>
                  <div className="vehicle-actions">
                    <button className="book-now-btn">Book Now</button>
                    <button className="check-rates-btn">Check Rates</button>
                  </div>
                </div>
              </div>

              {/* Luxury Sedan Card */}
              <div className="vehicle-card">
                <div className="vehicle-image">
                  <img src={car2} alt="Luxury Sedan" className="vehicle-img" />
                </div>
                <div className="vehicle-content">
                  <div className="vehicle-header">
                    <h3 className="vehicle-title">Luxury Sedan</h3>
                    <span className="vehicle-tag luxury">Luxury</span>
                  </div>
                  <p className="vehicle-capacity">3 Seats • 3 Luggage</p>
                  <ul className="vehicle-features">
                    <li>Up to 3 passengers</li>
                    <li>Power panoramic, all-glass roof</li>
                    <li>Heated & ventilated seats, tri-zone climate</li>
                    <li>Rear console controls for climate & audio</li>
                    <li>Wireless charging & dual USB-C</li>
                    <li>Hands-free trunk access, soft-close doors</li>
                    <li>Cargo for 2 large checked or 4 carry-on bags</li>
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

        {/* Minibus Section */}
        <div className="vehicle-types-section">
          <div className="vehicle-types-container">
            <h2 className="section-title">Minibus</h2>
            <p className="section-subtitle">Calculate an Instant Rate</p>
            
            <div className="vehicle-cards">
              {/* Minibus Card */}
              <div className="vehicle-card">
                <div className="vehicle-image">
                  <img src={car5} alt="Minibus" className="vehicle-img" />
                </div>
                <div className="vehicle-content">
                  <div className="vehicle-header">
                    <h3 className="vehicle-title">Minibus</h3>
                    <span className="vehicle-tag large">Large</span>
                  </div>
                  <p className="vehicle-capacity">23 Seats • 23 Luggage</p>
                  <ul className="vehicle-features">
                    <li>Up to 23 passengers</li>
                    <li>Coach-style high-back seats with armrests</li>
                    <li>Overhead parcel racks + rear luggage hold</li>
                    <li>PA mic system for tours/announcements</li>
                    <li>USB charging across cabin (select models)</li>
                    <li>Great for corporate shuttles & group travel</li>
                    <li>Easy curbside boarding with wide door</li>
                  </ul>
                  <div className="vehicle-actions">
                    <button className="book-now-btn">Book Now</button>
                    <button className="check-rates-btn">Check Rates</button>
                  </div>
                </div>
              </div>
              <div className="vehicle-card">
                <div className="vehicle-image">
                  <img src={car5} alt="Minibus" className="vehicle-img" />
                </div>
                <div className="vehicle-content">
                  <div className="vehicle-header">
                    <h3 className="vehicle-title">Minibus</h3>
                    <span className="vehicle-tag large">Large</span>
                  </div>
                  <p className="vehicle-capacity">23 Seats • 23 Luggage</p>
                  <ul className="vehicle-features">
                    <li>Up to 23 passengers</li>
                    <li>Coach-style high-back seats with armrests</li>
                    <li>Overhead parcel racks + rear luggage hold</li>
                    <li>PA mic system for tours/announcements</li>
                    <li>USB charging across cabin (select models)</li>
                    <li>Great for corporate shuttles & group travel</li>
                    <li>Easy curbside boarding with wide door</li>
                  </ul>
                  <div className="vehicle-actions">
                    <button className="book-now-btn">Book Now</button>
                    <button className="check-rates-btn">Check Rates</button>
                  </div>
                </div>
              </div>
              <div className="vehicle-card">
                <div className="vehicle-image">
                  <img src={car5} alt="Minibus" className="vehicle-img" />
                </div>
                <div className="vehicle-content">
                  <div className="vehicle-header">
                    <h3 className="vehicle-title">Minibus</h3>
                    <span className="vehicle-tag large">Large</span>
                  </div>
                  <p className="vehicle-capacity">23 Seats • 23 Luggage</p>
                  <ul className="vehicle-features">
                    <li>Up to 23 passengers</li>
                    <li>Coach-style high-back seats with armrests</li>
                    <li>Overhead parcel racks + rear luggage hold</li>
                    <li>PA mic system for tours/announcements</li>
                    <li>USB charging across cabin (select models)</li>
                    <li>Great for corporate shuttles & group travel</li>
                    <li>Easy curbside boarding with wide door</li>
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

        {/* Stretch Limos Section */}
        <div className="vehicle-types-section">
          <div className="vehicle-types-container">
            <h2 className="section-title">Stretch Limos</h2>
            <p className="section-subtitle">Calculate an Instant Rate</p>
            
            <div className="vehicle-cards">
              {/* 9 Passengers Stretch Limo Card */}
              <div className="vehicle-card">
                <div className="vehicle-image">
                  <img src={car3} alt="9 Passengers Stretch Limo" className="vehicle-img" />
                </div>
                <div className="vehicle-content">
                  <div className="vehicle-header">
                    <h3 className="vehicle-title">9 Passengers Stretch Limo</h3>
                    <span className="vehicle-tag large">Large</span>
                  </div>
                  <p className="vehicle-capacity">9 Seats • 3 Luggage</p>
                  <ul className="vehicle-features">
                    <li>Up to 9 passengers</li>
                    <li>Leather J-seating with illuminated accents</li>
                    <li>Privacy divider & blackout tint</li>
                    <li>Glassware & cooler (ice/water included)</li>
                    <li>Bluetooth sound with party lighting</li>
                    <li>Ideal for proms, birthdays, anniversaries</li>
                    <li>Small trunk for 2-3 soft bags</li>
                  </ul>
                  <div className="vehicle-actions">
                    <button className="book-now-btn">Book Now</button>
                    <button className="check-rates-btn">Check Rates</button>
                  </div>
                </div>
              </div>

              {/* SUV Stretch Limo Card */}
              <div className="vehicle-card">
                <div className="vehicle-image">
                  <img src={car4} alt="SUV Stretch Limo" className="vehicle-img" />
                </div>
                <div className="vehicle-content">
                  <div className="vehicle-header">
                    <h3 className="vehicle-title">SUV Stretch Limo</h3>
                    <span className="vehicle-tag executive">Executive</span>
                  </div>
                  <p className="vehicle-capacity">20 Seats • 3 Luggage</p>
                  <ul className="vehicle-features">
                    <li>Up to 20 passengers</li>
                    <li>Elevated ride height & wide entry doors</li>
                    <li>Multiple bar stations with glassware</li>
                    <li>Club lighting & premium surround audio</li>
                    <li>Privacy divider + intercom to chauffeur</li>
                    <li>Perfect for weddings & red-carpet events</li>
                    <li>Small cargo for event bags & coats</li>
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
