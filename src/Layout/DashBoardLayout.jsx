import React from 'react';
import DashBoardNavigation from '../NavBars/DashBoardNavgation';
import DashBoardNavBar from '../NavBars/DashBoardNavBar';
import DashBoardFooter from '../Footer/DashBoardFooter';

const DashBoardLayout = () => {
    return (
        <div>
            <DashBoardNavBar></DashBoardNavBar>
            <div className='flex'>
                <div><DashBoardNavigation></DashBoardNavigation></div>
                <div className='flex-grow shadow-md border-t-2'><DashBoardFooter></DashBoardFooter></div>
            </div>
        </div>
    );
};

export default DashBoardLayout;