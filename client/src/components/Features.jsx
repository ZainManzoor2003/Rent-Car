import React from 'react';
import './Features.css';

const Features = () => {
  return (
    <section className="features-section">
      <div className="features-container">
        <h2 className="features-title">
          Enjoy flexibility and unbeatable rates<br />
          with our city car rentals
        </h2>
        
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9L18.4 10.2c-.3-.8-1-1.2-1.8-1.2H7.4c-.8 0-1.5.4-1.8 1.2L4.5 11.1C3.7 11.3 3 12.1 3 13v3c0 .6.4 1 1 1h2m-3 0h18m-9-9V4m0 0L8 7m4-3l4 3"/>
              </svg>
            </div>
            <h3 className="feature-title">Well maintained vehicles</h3>
            <p className="feature-description">
              All our cars are well-maintained and regularly serviced, ensuring safe and smooth driving.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                <line x1="8" y1="21" x2="16" y2="21"/>
                <line x1="12" y1="17" x2="12" y2="21"/>
                <path d="M9 9h6v6H9z"/>
                <path d="M12 6v3"/>
              </svg>
            </div>
            <h3 className="feature-title">Easy online booking</h3>
            <p className="feature-description">
              Book your car in minutes with our user-friendly online platform. Fast, simple, and convenient!
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 1v6l3-3 3 3V1"/>
                <path d="M21 12h-6l3 3-3 3h6"/>
                <path d="M3 12h6l-3 3 3 3H3"/>
                <path d="M12 23v-6l-3 3-3-3v6"/>
                <circle cx="12" cy="12" r="3"/>
              </svg>
            </div>
            <h3 className="feature-title">Affordable pricing</h3>
            <p className="feature-description">
              Enjoy competitive rates with no hidden fees. Rent the perfect car without breaking the bank.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/>
                <path d="M19 10v2a7 7 0 0 1-14 0v-2"/>
                <line x1="12" y1="19" x2="12.01" y2="19"/>
                <line x1="8" y1="23" x2="16" y2="23"/>
              </svg>
            </div>
            <h3 className="feature-title">24/7 support</h3>
            <p className="feature-description">
              We're here to assist you anytime, anywhere. Drive with peace of mind knowing help is just a call away.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;

