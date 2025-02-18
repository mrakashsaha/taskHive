import React from 'react';
import becomeBuyer from "../assets/images/becomeBuyer.webp"
import { Link } from 'react-router-dom';
import { IoSearch } from 'react-icons/io5';
import { GoCreditCard, GoFile, GoSearch } from 'react-icons/go';
import { HiOutlineDocumentText } from 'react-icons/hi';


const BecomeBuyer = () => {
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
                <div className='text-center space-y-3'>
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
                            <GoCreditCard  className='text-4xl absolute bottom-1 right-1'></GoCreditCard>
                        </div>
                        <h4 className='text-xl font-medium'>2. Build Your Job or Project Post</h4>
                        <p>Describe your requirements to attract the right talent.</p>
                    </div>
                    <div className='max-w-96 p-4 text-center flex flex-col items-center justify-center space-y-2'>
                        <div className='w-7 h-7 relative rounded-full bg-[#0A65FC]/10'>
                            <GoFile  className='text-4xl absolute bottom-1 right-1'></GoFile>
                        </div>
                        <h4 className='text-xl font-medium'>3. Post Your Job or Project</h4>
                        <p>Publish your listing and connect with skilled freelancers.</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default BecomeBuyer;