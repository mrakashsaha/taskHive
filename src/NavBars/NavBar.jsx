import React, { useContext, useEffect, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import useUserInfo from '../hook/useUserInfo';
import ThemeToggle from '../components/ThemeToggle';
import { PiPowerBold } from 'react-icons/pi';
import { IoServerOutline } from 'react-icons/io5';

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
                                isPending ?
                                    <>
                                        <div className="flex flex-col gap-2 items-center justify-center">
                                            <div className="skeleton h-3 w-20"></div>
                                            <div className="skeleton h-4 w-20"></div>
                                        </div>
                                    </>
                                    :
                                    <>
                                        <li className='text-lg'><NavLink to={userInfo?.role === "admin" ? "/dashboard/adminHome" : userInfo?.role === "buyer" ? "/dashboard/buyerHome" : "/dashboard/workerHome"}>Dashboard</NavLink></li>
                                    </>
                            }
                            <li className='text-lg'><NavLink to={"/"}>Home</NavLink></li>

                        </ul>
                    </div>
                    <Link to={"/"} className="btn btn-ghost text-2xl font-semibold">TaskHive</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 space-x-2">
                        {
                            isPending ?
                                <>
                                    <div className="flex flex-col gap-2 items-center justify-center">
                                        <div className="skeleton h-3 w-20"></div>
                                        <div className="skeleton h-4 w-20"></div>
                                    </div>
                                </>
                                :
                                <>
                                    <li className='text-lg'><NavLink to={userInfo?.role === "admin" ? "/dashboard/adminHome" : userInfo?.role === "buyer" ? "/dashboard/buyerHome" : "/dashboard/workerHome"}>Dashboard</NavLink></li>
                                </>
                        }
                        <li className='text-lg'><NavLink to={"/"}>Home</NavLink></li>

                    </ul>
                </div>
                <div className="navbar-end">
                    <ThemeToggle></ThemeToggle>
                    <div className="dropdown dropdown-end">
                        {isPending ?
                            <>
                                <div className="flex items-center gap-4">
                                    <div className="skeleton h-12 w-12 shrink-0 rounded-full"></div>
                                    <div className="flex flex-col gap-4">
                                        <div className="skeleton h-4 w-20"></div>
                                        <div className="skeleton h-4 w-28"></div>
                                    </div>
                                </div>
                            </>
                            :
                            userInfo ?

                                <>
                                    <div className='flex'>
                                        <div className='flex gap-4 px-4'>
                                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                                <div className="w-16 rounded-full">
                                                    <img
                                                        alt="ProfileImage"
                                                        src={userInfo?.photoURL} />
                                                </div>
                                            </div>
                                            <div className='hidden sm:block'>
                                                <h2>{userInfo?.displayName}</h2>
                                                <div className='flex items-center gap-x-2'>
                                                    <p className=''>{userInfo?.role?.[0].toUpperCase() + userInfo?.role?.slice(1)}</p>
                                                    <p className='flex items-center gap-1'>
                                                        <IoServerOutline></IoServerOutline>
                                                        {!isPending && userInfo?.coin}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='px-4 border-base-200'>
                                            <button className='btn bg-[#ff585c] hover:bg-[#fe4f52] text-base-100' onClick={handleSignOut}> <PiPowerBold className='text-lg hidden xl:block'></PiPowerBold>Logout</button>
                                        </div>
                                    </div>
                                </>
                                :
                                <>
                                    <Link className='btn bg-[#0A65FC] hover:bg-[#0244b0] text-base-100' to={"/login"}>Login</Link>
                                </>
                        }

                    </div>
                </div>
            </div>

        </div>
    );
};

export default NavBar;