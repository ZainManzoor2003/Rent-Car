import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          {/* Company Section */}
          <div className="footer-section">
            <h3 className="footer-title">Company</h3>
            <ul className="footer-links">
              <li><a href="/about" className="footer-link">About</a></li>
              <li><a href="/contact" className="footer-link">Contact</a></li>
              <li><a href="/faq" className="footer-link">FAQ</a></li>
              <li><a href="/blog" className="footer-link">Blog</a></li>
              <li><a href="/destinations" className="footer-link">Top Destinations</a></li>
              <li><a href="/privacy" className="footer-link">Privacy Policy</a></li>
              <li><a href="/terms" className="footer-link">Terms & Conditions</a></li>
            </ul>
          </div>

          {/* Top Destinations Section */}
          <div className="footer-section">
            <h3 className="footer-title">Top Destinations</h3>
            <ul className="footer-links">
              <li><span className="footer-text">O'Hare International Airport</span></li>
              <li><span className="footer-text">Midway International Airport</span></li>
              <li><span className="footer-text">Downtown Chicago • Rosemont • Oak Brook</span></li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="footer-section">
            <h3 className="footer-title">Contact</h3>
            <div className="contact-info">
              <div className="contact-item">
                <a href="tel:855-286-6691" className="footer-link">855-286-6691</a>
              </div>
              <div className="contact-item">
                <a href="mailto:info@eminentlimo.com" className="footer-link">info@eminentlimo.com</a>
              </div>
              <div className="contact-item">
                <span className="footer-text">3700 S Iron St Suite 4K, Chicago, IL 60609</span>
              </div>
              <div className="contact-item">
                <span className="footer-text">Open 24 hours</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

