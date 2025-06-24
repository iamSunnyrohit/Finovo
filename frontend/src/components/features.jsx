import React from 'react';
import './features.css';

const Features = () => {
  return (
    <div className="features-container">
       <h1>Feel the power of finovo<br/> with our powerful features</h1>
       <div className="features-list">
        <div className="feature-card-left">
            <h3>Withdraw <br/> anytime, With<br/> no fees</h3>
            <p>Acess your money instantly,<br/>whenever or wherever you need<br/>directly with your Visa card.</p>
            <button>Try Finovo</button>
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