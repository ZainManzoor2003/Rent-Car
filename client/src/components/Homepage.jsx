import React, { useState } from 'react';
import './Homepage.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import car1 from '../assets/ChatGPT Image Oct 18_ 2025_ 12_18_09 PM.png';
import car2 from '../assets/ChatGPT Image Oct 18_ 2025_ 12_18_11 PM.png';
import car3 from '../assets/ChatGPT Image Oct 18_ 2025_ 12_18_12 PM.png';
import car4 from '../assets/ChatGPT Image Oct 18_ 2025_ 12_18_13 PM.png';
import car5 from '../assets/ChatGPT Image Oct 18_ 2025_ 12_18_14 PM.png';
import car6 from '../assets/ChatGPT Image Oct 18_ 2025_ 12_18_17 PM.png';
import car7 from '../assets/ChatGPT Image Oct 18_ 2025_ 12_18_24 PM.png';

const Homepage = () => {
 
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
              <h1>Chicago Limo, Sprinter Van & Bus Rental Services</h1>
              <p>Where Luxury Meets Simplicity. Eminent Limo provides premium black car service, Sprinter van rentals, and bus rentals in Chicago and the Chicagoland area. From airport transfers to weddings and corporate events, we deliver comfort, reliability, and style—24/7.</p>
              
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

        {/* Trusted Partners Section */}
        <div className="trusted-partners-section">
          <div className="trusted-partners-container">
            <div className="trusted-partners-header">
              <h2>TRUSTED PARTNERS</h2>
            </div>
            <div className="partners-grid">
              <div className="partner-card">
                <span>Gnet_Logo</span>
              </div>
              <div className="partner-card">
                <span>Tripadvisor-Logo-640X400</span>
              </div>
              <div className="partner-card">
                <span>Proudpartner</span>
              </div>
              <div className="partner-card">
                <span>Limo-Anywhere-1</span>
              </div>
              <div className="partner-card">
                <span>Google</span>
              </div>
            </div>
          </div>
        </div>

        {/* Fleet Overview Section */}
        <div className="fleet-overview-section">
          <div className="fleet-overview-container">
            <div className="fleet-overview-header">
              <h2>Fleet Overview</h2>
            </div>
            <div className="fleet-cards-grid">
              <div className="fleet-card">
                <div className="fleet-image">
                  <img src={car1} alt="Executive Sedan / SUV" />
                </div>
                <h3>Executive Sedan / SUV</h3>
                <p>1-6 • from $75</p>
                <a href="#" className="book-now-link">Book Now</a>
              </div>
              <div className="fleet-card">
                <div className="fleet-image">
                  <img src={car2} alt="Sprinter Van Rental" />
                </div>
                <h3>Sprinter Van Rental</h3>
                <p>11-14 • from $85</p>
                <a href="#" className="book-now-link">Book Now</a>
              </div>
              <div className="fleet-card">
                <div className="fleet-image">
                  <img src={car3} alt="Stretch Limousine" />
                </div>
                <h3>Stretch Limousine</h3>
                <p>up to 20 • from $125</p>
                <a href="#" className="book-now-link">Book Now</a>
              </div>
              <div className="fleet-card">
                <div className="fleet-image">
                  <img src={car4} alt="Seamless Travel, Every Occasion" />
                </div>
                <h3>Seamless Travel, Every Occasion</h3>
                <p>Professional service for all your transportation needs</p>
                <a href="#" className="book-now-link">Book Now</a>
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
            <div className="service-cards-grid">
              <div className="service-card">
                <div className="service-image">
                  <img src={car5} alt="Airport Transfers" />
                </div>
                <h3>Airport Transfers</h3>
                <p>Reliable rides to O'Hare & Midway with flight tracking.</p>
              </div>
              <div className="service-card">
                <div className="service-image">
                  <img src={car6} alt="Corporate Travel" />
                </div>
                <h3>Corporate Travel</h3>
                <p>Executive sedans & SUVs for business professionals.</p>
              </div>
              <div className="service-card">
                <div className="service-image">
                  <img src={car7} alt="Corporate Travel" />
                </div>
                <h3>Corporate Travel</h3>
                <p>Executive sedans & SUVs for business professionals.</p>
              </div>
              <div className="service-card">
                <div className="service-image">
                  <img src={car1} alt="Corporate Travel" />
                </div>
                <h3>Corporate Travel</h3>
                <p>Executive sedans & SUVs for business professionals.</p>
              </div>
            </div>
          </div>
        </div>

        

        {/* Our Services Section */}
        <div className="our-services-section">
          <div className="our-services-container">
            <div className="our-services-header">
              <h2>Our Services</h2>
            </div>
            <div className="services-cards-grid">
              <div className="service-card">
                <div className="service-image">
                  <img src={car2} alt="Corporate Transportation" />
                </div>
                <h3>Corporate Transportation</h3>
              </div>
              <div className="service-card">
                <div className="service-image">
                  <img src={car3} alt="Corporate Transportation" />
                </div>
                <h3>Corporate Transportation</h3>
              </div>
              <div className="service-card">
                <div className="service-image">
                  <img src={car4} alt="Our Fleet" />
                </div>
                <h3>Our Fleet</h3>
              </div>
            </div>
          </div>
        </div>

        {/* Top Destinations Section */}
        <div className="top-destinations-section">
          <div className="top-destinations-container">
            <div className="top-destinations-header">
              <h2>Top Destinations (Chicagoland)</h2>
            </div>
            <div className="destinations-cards-grid">
              <div className="destination-card">
                <div className="destination-image">
                  <img src={car5} alt="Midway Airport" />
                </div>
                <h3>Midway Airport</h3>
              </div>
              <div className="destination-card">
                <div className="destination-image">
                  <img src={car6} alt="Downtown Chicago" />
                </div>
                <h3>Downtown Chicago</h3>
              </div>
              <div className="destination-card">
                <div className="destination-image">
                  <img src={car7} alt="Highland Park" />
                </div>
                <h3>Highland Park</h3>
              </div>
            </div>
          </div>
        </div>

        {/* Customer Reviews Section */}
        <div className="customer-reviews-section">
          <div className="customer-reviews-container">
            <div className="customer-reviews-header">
              <h2>Customer Reviews</h2>
            </div>
            <div className="reviews-cards-grid">
              <div className="review-card">
                <p>"If you are in need of limo services in Chicago and surrounding areas, Eminent Limo is the only choice. As a constant Chicagoland traveler, I utilize Eminent Limo's services at least once a month, often times last minute, and they always deliver.."</p>
                <div className="review-author">— Coleen Bogle · Google Verified Review</div>
              </div>
              <div className="review-card">
                <div className="stars">★★★★★</div>
                <p>"GREAT COMPANY !!!! My driver MR. T was awesome f a great customer service. I hi work and thanks for serving Our Services"</p>
                <div className="review-author">— Tory Lane · Google Verified Rev</div>
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
            <div className="fleet-cards-grid">
              <div className="fleet-card">
                <div className="fleet-image">
                  <img src={car1} alt="Luxury SUV" />
                </div>
                <h3>Luxury SUV</h3>
                <p>6 passengers • 6 luggage</p>
                <a href="#" className="calculate-rate-link">Calculate Rate</a>
              </div>
              <div className="fleet-card">
                <div className="fleet-image">
                  <img src={car2} alt="Standard Shuttle Sprinter" />
                </div>
                <h3>Standard Shuttle Sprinter</h3>
                <p>11 passengers • 11 luggage</p>
                <a href="#" className="calculate-rate-link">Calculate Rate</a>
              </div>
              <div className="fleet-card">
                <div className="fleet-image">
                  <img src={car3} alt="Large Shuttle Sprinter" />
                </div>
                <h3>Large Shuttle Sprinter</h3>
                <p>14 passengers • 14 luggage</p>
                <a href="#" className="calculate-rate-link">Calculate Rate</a>
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

        {/* Service Areas & Top Destinations Section */}
        <div className="service-areas-section">
          <div className="service-areas-container">
            <div className="service-areas-header">
              <h2>Service Areas & Top Destinations</h2>
            </div>
            <div className="ohare-section">
              <h3>Chicago O'Hare International Airport</h3>
              <p>Popular Wisconsin destinations connected to ORD.</p>
              <div className="destinations-grid" style={{gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))'}}>
                <div className="destination-item">Beloit</div>
                <div className="destination-item">Burlington</div>
                <div className="destination-item">Elkhorn</div>
                <div className="destination-item">Greendale</div>
                <div className="destination-item">Kenosha</div>
                <div className="destination-item">Milwaukee</div>
                <div className="destination-item">New Berlin</div>
                <div className="destination-item">Racine</div>
                <div className="destination-item">South Milwaukee</div>
                <div className="destination-item">Wauwatosa</div>
                <div className="destination-item">Brookfield</div>
                <div className="destination-item">Caledonia</div>
                <div className="destination-item">Franklin</div>
                <div className="destination-item">Greenfield</div>
                <div className="destination-item">Menomonee Falls</div>
                <div className="destination-item">Mount Pleasant</div>
                <div className="destination-item">Pewaukee City</div>
                <div className="destination-item">Salem Lakes</div>
                <div className="destination-item">St. Francis</div>
                <div className="destination-item">West Allis</div>
                <div className="destination-item">Brown Deer</div>
                <div className="destination-item">Cudahy</div>
                <div className="destination-item">Glendale</div>
              </div>
            </div>
          </div>
        </div>

        {/* Service Cards Section */}
        <div className="service-cards-section">
          <div className="service-cards-container">
            <div className="service-card">
              <h3>Chicago Midway International Airport</h3>
              <p>Direct, reliable service to MDW for flights, events, and crew transport.</p>
            </div>
            <div className="service-card">
              <h3>Sprinter Van Rental — Illinois</h3>
              <p>Group travel made simple: 11-14 passenger vans across Chicagoland & IL cities.</p>
            </div>
            <div className="service-card">
              <h3>Transportation Services</h3>
              <p>Black car, stretch limo corporate shuttles for all your transportation needs.</p>
            </div>
          </div>
        </div>

        </div>
      <Footer />
    </>
  );
};

export default Homepage;
