import React, { useState } from 'react';
import { BiCoinStack } from 'react-icons/bi';
import { BsCoin } from 'react-icons/bs';
import usdIcon from "../../assets/customIcons/icon-wallet-01.svg"
import useUserInfo from '../../hook/useUserInfo';
import { useForm } from 'react-hook-form';
import moment from 'moment';
import useAxiosSecure from '../../hook/useAxiosSecure';
import Swal from 'sweetalert2';

const Withdrawals = () => {
    const { userInfo } = useUserInfo();
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const axiosSecure = useAxiosSecure();
    const watchCoinAmount = parseInt(watch("coinAmount"));
    const onSubmit = (data) => {
        console.log(data)
        const withdrawDoc = {
            coinAmount: parseInt(data?.coinAmount),
            paymentMethod: data?.paymentMethod,
            accountNo: data?.accountNo,
            usdAmount: parseInt(data?.coinAmount) / 20,
            currentDate: moment().toISOString(),
            status: "pending",
            workerEmail: userInfo?.email,
            workerName: userInfo?.displayName,
            workerPhoto: userInfo?.photoURL,
        }

        axiosSecure.post("/withdraw", withdrawDoc)
            .then(res => {
                if (res?.data?.insertedId) {
                    Swal.fire({
                        title: "Success!",
                        text: "Your withdraw request has been accepted.",
                        icon: "success"
                    });
                }
            })

        console.log(withdrawDoc)
    }

    return (
        <div>
            <div className='max-w-3xl mx-auto min-h-screen'>
                <div className='py-4 px-2'>
                    <h2 className='text-2xl'>Withdraws</h2>
                </div>
                <div className='grid grid-cols-2 gap-10'>
                    <div className='bg-base-100 p-6 border rounded-md'>
                        <div className='flex justify-between'>
                            <div className='space-y-4'>
                                <h6 className='uppercase text-xs'>Available Coin-Value</h6>
                                <div className='flex items-center gap-x-2'>
                                    <BsCoin className='text-3xl'></BsCoin>
                                    <h2 className='text-3xl font-medium'> {userInfo?.coin}</h2>
                                </div>
                            </div>
                            <div>
                                <BiCoinStack className='text-3xl'></BiCoinStack>
                            </div>
                        </div>
                    </div>
                    <div className='bg-base-100 p-6 border rounded-md'>
                        <div className='flex justify-between'>
                            <div className='space-y-4'>
                                <h6 className='uppercase text-xs'>Available Balance</h6>
                                <h2 className='text-3xl font-medium'>$ {userInfo?.coin / 20}</h2>
                            </div>
                            <div>
                                <img src={usdIcon} alt="usdDollar" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='card-body bg-base-100 rounded-md my-8'>
                    <h2 className='text-2xl text-center'>Get Paid Now</h2>
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Coins to Withdraw</span>
                            </label>
                            <input {...register("coinAmount")} type="number" placeholder="How many coin you want to withdraw? Ex. 200" className="input input-bordered" required />

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Withdrawal Amount USD ($)</span>
                            </label>
                            <input disabled value={isNaN(watchCoinAmount / 20) ? 0 : watchCoinAmount / 20} type="text" placeholder="Amount in USD" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Payment Method</span>
                            </label>
                            <select className="select select-bordered" {...register("paymentMethod")}>
                                <option value="bankTransfer">Bank Transfer</option>
                                <option value="bKash">bKash</option>
                                <option value="nagad">Nagad</option>
                                <option value="rocket">Rocket</option>
                                <option value="upay">Upay</option>
                            </select>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Account No.</span>
                            </label>
                            <input {...register("accountNo")} type="number" placeholder="Enter Account Number" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            {
                                watchCoinAmount < 200 ? <p className='text-[#ff0000] text-center'>Minimum Withdraw Amount is 200 Coin!</p> : watchCoinAmount > userInfo?.coin ? <p className='text-[#ff0000] text-center'>Insufficent Balance!</p> : <input disabled={isNaN(watchCoinAmount)} className='btn btn-primary' type="submit" value="Withdraw" />
                            }

                        </div>


                    </form>

                </div>
            </div>
        </div>
    );
};

export default Withdrawals;