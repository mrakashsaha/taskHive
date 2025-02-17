import React, { useContext } from 'react';
import { TbLayoutSidebarLeftCollapseFilled } from 'react-icons/tb';
import {NavLink, useNavigate } from 'react-router-dom';
import useMyTask from '../hook/useMyTask';
import useUserInfo from '../hook/useUserInfo';
import { FaSignOutAlt } from 'react-icons/fa';
import { AuthContext } from '../Provider/AuthProvider';
import { RiHome9Line } from 'react-icons/ri';
import { MdHistory, MdOutlineManageAccounts, MdPostAdd } from 'react-icons/md';
import { BiPurchaseTagAlt, BiTask } from 'react-icons/bi';
import { LuClipboardList } from 'react-icons/lu';
import { FiSend } from 'react-icons/fi';
import { IoCashOutline } from 'react-icons/io5';
import { BsDatabaseGear } from 'react-icons/bs';

const DashBoardNavigation = () => {
    const { myTask } = useMyTask();
    const { userInfo, isPending } = useUserInfo();

    const workerNavOptions =
        <>
            <li><NavLink to={"/dashboard/workerHome"}> <RiHome9Line className='text-lg'></RiHome9Line> Home</NavLink></li>
            <li><NavLink to={"/dashboard/taskList"}> <LuClipboardList className='text-lg'></LuClipboardList> TaskList</NavLink></li>
            <li><NavLink to={"/dashboard/mySubmissions"}> <FiSend className='text-lg'></FiSend> My Submissions</NavLink></li>
            <li><NavLink to={"/dashboard/withdrawals"}> <IoCashOutline className='text-lg'></IoCashOutline> Withdrawals</NavLink></li>
        </>
    const buyerNavOptions =
        <>
            <li><NavLink to={"/dashboard/buyerHome"}> <RiHome9Line className='text-lg'></RiHome9Line>Home</NavLink></li>
            <li><NavLink to={"/dashboard/addNewTask"}> <MdPostAdd className='text-lg'></MdPostAdd> Add New Tasks</NavLink></li>
            <li><NavLink to={"/dashboard/myTask"}> <BiTask className='text-lg'></BiTask> My Task's ({myTask?.length})</NavLink></li>
            <li><NavLink to={"/dashboard/purchaseCoin"}> <BiPurchaseTagAlt className='text-lg'></BiPurchaseTagAlt> Purchase Coin</NavLink></li>
            <li><NavLink to={"/dashboard/paymentHistory"}> <MdHistory className='text-lg'></MdHistory> Payment History</NavLink></li>
        </>
    const adminNavOptions =
        <>
            <li><NavLink to={"/dashboard/adminHome"}> <RiHome9Line className='text-lg'></RiHome9Line>Home</NavLink></li>
            <li><NavLink to={"/dashboard/manageUsers"}> <MdOutlineManageAccounts className='text-lg'></MdOutlineManageAccounts> Manage Users</NavLink></li>
            <li><NavLink to={"/dashboard/manageTask"}> <BsDatabaseGear className='text-lg'></BsDatabaseGear> Manage Task</NavLink></li>
        </>

    return (
        <div>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    {/* Page content here */}
                    <label htmlFor="my-drawer-2" className="m-2 flex justify-center btn btn-square bg-[#0bb990] hover:bg-[#3cc7a6] text-white drawer-button lg:hidden">
                        <TbLayoutSidebarLeftCollapseFilled className='text-2xl'></TbLayoutSidebarLeftCollapseFilled>
                    </label>
                </div>
                <div className="drawer-side shadow-xl border-t-2 border-base-200">
                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu bg-base-100 text-base-content min-h-full w-60 p-4 space-y-2">
                        {
                            !isPending && userInfo?.role === "worker" ? workerNavOptions : userInfo?.role === "buyer" ? buyerNavOptions : userInfo?.role === "admin" ? adminNavOptions : <div className='flex mt-20 items-end justify-center'><span className="loading loading-bars loading-lg"></span></div>
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DashBoardNavigation;