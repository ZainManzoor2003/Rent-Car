import React from 'react';
import Header from './Header';
import Features from './Features';
import Cars from './Cars';
import Steps from './Steps';
import Testimonials from './Testimonials';
import Footer from './Footer';
import './Homepage.css';

const Homepage = () => {
  return (
    <div className="homepage">
      <Header />
      {/* <Features /> */}
      <Cars />
      <Steps />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Homepage;
