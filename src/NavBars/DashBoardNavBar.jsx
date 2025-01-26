import React from 'react';
import { BiSolidCoinStack } from 'react-icons/bi';
import { MdOutlineNotificationsActive } from 'react-icons/md';
import { Link } from 'react-router-dom';
import useUserInfo from '../hook/useUserInfo';

const DashBoardNavBar = () => {
    const {userInfo, isPending} = useUserInfo();
  
    return (
        <div className='bg-base-100 shadow-md'>
            <div className="navbar p-4">
                <div className="flex-1">
                    <Link to={"/"} className="btn btn-ghost text-xl">TaskHive</Link>
                </div>
                <div className="flex-none gap-2">
                    <div className="flex items-center gap-x-4">
                        <div>
                            <h2 className='btn rounded-full flex items-center justify-center gap-2 text-xl'> <BiSolidCoinStack className='text-2xl'></BiSolidCoinStack>{!isPending && userInfo?.coin}</h2>
                        </div>
                    </div>
                    <div className="dropdown dropdown-end">
                        <div className='flex gap-4 px-4'>
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-16 rounded-full">
                                    <img
                                        alt="ProfileImage"
                                        src={!isPending && userInfo?.photoURL} />
                                </div>
                            </div>
                            <div className='hidden sm:block'>
                                <h2>{!isPending && userInfo?.displayName}</h2>
                                <p className=''>Role: {!isPending && userInfo?.role?.[0].toUpperCase() + userInfo?.role?.slice(1)}</p>
                            </div>
                        </div>
                    </div>
                    <div className='px-4 border-l-2'>
                        <MdOutlineNotificationsActive className='text-3xl'></MdOutlineNotificationsActive>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashBoardNavBar;