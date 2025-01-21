import React, { useState } from 'react';
import Loading from '../../components/Loading';
import useMyTask from '../../hook/useMyTask';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { GrEdit } from 'react-icons/gr';
import moment from 'moment';
import useAxiosSecure from '../../hook/useAxiosSecure';
import Swal from 'sweetalert2';

const MyTask = () => {
    const [formDefaultValue, setFormDefaultValue] = useState({});
    const { myTask, isMyTaskPending, myTaskRefetch } = useMyTask();
    const axiosSecure = useAxiosSecure();
    if (isMyTaskPending) {
        return <Loading></Loading>;
    }



    const handleUpdateModal = (id) => {
        document.getElementById('my_modal_5').showModal();
        console.log(id);
        const formValueById = myTask.find(task => task._id === id);
        setFormDefaultValue(formValueById);
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        const taskTitle = e.target.taskTitle.value
        const taskDetails = e.target.taskDetails.value
        const submissionInfo = e.target.submissionInfo.value
        const _id = formDefaultValue._id

        const taskUpdateDoc = {
            _id, taskTitle, taskDetails, submissionInfo
        }

        console.log(taskUpdateDoc);

        axiosSecure.patch("/updateTask", taskUpdateDoc)
            .then(res => {
                if (res.data.modifiedCount) {
                    document.getElementById('my_modal_5').close();
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your task has been updated",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }

                if (!res.data.modifiedCount) {
                    document.getElementById('my_modal_5').close();
                    Swal.fire({
                        position: "top-end",
                        icon: "info",
                        title: "There is nothing to update",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
            .catch(error=>console.log(error));

    }


    return (
        <div className=''>
            <div className='w-11/12 mx-auto'>
                <div className='py-4 px-2'>
                    <h2 className='text-2xl'>My Tasks</h2>
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
                                    <th>Submission Details</th>
                                    <th>Completion Date</th>
                                    <th>Update</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>

                                {
                                    myTask.map((task, idx) => <tr key={task?._id}>
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
                                        <td>{task?.submissionInfo}</td>
                                        <td>{moment(task?.completionDate).local().format("LL")}</td>
                                        <td>
                                            <button onClick={() => handleUpdateModal(task?._id)} className="btn btn-circle btn-sm"> <GrEdit className='text-xl'></GrEdit> </button>
                                        </td>
                                        <td>
                                            <button className="btn btn-circle btn-sm"> <RiDeleteBin6Line className='text-xl'></RiDeleteBin6Line> </button>
                                        </td>
                                    </tr>)
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
                {/* Showing Updat Modal */}
                <dialog id="my_modal_5" className="modal modal-middle p-2">
                    <div className="modal-box">
                        <h3 className="font-bold text-lg">Update Task</h3>
                        <form onSubmit={handleSubmit}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="">Task Title</span>
                                </label>
                                <input required defaultValue={formDefaultValue?.taskTitle} name='taskTitle' type="text" placeholder="Enter the title of your task" className="input input-bordered" />

                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="">Task Details</span>
                                </label>
                                <textarea required defaultValue={formDefaultValue?.taskDetails} name='taskDetails' className="textarea textarea-bordered" placeholder="Enter detail description of the task"></textarea>
                            </div>

                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="">Submission Info</span>
                                </label>
                                <input required defaultValue={formDefaultValue?.submissionInfo} name='submissionInfo' type="text" placeholder="Enter what to submit as proof. Ex. Screenshot" className="input input-bordered" />
                            </div>
                            <div className="form-control mt-4">
                                <input value={"Update Task"} className='btn' type="submit" />
                            </div>
                        </form>
                        <div className="form-control mt-4">
                            <button onClick={() => {
                                setFormDefaultValue({});
                                document.getElementById('my_modal_5').close()
                            }} className='btn'>Cancel</button>
                        </div>
                    </div>
                </dialog>
            </div>
        </div>
    );
};

export default MyTask;