import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Mark Stevens",
      rating: 5,
      text: "I needed a reliable car for my business trip, and this service exceeded my expectations. The booking process was seamless, and the car was in excellent condition. I highly recommend their city rentals!",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80"
    },
    {
      id: 2,
      name: "Lisa Anderson",
      rating: 5,
      text: "As a frequent traveler for work, I rely on car rental services often. This company has become my go-to choice because of their reliable vehicles and excellent customer service. I've never been disappointed!",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80"
    },
    {
      id: 3,
      name: "Brian T",
      rating: 4,
      text: "It was fuel-efficient and environmentally friendly, which is important to me. I loved that this company offers sustainable options for modern travelers!",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80"
    },
    {
      id: 4,
      name: "Emma Johnson",
      rating: 5,
      text: "I needed a rental for a last-minute trip, and this service made it so easy! The car was clean, the rates were affordable, and the pickup was hassle-free. I'll use them again.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80"
    },
    {
      id: 5,
      name: "Jessica Ramirez",
      rating: 4,
      text: "There is plenty of room for everyone and all our luggage. The process was easy, and the customer service was top-notch.",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80"
    },
    {
      id: 6,
      name: "Laura J.",
      rating: 5,
      text: "The rates were competitive, and the team made it easy to extend my rental when my plans changed. Highly recommended!",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80"
    }
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span 
        key={index} 
        className={`star ${index < rating ? 'filled' : 'empty'}`}
      >
        ★
      </span>
    ));
  };

  return (
    <section className="testimonials-section" >
      <div className="testimonials-container">
        <h2 className="testimonials-title">Feedback from satisfied renters</h2>
        
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={testimonial.id} className={`testimonial-card slide-in-${index + 1}`}>
              <div className="testimonial-rating">
                {renderStars(testimonial.rating)}
              </div>
              
              <p className="testimonial-text">
                "{testimonial.text}"
              </p>
              
              <div className="testimonial-author">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name}
                  className="author-avatar"
                />
                <span className="author-name">{testimonial.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

