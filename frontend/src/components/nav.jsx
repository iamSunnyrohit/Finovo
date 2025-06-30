import React from 'react';
import { Link } from 'react-router-dom';
import './nav.css';

const Nav = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <div className="nav-left">
          <Link to="/" className="nav-logo">Finovo</Link>
        </div>
        <div className="nav-center">
          <button onClick={() => scrollToSection('features')} className="nav-link">Features</button>
          <button onClick={() => scrollToSection('how-it-works')} className="nav-link">How it works</button>
          <button onClick={() => scrollToSection('pricing')} className="nav-link">Pricing</button>
          <a href="#community" className="nav-link">Community</a>
          <a href="#support" className="nav-link">Support</a>
        </div>
        <div className="nav-right">
          <Link to="/login" className="nav-btn nav-login">Login</Link>
          <Link to="/signup" className="nav-btn nav-signup">Sign Up</Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
