import React, { useState } from 'react';
import useUserInfo from '../../hook/useUserInfo';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../hook/useAxiosSecure';
import moment from 'moment';
import { BiSolidCoinStack } from 'react-icons/bi';

const PaymentHistory = () => {
    const { userInfo, isPending: userInfoPending } = useUserInfo();
    const axiosSecure = useAxiosSecure();
    const { data: paymentHistoryData = [] } = useQuery({
        queryKey: ["payment-history", userInfo?.email],
        enabled: !userInfoPending,
        queryFn: async () => {
            const res = await axiosSecure.get(`/payment?email=${userInfo?.email}`);
            return res.data;
        }
    })

    console.log(paymentHistoryData)

    return (
        <div>
            <div className='max-w-4xl mx-auto min-h-screen'>
                <div className='py-4 px-2'>
                    <h2 className='text-2xl'>Payment History</h2>
                </div>
                <div className='card-body bg-base-100 rounded-md'>
                    <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Date & Time</th>
                                    <th>Transaction Id</th>
                                    <th className='text-right'>Amount</th>
                                    <th className='text-right'>Coin</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    paymentHistoryData.map((payment, idx) => <tr key={payment._id}>
                                        <td>{idx+1}</td>
                                        <td>{moment(payment?.date).local().format("LLL")}</td>
                                        <td>{payment?.transactionId}</td>
                                        <td className='text-right'>{payment?.amount}$</td>
                                        <td className='text-right'> <span className='flex items-center justify-end gap-x-1'>+{payment?.coin} <BiSolidCoinStack className='text-right'></BiSolidCoinStack></span> </td>
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

export default PaymentHistory;