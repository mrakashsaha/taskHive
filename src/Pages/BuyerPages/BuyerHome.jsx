import React, { useState } from 'react';
import useUserInfo from '../../hook/useUserInfo';
import { useQuery } from '@tanstack/react-query';
import { MdOutlinePendingActions } from 'react-icons/md';
import { IoFileTrayStackedOutline } from 'react-icons/io5';
import { PiMoneyLight } from 'react-icons/pi';
import useAxiosSecure from '../../hook/useAxiosSecure';
import Approved from '../../components/Approved';
import { GoTasklist } from 'react-icons/go';
import Swal from 'sweetalert2';

const BuyerHome = () => {
    const { userInfo, isPending } = useUserInfo();
    const [submittedInfo, setSubmittedInfo] = useState("");
    const axiosSecure = useAxiosSecure();
    const { data: buyerStats } = useQuery({
        queryKey: ["buyer-stats", userInfo?.email],
        enabled: !isPending,
        queryFn: async () => {
            const res = await axiosSecure.get(`/buyerStats?email=${userInfo?.email}`)
            return res.data;

        }
    })

    const { data: tasksForReview = [], refetch } = useQuery({
        queryKey: ["tasks-for-review", userInfo?.email],
        enabled: !isPending,
        queryFn: async () => {
            const res = await axiosSecure.get(`/getSubmission?email=${userInfo?.email}`)
            return res.data;

        }
    })


    const handleViewSubmission = (submittedText) => {
        setSubmittedInfo("")
        document.getElementById('my_modal_5').showModal();
        setSubmittedInfo(submittedText);
    }

    const handleApproveSubmission = (id, workerEmail, payableCoin) => {


        const payableDoc = {workerEmail, payableCoin}

        axiosSecure.patch(`/approveSubmission?id=${id}`, payableDoc)
        .then (res=> {
            if (res?.data?.modifiedCount) {
                refetch();
                Swal.fire({
                    title: "Approved!",
                    text: "Task is approved and payment sent to worker.",
                    icon: "success"
                  });
            }
        })
        .catch(error=>console.log(error));
        

    }

    const handleRejectSubmission = (id, taskId) => {

        const incReqDoc = {taskId}

        axiosSecure.patch(`/rejectSubmission?id=${id}`, incReqDoc)
        .then (res=> {
            if (res?.data?.modifiedCount) {
                refetch();
                Swal.fire({
                    title: "Rejected!",
                    text: "Rejected and increase required worker +1",
                    icon: "success"
                  });
            }
        })
        .catch(error=>console.log(error));

    }

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
                                <h6 className='uppercase text-xs'>Total Task</h6>
                                <div className='flex items-center gap-x-2'>
                                    <h2 className='text-3xl font-medium'> {buyerStats?.totalTasks}</h2>
                                </div>
                            </div>
                            <div>
                                <div className='w-8 h-8 bg-[#7744a7] rounded-md flex justify-center items-center'>
                                    <GoTasklist className='text-[white] text-xl'></GoTasklist >
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='bg-base-100 p-6 border rounded-md'>
                        <div className='flex justify-between'>
                            <div className='space-y-4'>
                                <h6 className='uppercase text-xs'>Pending Task</h6>
                                <div className='flex items-center gap-x-2'>
                                    <h2 className='text-3xl font-medium'> {buyerStats?.totalPendingTask}</h2>
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
                                <h6 className='uppercase text-xs'>Total Payment</h6>
                                <div className='flex items-center gap-x-2'>
                                    <h2 className='text-3xl font-medium'> ${buyerStats?.totalPayments}</h2>
                                </div>
                            </div>
                            <div>
                                <div className='w-8 h-8 bg-[#3ab446] rounded-md flex justify-center items-center'>
                                    <PiMoneyLight className='text-[white] text-xl'></PiMoneyLight >
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='py-4 px-2'>
                    <h2 className='text-2xl'>Task to Review</h2>
                </div>
                <div className="card-body bg-base-100 rounded-md">
                    <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Worker Name</th>
                                    <th>Task Title</th>
                                    <th>Payable Amount</th>
                                    <th>View Submission</th>
                                    <th className='text-center'>Approve</th>
                                    <th className='text-right'>Reject</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    tasksForReview.map((task, idx) => <tr key={task._id}>

                                        <td>{idx + 1}</td>
                                        <td>
                                            <div className="flex items-center gap-3">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle h-10 w-10">
                                                        <img
                                                            src={task?.workerPhoto}
                                                            alt={task?.workerName} />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="font-medium">{task?.workerName}</div>
                                                    <div className='text-xs opacity-50 gap-x-1'><span className='font-semibold'>{task?.workerEmail}</span></div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>{task?.taskTitle}</td>
                                        <td className='text-right'>{task?.payableAmount} coins</td>
                                        <td className='text-center'>
                                            <button onClick={() => handleViewSubmission(task?.submissionDetails)} className='btn btn-sm'>View</button>
                                        </td>
                                        <td className='text-center'><button onClick={()=>handleApproveSubmission(task?._id, task?.workerEmail, task?.payableAmount)} className='btn btn-sm'>Approve</button></td>
                                        <td className='text-center'><button onClick={()=>handleRejectSubmission(task?._id, task?.taskId)} className='btn btn-sm'>Reject</button></td>
                                    </tr>)
                                }
                            </tbody>
                        </table>
                    </div>
                    <dialog id="my_modal_5" className="modal modal-middle pr-4 sm:pr-0">
                        <div className="text-left modal-box">
                            <h3 className="font-bold text-lg">Submission Details:</h3>
                            <p className="py-4">{submittedInfo}</p>
                            <div className="modal-action">
                                <form method="dialog">
                                    <button className="btn">Close</button>
                                </form>
                            </div>
                        </div>
                    </dialog>
                </div>
            </div>
        </div>
    );
};

export default BuyerHome;