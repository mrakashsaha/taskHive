import React from 'react';
import becomeBuyer from "../assets/images/becomeBuyer.webp"
import { Link } from 'react-router-dom';
import { IoSearch } from 'react-icons/io5';
import { GoCreditCard, GoFile, GoSearch } from 'react-icons/go';
import { HiOutlineDocumentText } from 'react-icons/hi';
import { BiSolidCoinStack } from 'react-icons/bi';
import { IoMdCheckmark } from 'react-icons/io';
import Footer from '../Footer/Footer';
import Testimonials from '../components/Testimonials';
import TestimonialByBuyer from '../components/TestiMonialByBuyer';


const BecomeBuyer = () => {
    const handlePurchaseCoin = ()=> {

    }
    return (
        <div>
            {/* Banner Image for about Page */}
            <div className="bg-cover"
                style={{ backgroundImage: `url(${becomeBuyer})` }}>
                <div className="hero-overlay bg-opacity-10"></div>
                <div className="text-base-100 dark:text-base-100/90">
                    <div className="container mx-auto p-4 py-32 space-y-4">
                        <p className="">FOR EMPLOYER</p>
                        <h1 className="text-3xl md:text-5xl font-medium max-w-80 md:max-w-md md:leading-snug">Post Jobs, Projects and Hire Freelance</h1>
                        <p className='pb-2'>Find skilled freelancers and get work done easily.</p>
                        <Link to={"/register"} className="btn md:btn-lg bg-[#0A65FC] hover:bg-[#0244b0] text-base-100 border-none">Become a Buyer</Link>
                    </div>
                </div>
            </div>

            {/* How It Works */}
            <div className='mx-auto container my-10'>
                <div className='text-center space-y-3 max-w-96 md:max-w-xl mx-auto'>
                    <h2 className='text-3xl font-medium'>How it works</h2>
                    <p className='text-lg'>Find and hire top freelancers in just a few steps.</p>
                </div>
                <div className='flex flex-col items-center md:flex-row gap-4 justify-around my-8'>
                    <div className='max-w-96 p-4 text-center flex flex-col items-center justify-center space-y-2'>
                        <div className='w-7 h-7 relative rounded-full bg-[#0A65FC]/10'>
                            <GoSearch className='text-4xl absolute bottom-1 right-1'></GoSearch>
                        </div>
                        <h4 className='text-xl font-medium'>1. Create Your Free Account</h4>
                        <p>Sign up and start exploring talented professionals.</p>
                    </div>
                    <div className='max-w-96 p-4 text-center flex flex-col items-center justify-center space-y-2'>
                        <div className='w-7 h-7 relative rounded-full bg-[#0A65FC]/10'>
                            <GoCreditCard className='text-4xl absolute bottom-1 right-1'></GoCreditCard>
                        </div>
                        <h4 className='text-xl font-medium'>2. Build Your Job or Project Post</h4>
                        <p>Describe your requirements to attract the right talent.</p>
                    </div>
                    <div className='max-w-96 p-4 text-center flex flex-col items-center justify-center space-y-2'>
                        <div className='w-7 h-7 relative rounded-full bg-[#0A65FC]/10'>
                            <GoFile className='text-4xl absolute bottom-1 right-1'></GoFile>
                        </div>
                        <h4 className='text-xl font-medium'>3. Post Your Job or Project</h4>
                        <p>Publish your listing and connect with skilled freelancers.</p>
                    </div>
                </div>
            </div>


            {/* Price Plan */}
            <div className='bg-[#0A65FC]/10'>
                <div className='py-20 container mx-auto'>
                    <div className='text-center space-y-3 max-w-96 md:max-w-xl mx-auto'>
                        <h2 className='text-3xl font-medium'>Pricing and Feature</h2>
                        <p className='text-lg'>Our simple, per-job pricing scales with you.</p>
                    </div>
                    <div className='mt-14'>
                        <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-16 p-4'>
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
                                        <Link to={"/login"} className='btn btn-outline hover:bg-[#0a65fc] hover:border-[#0a65fc] w-full border-[#0a65fc]'>Buy Now</Link>
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
                                        <Link to={"/login"}  className='btn btn-outline hover:bg-[#0a65fc] hover:border-[#0a65fc] w-full border-[#0a65fc]'>Buy Now</Link>
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
                                            <Link to={"/login"} className='btn btn-primary bg-[#0a65fc] hover:border-[#0a65fc] w-full border-[#0a65fc]'>Buy Now</Link>

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
                                        <Link to={"/login"} className='btn btn-outline hover:bg-[#0a65fc] hover:border-[#0a65fc] w-full border-[#0a65fc]'>Buy Now</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <TestimonialByBuyer></TestimonialByBuyer>
            <Footer></Footer>
        </div>
    );
};

export default BecomeBuyer;