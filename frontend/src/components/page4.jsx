import React from 'react';
import './page4.css';
import img1 from '../assets/page4-1.jpg';
import img2 from '../assets/page4-2.jpg';
import img3 from '../assets/page4-3.jpg';

const Page4 = () => {
  return (
    <div className="page4-container">
        <h1>Boost your earnings with a savings <br/> account that yields</h1>
        <div className='page4-sub'>
        <div className="page4-left">
            <div className="page4-left-top">
                <h3>Open your account</h3>
                <p>Signup to Finovo, set up and complete your account from the dashboard</p>
                <p>01</p>
            </div>
            <div className='page4-left-bottom'>
                <img src={img1} alt='Account setup process'></img>
            </div>
        </div>
        <div className="page4-middle">
            <div className='page4-middle-top'>
                <img src={img2} alt='Money transfer interface'></img>
            </div>
            <div className='page4-middle-bottom'>
                <h3>Transfer your money</h3>
                <p>Transfer funds from one account to another and begin earning intrest</p>
                <p>02</p>
            </div>
        </div>
        <div className="page4-right">
        <div className="page4-right-top">
                <h3>Watch your balance grow</h3>
                <p>Your investments stay secure, unaffected by market fluctuations</p>
                <p>03</p>
            </div>
            <div className='page4-right-bottom'>
                 <img src={img3} alt='Balance growth chart'></img>
            </div>
        </div>
        </div>
    </div>
  );
};

export default Page4;