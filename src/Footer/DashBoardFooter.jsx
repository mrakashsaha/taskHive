import React from 'react';

const DashBoardFooter = () => {
    return (
        <div className='border-t-2 border-base-300'>
            <footer className="footer footer-left bg-base-200 text-base-content px-8 py-4">
                <aside>
                    <p>Copyright © {new Date().getFullYear()} - All right reserved by TaskHive Inc.</p>
                </aside>
            </footer>
        </div>
    );
};

export default DashBoardFooter;