import React from 'react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import people1 from "../assets/testmonial/buyerMan1.png"
import people2 from "../assets/testmonial/buyerWoman2.png"
import people3 from "../assets/testmonial/buyerMan2.png"
import people4 from "../assets/testmonial/buyerWoman3.png"

import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { SiTrustpilot } from 'react-icons/si';
import { BiSolidQuoteRight } from 'react-icons/bi';

const TestimonialByBuyer = () => {
    return (
        <div className='container mx-auto my-20 p-2 sm:p-0'>
            <div className='my-10'>
                <h2 className='text-3xl font-medium text-center'>Employer Stories</h2>
                <p className='text-center text-lg max-w-lg mx-auto'>Hear from businesses who found the perfect freelancers, completed successful projects effortlessly.</p>
            </div>
            <Swiper
                breakpoints={{
                    640: {
                      slidesPerView: 1,
                    },
                    1024: {
                      slidesPerView: 2,
                    },
                  }}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination, Autoplay]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className='flex flex-col sm:flex-row gap-4 bg-base-100 border rounded-md items-center '>
                        <div className='sm:w-[230px] flex-shrink-0'>
                            <img className='w-full h-full rounded' src={people1} alt="People1" />
                        </div>
                        <div className='p-4 space-y-4'>
                            <div><BiSolidQuoteRight className='text-4xl text-[#0A65FC]'></BiSolidQuoteRight ></div>
                            <div><h4 className='text-lg'>Finding the right freelancer was effortless! The process was smooth, and the quality of work exceeded my expectations. Highly recommended!</h4></div>
                            <div>
                                <div className='space-x-2'>

                                    <p className='text-lg text-base-100 btn bg-[#0A65FC] btn-square btn-xs rounded-none btn-ghost hover:bg-[#0A65FC]'><SiTrustpilot></SiTrustpilot></p>
                                    <p className='text-lg text-base-100 btn bg-[#0A65FC] btn-square btn-xs rounded-none btn-ghost hover:bg-[#0A65FC]'><SiTrustpilot></SiTrustpilot></p>
                                    <p className='text-lg text-base-100 btn bg-[#0A65FC] btn-square btn-xs rounded-none btn-ghost hover:bg-[#0A65FC]'><SiTrustpilot></SiTrustpilot></p>
                                    <p className='text-lg text-base-100 btn bg-[#0A65FC] btn-square btn-xs rounded-none btn-ghost hover:bg-[#0A65FC]'><SiTrustpilot></SiTrustpilot></p>
                                </div>
                                <h2 className='text-xl font-medium'>Alex Johnson</h2>
                                <p>CEO at TechSolutions</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='flex flex-col sm:flex-row gap-4 bg-base-100 border rounded-md items-center '>
                        <div className='sm:w-[230px] h-full flex-shrink-0'>
                            <img className='w-full h-full rounded' src={people2} alt="People1" />
                        </div>
                        <div className='p-4 space-y-4'>
                            <div><BiSolidQuoteRight className='text-4xl text-[#0A65FC]'></BiSolidQuoteRight ></div>
                            <div><h4 className='text-lg'>I posted a project and got multiple skilled freelancers applying within hours. The platform made hiring so easy and efficient!</h4></div>
                            <div>
                                <div className='space-x-2'>

                                    <p className='text-lg text-base-100 btn bg-[#0A65FC] btn-square btn-xs rounded-none btn-ghost hover:bg-[#0A65FC]'><SiTrustpilot></SiTrustpilot></p>
                                    <p className='text-lg text-base-100 btn bg-[#0A65FC] btn-square btn-xs rounded-none btn-ghost hover:bg-[#0A65FC]'><SiTrustpilot></SiTrustpilot></p>
                                    <p className='text-lg text-base-100 btn bg-[#0A65FC] btn-square btn-xs rounded-none btn-ghost hover:bg-[#0A65FC]'><SiTrustpilot></SiTrustpilot></p>
                                    <p className='text-lg text-base-100 btn bg-[#0A65FC] btn-square btn-xs rounded-none btn-ghost hover:bg-[#0A65FC]'><SiTrustpilot></SiTrustpilot></p>
                                </div>
                                <h2 className='text-xl font-medium'>Sarah Thompson</h2>
                                <p>Project Manager at CreativeWorks</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='flex flex-col sm:flex-row gap-4 bg-base-100 border rounded-md items-center '>
                        <div className='sm:w-[230px] h-full flex-shrink-0'>
                            <img className='w-full h-full rounded' src={people3} alt="People1" />
                        </div>
                        <div className='p-4 space-y-4'>
                            <div><BiSolidQuoteRight className='text-4xl text-[#0A65FC]'></BiSolidQuoteRight ></div>
                            <div><h4 className='text-lg'>Managing projects and hiring freelancers has never been easier. This platform saved us time and helped us scale quickly!</h4></div>
                            <div>
                                <div className='space-x-2'>

                                    <p className='text-lg text-base-100 btn bg-[#0A65FC] btn-square btn-xs rounded-none btn-ghost hover:bg-[#0A65FC]'><SiTrustpilot></SiTrustpilot></p>
                                    <p className='text-lg text-base-100 btn bg-[#0A65FC] btn-square btn-xs rounded-none btn-ghost hover:bg-[#0A65FC]'><SiTrustpilot></SiTrustpilot></p>
                                    <p className='text-lg text-base-100 btn bg-[#0A65FC] btn-square btn-xs rounded-none btn-ghost hover:bg-[#0A65FC]'><SiTrustpilot></SiTrustpilot></p>
                                    <p className='text-lg text-base-100 btn bg-[#0A65FC] btn-square btn-xs rounded-none btn-ghost hover:bg-[#0A65FC]'><SiTrustpilot></SiTrustpilot></p>
                                </div>
                                <h2 className='text-xl font-medium'>David Wilson</h2>
                                <p>Operations Head at BuildRight</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='flex flex-col sm:flex-row gap-4 bg-base-100 border rounded-md items-center '>
                        <div className='sm:w-[230px] h-full flex-shrink-0'>
                            <img className='w-full h-full rounded' src={people4} alt="People1" />
                        </div>
                        <div className='p-4 space-y-4'>
                            <div><BiSolidQuoteRight className='text-4xl text-[#0A65FC]'></BiSolidQuoteRight ></div>
                            <div><h4 className='text-lg'>The freelancers here are top-notch! I hired a designer, and the results were beyond what I imagined. Great experience!</h4></div>
                            <div>
                                <div className='space-x-2'>

                                    <p className='text-lg text-base-100 btn bg-[#0A65FC] btn-square btn-xs rounded-none btn-ghost hover:bg-[#0A65FC]'><SiTrustpilot></SiTrustpilot></p>
                                    <p className='text-lg text-base-100 btn bg-[#0A65FC] btn-square btn-xs rounded-none btn-ghost hover:bg-[#0A65FC]'><SiTrustpilot></SiTrustpilot></p>
                                    <p className='text-lg text-base-100 btn bg-[#0A65FC] btn-square btn-xs rounded-none btn-ghost hover:bg-[#0A65FC]'><SiTrustpilot></SiTrustpilot></p>
                                    <p className='text-lg text-base-100 btn bg-[#0A65FC] btn-square btn-xs rounded-none btn-ghost hover:bg-[#0A65FC]'><SiTrustpilot></SiTrustpilot></p>
                                </div>
                                <h2 className='text-xl font-medium'>Emily Carter</h2>
                                <p>Marketing Director at BrandBoost</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default TestimonialByBuyer;

