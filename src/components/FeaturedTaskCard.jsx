import moment from 'moment';
import React, { useState } from 'react';
import { BiSolidCoinStack } from 'react-icons/bi';
import { BsPeople, BsPeopleFill } from 'react-icons/bs';
import { MdOutlinePeopleAlt, MdVerified } from 'react-icons/md';
import { Link } from 'react-router-dom';

const FeaturedTaskCard = ({ task }) => {
    const [isImageLoading, setIsImageLoading] = useState(true);
    return (
        <div className=''>
            <div>
                <div className="card bg-base-100 shadow-xl">
                    <figure>
                        {isImageLoading && (
                            <div className="absolute">
                                <span className="loading loading-bars loading-lg"></span>
                            </div>
                        )}
                        <img onLoad={() => setIsImageLoading(false)} src={task?.taskImage} alt={task?.taskTitle} className={`w-full h-52 object-cover ${isImageLoading ? "opacity-0" : "opacity-100"}`} />
                    </figure>
                    <div className="card-body p-5">
                        <div className='relative'>
                            <div className="avatar absolute -top-10">
                                <div className="ring-base-100 ring-offset-base-100 w-11 rounded-full ring ring-offset-1">
                                    <img alt='Profile' src={task?.buyerPhoto} />
                                </div>
                            </div>
                        </div>
                        <div className='flex justify-between items-center'>
                            <div className='pt-2'>
                                <h5 className='font-medium'>{task?.buyerName} <MdVerified className='inline-block text-[#6065fc]'></MdVerified> </h5>
                                <h5 className='text-sm'>Deadline: <span className='font-medium'>{moment(task?.date).local().format("ll")}</span></h5>
                            </div>
                            <div>
                                <h4 className='text-base btn btn-sm gap-1 rounded-full bg-[#6787FE]/10 text-[#6787FE]'><BiSolidCoinStack className=''></BiSolidCoinStack>{task?.payableAmount}.00</h4>
                            </div>
                        </div>
                        <div className='mb-6'>
                            <h2 className='font-semibold line-clamp-1'>{task?.taskTitle}</h2>
                        </div>
                        <hr />
                        <div className="card-actions items-center justify-between mt-2">
                            <h2 className='inline-flex gap-x-2 items-center'> Vacancy : <MdOutlinePeopleAlt className='text-lg'></MdOutlinePeopleAlt> <span className='font-semibold'>{task?.requiredWorkers}</span></h2>
                            <Link to={`/dashboard/taskDetails/${task?._id}`} className="text-base btn btn-md rounded-full hover:bg-[#6787FE]/20 bg-[#6787FE]/10 text-[#6787FE] hover:border-[#6787FE]">View Details</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeaturedTaskCard;