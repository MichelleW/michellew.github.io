import React from 'react';
import './Dots.css';

const Dots = ({ total, active, onDotClick }) => {
    return (
        <div className="dots-container">
            {[...Array(total)].map((_, index) => (
                <button
                    key={index}
                    className={`dot ${index === active ? 'active' : ''}`}
                    onClick={() => onDotClick(index)}
                    aria-label={`Go to slide ${index + 1}`}
                >
                    <span className="material-icons-round">
                        {index === active ? 'radio_button_checked' : 'radio_button_unchecked'}
                    </span>
                </button>
            ))}
        </div>
    );
};

export default Dots; 