import React from 'react';
import './Hero.css'; 

const Hero = () => {
    return (
        <div className="hero-container">
            <div className="hero-content">
                <div className="hero-text">
                    <p className="hero-blurb">
                        Hi, I'm Michelle Wu - a UX Engineer blending design precision with code craftsmanship
                    </p>
                </div>
                <div className="hero-image">
                    <img
                        src="../assets/img/profilepix3.jpg" 
                        alt="Michelle Wu - UX Engineer"
                        className="profile-image"
                    />
                </div>
            </div>
        </div>
    );
};

export default Hero; 