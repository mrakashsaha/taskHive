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

    return (
        <div className='container mx-auto my-20 p-10 md:p-0'>
            <div className='space-y-2'>
                <h2 className='text-2xl lg:text-3xl font-medium text-center'>Top Rated Workers</h2>
                <p className='text-center max-w-lg mx-auto px-4'>Meet the best of the best! Discover skilled professionals who consistently deliver exceptional results</p>
            </div>



            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 lg:gap-30 my-10'>
                {
                    bestWorkers.map((worker, idx)=> <ProfileCard key={idx} worker={worker}></ProfileCard>)
                }
            </div>

        </div>
    );
};

export default TopWorkers;