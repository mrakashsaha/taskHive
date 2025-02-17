import React, { useContext } from 'react';
import { BiSolidCoinStack } from 'react-icons/bi';
import { IoMdCheckmark } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';


const PurchaseCoin = () => {
    const navigate = useNavigate();
    const {setPaymentAmount } = useContext(AuthContext);
    const handlePurchaseCoin = (amount) => {
        setPaymentAmount(amount);
        navigate("/dashboard/payment");
    }
    
    return (
        <div>
            <div className='w-11/12 mx-auto'>
                <div className='py-4 px-2'>
                    <h2 className='text-2xl'>Purchase Coin</h2>
                </div>
                <div className='text-center mb-14'>
                    <h4 className='text-xl font-semibold'>Choose Package</h4>
                    <p>Choose a Package to Submit Jobs and Projects</p>
                </div>
                <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4'>
                    {/* Card-1 */}
                    <div className='card-body p-6 bg-base-100 hover:shadow-xl rounded-md border input-bordered'>
                        <h4 className='text-sm text-[#0a65fc]'>BASIC</h4>
                        <span className='flex items-center space-x-2'> <BiSolidCoinStack className='text-xl'></BiSolidCoinStack> <h2 className='text-xl font-semibold'>10 Coins</h2> <sub className=' font-semibold'> / 1 USD</sub> </span>
                        <div className='my-4'>
                            <hr />
                        </div>
                        <div className='space-y-3'>
                            <span className='flex items-center space-x-2'><IoMdCheckmark className='text-xl text-[#3ab446]'></IoMdCheckmark> <h2 className='text-sm'>Instant Active</h2> </span>
                            <span className='flex items-center space-x-2'><IoMdCheckmark className='text-xl text-[#3ab446]'></IoMdCheckmark> <h2 className='text-sm'>Use to post small tasks</h2> </span>
                            <span className='flex items-center space-x-2'><IoMdCheckmark className='text-xl text-[#3ab446]'></IoMdCheckmark> <h2 className='text-sm'>Access basic task features</h2> </span>
                            <span className='flex items-center space-x-2'><IoMdCheckmark className='text-xl text-[#3ab446]'></IoMdCheckmark> <h2 className='text-sm'>Limited Support</h2> </span>
                            <div className='pt-4'>
                                <button onClick={() => handlePurchaseCoin(1)} className='btn btn-outline hover:bg-[#0a65fc] hover:border-[#0a65fc] w-full border-[#0a65fc]'>Buy Now</button>
                            </div>
                        </div>
                    </div>
                    {/* Card-2 */}
                    <div className='card-body p-6 bg-base-100 hover:shadow-xl rounded-md border border-[#ffc402]'>
                        <h4 className='text-sm text-[#0a65fc]'>EXTENDED</h4>
                        <span className='flex items-center space-x-2'> <BiSolidCoinStack className='text-xl'></BiSolidCoinStack> <h2 className='text-xl font-semibold'>150 Coins</h2> <sub className=' font-semibold'> / 10 USD</sub> </span>
                        <div className='my-4'>
                            <hr />
                        </div>
                        <div className='space-y-3'>
                            <span className='flex items-center space-x-2'><IoMdCheckmark className='text-xl text-[#3ab446]'></IoMdCheckmark> <h2 className='text-sm'>Instant Active</h2> </span>
                            <span className='flex items-center space-x-2'><IoMdCheckmark className='text-xl text-[#3ab446]'></IoMdCheckmark> <h2 className='text-sm'>Post up to 15 tasks</h2> </span>
                            <span className='flex items-center space-x-2'><IoMdCheckmark className='text-xl text-[#3ab446]'></IoMdCheckmark> <h2 className='text-sm'>Featured Task Unlocked</h2> </span>
                            <span className='flex items-center space-x-2'><IoMdCheckmark className='text-xl text-[#3ab446]'></IoMdCheckmark> <h2 className='text-sm'>Limited Support</h2> </span>
                            <div className='pt-4'>
                                <button onClick={() => handlePurchaseCoin(10)} className='btn btn-outline hover:bg-[#0a65fc] hover:border-[#0a65fc] w-full border-[#0a65fc]'>Buy Now</button>
                            </div>
                        </div>
                    </div>
                    {/* Card-3*/}
                    <div className='relative'>
                        <div className='hidden xl:block absolute w-auto card-body bg-[#ffc402] px-4 py-3 right-6 -top-8 rounded-md text-base-100 font-semibold'>
                            Most Popular
                        </div>
                        <div className='card-body p-6 bg-base-100 hover:shadow-xl rounded-md border border-[#3ab446]'>
                            <h4 className='text-sm text-[#0a65fc]'>ADVANCED</h4>
                            <span className='flex items-center space-x-2'> <BiSolidCoinStack className='text-xl'></BiSolidCoinStack> <h2 className='text-xl font-semibold'>500 Coins</h2> <sub className=' font-semibold'> / 20 USD</sub> </span>
                            <div className='my-4'>
                                <hr />
                            </div>
                            <div className='space-y-3'>
                                <span className='flex items-center space-x-2'><IoMdCheckmark className='text-xl text-[#3ab446]'></IoMdCheckmark> <h2 className='text-sm'>Instant Active</h2> </span>
                                <span className='flex items-center space-x-2'><IoMdCheckmark className='text-xl text-[#3ab446]'></IoMdCheckmark> <h2 className='text-sm'>Post up to 50 tasks</h2> </span>
                                <span className='flex items-center space-x-2'><IoMdCheckmark className='text-xl text-[#3ab446]'></IoMdCheckmark> <h2 className='text-sm'>Send Upto 20 Task Invites</h2> </span>
                                <span className='flex items-center space-x-2'><IoMdCheckmark className='text-xl text-[#3ab446]'></IoMdCheckmark> <h2 className='text-sm'>Priority Support</h2> </span>
                                <div className='pt-4'>
                                    <button onClick={() => handlePurchaseCoin(20)} className='btn btn-primary bg-[#0a65fc] hover:border-[#0a65fc] w-full border-[#0a65fc]'>Buy Now</button>

                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Card-4 */}
                    <div className='card-body p-6 bg-base-100 hover:shadow-xl rounded-md border border-[#0a65fc]'>
                        <h4 className='text-sm text-[#0a65fc]'>PREMIUM</h4>
                        <span className='flex items-center space-x-2'> <BiSolidCoinStack className='text-xl'></BiSolidCoinStack> <h2 className='text-xl font-semibold'>1000 Coins</h2> <sub className=' font-semibold'> / 35 USD</sub> </span>
                        <div className='my-4'>
                            <hr />
                        </div>
                        <div className='space-y-3'>
                            <span className='flex items-center space-x-2'><IoMdCheckmark className='text-xl text-[#3ab446]'></IoMdCheckmark> <h2 className='text-sm'>Instant Active</h2> </span>
                            <span className='flex items-center space-x-2'><IoMdCheckmark className='text-xl text-[#3ab446]'></IoMdCheckmark> <h2 className='text-sm'>Post up to 500 tasks</h2> </span>
                            <span className='flex items-center space-x-2'><IoMdCheckmark className='text-xl text-[#3ab446]'></IoMdCheckmark> <h2 className='text-sm'>Send Unlimited Task Invites</h2> </span>
                            <span className='flex items-center space-x-2'><IoMdCheckmark className='text-xl text-[#3ab446]'></IoMdCheckmark> <h2 className='text-sm'>Premium Support</h2> </span>
                            <div className='pt-4'>
                                <button onClick={() => handlePurchaseCoin(35)} className='btn btn-outline hover:bg-[#0a65fc] hover:border-[#0a65fc] w-full border-[#0a65fc]'>Buy Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PurchaseCoin;