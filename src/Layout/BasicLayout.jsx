import React from 'react';
import NavBar from '../NavBars/NavBar';
import { Outlet } from 'react-router-dom';

const BasicLayout = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
        </div>
    );
};

export default BasicLayout;