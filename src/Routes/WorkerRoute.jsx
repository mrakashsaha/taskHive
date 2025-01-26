import React from 'react';
import useUserInfo from '../hook/useUserInfo';
import { Navigate } from 'react-router-dom';
import Loading from '../components/Loading';

const WorkerRoute = ({children}) => {
    const {userInfo, isPending} = useUserInfo();

    if (isPending) {
        return <Loading></Loading>
    }

    if (userInfo?.role==="worker") {
        return children;
    }

    return <Navigate to={"/login"}></Navigate>
};

export default WorkerRoute;