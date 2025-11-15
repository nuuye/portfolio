import React from 'react';
import ProfileCard from './ProfileCard';
import AboutCard from './AboutCard';
import './Hero.scss';

const Hero: React.FC = () => {
    return (
        <div className="hero" id="firstContainerSection">
            <ProfileCard />
            <AboutCard />
        </div>
    );
};

export default Hero;
