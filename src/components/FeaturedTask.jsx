import React from 'react';
import useAxiosPublic from '../hook/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import FeaturedTaskCard from './FeaturedTaskCard';

const FeaturedTask = () => {
    const axiosPublic = useAxiosPublic();
    const { data: featuredTask = [] } = useQuery({
        queryKey: ["featuerd-task"],
        queryFn: async () => {
            const res = await axiosPublic.get("/featuredTask");
            return res.data;
        }
    })

    return (
        <div className='container mx-auto my-20 p-10 md:p-0'>
            <div className='space-y-2'>
                <h2 className='text-2xl lg:text-3xl font-medium text-center'>Featured Tasks</h2>
                <p className='text-center max-w-lg mx-auto px-4'>Explore top-rated tasks! Find high-quality services that meet your needs, completed by skilled professionals.</p>
            </div>



            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 lg:gap-30 my-10'>
                {
                    featuredTask.map((task) => <FeaturedTaskCard key={task?._id} task={task}></FeaturedTaskCard>)
                }
            </div>

        </div>
    );
};

export default FeaturedTask;