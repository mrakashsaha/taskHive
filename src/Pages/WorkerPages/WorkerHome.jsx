import React from 'react';
import useUserInfo from '../../hook/useUserInfo';
import { useQuery } from '@tanstack/react-query';
import { MdOutlinePendingActions } from 'react-icons/md';
import { IoFileTrayStackedOutline } from 'react-icons/io5';
import { PiMoneyLight } from 'react-icons/pi';
import useAxiosSecure from '../../hook/useAxiosSecure';
import Approved from '../../components/Approved';

const WorkerHome = () => {
    const {userInfo, isPending} = useUserInfo();
    const axiosSecure = useAxiosSecure();
    const { data: workerStats} = useQuery({
        queryKey: ["worker-stats", userInfo?.email],
        enabled: !isPending,
        queryFn: async () => {
            const res = await axiosSecure.get(`/workerStats?email=${userInfo?.email}`)
            return res.data;

        }
    })

    const {data: approvedSubmission=[]}= useQuery({
        queryKey: ["approve-submission", userInfo?.email],
        enabled: !isPending,
        queryFn: async () => {
            const res = await axiosSecure.get(`approvedSubmission?email=${userInfo?.email}`)
            return res.data;

        }
    })

    return (
        <div>
            <div className='w-11/12 mx-auto'>
                <div className='py-4 px-2'>
                    <p>Welcome Back! </p>
                    <h2 className='text-2xl'>{userInfo?.displayName}</h2>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-6'>
                    <div className='bg-base-100 p-6 border rounded-md'>
                        <div className='flex justify-between'>
                            <div className='space-y-4'>
                                <h6 className='uppercase text-xs'>Total Submission</h6>
                                <div className='flex items-center gap-x-2'>
                                    <h2 className='text-3xl font-medium'> {workerStats?.totalSubmission}</h2>
                                </div>
                            </div>
                            <div>
                                <div className='w-8 h-8 bg-[#7744a7] rounded-md flex justify-center items-center'>
                                    <IoFileTrayStackedOutline className='text-[white] text-xl'></IoFileTrayStackedOutline >
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='bg-base-100 p-6 border rounded-md'>
                        <div className='flex justify-between'>
                            <div className='space-y-4'>
                                <h6 className='uppercase text-xs'>Pending Submission</h6>
                                <div className='flex items-center gap-x-2'>
                                    <h2 className='text-3xl font-medium'> {workerStats?.totalPendingSubmission}</h2>
                                </div>
                            </div>
                            <div>
                                <div className='w-8 h-8 bg-[#ffc402] rounded-md flex justify-center items-center'>
                                    <MdOutlinePendingActions className='text-[white] text-xl'></MdOutlinePendingActions>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className='bg-base-100 p-6 border rounded-md'>
                        <div className='flex justify-between'>
                            <div className='space-y-4'>
                                <h6 className='uppercase text-xs'>Total Earned Coins</h6>
                                <div className='flex items-center gap-x-2'>
                                    <h2 className='text-3xl font-medium'> {workerStats?.totalEarnings}</h2>
                                </div>
                            </div>
                            <div>
                                <div className='w-8 h-8 bg-[#3ab446] rounded-md flex justify-center items-center'>
                                    <PiMoneyLight  className='text-[white] text-xl'></PiMoneyLight >
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='py-4 px-2'>
                    <h2 className='text-2xl'>Approved Submission</h2>
                </div>
                <div className="card-body bg-base-100 rounded-md">
                    <div>
                        <div className="overflow-x-auto">
                            <table className="table">
                                {/* head */}
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Task Title</th>
                                        <th className='text-right'>Earned</th>
                                        <th>Buyer Name</th>
                                        <th>Buyer Email</th>
                                        <th className='text-center'>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        approvedSubmission.map((submission, idx)=> <tr key={idx}>
                                            <td>{idx+1}</td>
                                            <td>{submission?.taskTitle}</td>
                                            <td className='text-right'>{submission?.payableAmount} coins</td>
                                            <td>{submission?.buyerName}</td>
                                            <td>{submission?.buyerEmail}</td>
                                            <td>{submission?.status === "approved" && <Approved></Approved>}</td>
                                        </tr>)
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WorkerHome;