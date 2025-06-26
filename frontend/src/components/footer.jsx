import React from "react";
import './footer.css';
import fb from '../assets/fb.png';
import insta from '../assets/insta.png';
import linkedin from '../assets/linkedin.png';
import twitter from '../assets/twitter.png';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-columns">
        <div className="footer-col">
          <h4>Resources</h4>
          <ul>
            <li><a href="#">Blog</a></li>
            <li><a href="#">What's New</a></li>
            <li><a href="#">Service Status</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Company</h4>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Careers</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Use Cases</h4>
          <ul>
            <li><a href="#">Transfers</a></li>
            <li><a href="#">Payments</a></li>
            <li><a href="#">Accounts</a></li>
            <li><a href="#">Business</a></li>
          </ul>
        </div>
        <div className="footer-col newsletter-col">
          <h4 className="news-letter">Join Our Newsletter</h4>
          <form className="newsletter-form" onSubmit={e => e.preventDefault()}>
            <input type="email" placeholder="Enter Email address" required />
            <button type="submit">Submit</button>
          </form>
          <h5>Our Socials</h5>
          <div className="footer-socials">
            <a href="#" aria-label="Facebook" className="social-icon"><img src={fb} alt="Facebook" /></a>
            <a href="#" aria-label="Instagram" className="social-icon"><img src={insta} alt="Instagram" /></a>
            <a href="#" aria-label="LinkedIn" className="social-icon"><img src={linkedin} alt="LinkedIn" /></a>
            <a href="#" aria-label="Twitter" className="social-icon"><img src={twitter} alt="Twitter" /></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Finovo. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
