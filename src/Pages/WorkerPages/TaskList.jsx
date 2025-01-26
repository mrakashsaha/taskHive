import React from 'react';
import useUserInfo from '../../hook/useUserInfo';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../hook/useAxiosSecure';
import TaskCard from './TaskCard';

const TaskList = () => {
    const { userInfo, isPending: isUserInfoPending } = useUserInfo();
    const axiosSecure = useAxiosSecure();

    const { data: taskLists=[] } = useQuery({
        queryKey: ["myTask-list"],
        enabled: !isUserInfoPending,
        queryFn: async () => {
            const res = await axiosSecure.get("/task")
            return res.data;
        }
    })

    return (
        <div>
            <div className='max-w-6xl mx-auto'>
                <div className='py-4 px-2'>
                    <h2 className='text-2xl'>Task Lists</h2>
                </div>
                <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-10 place-content-center'>
                    {
                        taskLists.map((task) => <TaskCard key={task?._id} task = {task}></TaskCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default TaskList;