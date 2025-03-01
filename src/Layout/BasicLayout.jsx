import React from 'react';
import NavBar from '../NavBars/NavBar';
import { Outlet } from 'react-router-dom';
import ThemeToggle from '../components/ThemeToggle';
import Footer from '../Footer/Footer';

const BasicLayout = () => {
    return (
        <div>
            <div className='hidden'><ThemeToggle></ThemeToggle></div>
            <NavBar></NavBar>
            <Outlet></Outlet>
        </div>
    );
};

export default BasicLayout;