import React, { useState, useEffect, useCallback } from 'react';
import { carouselSlides } from './utils/projectData';
import './Carousel.css';

function Carousel() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const [animationKey, setAnimationKey] = useState(0);
    const autoPlayDelay = 5000; // 5 seconds per slide

    const handleDotClick = (index) => {
        setCurrentSlide(index);
        setAnimationKey(prev => prev + 1);
    };

    const handleNextSlide = useCallback(() => {
        setCurrentSlide((prev) => (prev + 1) % carouselSlides.length);
        setAnimationKey(prev => prev + 1);
    }, []);

    const handlePrevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + carouselSlides.length) % carouselSlides.length);
        setAnimationKey(prev => prev + 1);
    };

    // Auto-play functionality
    useEffect(() => {
        let intervalId;
        if (isAutoPlaying) {
            intervalId = setInterval(handleNextSlide, autoPlayDelay);
        }
        return () => {
            if (intervalId) {
                clearInterval(intervalId);
            }
        };
    }, [isAutoPlaying, handleNextSlide]);

    // Handlers for mouse enter/leave
    const handleMouseEnter = () => {
        setIsAutoPlaying(false);
    };

    const handleMouseLeave = () => {
        setIsAutoPlaying(true);
    };

    return (
        <div id="projects" className='carousel'>
            <div
                className="wrapper"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <button className="nav-button prev" onClick={handlePrevSlide}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M15 18l-6-6 6-6" />
                    </svg>
                </button>
                <div className="slider" key={animationKey}>

                    <div className="left">
                        <div className="project-dec">
                            <h2>{carouselSlides[currentSlide].title}</h2>
                            <h3> Description: </h3>
                            <p>{carouselSlides[currentSlide].description}</p>
                            <h3>Deliverables:</h3>
                            <p>{carouselSlides[currentSlide].scope}</p>
                            <p><h5>Technolgies:</h5>{carouselSlides[currentSlide].techStack}</p>
                        </div>
                    </div>
                    <div className="right">
                        <div className="img">
                            <img
                                src={carouselSlides[currentSlide].image}
                                alt={carouselSlides[currentSlide].title}
                            />
                        </div>
                    </div>

                </div>
                <button className="nav-button next" onClick={handleNextSlide}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M9 18l6-6-6-6" />
                    </svg>
                </button>
                <ul className='dots'>
                    {carouselSlides.map((_, index) => (
                        <li
                            key={index}
                            className={currentSlide === index ? 'active' : ''}
                            onClick={() => handleDotClick(index)}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-pacman">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M5.636 5.636a9 9 0 0 1 13.397 .747l-5.619 5.617l5.619 5.617a9 9 0 1 1 -13.397 -11.981z" />
                                <circle cx="11.5" cy="7.5" r="1" fill="currentColor" />
                            </svg>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Carousel;