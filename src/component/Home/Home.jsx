import React from 'react';
import Features from '../Features/Features';
import Hero from '../Hero/Hero';
import Profile from '../Profile/Profile';
import ThreeService from '../ThreeService/ThreeService';

const Home = () => {
    return (
        <div>
            <Hero />
            <ThreeService />
            <Features />
            <Profile />
        </div>
    );
};

export default Home;