import React, { useEffect, useState } from 'react';
import './home.css';
import bankingImg from '../assets/banking.jpg';

const Home = () => {
  const [textVisible, setTextVisible] = useState(false);
  const [imageVisible, setImageVisible] = useState(false);

  useEffect(() => {
    setTextVisible(true);
    const timer = setTimeout(() => setImageVisible(true), 600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="landing-container">
      <section className="hero-row">
        <div className={`hero-content-col${textVisible ? ' fade-in' : ''}`}>
          <h1 className="hero-title">Get Paid Early. <br/> Access Your Earnings. <br/> earnings sooner.</h1>
          <p className="hero-subtitle">Supporting small businesses and freelancers with simple payment solutions with powerful integrations and cash flow managemnet tools</p>
          <button className="cta-button">Get Started</button>
        </div>
        <div className="hero-image-col">
          <img src={bankingImg} alt="Banking" className={`hero-image${imageVisible ? ' pop-in' : ''}`} />
        </div>
      </section>
    </div>
  );
};

export default Home;
