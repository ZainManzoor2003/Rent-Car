import React from 'react';
import './Shop.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Shop = () => {
  return (
    <>
      <div className="shop-page">
        <div className="navbar-container">
          <Navbar showHamburger={true} />
        </div>

        <div className="shop-content">
          <div className="shop-header">
            <h1>Eminent Limo — All-Inclusive Shop</h1>
            <p>Simple, all-inclusive rates for Chicagoland and regional destinations. Taxes, standard gratuity, fuel & tolls included.</p>
          </div>

          <div className="search-section">
            <div className="search-container">
              <div className="search-icon">🔍</div>
              <input 
                type="text" 
                placeholder="Search vehicles, cities, or services..." 
                className="search-input"
              />
            </div>
          </div>
          <div className="catalog-section">
            <div className="catalog-content">
              <h2>Product Catalog Coming Soon</h2>
              <p className="catalog-subtitle">Product filters and cards will appear here.</p>
              <p className="catalog-description">You can integrate your shop catalog, vehicle packages, or service bundles here.</p>
            </div>
          </div>

          {/* Featured Packages Section */}
          <div className="featured-packages-section">
            <h2>Featured Packages</h2>
            <div className="packages-grid">
              <div className="package-card">
                <div className="package-image">
                  <span>Vehicle Image</span>
                </div>
                <h3>O'Hare Airport Transfer</h3>
                <p className="vehicle-type">Executive Sedan</p>
                <div className="package-price">$95</div>
                <div className="package-features">
                  <div className="feature-item">
                    <span className="checkmark">✓</span>
                    <span>Flight tracking</span>
                  </div>
                  <div className="feature-item">
                    <span className="checkmark">✓</span>
                    <span>Meet & greet</span>
                  </div>
                  <div className="feature-item">
                    <span className="checkmark">✓</span>
                    <span>30 min wait time</span>
                  </div>
                </div>
                <button className="add-to-cart-btn">Add to Cart</button>
              </div>

              <div className="package-card">
                <div className="package-image">
                  <span>Vehicle Image</span>
                </div>
                <h3>Corporate 4-Hour Charter</h3>
                <p className="vehicle-type">Luxury SUV</p>
                <div className="package-price">$340</div>
                <div className="package-features">
                  <div className="feature-item">
                    <span className="checkmark">✓</span>
                    <span>Professional chauffeur</span>
                  </div>
                  <div className="feature-item">
                    <span className="checkmark">✓</span>
                    <span>Bottled water</span>
                  </div>
                  <div className="feature-item">
                    <span className="checkmark">✓</span>
                    <span>Wi-Fi available</span>
                  </div>
                </div>
                <button className="add-to-cart-btn">Add to Cart</button>
              </div>

              <div className="package-card">
                <div className="package-image">
                  <span>Vehicle Image</span>
                </div>
                <h3>Wedding Package</h3>
                <p className="vehicle-type">Luxury Sedan</p>
                <div className="package-price">$280</div>
                <div className="package-features">
                  <div className="feature-item">
                    <span className="checkmark">✓</span>
                    <span>Red carpet service</span>
                  </div>
                  <div className="feature-item">
                    <span className="checkmark">✓</span>
                    <span>Champagne service</span>
                  </div>
                  <div className="feature-item">
                    <span className="checkmark">✓</span>
                    <span>Photo opportunities</span>
                  </div>
                </div>
                <button className="add-to-cart-btn">Add to Cart</button>
              </div>
            </div>
          </div>

          {/* Browse by Category Section */}
          <div className="browse-category-section">
            <h2>Browse by Category</h2>
            <div className="category-grid">
              <div className="category-card">
                <div className="category-icon airplane">✈️</div>
                <h3>Airport Packages</h3>
                <p>Pre-priced airport transfers</p>
              </div>

              <div className="category-card">
                <div className="category-icon clock">🕐</div>
                <h3>Hourly Charters</h3>
                <p>Corporate & event hourly rates</p>
              </div>

              <div className="category-card">
                <div className="category-icon party">🎉</div>
                <h3>Special Events</h3>
                <p>Weddings, proms, concerts</p>
              </div>

              <div className="category-card">
                <div className="category-icon map">🗺️</div>
                <h3>Regional Trips</h3>
                <p>Chicago to nearby cities</p>
              </div>
            </div>
          </div>

          <div className="ready-to-ride-banner">
          <div className="banner-content">
            <div className="banner-text">
              <h2>Book With Confidence</h2>
              <p>Instant quotes, transparent pricing, and 24/7 support.</p>
            </div>
            <button className="banner-cta">Book Now</button>
          </div>
        </div>

        </div>
      </div>
      <Footer />
    </>
  );
};

export default Shop;
