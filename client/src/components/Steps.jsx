import React from 'react';
import './Steps.css';

const Steps = () => {
  const steps = [
    {
      number: "01",
      title: "Choose your car",
      description: "Browse our wide selection of vehicles, from compact city cars to spacious SUVs. Pick the perfect ride that suits your needs."
    },
    {
      number: "02", 
      title: "Book online",
      description: "Reserve your car in just a few clicks with our user-friendly booking system. Select your dates, and locations, and confirm your reservation instantly."
    },
    {
      number: "03",
      title: "Pick up & drive", 
      description: "Head to the nearest pickup location and grab your keys. Enjoy a smooth ride through the city with reliable and well-maintained vehicles."
    }
  ];

  return (
    <section className="steps-section">
      <div className="steps-container">
        <div className="steps-image">
          <img 
            src="https://cdn.prod.website-files.com/66dc179a1d6aa88848a4efac%2F67504bb0a39b16c189b738cc_video-poster-00001.jpg" 
            alt="Car driving on scenic road" 
            className="steps-bg-image"
          />
        </div>
        
        <div className="steps-content">
          <h2 className="steps-title">Rent your car in 3 easy steps</h2>
          
          <div className="steps-list">
            {steps.map((step, index) => (
              <div key={index} className="step-item">
                <div className="step-number">
                  <span className="step-number-text">{step.number}</span>
                </div>
                <div className="step-details">
                  <h3 className="step-title">{step.title}</h3>
                  <p className="step-description">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Steps;

