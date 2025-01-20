import React from 'react';

const DashBoardFooter = () => {
    return (
        <div className=''>
            <footer className="footer footer-center bg-base-200 text-base-content p-4">
                <aside>
                    <p>Copyright © {new Date().getFullYear()} - All right reserved by TaskHive Inc.</p>
                </aside>
            </footer>
        </div>
    );
};

export default DashBoardFooter;