import React from 'react';
import useUserInfo from '../../hook/useUserInfo';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../hook/useAxiosSecure';
import { IoMail } from 'react-icons/io5';
import moment from 'moment';
import Pending from '../../components/Pending';
import Approved from '../../components/Approved';

const MySubmissions = () => {
    const { userInfo, isPending } = useUserInfo();
    const axiosSecure = useAxiosSecure();
    const { data: mySubmissionData = [] } = useQuery({
        queryKey: ["my-submission", userInfo?.email],
        enabled: !isPending,
        queryFn: async () => {
            const res = await axiosSecure.get(`/mySubmission?email=${userInfo?.email}`)
            return res.data;
        }
    })


    console.log(mySubmissionData);
    return (
        <div className='w-11/12 mx-auto'>
            <div className='py-4 px-2'>
                <h2 className='text-2xl'>My Submission</h2>
            </div>
            <div className="card-body bg-base-100 rounded-md">
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Buyer Profile</th>
                                <th>Task Info</th>
                                <th>Submission ID</th>
                                <th>Status</th>
                                <th>Submission Date</th>
                                <th className='text-right'>Receivable Coin</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                mySubmissionData.map((submission, idx) => <tr key={submission._id}>
                                    <td>{idx + 1}</td>
                                    <td>
                                        <div class="flex items-center gap-3">
                                            <div class="avatar">
                                                <div class="mask mask-squircle h-12 w-12">
                                                    <img
                                                        src={submission?.buyerPhoto}
                                                        alt={submission?.buyerName} />
                                                </div>
                                            </div>
                                            <div>
                                                <div class="font-medium">{submission?.buyerName}</div>
                                                <div className='flex items-center text-xs opacity-50 gap-x-1'><IoMail></IoMail> <p class="">  {submission.buyerEmail}</p></div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {submission?.taskTitle}

                                        <span className="badge badge-ghost badge-sm">{submission?.taskId}</span>
                                    </td>
                                    <td className='text-xs'>
                                        {submission?._id}
                                    </td>
                                    <td>
                                        {submission?.status === "approved" ? <Approved></Approved> : <Pending></Pending>}
                                    </td>
                                    <td className='text-sm'>
                                        {moment(submission?.currentDate).local().format("lll")}
                                    </td>
                                    <td className='text-right'>
                                        {submission?.payableAmount} coins
                                    </td>

                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MySubmissions;