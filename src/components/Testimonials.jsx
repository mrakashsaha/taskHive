import React from 'react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import people1 from "../assets/testmonial/people-tes-1.jpg"
import people2 from "../assets/testmonial/people-tes-2.jpg"
import people3 from "../assets/testmonial/people-tes-3.jpg"
import people4 from "../assets/testmonial/people-tes-4.jpg"

import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { SiTrustpilot } from 'react-icons/si';
import { BiSolidQuoteRight } from 'react-icons/bi';

const Testimonials = () => {
    return (
        <div className='container mx-auto my-20 p-2'>
            <div className='my-10'>
                <h2 className='text-3xl font-medium text-center'>What Users Say About Us</h2>
                <p className='text-center w-11/12 sm:w-1/2 mx-auto'>Hear from our community of buyers and workers about their seamless experiences and success stories on our platform.</p>
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
                    <div className='flex flex-col sm:flex-row gap-4 bg-base-100 border input-bordered rounded-md items-center '>
                        <div className='w-full h-[400px] sm:w-[230px] sm:h-full flex-shrink-0'>
                            <img className='w-full h-full object-top object-cover rounded' src={people1} alt="People1" />
                        </div>
                        <div className='p-4 space-y-4'>
                            <div><BiSolidQuoteRight className='text-4xl text-[#0A65FC]'></BiSolidQuoteRight ></div>
                            <div><h4 className='text-lg'>This platform has been a game-changer for me! I found reliable freelancers who delivered top-notch work on time. Highly recommend it to anyone!</h4></div>
                            <div>
                                <div className='space-x-2'>

                                    <p className='text-lg text-base-100 btn bg-[#0A65FC] btn-square btn-xs rounded-none btn-ghost hover:bg-[#0A65FC]'><SiTrustpilot></SiTrustpilot></p>
                                    <p className='text-lg text-base-100 btn bg-[#0A65FC] btn-square btn-xs rounded-none btn-ghost hover:bg-[#0A65FC]'><SiTrustpilot></SiTrustpilot></p>
                                    <p className='text-lg text-base-100 btn bg-[#0A65FC] btn-square btn-xs rounded-none btn-ghost hover:bg-[#0A65FC]'><SiTrustpilot></SiTrustpilot></p>
                                    <p className='text-lg text-base-100 btn bg-[#0A65FC] btn-square btn-xs rounded-none btn-ghost hover:bg-[#0A65FC]'><SiTrustpilot></SiTrustpilot></p>
                                </div>
                                <h2 className='text-xl font-medium'>James Mitchell</h2>
                                <p> Marketing Manager</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='flex flex-col sm:flex-row gap-4 bg-base-100 border input-bordered rounded-md items-center '>
                        <div className='w-full h-[400px] sm:w-[230px] sm:h-full flex-shrink-0'>
                            <img className='w-full h-full object-top object-cover rounded' src={people2} alt="People1" />
                        </div>
                        <div className='p-4 space-y-4'>
                            <div><BiSolidQuoteRight className='text-4xl text-[#0A65FC]'></BiSolidQuoteRight ></div>
                            <div><h4 className='text-lg'>Posting tasks is incredibly easy, and the results exceeded my expectations. The customer support is also very responsive!</h4></div>
                            <div>
                                <div className='space-x-2'>

                                    <p className='text-lg text-base-100 btn bg-[#0A65FC] btn-square btn-xs rounded-none btn-ghost hover:bg-[#0A65FC]'><SiTrustpilot></SiTrustpilot></p>
                                    <p className='text-lg text-base-100 btn bg-[#0A65FC] btn-square btn-xs rounded-none btn-ghost hover:bg-[#0A65FC]'><SiTrustpilot></SiTrustpilot></p>
                                    <p className='text-lg text-base-100 btn bg-[#0A65FC] btn-square btn-xs rounded-none btn-ghost hover:bg-[#0A65FC]'><SiTrustpilot></SiTrustpilot></p>
                                    <p className='text-lg text-base-100 btn bg-[#0A65FC] btn-square btn-xs rounded-none btn-ghost hover:bg-[#0A65FC]'><SiTrustpilot></SiTrustpilot></p>
                                </div>
                                <h2 className='text-xl font-medium'>Sophia Ramirez</h2>
                                <p>Small Business Owner</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='flex flex-col sm:flex-row gap-4 bg-base-100 border input-bordered rounded-md items-center '>
                        <div className='w-full h-[400px] sm:w-[230px] sm:h-full flex-shrink-0'>
                            <img className='w-full h-full object-cover object-center rounded' src={people3} alt="People1" />
                        </div>
                        <div className='p-4 space-y-4'>
                            <div><BiSolidQuoteRight className='text-4xl text-[#0A65FC]'></BiSolidQuoteRight ></div>
                            <div><h4 className='text-lg'>This site has helped me turn my free time into productive work. The payment process is smooth, and the opportunities are endless!</h4></div>
                            <div>
                                <div className='space-x-2'>

                                    <p className='text-lg text-base-100 btn bg-[#0A65FC] btn-square btn-xs rounded-none btn-ghost hover:bg-[#0A65FC]'><SiTrustpilot></SiTrustpilot></p>
                                    <p className='text-lg text-base-100 btn bg-[#0A65FC] btn-square btn-xs rounded-none btn-ghost hover:bg-[#0A65FC]'><SiTrustpilot></SiTrustpilot></p>
                                    <p className='text-lg text-base-100 btn bg-[#0A65FC] btn-square btn-xs rounded-none btn-ghost hover:bg-[#0A65FC]'><SiTrustpilot></SiTrustpilot></p>
                                    <p className='text-lg text-base-100 btn bg-[#0A65FC] btn-square btn-xs rounded-none btn-ghost hover:bg-[#0A65FC]'><SiTrustpilot></SiTrustpilot></p>
                                </div>
                                <h2 className='text-xl font-medium'>Emily Carter</h2>
                                <p>Virtual Assistant</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='flex flex-col sm:flex-row gap-4 bg-base-100 border input-bordered rounded-md items-center '>
                        <div className='w-full h-[400px] sm:w-[230px] sm:h-full flex-shrink-0'>
                            <img className='w-full h-full object-cover object-top rounded' src={people4} alt="People1" />
                        </div>
                        <div className='p-4 space-y-4'>
                            <div><BiSolidQuoteRight className='text-4xl text-[#0A65FC]'></BiSolidQuoteRight ></div>
                            <div><h4 className='text-lg'>As a freelancer, I finally found a platform that values my skills and ensures I get paid securely. It's been an amazing journey so far!</h4></div>
                            <div>
                                <div className='space-x-2'>

                                    <p className='text-lg text-base-100 btn bg-[#0A65FC] btn-square btn-xs rounded-none btn-ghost hover:bg-[#0A65FC]'><SiTrustpilot></SiTrustpilot></p>
                                    <p className='text-lg text-base-100 btn bg-[#0A65FC] btn-square btn-xs rounded-none btn-ghost hover:bg-[#0A65FC]'><SiTrustpilot></SiTrustpilot></p>
                                    <p className='text-lg text-base-100 btn bg-[#0A65FC] btn-square btn-xs rounded-none btn-ghost hover:bg-[#0A65FC]'><SiTrustpilot></SiTrustpilot></p>
                                    <p className='text-lg text-base-100 btn bg-[#0A65FC] btn-square btn-xs rounded-none btn-ghost hover:bg-[#0A65FC]'><SiTrustpilot></SiTrustpilot></p>
                                </div>
                                <h2 className='text-xl font-medium'>Daniel Lee</h2>
                                <p>Content Writer</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default Testimonials;

