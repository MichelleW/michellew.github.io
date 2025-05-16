import React from 'react';
import './Hero.css';
import { profilepix } from '../utils/projectData';
const Hero = () => {
    return (
        <div className="hero-container">
            <div className="hero-content">
                <div className="hero-text">
                    <p className="hero-blurb">
                        Hi, I'm Michelle Wu - a UX Engineer blending design precision with code craftsmanship
                    </p>
                    <h4>Based in San Francisco, Bay Area, CA</h4>
                </div>
                <div className="hero-image">
                    <img
                        src={profilepix}
                        alt="Michelle Wu - UX Engineer"
                        className="profile-image"
                    />
                </div>
            </div>
        </div>
    );
};

export default Hero; 