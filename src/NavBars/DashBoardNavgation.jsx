import React, { useContext } from 'react';
import { TbLayoutSidebarLeftCollapseFilled } from 'react-icons/tb';
import {NavLink, useNavigate } from 'react-router-dom';
import useMyTask from '../hook/useMyTask';
import useUserInfo from '../hook/useUserInfo';
import { FaSignOutAlt } from 'react-icons/fa';
import { AuthContext } from '../Provider/AuthProvider';

const DashBoardNavigation = () => {
    const { myTask } = useMyTask();
    const { userInfo, isPending } = useUserInfo();
    const { signOutFromAccount, setUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const workerNavOptions =
        <>
            <li><NavLink to={"/dashboard/workerHome"}>Home</NavLink></li>
            <li><NavLink to={"/dashboard/taskList"}>TaskList</NavLink></li>
            <li><NavLink to={"/dashboard/mySubmissions"}>My Submissions</NavLink></li>
            <li><NavLink to={"/dashboard/withdrawals"}>Withdrawals</NavLink></li>
        </>
    const buyerNavOptions =
        <>
            <li><NavLink to={"/dashboard/buyerHome"}>Home</NavLink></li>
            <li><NavLink to={"/dashboard/addNewTask"}>Add New Tasks</NavLink></li>
            <li><NavLink to={"/dashboard/myTask"}>My Task's ({myTask?.length})</NavLink></li>
            <li><NavLink to={"/dashboard/purchaseCoin"}>Purchase Coin</NavLink></li>
            <li><NavLink to={"/dashboard/paymentHistory"}>Payment History</NavLink></li>
        </>
    const adminNavOptions =
        <>
            <li><NavLink to={"/dashboard/adminHome"}>Home</NavLink></li>
            <li><NavLink to={"/dashboard/manageUsers"}>Manage Users</NavLink></li>
            <li><NavLink to={"/dashboard/manageTask"}>Manage Task</NavLink></li>
        </>

    const handleSignOut = () => {
        signOutFromAccount()
            .then(() => {
                setUser(null);
                navigate("/login")
            }).catch((error) => {
                console.log("signout failed");
            });
    }
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
                        <li><button onClick={handleSignOut}> <FaSignOutAlt></FaSignOutAlt> Logout</button></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DashBoardNavigation;