import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useUserInfo from '../../hook/useUserInfo';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../hook/useAxiosSecure';
import { MdOutlinePeopleAlt, MdVerified } from 'react-icons/md';
import { IoLocationOutline, IoTimerOutline } from 'react-icons/io5';
import { BsCalendarCheck, BsGlobe } from 'react-icons/bs';
import moment from 'moment';
import axios from 'axios';
import Swal from 'sweetalert2';

const TaskDetails = () => {
    const params = useParams();
    const {userInfo, isPending } = useUserInfo();
    const axiosSecure = useAxiosSecure();
    const navigate = useNavigate();

    const { data: taskDetails = {} } = useQuery({
        queryKey: ["taskDetails", params?.id],
        queryFn: async () => {
            const res = await axiosSecure.get(`/taskDetails?id=${params?.id}`)
            return res.data;
        }
    })

    console.log(taskDetails)

    const handleSubmitWork = (e) => {
        e.preventDefault();

        const submissionDetails = e.target.submissionDetails.value;
        console.log(submissionDetails);


        const submissionDetailsDoc = {
            taskId: taskDetails?._id,
            taskTitle: taskDetails?.taskTitle,
            payableAmount: taskDetails?.payableAmount,
            buyerEmail: taskDetails?.buyerEmail,
            buyerName: taskDetails?.buyerName,
            buyerPhoto: taskDetails?.buyerPhoto,
            workerEmail: userInfo?.email,
            workerName: userInfo?.displayName,
            workerPhoto: userInfo?.photoURL,
            submissionDetails: submissionDetails,
            currentDate: moment().toISOString(),
            status: "pending",
        }

        console.log (submissionDetailsDoc);

        axiosSecure.post("/submission", submissionDetailsDoc)
        .then (res=> {
            if (res.data.insertedId) {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your work has been submited for approval.",
                    showConfirmButton: false,
                    timer: 1500
                  });

                  navigate("/dashboard/mySubmissions");
            }
        })
        
    }

    return (
        <div className=''>
            <div className='py-4 px-2'>
                <h2 className='text-2xl'>Task Details</h2>
            </div>
            <div className='grid grid-cols-8 xl:grid-cols-12 gap-4 items-start'>
                <div className='card-body bg-base-100 rounded-md col-span-8'>
                    <div className='flex items-center gap-x-10 mb-4'>
                        <div className='hidden lg:block'>
                            <div className='h-24'>
                                <img className='h-full' src={taskDetails?.taskImage} alt="" />
                            </div>
                        </div>
                        <div>
                            <h2 className='text-xl font-semibold'>{taskDetails?.taskTitle}</h2>
                            <div className='sm:space-x-6 my-4'>
                                <span className='inline-flex items-center gap-x-4'><BsCalendarCheck className='text-xl'></BsCalendarCheck> <p>Completation Date: {moment(taskDetails?.completaionDate).local().format("ll")}</p></span>

                                <span className='inline-flex items-center gap-x-4'><MdOutlinePeopleAlt className='text-xl'></MdOutlinePeopleAlt> <p>Required Worker: {taskDetails?.requiredWorkers}</p></span>
                            </div>
                        </div>
                    </div>
                    <hr />
                    {/* Task Description */}
                    <div className='mb-4'>
                        <h2 className='text-xl font-semibold my-4'>Task Description</h2>
                        <p>{taskDetails?.taskDetails}</p>
                        <div className='my-6 space-y-2'>
                            <div className='flex justify-between items-center'>
                                <h5>You have to submit </h5>
                                <h5 className='font-semibold'>{taskDetails?.submissionInfo}</h5>
                            </div>
                            <div className='flex justify-between items-center'>
                                <h5>Coins Earned Upon Completion </h5>
                                <h5 className='font-semibold'>{taskDetails?.payableAmount} coins</h5>
                            </div>
                            <div className='flex justify-between items-center'>
                                <h5>Net Payable Amount in USD </h5>
                                <h5 className='font-semibold'>{taskDetails?.payableAmount / 20}$</h5>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div>
                        <h2 className='text-xl font-semibold my-4'>Submit Your Work Here</h2>
                        <form onSubmit={handleSubmitWork}>
                            <div className="form-control">
                                <textarea required name='submissionDetails' className="textarea textarea-md textarea-bordered h-40" placeholder="Provide a detailed summary of your completed work, including key tasks, deliverables, and any relevant links to support your submission."></textarea>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Submit Work</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className='card-body bg-base-100 rounded-md col-span-8 xl:col-span-4'>
                    <div className='w-fit mx-auto px-4 py-2 rounded-b-md -mt-8 text-center bg-[#6787FE]/10'>
                        <h3 className='text-base font-semibold text-[#6787FE]'>Buyer Details</h3>
                    </div>
                    <div className='mt-4 flex gap-4 items-center'>
                        <div className="avatar">
                            <div className="w-16 rounded-xl">
                                <img src={taskDetails?.buyerPhoto} />
                            </div>
                        </div>
                        <div>
                            <h5 className='text-[#333333] text-lg font-medium'>{taskDetails?.buyerName} <MdVerified className='inline-block text-[#6065fc]'></MdVerified> </h5>
                            <p>Buyer since April 30, 2024</p>
                        </div>
                    </div>
                    <div className='my-4 space-y-3'>
                        <h2 className='font-semibold'>Elevate Your Online Presence with Freelance Website Development</h2>
                        <p>As a visionary entrepreneur, I’m looking to collaborate with talented professionals to create a cutting-edge website that amplifies our brand and connects us with our target audience.</p>
                    </div>
                    <div className='space-y-3'>
                        <div className='flex justify-between items-center'>
                            <span className='inline-flex items-center gap-x-2'><IoLocationOutline className='text-xl'></IoLocationOutline> <h2>Location :<span className=''></span></h2></span>
                            <h2 className='font-semibold'>Bangladesh</h2>
                        </div>
                        <div className='flex justify-between items-center'>
                            <span className='inline-flex items-center gap-x-2'><BsGlobe className='text-xl'></BsGlobe> <h2>Language:<span className=''></span></h2></span>
                            <h2 className='font-semibold'>Bengali / English</h2>
                        </div>
                        <div className='flex justify-between items-center'>
                            <span className='inline-flex items-center gap-x-2'><IoTimerOutline className='text-xl'></IoTimerOutline> <h2>Response Time:<span className=''></span></h2></span>
                            <h2 className='font-semibold'>24 hours</h2>
                        </div>
                    </div>
                    <div className='mt-4'>
                        <button className='btn w-full btn-primary'>See all Posted Project</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TaskDetails;