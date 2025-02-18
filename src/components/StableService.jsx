import React from 'react';
import { FaCircleCheck } from 'react-icons/fa6';
import xpModel from '../assets/xp/model.png'
import xpBadge1 from '../assets/xp/xpBadge1.png'
import xpBadge2 from '../assets/xp/xpBadge2.png'
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';


const StableService = () => {
    return (
        <div className=''>
            <div className='container mx-auto py-20'>
                <div className='flex flex-col md:flex-row items-center justify-between'>
                    <div className='relative overflow-hidden'>
                        <div>
                            <img className='w-full p-10' src={xpModel} alt="model" />
                        </div>
                        <motion.div className='absolute -right-4 md:-right-2 top-24'
                            animate={{ y: [40, 0, 40] }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                repeatType: "loop",
                            }}

                        >


                            <img className='p-4 w-3/4 md:w-full' src={xpBadge1} alt="badge1" />

                        </motion.div>
                        <motion.div className='absolute left-20 bottom-0'
                            animate={{ x: [40, 0, 40] }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                repeatType: "loop",
                            }}
                        >
                            <img className='w-3/4 md:w-full p-4' src={xpBadge2} alt="badge2" />

                        </motion.div>
                    </div>
                    <div className='text-[#151515] p-4 md:w-1/2'>
                        <div className='my-6'>
                            <h2 className='text-3xl md:text-4xl font-semibold my-4'>Experience a quicker, simpler, and more reliable way to get tasks done. </h2>
                            <p className='text-lg'>Easily browse services with advanced filters.</p>
                        </div>
                        <p className='text-lg flex items-center gap-4 my-4'> <FaCircleCheck className='text-xl text-[#0bb990]'></FaCircleCheck> Manage tasks effortlessly with intuitive, user-friendly tools.</p>
                        <p className='text-lg flex items-center gap-4 my-4'> <FaCircleCheck className='text-xl text-[#0bb990]'></FaCircleCheck> Get personalized recommendations based on your preferences.</p>
                        <p className='text-lg flex items-center gap-4 my-4'> <FaCircleCheck className='text-xl text-[#0bb990]'></FaCircleCheck> Share and read trusted reviews to make confident decisions.</p>
                        <p className='text-lg flex items-center gap-4 my-4'> <FaCircleCheck className='text-xl text-[#0bb990]'></FaCircleCheck> Manage tasks effortlessly with intuitive tools designed for microtasking.</p>
                        <Link to={"/register"}
                            className='btn text-right lg:btn-lg text-base bg-[#3cc7a6] hover:bg-[#0bb990] text-white mt-4'>Register Now</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StableService;