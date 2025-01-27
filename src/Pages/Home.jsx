import React from 'react';
import Hero from '../components/Hero';
import TopWorkers from '../components/TopWorkers';
import Footer from '../Footer/Footer';
import StartAsWorker from '../components/StartAsWorker';
import BrandLogo from '../components/BrandLogo';
import Testimonials from '../components/Testimonials';
import Subscribe from '../components/Subscribe';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <BrandLogo></BrandLogo>
            <TopWorkers></TopWorkers>
            <StartAsWorker></StartAsWorker>
            <Testimonials></Testimonials>
            <Subscribe></Subscribe>
            <Footer></Footer>
        </div>
    );
};

export default Home;