import React, { useState } from 'react';
import Loading from '../../components/Loading';
import useMyTask from '../../hook/useMyTask';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { GrEdit } from 'react-icons/gr';
import moment from 'moment';
import useAxiosSecure from '../../hook/useAxiosSecure';
import Swal from 'sweetalert2';
import useUserInfo from '../../hook/useUserInfo';
import { useQuery } from '@tanstack/react-query';

const ManageTask = () => {
    const axiosSecure = useAxiosSecure();

    const {data:allTasks=[], refetch} = useQuery({
        queryKey: ["all-task"],
        queryFn: async()=> {
            const res = await axiosSecure.get("/alltask")
            return res.data;
            
        }
    })


    const handleDeleteTask = (id) => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/deleteTaskByAdmin?id=${id}`)
                    .then(res => {
                        console.log (res.data);
                        if (res?.data?.matchedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Task deleted and Payable Coin Refunded to Buyer",
                                icon: "success"
                            });

                            refetch();
                        }
                    })
                    .catch(error => {
                        Swal.fire({
                            title: "Opps..",
                            text: "Somthing went Wrong!",
                            icon: "error"
                        });
                        console.log(error);
                    })
            }
        });

    }


    return (
        <div className=''>
            <div className='w-11/12 mx-auto'>
                <div className='py-4 px-2'>
                    <h2 className='text-2xl'>Manage Tasks</h2>
                </div>
                <div className="card-body bg-base-100 rounded-md">
                    <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Thumbnail</th>
                                    <th>Title</th>
                                    <th>Posted By</th>
                                    <th>Submission Details</th>
                                    <th>Total Payable Coin</th>
                                    <th>Completion Date</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>

                                {
                                    allTasks.map((task, idx) => <tr key={task?._id}>
                                        <th>
                                            {idx + 1}
                                        </th>
                                        <td>
                                            <div className="avatar">
                                                <div className="mask rounded h-12 w-16">
                                                    <img
                                                        src={task?.taskImage}
                                                        alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                        </td>
                                        <td>{task?.taskTitle}</td>
                                        <td>{task?.postedBy}</td>
                                        <td>{task?.submissionInfo}</td>
                                        <td>{task?.requiredWorkers * task?.payableAmount}</td>
                                        <td>{moment(task?.completionDate).local().format("LL")}</td>
                                        <td>
                                            <button onClick={() => handleDeleteTask(task?._id)} className="btn btn-circle btn-sm"> <RiDeleteBin6Line className='text-xl'></RiDeleteBin6Line> </button>
                                        </td>
                                    </tr>)
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageTask;