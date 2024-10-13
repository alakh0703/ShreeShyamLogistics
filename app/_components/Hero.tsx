import React from 'react';
import './styles/Hero.css'; // CSS import
import { WordRotateDemo } from './TextAnimation';

const Hero = () => {
    return (
        <div className="hero_container" id='hero'>
            <div className="hero_content">
                <h1 className="hero_title">SHREE SHYAM LOGISTICS</h1>
                {/* <p className="hero_subtitle">Reliable Transport Solutions, Delivered On Time</p> */}
                <WordRotateDemo />

            </div>
        </div>
    );
};

export default Hero;
