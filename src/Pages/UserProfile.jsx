import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import moment from 'moment';
import { Link } from 'react-router-dom';

const UserProfile = () => {
    const { user, loading } = useContext(AuthContext);
    if (loading) {
        return <p>Loading../</p>
    }
    return (
        <div className='mx-auto max-w-md'>
            <div className="card bg-base-100 shadow-xl">
                <h2 className='text-2xl text-center pt-4'>My Profile</h2>
                <figure className="px-10 pt-10">
                    <div className="avatar online">
                        <div className="w-24 rounded-full">
                            <img src={user?.photoURL} />
                        </div>
                    </div>
                </figure>
                <div className="card-body items-center text-center">
                    <h4 className="">Welcome back,</h4>
                    <h2 className="card-title">{user?.displayName}</h2>
                    <p>Email: {user?.email}</p>
                    <p>Last Login: {moment(parseInt(user?.metadata?.lastLoginAt)).local().format('LLL')}</p>
                    <div className="card-actions">
                        <Link to={"/"} className="btn btn-primary">Back to Home</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;