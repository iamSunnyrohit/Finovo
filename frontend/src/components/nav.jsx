import React from 'react';
import './nav.css';

const Nav = () => {
  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <div className="nav-left">
          <span className="nav-logo">Finovo</span>
        </div>
        <div className="nav-center">
          <a href="#features" className="nav-link">Features</a>
          <a href="#how-it-works" className="nav-link">How it works</a>
          <a href="#pricing" className="nav-link">Pricing</a>
          <a href="#community" className="nav-link">Community</a>
          <a href="#support" className="nav-link">Support</a>
        </div>
        <div className="nav-right">
          <button className="nav-btn nav-login">Login</button>
          <button className="nav-btn nav-signup">Sign Up</button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
