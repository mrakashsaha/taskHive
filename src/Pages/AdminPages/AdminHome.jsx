import React from 'react';
import useUserInfo from '../../hook/useUserInfo';
import { BiCoinStack, BiSolidCoinStack } from 'react-icons/bi';
import { SiFreelancer } from 'react-icons/si';
import { MdOutlineManageAccounts, MdOutlinePayment, MdOutlinePayments } from 'react-icons/md';
import { IoServerOutline } from 'react-icons/io5';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../hook/useAxiosSecure';
import moment from 'moment';
import Pending from '../../components/Pending';
import Swal from 'sweetalert2';

const AdminHome = () => {
    const { userInfo} = useUserInfo();
    const axiosSecure = useAxiosSecure();
    const { data: adminStats = {}, refetch:adminStatsRefetch } = useQuery({
        queryKey: ["admin-stats"],
        queryFn: async () => {
            const res = await axiosSecure.get("/adminStats")
            return res.data;

        }
    })

    const { data: pendingWithdraw = [], refetch } = useQuery({
        queryKey: ["withdraw-by-admin"],
        queryFn: async () => {
            const res = await axiosSecure.get("/pendingWithdraw")
            return res.data;

        }
    })



        const handleWithdraw = (id, coinAmount, workerEmail) => {
    
            Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, Send Amount!"
            }).then((result) => {
                if (result.isConfirmed) {
                    axiosSecure.patch(`/approveWithdraw`, {id, coinAmount, workerEmail})
                        .then(res => {
                            if (res?.data?.modifiedCount) {
                                Swal.fire({
                                    title: "Sent!",
                                    text: "Amount Send to Worker Sucessfully.",
                                    icon: "success"
                                });
    
                                refetch();
                                adminStatsRefetch();
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
        <div>
            <div className='w-11/12 mx-auto'>
                <div className='py-4 px-2'>
                    <p>Welcome Back! </p>
                    <h2 className='text-2xl'>{userInfo?.displayName}</h2>
                </div>
                <div className='grid grid-cols-2 xl:grid-cols-4 gap-2 mb-6'>
                    <div className='bg-base-100 p-6 border rounded-md'>
                        <div className='flex justify-between'>
                            <div className='space-y-4'>
                                <h6 className='uppercase text-xs'>Total Worker</h6>
                                <div className='flex items-center gap-x-2'>
                                    <h2 className='text-3xl font-medium'> {adminStats?.workerNumber}</h2>
                                </div>
                            </div>
                            <div>
                                <div className='w-8 h-8 bg-[#3ab446] rounded-md flex justify-center items-center'>
                                    <SiFreelancer className='text-[white] text-xl'></SiFreelancer>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='bg-base-100 p-6 border rounded-md'>
                        <div className='flex justify-between'>
                            <div className='space-y-4'>
                                <h6 className='uppercase text-xs'>Total Buyer</h6>
                                <div className='flex items-center gap-x-2'>
                                    <h2 className='text-3xl font-medium'> {adminStats?.buyerNumber}</h2>
                                </div>
                            </div>
                            <div>
                                <div className='w-8 h-8 bg-[#7744a7] rounded-md flex justify-center items-center'>
                                    <MdOutlineManageAccounts className='text-[white] text-xl'></MdOutlineManageAccounts>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='bg-base-100 p-6 border rounded-md'>
                        <div className='flex justify-between'>
                            <div className='space-y-4'>
                                <h6 className='uppercase text-xs'>Total Avaliable Coin</h6>
                                <div className='flex items-center gap-x-2'>
                                    <h2 className='text-3xl font-medium'> {adminStats?.totalCoinBalance}</h2>
                                </div>
                            </div>
                            <div>
                                <div className='w-8 h-8 bg-[#ff585c] rounded-md flex justify-center items-center'>
                                    <IoServerOutline className='text-[white] text-xl'></IoServerOutline>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='bg-base-100 p-6 border rounded-md'>
                        <div className='flex justify-between'>
                            <div className='space-y-4'>
                                <h6 className='uppercase text-xs'>Total Payments</h6>
                                <div className='flex items-center gap-x-2'>
                                    <h2 className='text-3xl font-medium'>${adminStats?.totalPayment}</h2>
                                </div>
                            </div>
                            <div>
                                <div className='w-8 h-8 bg-[#ffc402] rounded-md flex justify-center items-center'>
                                    <MdOutlinePayments className='text-[white] text-xl'></MdOutlinePayments>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='py-4 px-2'>
                    <h2 className='text-2xl'>Withdraw Request</h2>
                </div>
                <div className="card-body bg-base-100 rounded-md">
                    <div>
                        <div className="overflow-x-auto">
                            <table className="table">
                                {/* head */}
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>User Profile</th>
                                        <th>Date</th>
                                        <th>Payment Method</th>
                                        <th>Account No.</th>
                                        <th className='text-center'>Status</th>
                                        <th className='text-right'>Coin Amount</th>
                                        <th className='text-right'>USD</th>
                                        <th className='text-center'>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        pendingWithdraw.map((withdraw, idx) => <tr key={withdraw._id}>
                                            <td>{idx + 1}</td>
                                            <td>
                                                <div className="flex items-center gap-3">
                                                    <div className="avatar">
                                                        <div className="mask mask-squircle h-10 w-10">
                                                            <img
                                                                src={withdraw?.workerPhoto}
                                                                alt={withdraw?.workerName} />
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="font-medium">{withdraw?.workerName}</div>
                                                        <div className='text-xs opacity-50 gap-x-1'><span className='font-semibold'>{withdraw?.workerEmail}</span></div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                {
                                                    moment(withdraw?.currentDate).local().format("L")
                                                }
                                            </td>
                                            <td>
                                                {withdraw?.paymentMethod}
                                            </td>
                                            <td>
                                                {withdraw?.accountNo}
                                            </td>
                                            <td>
                                                {withdraw?.status==="pending" && <Pending></Pending>}
                                            </td>
                                            <td className='text-right'> <span className='flex items-center justify-end gap-x-1'>{withdraw?.coinAmount} <BiSolidCoinStack className='text-right'></BiSolidCoinStack></span> </td>
                                            <td>
                                                <p className='text-right'>{withdraw?.usdAmount}$</p>
                                            </td>
                                            <td>
                                                <button onClick={() => handleWithdraw(withdraw?._id, withdraw?.coinAmount, withdraw?.workerEmail)} className="btn bg-[#0a65fc] btn-primary border-[#0a65fc] btn-sm rounded-[4px]">Approve</button>
                                            </td>

                                        </tr>)
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminHome;