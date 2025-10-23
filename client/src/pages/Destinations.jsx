import React, { useState } from 'react';
import './Destinations.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Destinations = () => {
 
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
              <h1>Top Destinations — Chicago & Beyond</h1>
              <p>From the Magnificent Mile to Midwest university towns and state capitals—arrive in comfort with professional chauffeurs and a vehicle class tailored to your group size.</p>
              
              <div className="cta-buttons">
                <button className="calculate-rate-btn" onClick={() => document.getElementById('rate-form').scrollIntoView()}>
                  Book Now
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

        {/* Long Distances Section */}
        <div className="long-distances-section">
          <div className="long-distances-container">
            <div className="long-distances-header">
              <h2>Long Distances — City & State Highlights</h2>
              <p>Comfortable long-haul service with luggage room and group options. Ideal for university moves, game days, conferences, and weekend getaways.</p>
            </div>

            <div className="destinations-grid">
              <div className="destination-card">
                <div className="destination-icon">🚗</div>
                <h3>Chicago Suburbs (10 Busy Cities)</h3>
                <p>High-demand suburbs just outside Chicago—popular for business parks, shopping, sports, and conventions. Quick airport links and frequent point-to-point travel.</p>
                <div className="cities-list">
                  <button className="city-tag">Naperville</button>
                  <button className="city-tag">Aurora</button>
                  <button className="city-tag">Joliet</button>
                  <button className="city-tag">Elgin</button>
                  <button className="city-tag">Schaumburg</button>
                  <button className="city-tag">Evanston</button>
                  <button className="city-tag">Oak Brook</button>
                  <button className="city-tag">Rosemont</button>
                  <button className="city-tag">Orland Park</button>
                  <button className="city-tag">Downers Grove</button>
                </div>
              </div>

              <div className="destination-card">
                <div className="destination-icon">📍</div>
                <h3>Illinois (Outside Chicago Metro – 5 Busy Cities)</h3>
                <p>Key destinations across Illinois—state capital events, universities, and regional business hubs. Ideal for day trips and charter service.</p>
                <div className="cities-list">
                  <button className="city-tag">Rockford</button>
                  <button className="city-tag">Springfield</button>
                  <button className="city-tag">Peoria</button>
                  <button className="city-tag">Champaign-Urbana</button>
                  <button className="city-tag">Bloomington</button>
                </div>
              </div>

              <div className="destination-card">
                <div className="destination-icon">☀️</div>
                <h3>Indiana (10 Busy Cities)</h3>
                <p>From university towns to convention traffic, Indiana routes cover airports, stadiums, and event venues—great for hourly or point-to-point.</p>
                <div className="cities-list">
                  <button className="city-tag">Indianapolis</button>
                  <button className="city-tag">Fort Wayne</button>
                  <button className="city-tag">Evansville</button>
                  <button className="city-tag">South Bend</button>
                  <button className="city-tag">Hammond</button>
                  <button className="city-tag">Gary</button>
                  <button className="city-tag">Bloomington</button>
                  <button className="city-tag">Muncie</button>
                  <button className="city-tag">Terre Haute</button>
                  <button className="city-tag">Lafayette</button>
                </div>
              </div>

              <div className="destination-card">
                <div className="destination-icon">🧀</div>
                <h3>Wisconsin (10 Busy Cities)</h3>
                <p>Event travel, lake getaways, and airport transfers—Wisconsin routes from short hops to full-day itineraries.</p>
                <div className="cities-list">
                  <button className="city-tag">Milwaukee</button>
                  <button className="city-tag">Madison</button>
                  <button className="city-tag">Green Bay</button>
                  <button className="city-tag">Kenosha</button>
                  <button className="city-tag">Racine</button>
                  <button className="city-tag">Appleton</button>
                  <button className="city-tag">Oshkosh</button>
                  <button className="city-tag">Eau Claire</button>
                  <button className="city-tag">La Crosse</button>
                  <button className="city-tag">Wausau</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* More Destinations Section */}
        <div className="more-destinations-section">
          <div className="more-destinations-container">
            <div className="more-destinations-header">
              <h2>More Destinations — Pick Your Vehicle</h2>
              <p>Quick links for popular cities. Choose a class and calculate an instant rate.</p>
            </div>

            <div className="filter-section">
              <div className="filter-dropdown">
                <select className="filter-select">
                  <option value="all">All</option>
                  <option value="suburbs">Chicago Suburbs</option>
                  <option value="illinois">Illinois</option>
                  <option value="indiana">Indiana</option>
                  <option value="wisconsin">Wisconsin</option>
                </select>
                <span className="dropdown-arrow">▼</span>
              </div>
              <div className="filter-search">
                <input 
                  type="text" 
                  placeholder="Filter city..." 
                  className="filter-input"
                />
              </div>
            </div>

            <div className="cities-grid">
              <div className="city-card">
                <h3>Naperville</h3>
                <div className="vehicle-options">
                  <div className="vehicle-option">
                    <span className="vehicle-type">Sedan</span>
                    <span className="vehicle-capacity">(Up to 3)</span>
                    <a href="#" className="calculate-rate-link">Calculate Rate</a>
                  </div>
                  <div className="vehicle-option">
                    <span className="vehicle-type">SUV</span>
                    <span className="vehicle-capacity">(Up to 6)</span>
                    <a href="#" className="calculate-rate-link">Calculate Rate</a>
                  </div>
                  <div className="vehicle-option">
                    <span className="vehicle-type">Sprinter Van</span>
                    <span className="vehicle-capacity">(Up to 14)</span>
                    <a href="#" className="calculate-rate-link">Calculate Rate</a>
                  </div>
                  <div className="vehicle-option">
                    <span className="vehicle-type">Minibus</span>
                    <span className="vehicle-capacity">(Up to 23)</span>
                    <a href="#" className="calculate-rate-link">Calculate Rate</a>
                  </div>
                </div>
              </div>

              <div className="city-card">
                <h3>Aurora</h3>
                <div className="vehicle-options">
                  <div className="vehicle-option">
                    <span className="vehicle-type">Sedan</span>
                    <span className="vehicle-capacity">(Up to 3)</span>
                    <a href="#" className="calculate-rate-link">Calculate Rate</a>
                  </div>
                  <div className="vehicle-option">
                    <span className="vehicle-type">SUV</span>
                    <span className="vehicle-capacity">(Up to 6)</span>
                    <a href="#" className="calculate-rate-link">Calculate Rate</a>
                  </div>
                  <div className="vehicle-option">
                    <span className="vehicle-type">Sprinter Van</span>
                    <span className="vehicle-capacity">(Up to 14)</span>
                    <a href="#" className="calculate-rate-link">Calculate Rate</a>
                  </div>
                  <div className="vehicle-option">
                    <span className="vehicle-type">Minibus</span>
                    <span className="vehicle-capacity">(Up to 23)</span>
                    <a href="#" className="calculate-rate-link">Calculate Rate</a>
                  </div>
                </div>
              </div>

              <div className="city-card">
                <h3>Joliet</h3>
                <div className="vehicle-options">
                  <div className="vehicle-option">
                    <span className="vehicle-type">Sedan</span>
                    <span className="vehicle-capacity">(Up to 3)</span>
                    <a href="#" className="calculate-rate-link">Calculate Rate</a>
                  </div>
                  <div className="vehicle-option">
                    <span className="vehicle-type">SUV</span>
                    <span className="vehicle-capacity">(Up to 6)</span>
                    <a href="#" className="calculate-rate-link">Calculate Rate</a>
                  </div>
                  <div className="vehicle-option">
                    <span className="vehicle-type">Sprinter Van</span>
                    <span className="vehicle-capacity">(Up to 14)</span>
                    <a href="#" className="calculate-rate-link">Calculate Rate</a>
                  </div>
                  <div className="vehicle-option">
                    <span className="vehicle-type">Minibus</span>
                    <span className="vehicle-capacity">(Up to 23)</span>
                    <a href="#" className="calculate-rate-link">Calculate Rate</a>
                  </div>
                </div>
              </div>

              <div className="city-card">
                <h3>Elgin</h3>
                <div className="vehicle-options">
                  <div className="vehicle-option">
                    <span className="vehicle-type">Sedan</span>
                    <span className="vehicle-capacity">(Up to 3)</span>
                    <a href="#" className="calculate-rate-link">Calculate Rate</a>
                  </div>
                  <div className="vehicle-option">
                    <span className="vehicle-type">SUV</span>
                    <span className="vehicle-capacity">(Up to 6)</span>
                    <a href="#" className="calculate-rate-link">Calculate Rate</a>
                  </div>
                  <div className="vehicle-option">
                    <span className="vehicle-type">Sprinter Van</span>
                    <span className="vehicle-capacity">(Up to 14)</span>
                    <a href="#" className="calculate-rate-link">Calculate Rate</a>
                  </div>
                  <div className="vehicle-option">
                    <span className="vehicle-type">Minibus</span>
                    <span className="vehicle-capacity">(Up to 23)</span>
                    <a href="#" className="calculate-rate-link">Calculate Rate</a>
                  </div>
                </div>
              </div>

              <div className="city-card">
                <h3>Schaumburg</h3>
                <div className="vehicle-options">
                  <div className="vehicle-option">
                    <span className="vehicle-type">Sedan</span>
                    <span className="vehicle-capacity">(Up to 3)</span>
                    <a href="#" className="calculate-rate-link">Calculate Rate</a>
                  </div>
                  <div className="vehicle-option">
                    <span className="vehicle-type">SUV</span>
                    <span className="vehicle-capacity">(Up to 6)</span>
                    <a href="#" className="calculate-rate-link">Calculate Rate</a>
                  </div>
                  <div className="vehicle-option">
                    <span className="vehicle-type">Sprinter Van</span>
                    <span className="vehicle-capacity">(Up to 14)</span>
                    <a href="#" className="calculate-rate-link">Calculate Rate</a>
                  </div>
                  <div className="vehicle-option">
                    <span className="vehicle-type">Minibus</span>
                    <span className="vehicle-capacity">(Up to 23)</span>
                    <a href="#" className="calculate-rate-link">Calculate Rate</a>
                  </div>
                </div>
              </div>

              <div className="city-card">
                <h3>Evanston</h3>
                <div className="vehicle-options">
                  <div className="vehicle-option">
                    <span className="vehicle-type">Sedan</span>
                    <span className="vehicle-capacity">(Up to 3)</span>
                    <a href="#" className="calculate-rate-link">Calculate Rate</a>
                  </div>
                  <div className="vehicle-option">
                    <span className="vehicle-type">SUV</span>
                    <span className="vehicle-capacity">(Up to 6)</span>
                    <a href="#" className="calculate-rate-link">Calculate Rate</a>
                  </div>
                  <div className="vehicle-option">
                    <span className="vehicle-type">Sprinter Van</span>
                    <span className="vehicle-capacity">(Up to 14)</span>
                    <a href="#" className="calculate-rate-link">Calculate Rate</a>
                  </div>
                  <div className="vehicle-option">
                    <span className="vehicle-type">Minibus</span>
                    <span className="vehicle-capacity">(Up to 23)</span>
                    <a href="#" className="calculate-rate-link">Calculate Rate</a>
                  </div>
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

export default Destinations;
