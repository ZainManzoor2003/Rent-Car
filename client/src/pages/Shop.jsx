import React from 'react';
import './Shop.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import car1 from '../assets/ChatGPT Image Oct 18_ 2025_ 12_18_09 PM.png';
import car2 from '../assets/ChatGPT Image Oct 18_ 2025_ 12_18_11 PM.png';
import car3 from '../assets/ChatGPT Image Oct 18_ 2025_ 12_18_12 PM.png';
import Navbar from '../components/Navbar';

const Shop = () => {
  return (
    <>
      <Navbar />
      
      {/* Eminent Limo Shop Section */}
      <section className="eminent-limo-section">
        <div className="eminent-limo-container">
          <div className="eminent-limo-header">
            <h2>Eminent Limo Shop</h2>
            <p>Browse our curated selection of luxury transportation packages. All-inclusive pricing with taxes, standard gratuity, fuel, and tolls included. Book instantly with our secure Shopify checkout.</p>
          </div>
          
          <div className="shop-info-cards-grid">
            <div className="shop-info-card">
              <div className="info-number">24/7</div>
              <div className="info-label">Availability</div>
            </div>
            <div className="shop-info-card">
              <div className="info-number">$0</div>
              <div className="info-label">Hidden Fees</div>
            </div>
            <div className="shop-info-card">
              <div className="info-number">100%</div>
              <div className="info-label">Secure Checkout</div>
            </div>
            <div className="shop-info-card">
              <div className="info-number">0</div>
              <div className="info-label">Items in Cart</div>
            </div>
          </div>
        </div>
      </section>

      {/* Vehicle Options & Pricing Section */}
      <section className="vehicle-pricing-section">
        <div className="vehicle-pricing-container">
          <h2 className="vehicle-pricing-title">Vehicle Options & Pricing</h2>
          
          <div className="vehicle-pricing-cards">
            <div className="vehicle-pricing-card">
              <div className="vehicle-emoji">🚗</div>
              <h3 className="vehicle-type">Executive Sedan</h3>
              <p className="vehicle-passengers">1-3 passengers</p>
              <p className="vehicle-price">Starting at $75</p>
            </div>
            
            <div className="vehicle-pricing-card">
              <div className="vehicle-emoji">🚙</div>
              <h3 className="vehicle-type">Luxury SUV</h3>
              <p className="vehicle-passengers">4-6 passengers</p>
              <p className="vehicle-price">Starting at $95</p>
            </div>
            
            <div className="vehicle-pricing-card">
              <div className="vehicle-emoji">🚐</div>
              <h3 className="vehicle-type">Sprinter Van</h3>
              <p className="vehicle-passengers">11-14 passengers</p>
              <p className="vehicle-price">Starting at $150</p>
        </div>

            <div className="vehicle-pricing-card">
              <div className="vehicle-emoji">🚌</div>
              <h3 className="vehicle-type">Mini Bus</h3>
              <p className="vehicle-passengers">20-24 passengers</p>
              <p className="vehicle-price">Starting at $200</p>
            </div>
          </div>
        </div>
      </section>

      {/* Airport Transfer Booking Section */}
      <section className="airport-transfer-section">
        <div className="airport-transfer-container">
          {/* Search and Filter Header */}
          <div className="search-filter-header">
            <div className="search-bar">
              <input 
                type="text" 
                placeholder="Search packages..." 
                className="search-input"
              />
            </div>
            <div className="filter-buttons">
              <button className="filter-btn">
                <span className="filter-icon">🔍</span>
                All Categories
                <span className="dropdown-arrow">▼</span>
              </button>
              <button className="filter-btn">
                <span className="filter-icon">🚗</span>
                All Vehicles
                <span className="dropdown-arrow">▼</span>
              </button>
            </div>
          </div>

          {/* Transfer Cards */}
          <div className="transfer-cards">
            {/* O'Hare Sedan Card */}
            <div className="transfer-card">
              <div className="card-badge">Best Seller</div>
              <div className="vehicle-icon-container">
                <img src={car1} alt="Executive Sedan" className="vehicle-icon sedan-icon" />
                </div>
              <h3 className="transfer-title">O'Hare Airport Transfer - Sedan</h3>
              <p className="transfer-description">
                Premium executive sedan service to/from O'Hare International Airport with flight tracking and meet & greet
              </p>
                <ul className="transfer-features">
                  <li>Real-time flight tracking</li>
                  <li>15-min complimentary wait time</li>
                  <li>Professional meet & greet</li>
                  <li>All-inclusive pricing</li>
                </ul>
              <div className="transfer-price">$75</div>
              <button className="add-to-cart-btn">
                <span className="cart-icon">🛒</span>
                Add to Cart
              </button>
                  </div>

            {/* O'Hare SUV Card */}
            <div className="transfer-card">
              <div className="vehicle-icon-container">
                <img src={car2} alt="Luxury SUV" className="vehicle-icon suv-icon" />
                  </div>
              <h3 className="transfer-title">O'Hare Airport Transfer - SUV</h3>
              <p className="transfer-description">
                Luxury SUV service for families and extra luggage space
              </p>
              <ul className="transfer-features">
                <li>Spacious seating for 4-6 passengers</li>
                <li>Extra luggage capacity</li>
                <li>Flight tracking included</li>
                <li>Complimentary water & Wi-Fi</li>
              </ul>
              <div className="transfer-price">$95</div>
              <button className="add-to-cart-btn">
                <span className="cart-icon">🛒</span>
                Add to Cart
              </button>
                  </div>
            {/* O'Hare SUV Card */}
            <div className="transfer-card">
              <div className="vehicle-icon-container">
                <img src={car2} alt="Luxury SUV" className="vehicle-icon suv-icon" />
              </div>
              <h3 className="transfer-title">O'Hare Airport Transfer - SUV</h3>
              <p className="transfer-description">
                Luxury SUV service for families and extra luggage space
              </p>
              <ul className="transfer-features">
                <li>Spacious seating for 4-6 passengers</li>
                <li>Extra luggage capacity</li>
                <li>Flight tracking included</li>
                <li>Complimentary water & Wi-Fi</li>
              </ul>
              <div className="transfer-price">$95</div>
              <button className="add-to-cart-btn">
                <span className="cart-icon">🛒</span>
                Add to Cart
              </button>
                </div>
            {/* O'Hare SUV Card */}
            <div className="transfer-card">
              <div className="vehicle-icon-container">
                <img src={car2} alt="Luxury SUV" className="vehicle-icon suv-icon" />
                  </div>
              <h3 className="transfer-title">O'Hare Airport Transfer - SUV</h3>
              <p className="transfer-description">
                Luxury SUV service for families and extra luggage space
              </p>
              <ul className="transfer-features">
                <li>Spacious seating for 4-6 passengers</li>
                <li>Extra luggage capacity</li>
                <li>Flight tracking included</li>
                <li>Complimentary water & Wi-Fi</li>
              </ul>
              <div className="transfer-price">$95</div>
              <button className="add-to-cart-btn">
                <span className="cart-icon">🛒</span>
                Add to Cart
              </button>
                  </div>
            {/* O'Hare SUV Card */}
            <div className="transfer-card">
              <div className="vehicle-icon-container">
                <img src={car2} alt="Luxury SUV" className="vehicle-icon suv-icon" />
              </div>
              <h3 className="transfer-title">O'Hare Airport Transfer - SUV</h3>
              <p className="transfer-description">
                Luxury SUV service for families and extra luggage space
              </p>
              <ul className="transfer-features">
                <li>Spacious seating for 4-6 passengers</li>
                <li>Extra luggage capacity</li>
                <li>Flight tracking included</li>
                <li>Complimentary water & Wi-Fi</li>
              </ul>
              <div className="transfer-price">$95</div>
              <button className="add-to-cart-btn">
                <span className="cart-icon">🛒</span>
                Add to Cart
              </button>
                </div>
            {/* O'Hare SUV Card */}
            <div className="transfer-card">
              <div className="vehicle-icon-container">
                <img src={car2} alt="Luxury SUV" className="vehicle-icon suv-icon" />
              </div>
              <h3 className="transfer-title">O'Hare Airport Transfer - SUV</h3>
              <p className="transfer-description">
                Luxury SUV service for families and extra luggage space
              </p>
              <ul className="transfer-features">
                <li>Spacious seating for 4-6 passengers</li>
                <li>Extra luggage capacity</li>
                <li>Flight tracking included</li>
                <li>Complimentary water & Wi-Fi</li>
              </ul>
              <div className="transfer-price">$95</div>
              <button className="add-to-cart-btn">
                <span className="cart-icon">🛒</span>
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </section>


          {/* Browse by Category Section */}
      <section className="browse-category-section">
        <div className="browse-category-container">
          <h2 className="browse-category-title">Browse by Category</h2>
            <div className="category-grid">
              <div className="category-card">
              <div className="category-icon">✈️</div>
              <h3 className="category-name">Airport Transfers</h3>
              <p className="category-count">4 products</p>
            </div>
            <div className="category-card">
              <div className="category-icon">🕐</div>
              <h3 className="category-name">Hourly Charters</h3>
              <p className="category-count">2 products</p>
            </div>
            <div className="category-card">
              <div className="category-icon">🎉</div>
              <h3 className="category-name">Special Events</h3>
              <p className="category-count">2 products</p>
            </div>
            <div className="category-card">
              <div className="category-icon">👥</div>
              <h3 className="category-name">Group Transport</h3>
              <p className="category-count">2 products</p>
            </div>
            <div className="category-card">
              <div className="category-icon">🎁</div>
              <h3 className="category-name">Gift Cards</h3>
              <p className="category-count">1 products</p>
            </div>
            <div className="category-card">
              <div className="category-icon">⭐</div>
              <h3 className="category-name">Add-ons & Upgrades</h3>
              <p className="category-count">1 products</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="our-services-shop-section">
        <div className="our-services-shop-container">
          <h2 className="our-services-shop-title">Our Services</h2>
          <div className="shop-services-grid">
            <div className="service-card-shop">
              <div className="service-icon-shop">✈️</div>
              <h3 className="service-title-shop">Airport Transfers</h3>
              <p className="service-description-shop">Premium ORD and MDW pickup and drop-off with flight tracking</p>
            </div>
            <div className="service-card-shop">
              <div className="service-icon-shop">🕐</div>
              <h3 className="service-title-shop">Corporate Travel</h3>
              <p className="service-description-shop">Professional business transportation for executives and teams</p>
            </div>
            <div className="service-card-shop">
              <div className="service-icon-shop">📅</div>
              <h3 className="service-title-shop">Special Events</h3>
              <p className="service-description-shop">Weddings, proms, concerts, and celebration transportation</p>
            </div>
            <div className="service-card-shop">
              <div className="service-icon-shop">🎁</div>
              <h3 className="service-title-shop">Gift Cards</h3>
              <p className="service-description-shop">Perfect gifts for clients, employees, and loved ones</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Fleet Section */}
      <section className="our-fleet-shop-section">
        <div className="our-fleet-shop-container">
          <h2 className="our-fleet-shop-title">Our Fleet</h2>
          <div className="fleet-grid-shop">
            <div className="fleet-card-shop">
              <div className="fleet-image-container">
                <img src={car1} alt="Executive Sedan" className="fleet-image" />
              </div>
              <h3 className="fleet-type">Executive Sedan</h3>
              <p className="fleet-capacity">1-3 passengers</p>
              <p className="fleet-description">Perfect for business travelers and individuals</p>
            </div>
            <div className="fleet-card-shop">
              <div className="fleet-image-container">
                <img src={car2} alt="Luxury SUV" className="fleet-image" />
              </div>
              <h3 className="fleet-type">Luxury SUV</h3>
              <p className="fleet-capacity">4-6 passengers</p>
              <p className="fleet-description">Spacious comfort for families and small groups</p>
            </div>
            <div className="fleet-card-shop">
              <div className="fleet-image-container">
                <img src={car3} alt="Sprinter Van" className="fleet-image" />
              </div>
              <h3 className="fleet-type">Sprinter Van</h3>
              <p className="fleet-capacity">11-14 passengers</p>
              <p className="fleet-description">Ideal for medium-sized groups with luggage</p>
            </div>
            <div className="fleet-card-shop">
              <div className="fleet-image-container">
                <img src={car1} alt="Mini Bus" className="fleet-image" />
              </div>
              <h3 className="fleet-type">Mini Bus</h3>
              <p className="fleet-capacity">20-24 passengers</p>
              <p className="fleet-description">Perfect for large groups and events</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Shop Our Packages Section */}
      <section className="why-shop-section">
        <div className="why-shop-container">
          <div className="benefits-container">
            <h2 className="why-shop-title">Why Shop Our Packages?</h2>
            <div className="benefits-grid">
              <div className="benefit-card">
                <div className="benefit-icon">⭐</div>
                <div className="benefit-content">
                  <h3 className="benefit-title">All-Inclusive Pricing</h3>
                  <p className="benefit-description">No hidden fees. Taxes, gratuity, fuel, and tolls included in every package.</p>
                </div>
              </div>
              <div className="benefit-card">
                <div className="benefit-icon">✓</div>
                <div className="benefit-content">
                  <h3 className="benefit-title">Instant Confirmation</h3>
                  <p className="benefit-description">Secure Shopify checkout with immediate booking confirmation via email.</p>
                </div>
              </div>
              <div className="benefit-card">
                <div className="benefit-icon">📅</div>
                <div className="benefit-content">
                  <h3 className="benefit-title">Flexible Cancellation</h3>
                  <p className="benefit-description">Free cancellation up to 24-72 hours before service (varies by vehicle type).</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Secure Shopping Experience Section */}
      <section className="secure-shopping-section">
        <div className="secure-shopping-container">
          <h2 className="secure-shopping-title">Secure Shopping Experience</h2>
          <p className="secure-shopping-description">
            Our shop is powered by Shopify, ensuring bank-level security for all transactions. We accept all major credit cards and provide instant confirmation for every purchase.
          </p>
          <ul className="secure-features">
            <li>✓ SSL Encrypted</li>
            <li>✓ PCI Compliant</li>
            <li>✓ 24/7 Support</li>
            <li>✓ Instant Confirmation</li>
          </ul>
        </div>
      </section>
          <div className="ready-to-ride-banner">
          <div className="banner-content">
            <div className="banner-text">
              <h2>Book With Confidence</h2>
              <p>Eminent Limo makes group and private transportation effortless. Get instant quotes, transparent pricing, and 24/7 support.</p>
            </div>
            <button className="banner-cta">Book Now</button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Shop;
