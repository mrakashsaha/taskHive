import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const useMyTask = () => {
    const {user, loading} = useContext(AuthContext);
    const axiosSecure = useAxiosSecure();

    const {data:myTask, isPending:isMyTaskPending, refetch:myTaskRefetch} = useQuery({
        queryKey: ['my-task', user?.email],
        enabled: !loading,
        queryFn: async ()=> {
            const res = await axiosSecure.get(`/myTask?email=${user?.email}`)
            return res?.data;
        }
    })
    return {myTask, isMyTaskPending, myTaskRefetch};
};

export default useMyTask;