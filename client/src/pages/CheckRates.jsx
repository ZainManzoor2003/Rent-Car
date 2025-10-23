import React, { useState } from 'react';
import './CheckRates.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import car1 from '../assets/ChatGPT Image Oct 18_ 2025_ 12_18_09 PM.png';
import car2 from '../assets/ChatGPT Image Oct 18_ 2025_ 12_18_11 PM.png';
import car3 from '../assets/ChatGPT Image Oct 18_ 2025_ 12_18_12 PM.png';
import car4 from '../assets/ChatGPT Image Oct 18_ 2025_ 12_18_13 PM.png';
import car5 from '../assets/ChatGPT Image Oct 18_ 2025_ 12_18_14 PM.png';
import car6 from '../assets/ChatGPT Image Oct 18_ 2025_ 12_18_17 PM.png';
import car7 from '../assets/ChatGPT Image Oct 18_ 2025_ 12_18_24 PM.png';

const CheckRates = () => {
  const [formData, setFormData] = useState({
    vehicleType: 'Sedan / SUV',
    pickupDate: '',
    pickupTime: '',
    timePeriod: 'AM',
    serviceType: 'To Airport',
    fromAddress: '',
    toAddress: "O'Hare International Airport, Chicago, IL 60666"
  });

  const [currentSlide, setCurrentSlide] = useState(0);

  const fleetData = [
    {
      id: 1,
      category: "SUV Stretch Limo",
      name: "Hummer Limousine 2022",
      capacity: "20 passengers • 3 bags",
      image: car7
    },
    {
      id: 2,
      category: "Stretch Limo",
      name: "SUV Stretch Limo",
      capacity: "14 passengers • 3 bags",
      image: car6
    },
    {
      id: 3,
      category: "Airport Limo",
      name: "Executive Sedan",
      capacity: "3 passengers • 3 bags",
      image: car1
    },
    {
      id: 4,
      category: "Luxury SUV",
      name: "Luxury SUV",
      capacity: "6 passengers • 6 bags",
      image: car2
    },
    {
      id: 5,
      category: "Party Bus",
      name: "Party Bus 2023",
      capacity: "30 passengers • 8 bags",
      image: car4
    },
    {
      id: 6,
      category: "Luxury Sedan",
      name: "Mercedes S-Class",
      capacity: "4 passengers • 4 bags",
      image: car3
    },
    {
      id: 7,
      category: "Shuttle",
      name: "Standard Shuttle Sprinter",
      capacity: "11 passengers • 11 bags",
      image: car5
    },
    {
      id: 8,
      category: "Shuttle",
      name: "Large Shuttle Sprinter",
      capacity: "14 passengers • 14 bags",
      image: car6
    },
    {
      id: 9,
      category: "Coach",
      name: "Luxury Coach",
      capacity: "50 passengers • 20 bags",
      image: car7
    },
    {
      id: 10,
      category: "Luxury SUV",
      name: "Cadillac Escalade",
      capacity: "7 passengers • 7 bags",
      image: car2
    },
    {
      id: 11,
      category: "Stretch Limo",
      name: "Lincoln Stretch",
      capacity: "10 passengers • 4 bags",
      image: car4
    },
    {
      id: 12,
      category: "Airport Limo",
      name: "BMW 7 Series",
      capacity: "4 passengers • 4 bags",
      image: car1
    },
    {
      id: 13,
      category: "Luxury Sedan",
      name: "Audi A8",
      capacity: "4 passengers • 4 bags",
      image: car3
    }
  ];

  const slidesToShow = 3;
  const totalSlides = Math.ceil(fleetData.length / slidesToShow);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleServiceTypeChange = (serviceType) => {
    setFormData({
      ...formData,
      serviceType
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Rate calculation submitted:', formData);
  };

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
              <h1>Explore Our Luxury Fleet</h1>
              <p>Watch how Eminent Limo delivers elegance, comfort, and precision across every ride.</p>
              
              <div className="cta-buttons">
                <button className="calculate-rate-btn" onClick={() => document.getElementById('rate-form').scrollIntoView()}>
                  Calculate an Instant Rate
                </button>
                <button className="open-full-page-btn" onClick={openInNewTab}>
                  Open Full Page
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
        <div className="rate-form-section" id="rate-form">
          <div className="rate-form-container">
            <div className="form-header">
              <h2>Calculate an Instant Rate</h2>
              <div className="timezone">Central Time (CST)</div>
            </div>

            <form className="rate-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="vehicleType">Choose Your Vehicle Type</label>
                <select 
                  id="vehicleType" 
                  name="vehicleType" 
                  value={formData.vehicleType}
                  onChange={handleChange}
                  className="form-select"
                >
                  <option value="Sedan / SUV">Sedan / SUV</option>
                  <option value="Luxury Sedan">Luxury Sedan</option>
                  <option value="SUV">SUV</option>
                  <option value="Luxury SUV">Luxury SUV</option>
                  <option value="Stretch Limo">Stretch Limo</option>
                </select>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="pickupDate">Pickup Date*</label>
                  <div className="input-with-icon">
                    <input
                      type="date"
                      id="pickupDate"
                      name="pickupDate"
                      value={formData.pickupDate}
                      onChange={handleChange}
                      className="form-input"
                      required
                    />
                    <span className="input-icon">📅</span>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="pickupTime">Approximate Pickup Time*</label>
                  <div className="time-input-group">
                    <div className="input-with-icon">
                      <input
                        type="time"
                        id="pickupTime"
                        name="pickupTime"
                        value={formData.pickupTime}
                        onChange={handleChange}
                        className="form-input"
                        required
                      />
                      <span className="input-icon">🕐</span>
                    </div>
                    <select
                      name="timePeriod"
                      value={formData.timePeriod}
                      onChange={handleChange}
                      className="form-select time-period"
                    >
                      <option value="AM">AM</option>
                      <option value="PM">PM</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="form-group">
                <label>Which Service Are You Looking For?*</label>
                <div className="service-options">
                  {['To Airport', 'From Airport', 'Point to Point', 'Hourly Charter'].map((service) => (
                    <button
                      key={service}
                      type="button"
                      className={`service-option ${formData.serviceType === service ? 'selected' : ''}`}
                      onClick={() => handleServiceTypeChange(service)}
                    >
                      {service}
                    </button>
                  ))}
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="fromAddress">From</label>
                <input
                  type="text"
                  id="fromAddress"
                  name="fromAddress"
                  value={formData.fromAddress}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="Type address..."
                />
              </div>

              <div className="form-group">
                <label htmlFor="toAddress">To</label>
                <input
                  type="text"
                  id="toAddress"
                  name="toAddress"
                  value={formData.toAddress}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="Type address..."
                />
                <div className="input-example">
                  e.g., O'Hare International Airport, Chicago, IL 60666
                </div>
              </div>

              <div className="form-actions">
                <button type="submit" className="check-rates-btn">
                  Check Rates (Modal)
                </button>
                <button type="button" className="open-rates-btn" onClick={openInNewTab}>
                  Open Rates in New Tab
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Seamless Travel Section */}
        <div className="seamless-travel-section">
          <div className="container">
            <h2 className="section-title">Seamless Travel, Every Time</h2>
            <div className="service-cards">
              <div className="service-card">
                <div className="card-image-placeholder">
                  <img src={car1} alt="Airport Transportation" className="service-img" />
                </div>
                <h3>Airport Transportation</h3>
                <p>Reliable rides to O'Hare & Midway with real-time flight tracking.</p>
                <a href="#" className="book-link">Book</a>
              </div>
              <div className="service-card">
                <div className="card-image-placeholder">
                  <img src={car2} alt="Group Transportation" className="service-img" />
                </div>
                <h3>Group Transportation</h3>
                <p>Sprinters (11-14) and buses (23-50) for teams, tours, and events.</p>
                <a href="#" className="book-link">Book</a>
              </div>
              <div className="service-card">
                <div className="card-image-placeholder">
                  <img src={car3} alt="Corporate Transportation" className="service-img" />
                </div>
                <h3>Corporate Transportation</h3>
                <p>Executive sedans & SUVs for meetings and roadshows.</p>
                <a href="#" className="book-link">Book</a>
              </div>
            </div>
          </div>
        </div>

         {/* Our Fleet Section */}
         <div className="our-fleet-section">
           <div className="container">
             <div className="fleet-header">
               <h2 className="section-title">Our Fleet – 13 Vehicle Types</h2>
               {/* <div className="fleet-navigation">
                 <button className="nav-arrow left-arrow" onClick={prevSlide}>‹</button>
                 <button className="nav-arrow right-arrow" onClick={nextSlide}>›</button>
               </div> */}
             </div>
             <div className="fleet-carousel-container">
               <div 
                 className="fleet-cards" 
                 style={{ 
                   transform: `translateX(-${currentSlide * 100}%)`,
                   transition: 'transform 0.5s ease-in-out'
                 }}
               >
                 {fleetData.map((vehicle) => (
                   <div key={vehicle.id} className="fleet-card">
                     <div className="vehicle-category">{vehicle.category}</div>
                     <div className="card-image-placeholder">
                       <img src={vehicle.image} alt={vehicle.name} className="fleet-img" />
                     </div>
                     <h3>{vehicle.name}</h3>
                     <p className="capacity">{vehicle.capacity}</p>
                     <a href="#" className="calculate-rate-link">Calculate Rate</a>
                   </div>
                 ))}
               </div>
             </div>
             {/* <div className="carousel-dots">
               {Array.from({ length: totalSlides }).map((_, index) => (
                 <button
                   key={index}
                   className={`dot ${index === currentSlide ? 'active' : ''}`}
                   onClick={() => setCurrentSlide(index)}
                 />
               ))}
             </div> */}
           </div>
         </div>

        {/* FAQ Section */}
        <div className="faq-section">
          <div className="container">
            <div className="faq-header">
              <h2 className="section-title">Chicagoland Chauffeur Service — Frequently Asked Questions</h2>
              <p className="faq-description">
                We serve Chicago and the entire Chicagoland area with professional limo and car services, 
                plus the best Sprinter rentals and luxurious party buses.
              </p>
            </div>
            <div className="faq-grid">
              <div className="faq-item">
                <h3 className="faq-question">How much does it cost to rent a limo in Chicago?</h3>
                <p className="faq-answer">
                  Contact us or use the Instant Rate tool above for specifics—pricing varies by date, distance, and vehicle.
                </p>
              </div>
              <div className="faq-item">
                <h3 className="faq-question">What happens if my flight is delayed?</h3>
                <p className="faq-answer">
                  Contact us or use the Instant Rate tool above for specifics—pricing varies by date, distance, and vehicle.
                </p>
              </div>
              <div className="faq-item">
                <h3 className="faq-question">Do you provide safety car seats for children in your vehicles?</h3>
                <p className="faq-answer">
                  Contact us or use the Instant Rate tool above for specifics—pricing varies by date, distance, and vehicle.
                </p>
              </div>
              <div className="faq-item">
                <h3 className="faq-question">Do you have a lost and found department?</h3>
                <p className="faq-answer">
                  Contact us or use the Instant Rate tool above for specifics—pricing varies by date, distance, and vehicle.
                </p>
              </div>
              <div className="faq-item">
                <h3 className="faq-question">Will your driver help me with my luggage?</h3>
                <p className="faq-answer">
                  Contact us or use the Instant Rate tool above for specifics—pricing varies by date, distance, and vehicle.
                </p>
              </div>
              <div className="faq-item">
                <h3 className="faq-question">What cities does Eminent Limo serve?</h3>
                <p className="faq-answer">
                  Contact us or use the Instant Rate tool above for specifics—pricing varies by date, distance, and vehicle.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Ready to Ride Banner */}
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

export default CheckRates;
