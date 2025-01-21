import React from 'react';
import useUserInfo from '../../hook/useUserInfo';
import Loading from '../../components/Loading';
import useMyTask from '../../hook/useMyTask';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { GrEdit } from 'react-icons/gr';

const MyTask = () => {
    const { myTask, isMyTaskPending, myTaskRefetch } = useMyTask();
    if (isMyTaskPending) {
        return <Loading></Loading>;
    }

    console.log(myTask)
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
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>

                                {
                                    myTask.map((task, idx) => <tr>
                                        <th>
                                            {idx+1}
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
                                        <td>{task?.completionDate}</td>
                                        <th className='space-x-4'>
                                            <button className="btn btn-circle btn-sm"> <GrEdit  className='text-xl'></GrEdit> </button>
                                            <button className="btn btn-circle btn-sm"> <RiDeleteBin6Line className='text-xl'></RiDeleteBin6Line> </button>
                                        </th>
                                    </tr>)
                                }


                            </tbody>
                            {/* foot */}
                            <tfoot>
                                <tr>
                                    <th></th>
                                    <th>Name</th>
                                    <th>Job</th>
                                    <th>Favorite Color</th>
                                    <th></th>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyTask;