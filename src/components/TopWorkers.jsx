import React from 'react';
import ProfileCard from './ProfileCard';
import useAxiosPublic from '../hook/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const TopWorkers = () => {
    const axiosPublic = useAxiosPublic();
    const {data:bestWorkers=[]} = useQuery({
        queryKey: ["best-worker"], 
        queryFn: async ()=> {
            const res = await axiosPublic.get("/bestWorkers");
            return res.data;
        }
    })

    console.log(bestWorkers);
    return (
        <div className='container mx-auto'>



            <div className='grid grid-cols-4 gap-10'>
                <ProfileCard></ProfileCard>
                <ProfileCard></ProfileCard>
                <ProfileCard></ProfileCard>
                <ProfileCard></ProfileCard>
            </div>

        </div>
    );
};

export default TopWorkers;