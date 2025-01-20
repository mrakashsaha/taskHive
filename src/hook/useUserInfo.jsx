import React, { useContext } from 'react';
import useAxiosSecure from './useAxiosSecure';
import { AuthContext } from '../Provider/AuthProvider';
import { useQuery } from '@tanstack/react-query';

const useUserInfo = () => {
    const {user, loading} = useContext(AuthContext);
    const axiosSecure = useAxiosSecure();

    const {data:userInfo, isPending, refetch} = useQuery({
        queryKey: ['user-info', user?.email],
        enabled: !loading,
        queryFn: async ()=> {
            const res = await axiosSecure.get(`/user?email=${user?.email}`)
            return res?.data;
        }
    })
    return {userInfo, isPending, refetch};
};

export default useUserInfo;