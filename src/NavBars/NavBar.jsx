import React, { useContext, useEffect, useState } from 'react';
import { FaGithub, FaSignOutAlt } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import useUserInfo from '../hook/useUserInfo';
import { BiSolidCoinStack } from 'react-icons/bi';
import { IoServerOutline } from 'react-icons/io5';
import ThemeToggle from '../components/ThemeToggle';

const NavBar = () => {
    const { userInfo, isPending, refetch } = useUserInfo();
    const { signOutFromAccount, setUser, user, loading } = useContext(AuthContext);
    const navigate = useNavigate();
    const handleSignOut = () => {
        signOutFromAccount()
            .then(() => {
                setUser(null);
                navigate("/login")
            }).catch((error) => {
                console.log("signout failed");
            });
    }

    if (isPending) {
        return (
            <nav className='bg-base-100 navbar'>
                <div className='container mx-auto flex justify-between lg:py-2'>
                    <Link to={"/"} className="btn btn-ghost text-2xl font-semibold">TaskHive</Link>
                    <span className="loading loading-bars loading-lg"></span>
                </div>
            </nav>
        )
    }

    let dashboardpath;

    if (userInfo?.role === "admin") {
        dashboardpath = "/dashboard/adminHome"
    }
    else if (userInfo?.role === "buyer") {
        dashboardpath = "/dashboard/buyerHome"
    }
    else {
        dashboardpath = "/dashboard/workerHome"
    }


    const noUserMenus =
        <>
            <li className='text-lg'><Link to={"/login"}>Login</Link></li>
            <li className='text-lg'><Link to={"/register"}>Register</Link></li>
        </>

    const userMenus =
        <>
            <li className='text-lg'><Link to={dashboardpath}>Dashboard</Link></li>
            <li className='text-lg'> <Link to={dashboardpath}>
                <div className='flex items-center gap-1'>
                    <p>Balance: <span className='font-semibold'>{!isPending && userInfo?.coin}</span></p>
                    <IoServerOutline></IoServerOutline>
                </div>
            </Link> </li>
            <li className='text-lg'> <Link to={"/profile"}>
                <div className='flex items-center gap-2'>
                    <div className="avatar hidden lg:block">
                        <div className="w-8 rounded-full">
                            <img
                                className=''
                                alt="ProfileImage"
                                src={!isPending && userInfo?.photoURL} />
                        </div>
                    </div>
                    <div>
                        <h2 className=''>My Profile</h2>
                    </div>
                </div>
            </Link> </li>
            <li className='text-lg'><button onClick={handleSignOut}> <FaSignOutAlt></FaSignOutAlt> Logout</button></li>
        </>

    return (
        <div className='bg-base-100 sticky w-full z-20'>
            <div className="navbar container mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {
                                !loading && !user && noUserMenus
                            }
                            {
                                !loading && user && userMenus
                            }
                        </ul>
                    </div>
                    <Link to={"/"} className="btn btn-ghost text-2xl font-semibold">TaskHive</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {
                            !loading && !user && noUserMenus
                        }
                        {
                            !loading && user && userMenus
                        }
                    </ul>
                </div>
                <div className="navbar-end">
                    <ThemeToggle></ThemeToggle>
                    <a href="https://github.com/mrakashsaha" target="_blank" className="btn"> <FaGithub className='text-3xl'></FaGithub> Join as Developer</a>
                </div>
            </div>
        </div>
    );
};

export default NavBar;