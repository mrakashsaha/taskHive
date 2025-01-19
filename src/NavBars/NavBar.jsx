import React, { useContext } from 'react';
import { FaGithub } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const NavBar = () => {
    const { signOutFromAccount, setUser, user, loading } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSignOut = () => {
        signOutFromAccount()
            .then(() => {
                console.log('signout sucessfully')
                setUser(null);
                navigate("/login")
            }).catch((error) => {
                console.log("signout failed")
            });
    }

    const noUserMenus =
        <>
            <li><Link to={"/login"}>Login</Link></li>
            <li><Link to={"/register"}>Register</Link></li>
        </>

    const userMenus =
        <>
            <li><Link to={""}>Dashboard</Link></li>
            <li><Link to={""}>Available Coin</Link></li>
            <li><Link to={"/profile"}>User Profile</Link></li>
            <li><button onClick={handleSignOut}>Logout</button></li>
        </>

    return (
        <div className='bg-base-100'>
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
                    <Link to={"/"} className="btn btn-ghost text-xl">TaskHive</Link>
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
                    <a href="https://github.com/mrakashsaha" target="_blank" className="btn"> <FaGithub className='text-3xl'></FaGithub> Join as Developer</a>
                </div>
            </div>
        </div>
    );
};

export default NavBar;