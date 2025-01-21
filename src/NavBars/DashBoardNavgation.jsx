import React from 'react';
import { AiOutlineMenuUnfold } from 'react-icons/ai';
import { LuLayoutDashboard } from 'react-icons/lu';
import { TbLayoutSidebarLeftCollapseFilled } from 'react-icons/tb';
import { Link, NavLink } from 'react-router-dom';
import useMyTask from '../hook/useMyTask';

const DashBoardNavigation = () => {
    const { myTask } = useMyTask();
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
            <li><NavLink to={"/dashboard/myTask"}>My Task's (`${myTask?.length}`)</NavLink></li>
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
                    <label htmlFor="my-drawer-2" className="flex justify-center btn btn-square btn-accent drawer-button lg:hidden">
                        <TbLayoutSidebarLeftCollapseFilled className='text-2xl'></TbLayoutSidebarLeftCollapseFilled>
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