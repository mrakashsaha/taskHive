import React from 'react';
import useUserInfo from '../hook/useUserInfo';
import { Navigate } from 'react-router-dom';
import Loading from '../components/Loading';

const AdminRoute = ({children}) => {
    const {userInfo, isPending} = useUserInfo();

    if (isPending) {
        return <Loading></Loading>
    }

    if (userInfo?.role==="admin") {
        return children;
    }

    return <Navigate to={"/login"}></Navigate>
};

export default AdminRoute;