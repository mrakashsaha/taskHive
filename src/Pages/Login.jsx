import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { IoEye, IoEyeOff } from 'react-icons/io5';
import { Link, useNavigate } from 'react-router-dom';
import registerLottie from '../../src/assets/Lottie/Register.json'
import Lottie from 'lottie-react';
import { AuthContext } from '../Provider/AuthProvider';
import Swal from 'sweetalert2';
import ContineWithGoogle from '../components/ContineWithGoogle';

const Login = () => {
    const {signInWithEmail} = useContext(AuthContext);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [visiable, setVisiable] = useState(false);
    const navigate = useNavigate("/")

    const onSubmit = (data) => {
        signInWithEmail(data.email, data.password)
        .then((userCredential) => {
            const user = userCredential.user;
            navigate("/")
          })
          .catch((error) => {
            console.log (error);
            const errorCode = error.code;
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: `${errorCode==="auth/invalid-credential" ? "Invalid Email or Password" : errorCode==="auth/too-many-requests" ? "Too many Request, Please try after a while.." : "Something went wrong!"}`,
              });
          });



    }
    return (
        <div>
            <div className='container mx-auto my-4'>
                <div className='flex items-center justify-around flex-col gap-10 lg:gap-2 lg:flex-row'>
                    <div className='w-96 sm:w-[425px] md:w-[480px]'>
                        <Lottie animationData={registerLottie}></Lottie>
                    </div>
                    <div className="card bg-base-100 w-96 sm:w-[425px] md:w-[480px] shrink-0 shadow-2xl">
                        <h1 className="text-2xl text-center font-bold  mx-auto pt-8">Welcome Back!</h1>
                        <div className='card-body'>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="">Email</span>
                                    </label>
                                    <input {...register("email", { required: true })} name='email' type="email" placeholder="Enter Email" className="input input-bordered" autoComplete='email' />
                                    {errors?.email?.type === 'required' && <p className='text-red-500 text-sm pt-1'>Enter your email to Login</p>}
                                </div>
                                <div className="form-control relative">
                                    <label className="label">
                                        <span className="">Password</span>
                                    </label>
                                    <input {...register("password", { required: true })} name='password' type={visiable ? "text" : "password"} placeholder="Enter Password" className="input input-bordered" autoComplete='new-password' required />
                                    <a onClick={() => setVisiable(!visiable)} className='btn btn-sm btn-circle absolute right-2 top-12' > {visiable ? <IoEye className='text-lg'></IoEye> : <IoEyeOff className='text-lg'></IoEyeOff>}  </a>
                                    {errors?.password?.type === 'required' && <p className='text-red-500 text-sm pt-1'>Enter your password to Login</p>}
                                </div>
                                <div className="form-control mt-4">
                                    <input className='btn' type="submit" value={"Login"} />
                                </div>
                            </form>
                            <div className='border-t border-1 border-blue-600 border-dotted mt-4'></div>
                            <ContineWithGoogle></ContineWithGoogle>
                            <label className="label">
                                <p>New to here? <Link to={'/register'} className='underline text-[#04B2B2] font-semibold'>Create an Account</Link> </p>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;