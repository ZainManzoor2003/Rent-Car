import React, { useState } from 'react';
import './Contact.css';
import Navbar from './Navbar';
import Footer from './Footer';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <>
    <div className="contact-page">
      <div className="navbar-container">
        <Navbar showHamburger={true} />
      </div>
      <div className="contact-header">
        <h1>Contact</h1>
        <p>We're available 24/7 for quotes and reservations.</p>
      </div>
      
      <div className="contact-content">
        <div className="contact-info">
          <div className="contact-item">
            <span className="label">Phone:</span>
            <a href="tel:855-286-6691" className="contact-link">855-286-6691</a>
          </div>
          <div className="contact-item">
            <span className="label">Email:</span>
            <a href="mailto:info@eminentlimo.com" className="contact-link">info@eminentlimo.com</a>
          </div>
          <div className="contact-item">
            <span className="label">Address:</span>
            <span className="contact-text">3700 S Iron St Suite 4K, Chicago, IL 60609</span>
          </div>
        </div>

        <div className="contact-form-container">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                required
              ></textarea>
            </div>
            
            <button type="submit" className="send-button">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Contact;
