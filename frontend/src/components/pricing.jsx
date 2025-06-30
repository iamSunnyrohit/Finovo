import React from "react";
import './pricing.css';

const Pricing = () => {
    return(
        <div id="pricing" className="pricing-container">
            <h1>Only pay for What you use</h1>
            <div className="price-container">
                <div className="price-top">
                    <div className="top-left">
                        <h3>Premium Solo</h3>
                        <p>$39</p>
                        <p1>Billed yearly</p1>
                        <button>Get Started</button>
                    </div>
                    <div className="top-right">
                        <h3>Access to the features when you sign up with Finovo<br/>Premium Solo package for your personal finances</h3>
                        <ul className="pricing-features-list">
                            <li><span className="tick">✓</span> Send Money</li>
                            <li><span className="tick">✓</span> Recieve and add money</li>
                            <li><span className="tick">✓</span> Convert Money to your Finovo account</li>
                            <li><span className="tick">✓</span> Access the Finovo Wallet</li>
                        </ul>
                    </div>
                </div>
                <div className="price-bottom">
                    <div className="bottom-left">
                    <h3>Access to the features when you sign up with Finovo<br/>Premium biz package for your personal finances</h3>
                    <ul className="pricing-features-list">
                            <li><span className="tick">✓</span> Global Payments with a single integration</li>
                            <li><span className="tick">✓</span> Fast, Predictable payouts to your bank accounts</li>
                            <li><span className="tick">✓</span> Financial reconcilation and reporting</li>
                            <li><span className="tick">✓</span> Manage business operations with a unified dashboard</li>
                        </ul>
                    </div>
                    <div className="bottom-right">
                        <h3>Premium Biz</h3>
                        <p>$63</p>
                        <p1>Billed yearly</p1>
                        <button>Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pricing;