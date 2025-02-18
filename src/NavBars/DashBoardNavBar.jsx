import React, { useContext } from 'react';
import { BiSolidCoinStack } from 'react-icons/bi';
import { PiPowerBold } from "react-icons/pi";
import { Link, useNavigate } from 'react-router-dom';
import useUserInfo from '../hook/useUserInfo';
import ThemeToggle from '../components/ThemeToggle';
import { AuthContext } from '../Provider/AuthProvider';

const DashBoardNavBar = () => {
    const { userInfo, isPending } = useUserInfo();
    const { signOutFromAccount, setUser } = useContext(AuthContext);
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
        <div className='bg-base-100 shadow-md'>
            <div className="navbar p-4">
                <div className="flex-1">
                    <Link to={"/"} className="btn btn-ghost text-xl">TaskHive</Link>
                </div>
                <div className="flex items-center md:gap-4">
                    <div>
                        <ThemeToggle></ThemeToggle>
                    </div>
                    <div className="flex items-center gap-x-4">
                        <div>
                            <h2 className='btn rounded-full flex items-center justify-center md:gap-2 text-md md:text-xl'> <BiSolidCoinStack className='text-lg md:text-2xl'></BiSolidCoinStack>{userInfo?.coin}</h2>
                        </div>
                    </div>
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
                            <>
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
                                        <p className=''>Role: {userInfo?.role?.[0].toUpperCase() + userInfo?.role?.slice(1)}</p>
                                    </div>
                                </div>
                            </>}

                    </div>
                    <div className='md:px-1'>
                        <button className='btn bg-[#ff585c] hover:bg-[#fe4f52] text-base-100' onClick={handleSignOut}> <PiPowerBold className='text-lg hidden md:block'></PiPowerBold> Logout</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashBoardNavBar;