import React, { useState, useEffect } from 'react';
import './Cars.css';
import car1 from '../assets/ChatGPT Image Oct 18_ 2025_ 12_18_09 PM.png';
import car2 from '../assets/ChatGPT Image Oct 18_ 2025_ 12_18_11 PM.png';
import car3 from '../assets/ChatGPT Image Oct 18_ 2025_ 12_18_12 PM.png';
import car4 from '../assets/ChatGPT Image Oct 18_ 2025_ 12_18_13 PM.png';
import car5 from '../assets/ChatGPT Image Oct 18_ 2025_ 12_18_14 PM.png';
import car6 from '../assets/ChatGPT Image Oct 18_ 2025_ 12_18_17 PM.png';
import car7 from '../assets/ChatGPT Image Oct 18_ 2025_ 12_18_24 PM.png';

const Cars = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const cars = [
    {
      id: 1,
      name: "Luxury Sedan",
      image: car1,
      price: "$89/day",
      features: ["Automatic", "4 Seats", "Air Conditioning", "GPS Navigation"],
      rating: 4.8,
      reviews: 124
    },
    {
      id: 2,
      name: "Premium SUV",
      image: car2,
      price: "$129/day",
      features: ["Automatic", "7 Seats", "4WD", "Premium Sound"],
      rating: 4.9,
      reviews: 98
    },
    {
      id: 3,
      name: "Sports Car",
      image: car3,
      price: "$199/day",
      features: ["Manual", "2 Seats", "Convertible", "Sport Mode"],
      rating: 4.9,
      reviews: 156
    },
    {
      id: 4,
      name: "Compact Hatchback",
      image: car4,
      price: "$59/day",
      features: ["Automatic", "5 Seats", "Fuel Efficient", "City Friendly"],
      rating: 4.6,
      reviews: 89
    },
    {
      id: 5,
      name: "Luxury Convertible",
      image: car5,
      price: "$179/day",
      features: ["Automatic", "4 Seats", "Convertible", "Premium Interior"],
      rating: 4.8,
      reviews: 112
    },
    {
      id: 6,
      name: "Family Minivan",
      image: car6,
      price: "$99/day",
      features: ["Automatic", "8 Seats", "Family Friendly", "Large Cargo"],
      rating: 4.7,
      reviews: 203
    },
    {
      id: 7,
      name: "Executive Limousine",
      image: car7,
      price: "$299/day",
      features: ["Automatic", "6 Seats", "Luxury Interior", "Chauffeur Service"],
      rating: 4.9,
      reviews: 87
    }
  ];

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => 
      prevIndex + itemsPerView >= cars.length ? 0 : prevIndex + 1
    );
    setTimeout(() => setIsAnimating(false), 500);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? Math.max(0, cars.length - itemsPerView) : prevIndex - 1
    );
    setTimeout(() => setIsAnimating(false), 500);
  };

  const goToSlide = (index) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex(index);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const visibleCars = cars.slice(currentIndex, currentIndex + itemsPerView);

  return (
    <section className={`cars-section ${isLoaded ? 'loaded' : ''}`}>
      <div className="cars-container">
        <div className={`cars-header ${isLoaded ? 'fade-in-up' : ''}`}>
          <h2 className="cars-title">Our Fleet</h2>
          <p className="cars-subtitle">Choose from our premium collection of well-maintained vehicles</p>
        </div>
        
        <div className="cars-carousel">
          <div className="carousel-container">
            <button className="carousel-btn prev-btn" onClick={prevSlide} disabled={currentIndex === 0}>
              <span>‹</span>
            </button>
            
            <div className={`cars-grid ${isAnimating ? 'animating' : ''}`}>
              {visibleCars.map((car, index) => (
                <div key={car.id} className={`car-card slide-in-${index + 1}`}>
                  <div className="car-image-container">
                    <img src={car.image} alt={car.name} className="car-image" />
                    <div className="car-price-badge">
                      <span className="price">{car.price}</span>
                    </div>
                  </div>
                  
                  <div className="car-details">
                    <div className="car-header">
                      <h3 className="car-name">{car.name}</h3>
                      <div className="car-rating">
                        <span className="stars">★★★★★</span>
                        <span className="rating-text">{car.rating} ({car.reviews} reviews)</span>
                      </div>
                    </div>
                    
                    <div className="car-features">
                      {car.features.map((feature, index) => (
                        <span key={index} className="feature-tag">
                          {feature}
                        </span>
                      ))}
                    </div>
                    
                    <div className="car-actions">
                      <button className="book-now-btn">
                        Book Now
                        <span className="btn-arrow">→</span>
                      </button>
                      <button className="view-details-btn">
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <button className="carousel-btn next-btn" onClick={nextSlide} disabled={currentIndex + itemsPerView >= cars.length}>
              <span>›</span>
            </button>
          </div>
          
          <div className="carousel-dots">
            {Array.from({ length: Math.ceil(cars.length / itemsPerView) }).map((_, index) => (
              <button
                key={index}
                className={`dot ${index === Math.floor(currentIndex / itemsPerView) ? 'active' : ''}`}
                onClick={() => goToSlide(index * itemsPerView)}
              />
            ))}
          </div>
        </div>
        
        <div className="cars-cta">
          <button className="view-all-cars-btn">
            View All Cars
            <span className="btn-arrow">→</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Cars;
