import React from 'react';
import subscribeBG from '../assets/others/subscribe.jpg'

const Subscribe = () => {
    return (
        <div>

            <div className="relative h-96 lg:h-[300px] bg-cover bg-center" style={{ backgroundImage: `url(${subscribeBG})` }}>
                <div className="absolute inset-0 bg-black/70 flex flex-col justify-center items-center ">
                    <div className="hero">
                        <div className="hero-content text-center text-white">
                            <div className="max-w-6xl space-y-2">
                                <h1 className="text-3xl md:text-4xl font-bold">Stay in the Loop</h1>
                            <p className="py-2 px-4">Subscribe to our newsletter and be the first to know about exclusive updates.</p>
                                <div className="join gap-x-8 w-full">
                                    <input type='email' className="text-[#3cc7a6] w-3/5 input input-md md:input-lg rounded-none input-bordered join-item" placeholder="Email" />
                                    <button className=" btn btn-md md:btn-lg text-white font-bold rounded-none border-[#3cc7a6] hover:border-[#3cc7a6] bg-[#3cc7a6] hover:bg-[#0bb990] join-item">GET STARTED</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Subscribe;