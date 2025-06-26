import React from 'react';
import './works.css';
import img1 from '../assets/work1.png';
import img2 from '../assets/work2.png';
import img3 from '../assets/work3.png';
import img4 from '../assets/work4.png';

const Works = () => {
  return (
    <div className="works-container">
      <div className="works-left">
        <h1>A journey that expands alongside your growth and resources.</h1>
        <p>Finovo is a platform that allows you to manage your finances and investments in one place.</p>
        <button>Get Started</button>
      </div>
      <div className="works-right">
        <div className="work-item">
          <div className="work-icon">
            <img src={img1} alt="work1" />
          </div>
          <h3>Free Transfers</h3>
          <p>Experience truly free money transfers with no hidden fees or charges.</p>
        </div>
        <div className="work-item">
          <div className="work-icon">
            <img src={img2} alt="work2" />
          </div>
          <h3>Multiple Accounts</h3>
          <p>Manage multiple accounts with ease, each tailored to your unique financial needs.</p>
        </div>
        <div className="work-item">
          <div className="work-icon">
            <img src={img3} alt="work3" />
          </div>
          <h3>For Businesses</h3>
          <p>Streamline your business operations with seamless financial management and payment solutions.</p>
        </div>
        <div className="work-item">
          <div className="work-icon">
            <img src={img4} alt="work4" />
          </div>
          <h3>Privacy & Security</h3>
          <p>Your financial data is protected with bank-level security and encryption.</p>
        </div>
      </div>
    </div>
  );
};

export default Works;