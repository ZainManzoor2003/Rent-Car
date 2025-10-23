import React, { useState, useEffect } from 'react';
import './Cars.css';

const Cars = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const cars = [
    {
      id: 1,
      name: "Luxury Sedan",
      image: "https://cdn.prod.website-files.com/66dc179a1d6aa88848a4efb4/675d246a08777aecdb41d97f_car-01.avif",
      price: "$89/day",
      features: ["Automatic", "4 Seats", "Air Conditioning", "GPS Navigation"],
      rating: 4.8,
      reviews: 124
    },
    {
      id: 2,
      name: "Premium SUV",
      image: "https://cdn.prod.website-files.com/66dc179a1d6aa88848a4efb4/675d247c699d5c8508c0ae11_car-02.avif",
      price: "$129/day",
      features: ["Automatic", "7 Seats", "4WD", "Premium Sound"],
      rating: 4.9,
      reviews: 98
    },
    {
      id: 3,
      name: "Sports Car",
      image: "https://images.unsplash.com/photo-1549317336-206569e8475c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      price: "$199/day",
      features: ["Manual", "2 Seats", "Convertible", "Sport Mode"],
      rating: 4.9,
      reviews: 156
    },
    {
      id: 4,
      name: "Compact Hatchback",
      image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      price: "$59/day",
      features: ["Automatic", "5 Seats", "Fuel Efficient", "City Friendly"],
      rating: 4.6,
      reviews: 89
    },
    {
      id: 5,
      name: "Luxury Convertible",
      image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      price: "$179/day",
      features: ["Automatic", "4 Seats", "Convertible", "Premium Interior"],
      rating: 4.8,
      reviews: 112
    },
    {
      id: 6,
      name: "Family Minivan",
      image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      price: "$99/day",
      features: ["Automatic", "8 Seats", "Family Friendly", "Large Cargo"],
      rating: 4.7,
      reviews: 203
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
