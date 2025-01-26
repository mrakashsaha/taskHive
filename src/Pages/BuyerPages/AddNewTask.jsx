import axios from 'axios';
import moment from 'moment';
import React from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import useUserInfo from '../../hook/useUserInfo';
import Loading from '../../components/Loading';
import { useNavigate } from 'react-router-dom';
import useAxiosSecure from '../../hook/useAxiosSecure';
import useMyTask from '../../hook/useMyTask';

const imageHositingAPI = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMAGE_BB}`

const AddNewTask = () => {
    const navigate = useNavigate();
    const axiosSecure = useAxiosSecure();

    const { userInfo, isPending, refetch } = useUserInfo();
    const {myTaskRefetch} = useMyTask();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    if (isPending) {
        return <Loading></Loading>;
    }

    const onSubmit = async (data) => {

        console.log((userInfo?.coin > (data?.payableAmount * data?.requiredWorkers)));

        if (userInfo?.coin < (data?.payableAmount * data?.requiredWorkers)) {
            Swal.fire({
                icon: "error",
                title: "Not Enough Coin!",
                text: `You need atleast ${(data?.payableAmount * data?.requiredWorkers) - userInfo?.coin} coins to post.`,
                footer: 'We will redirect you to Purschase Coin'
            });
            navigate("/dashboard/purchaseCoin")
            return;
        }

        const imageFile = { image: data.taskImage[0] }

        const res = await axios.post(imageHositingAPI, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        })

        if (!res?.data?.data?.display_url) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Image upload failed!"
            });

            return;
        }

        const taskDoc = {
            taskTitle: data?.taskTitle,
            taskDetails: data?.taskDetails,
            requiredWorkers: data?.requiredWorkers,
            payableAmount: data?.payableAmount,
            completionDate: moment(data?.completionDate).toISOString(),
            submissionInfo: data?.submissionInfo,
            taskImage: res?.data?.data?.display_url,
            postedBy: userInfo?.email,

        }

        console.log(taskDoc);

        axiosSecure.post("/tasks", taskDoc)
            .then(res => {
                if (res.data.taskPostingResult.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `Task has been posted <br> Charged Coin: ${(data?.payableAmount * data?.requiredWorkers)}`,
                        showConfirmButton: false,
                        timer: 1500
                      });

                      refetch();
                      myTaskRefetch();
                }

            })
            .catch(error => {
                console.log(error)
            });

    }
    return (
        <div className=''>
            <div className='w-11/12 mx-auto'>
                <div className='py-4 px-2'>
                    <p>Hi, {userInfo?.displayName}</p>
                    <h2 className='text-2xl'>Tell us about your Task</h2>
                </div>
                <div className="card-body bg-base-100 rounded-md">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control">
                            <label className="label">
                                <span className="">Task Title</span>
                            </label>
                            <input {...register("taskTitle", { required: true })} name='taskTitle' type="text" placeholder="Enter the title of your task" className="input input-bordered" />
                            {errors?.taskTitle?.type === 'required' && <p className='text-red-500 text-sm pt-1'>Task Title is required</p>}
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="">Task Details</span>
                            </label>
                            <textarea {...register("taskDetails", { required: true })} className="textarea textarea-bordered" placeholder="Enter detail description of the task"></textarea>
                            {errors?.taskDetails?.type === 'required' && <p className='text-red-500 text-sm pt-1'>Task Details is required</p>}
                        </div>

                        <div className='flex gap-6 flex-col lg:flex-row'>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="">Required Workers</span>
                                </label>
                                <input {...register("requiredWorkers", { required: true, min: 1 })} name='requiredWorkers' type="number" placeholder="Enter how many workers you need. Ex. 40" className="input input-bordered" />
                                {errors?.requiredWorkers?.type === 'required' && <p className='text-red-500 text-sm pt-1'>Required Workers is required</p>}
                                {errors?.requiredWorkers?.type === 'min' && <p className='text-red-500 text-sm pt-1'>Required Workers is must be greater than 0</p>}
                            </div>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="">Payable Amount</span>
                                </label>
                                <input {...register("payableAmount", { required: true, min: 1})} name='payableAmount' type="number" placeholder="Enter the amount that will pay to each worker. Ex. 5" className="input input-bordered" />
                                {errors?.payableAmount?.type === 'required' && <p className='text-red-500 text-sm pt-1'>Payable Amount is required</p>}
                                {errors?.payableAmount?.type === 'min' && <p className='text-red-500 text-sm pt-1'>Payable Amount must be greater than 0</p>}
                            </div>
                        </div>

                        <div className='flex gap-6 flex-col lg:flex-row'>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="">Completion Date</span>
                                </label>
                                <input {...register("completionDate", { required: true })} name='completionDate' type="date" className="input input-bordered" />
                                {errors?.completionDate?.type === 'required' && <p className='text-red-500 text-sm pt-1'>Completion Date is required</p>}
                            </div>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="">Submission Info</span>
                                </label>
                                <input {...register("submissionInfo", { required: true })} name='submissionInfo' type="text" placeholder="Enter what to submit as proof. Ex. Screenshot" className="input input-bordered" />
                                {errors?.submissionInfo?.type === 'required' && <p className='text-red-500 text-sm pt-1'>Submission Info is required</p>}
                            </div>
                        </div>
                        <div className="form-control w-full my-4">
                            <label className="label">
                                <span className="">Thubnail Image</span>
                            </label>
                            <div className="card-body justify-center items-center border rounded-md">
                                <input {...register("taskImage", { required: true })} type="file" className="file-input file-input-bordered w-full max-w-xs" />
                            </div>
                            {errors?.taskImage?.type === 'required' && <p className='text-red-500 text-sm pt-1'>Please upload the image</p>}
                        </div>
                        <div className="form-control mt-4">
                            <input value={"Add Task"} className='btn' type="submit" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddNewTask;