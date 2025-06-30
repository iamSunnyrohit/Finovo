import React from 'react';
import './features.css';
import img from '../assets/features.jpg';

const Features = () => {
  return (
    <div id="features" className="features-container">
       <h1>Feel the power of finovo <br/> with powerful features</h1>
       <div className="features-list">
        <div className="feature-card-left">
            <div className="feature-card-left-content">
                <h3>Withdraw <br/> anytime, With<br/> no fees</h3>
                <p>Acess your money instantly,<br/>whenever or wherever you need<br/>directly with your Visa card.</p>
                <button>Try Finovo</button>
            </div>
            <div className="feature-image-wrapper">
              <img src={img} alt="features" />
            </div>
        </div>
        <div className="feature-card-right">
            <h3>No Market <br/> swings</h3>
            <p>Enjoy peace of mind with <br/>investments that arent subject<br/>to market fluctuations</p>
        </div>
       </div>
    </div>
  );
};

export default Features;