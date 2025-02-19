import React from 'react';
import Hero from '../components/Hero';
import TopWorkers from '../components/TopWorkers';
import Footer from '../Footer/Footer';
import StartAsWorker from '../components/StartAsWorker';
import BrandLogo from '../components/BrandLogo';
import Testimonials from '../components/Testimonials';
import Subscribe from '../components/Subscribe';
import StableService from '../components/StableService';
import FeaturedTask from '../components/FeaturedTask';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <BrandLogo></BrandLogo>
            <FeaturedTask></FeaturedTask>
            <StartAsWorker></StartAsWorker>
            <StableService></StableService>
            <TopWorkers></TopWorkers>
            <Subscribe></Subscribe>
            <Testimonials></Testimonials>
            <Footer></Footer>
        </div>
    );
};

export default Home;