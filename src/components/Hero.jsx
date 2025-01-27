import React from 'react';
import slider2 from '../assets/sliders/slider1.jpg'
import slider3 from '../assets/sliders/slider2.jpg'
import slider1 from '../assets/sliders/slider3.jpg'
import google from '../assets/trustedBy/google.svg'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css/bundle';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <div>
            <Swiper
                pagination={{
                    dynamicBullets: true,
                }}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                modules={[Pagination, Autoplay]}
                className="mySwiper"
            >
                <SwiperSlide className='bg-cover bg-right bg-no-repeat' style={{
                    'backgroundImage': `url(${slider1})`,
                }}>
                    <div className='container mx-auto'>
                        <div className='bg-black/50 md:bg-transparent' >
                            <div className='w-11/12 lg:w-1/2 py-40 px-6'>
                                <h2 className='text-white text-3xl md:text-4xl lg:text-5xl font-semibold lg:leading-snug'>Discover Seamless Task Solutions for Every Need</h2>
                                <p className='text-white py-4'>Connect with skilled professionals, post your tasks, and get them done quickly and securely, all in one place!</p>
                                <div className='bg-white p-4 rounded-md  flex flex-col md:flex-row gap-6 my-6'>
                                    <label className="input grow flex items-center gap-2">
                                        <input type="text" className="grow" placeholder="Service Title / Keywords..." />
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 16 16"
                                            fill="currentColor"
                                            className="h-4 w-4 opacity-70">
                                            <path
                                                fillRule="evenodd"
                                                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                                                clipRule="evenodd" />
                                        </svg>
                                    </label>
                                    <Link to={"/services"} className='btn btn-md bg-[#3cc7a6] hover:bg-[#0bb990] text-white border-none rounded-md px-7'>Search</Link>
                                </div>

                                <div className='font-medium mt-10 text-white flex justify-between'>
                                    <div>
                                        <h2 className='text-lg sm:text-3xl font-bold'>920M</h2>
                                        <p className='text-xs'>Total Freelancer</p>
                                    </div>
                                    <div>
                                        <h2 className='text-lg sm:text-3xl font-bold'>759M</h2>
                                        <p className='text-xs'>Positive Review</p>
                                    </div>
                                    <div>
                                        <h2 className='text-lg sm:text-3xl font-bold'>130M</h2>
                                        <p className='text-xs'>Order recieved</p>
                                    </div>
                                    <div>
                                        <h2 className='text-lg sm:text-3xl font-bold'>446M</h2>
                                        <p className='text-xs'>Projects Completed</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='bg-cover bg-right bg-no-repeat' style={{
                    'backgroundImage': `url(${slider2})`,
                }}>
                    <div className='container mx-auto'>
                        <div className='bg-black/50 md:bg-transparent' >
                            <div className='w-11/12 lg:w-1/2 py-40 px-6'>
                                <h2 className='text-white  text-3xl md:text-4xl lg:text-5xl font-semibold lg:leading-snug'>Endless Opportunities, One Task at a Time</h2>
                                <p className='text-white py-4'>Turn your ideas into action—post tasks, find experts, and achieve more with a trusted and efficient platform!</p>
                                <div className='bg-white p-4 rounded-md flex flex-col md:flex-row gap-6 my-6'>
                                    <label className="input grow flex items-center gap-2">
                                        <input type="text" className="grow" placeholder="Service Title / Keywords..." />
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 16 16"
                                            fill="currentColor"
                                            className="h-4 w-4 opacity-70">
                                            <path
                                                fillRule="evenodd"
                                                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                                                clipRule="evenodd" />
                                        </svg>
                                    </label>
                                    <button className='btn btn-md bg-[#3cc7a6] hover:bg-[#0bb990] text-white border-none rounded-md px-7'>Search</button>
                                </div>
                                <div className='font-medium mt-10 text-white flex justify-between'>
                                    <div>
                                        <h2 className='text-lg sm:text-3xl font-bold'>920M</h2>
                                        <p className='text-xs'>Total Freelancer</p>
                                    </div>
                                    <div>
                                        <h2 className='text-lg sm:text-3xl font-bold'>759M</h2>
                                        <p className='text-xs'>Positive Review</p>
                                    </div>
                                    <div>
                                        <h2 className='text-lg sm:text-3xl font-bold'>130M</h2>
                                        <p className='text-xs'>Order recieved</p>
                                    </div>
                                    <div>
                                        <h2 className='text-lg sm:text-3xl font-bold'>446M</h2>
                                        <p className='text-xs'>Projects Completed</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='bg-cover bg-right bg-no-repeat' style={{
                    'backgroundImage': `url(${slider3})`,
                }}>
                    <div className='container mx-auto'>
                        <div className='bg-black/50 md:bg-transparent' >
                            <div className='w-11/12 lg:w-1/2 py-40 px-6'>
                                <h2 className='text-white text-3xl md:text-4xl lg:text-5xl font-semibold  lg:leading-snug'>Connecting Talent and Tasks in One Trusted Space</h2>
                                <p className='text-white py-4'>Find talented individuals to complete your tasks or offer your skills to earn securely and effortlessly!</p>
                                <div className='my-6 flex gap-6 lg:gap-10'>
                                    <button className='btn btn-primary btn-md md:btn-lg bg-[#3cc7a6] border-[#3cc7a6] hover:bg-[#0bb990] hover:border-[#0bb990] text-white'>Find Talent</button>
                                    <button className='btn btn-primary btn-md md:btn-lg bg-transparent border-[#3cc7a6] border-2 hover:bg-[#0bb990] hover:border-[#0bb990] text-white'>Find Work</button>
                                </div>
                                <div className='font-medium mt-10 text-white flex justify-between py-8 lg:py-2'>
                                    <div>
                                        <h2 className='text-lg sm:text-3xl font-bold'>920M</h2>
                                        <p className='text-xs'>Total Freelancer</p>
                                    </div>
                                    <div>
                                        <h2 className='text-lg sm:text-3xl font-bold'>759M</h2>
                                        <p className='text-xs'>Positive Review</p>
                                    </div>
                                    <div>
                                        <h2 className='text-lg sm:text-3xl font-bold'>130M</h2>
                                        <p className='text-xs'>Order recieved</p>
                                    </div>
                                    <div>
                                        <h2 className='text-lg sm:text-3xl font-bold'>446M</h2>
                                        <p className='text-xs'>Projects Completed</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>


            </Swiper>
        </div>
    );
};

export default Hero;