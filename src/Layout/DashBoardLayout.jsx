import React from 'react';
import DashBoardNavigation from '../NavBars/DashBoardNavgation';
import DashBoardNavBar from '../NavBars/DashBoardNavBar';
import DashBoardFooter from '../Footer/DashBoardFooter';
import { Outlet } from 'react-router-dom';

const DashBoardLayout = () => {

    return (
        <div className=''>
            <div className='fixed top-0 left-0 right-0 z-30'><DashBoardNavBar></DashBoardNavBar></div>
            <div className=''>
                <div className='fixed top-20 z-30'><DashBoardNavigation></DashBoardNavigation></div>
                <div className='flex-grow shadow-md border-t-2 bg-base-200'>
                    <div className='p-8 mt-20 lg:ml-60 min-h-dvh'>
                        <Outlet></Outlet>
                    </div>
                    <div className='mt-20 lg:ml-60'>
                        <DashBoardFooter></DashBoardFooter>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashBoardLayout;