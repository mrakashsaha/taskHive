import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { IoEye, IoEyeOff } from 'react-icons/io5';
import { Link, useNavigate } from 'react-router-dom';
import registerLottie from '../../src/assets/Lottie/Register.json'
import Lottie from 'lottie-react';
import { AuthContext } from '../Provider/AuthProvider';
import Swal from 'sweetalert2';
import useAxiosPublic from '../hook/useAxiosPublic';

const Registration = () => {
    const { createAccountWithEmail, saveUserDetails } = useContext(AuthContext);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [visiable, setVisiable] = useState(false);
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();

    const onSubmit = (data) => {
        console.log(data);
        createAccountWithEmail(data.email, data.password)
            .then((userCredential) => {
                const user = userCredential.user;
                if (user) {
                    saveUserDetails(data.name, data.photoURL)
                        .then(() => {
                            // Profile Update Done
                            const userInfo = {
                                displayName: data.name,
                                email: data.email,
                                photoURL: data.photoURL,
                                role: data.role,
                            }
                            axiosPublic.put("/users", userInfo)
                                .then(res => {
                                    if (res?.data?.upsertedId) {
                                        if (userInfo?.role === "buyer") {
                                            Swal.fire({
                                                icon: "success",
                                                title: "Congratulations!",
                                                text: "You have recived 50 Coins for joining as Buyer.",
                                            });
                                        }

                                        if (userInfo?.role === "worker") {
                                            Swal.fire({
                                                icon: "success",
                                                title: "Congratulations!",
                                                text: "You have recived 10 Coins for joining as Worker.",
                                            });
                                        }

                                    }
                                })
                                .catch(error => console.log(error))

                            navigate("/")

                        })
                        .catch((error) => console.log("profile udpate failed"))
                }

            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(error);
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: `${errorCode === "auth/email-already-in-use" ? "This email is already registered" : "Something went wrong!"}`,
                });
            });


    }
    return (
        <div className='container mx-auto my-4'>
            <div className='flex items-center justify-around flex-col gap-10 lg:gap-2 lg:flex-row'>
                <div className='w-96 sm:w-[425px] md:w-[480px]'>
                    <Lottie animationData={registerLottie}></Lottie>
                </div>
                <div className="card bg-base-100 w-96 sm:w-[425px] md:w-[480px] shrink-0 shadow-2xl">
                    <h1 className="text-2xl text-center font-bold  mx-auto pt-8">Sign Up Today!</h1>
                    <div className='card-body'>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="">Name</span>
                                </label>
                                <input {...register("name", { required: true, minLength: 2, maxLength: 40 })} name='name' type="text" placeholder="Your Name" className="input input-bordered" />
                                {errors?.name?.type === 'minLength' && <p className='text-red-500 text-sm pt-1'>Name is Too Short</p>}
                                {errors?.name?.type === 'maxLength' && <p className='text-red-500 text-sm pt-1'>Name is Too Long</p>}
                                {errors?.name?.type === 'required' && <p className='text-red-500 text-sm pt-1'>Name is required</p>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="">Email</span>
                                </label>
                                <input {...register("email", { required: true })} name='email' type="email" placeholder="Enter Email" className="input input-bordered" autoComplete='email' />
                                {errors?.email?.type === 'required' && <p className='text-red-500 text-sm pt-1'>Email is required</p>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="">Photo URL</span>
                                </label>
                                <input {...register("photoURL", { required: true })} name='photoURL' type='url' placeholder="Enter Photo URL" className="input input-bordered" />
                                {errors?.photoURL?.type === 'required' && <p className='text-red-500 text-sm pt-1'>Photo URL is required</p>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="">Role</span>
                                </label>
                                <select {...register("role", { required: true })} defaultValue={""} className="select select-bordered">
                                    <option value={""} disabled>Select one</option>
                                    <option value={"worker"}>Worker</option>
                                    <option value={"buyer"}>Buyer</option>
                                </select>
                                {errors?.role?.type === 'required' && <p className='text-red-500 text-sm pt-1'>Photo URL is required</p>}
                            </div>
                            <div className="form-control relative">
                                <label className="label">
                                    <span className="">Password</span>
                                </label>
                                <input {...register("password", { required: true, pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).{6,20}$/ })} name='password' type={visiable ? "text" : "password"} placeholder="Create Password" className="input input-bordered" autoComplete='new-password' required />
                                <a onClick={() => setVisiable(!visiable)} className='btn btn-sm btn-circle absolute right-2 top-12' > {visiable ? <IoEye className='text-lg'></IoEye> : <IoEyeOff className='text-lg'></IoEyeOff>}  </a>
                                {errors?.password?.type === 'required' && <p className='text-red-500 text-sm pt-1'>Password is required</p>}
                                {errors?.password?.type === 'pattern' && <p className='text-red-500 text-sm pt-1'>Password should be 6-20 characters, with at least one uppercase letter, one lowercase letter, one number, and one special character.</p>}
                            </div>
                            <div className="form-control mt-4">
                                <input value={"Register"} className='btn' type="submit" />
                            </div>
                        </form>
                        <div className='border-t border-1 border-blue-600 border-dotted mt-4'></div>
                        <label className="label">
                            <p>Already have an Account? <Link to={'/login'} className='underline text-[#04B2B2] font-semibold'>Login</Link> </p>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registration;