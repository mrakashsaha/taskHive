import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const DashBoardNavigation = () => {
    const workerNavOptions =
        <>
            <li><NavLink to={"/dashboard"}>Home</NavLink></li>
            <li><NavLink to={"/dashboard"}>TaskList</NavLink></li>
            <li><NavLink to={"/dashboard"}>My Submissions</NavLink></li>
            <li><NavLink to={"/dashboard"}>Withdrawals</NavLink></li>
        </>
    const buyerNavOptions =
        <>
            <li><NavLink to={"/dashboard/home"}>Home</NavLink></li>
            <li><NavLink to={"/dashboard/addNewTask"}>Add New Tasks</NavLink></li>
            <li><NavLink to={"/dashboard/myTask"}>My Task's</NavLink></li>
            <li><NavLink to={"/dashboard/purchaseCoin"}>Purchase Coin</NavLink></li>
            <li><NavLink to={"/dashboard/paymentHistory"}>Payment History</NavLink></li>
        </>
    const adminNavOptions =
        <>
            <li><NavLink to={"/dashboard"}>Home</NavLink></li>
            <li><NavLink to={"/dashboard"}>Manage Users</NavLink></li>
            <li><NavLink to={"/dashboard"}>Manage Task</NavLink></li>
        </>
    return (
        <div>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    {/* Page content here */}
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">
                        Open Dashboard
                    </label>
                </div>
                <div className="drawer-side shadow-xl border-t-2">
                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu bg-base-100 text-base-content min-h-full w-60 p-4 space-y-2">
                        {
                            buyerNavOptions
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DashBoardNavigation;