import React from 'react';
import { BsGlobe } from 'react-icons/bs';
import { FaRegHeart } from 'react-icons/fa6';
import { HiOutlineCurrencyDollar } from 'react-icons/hi';
import { IoMdHeartEmpty } from 'react-icons/io';
import { IoLocationOutline, IoServerOutline } from 'react-icons/io5';

const ProfileCard = ({ worker }) => {
  return (
    <div className='card-body border border-[#ffd75e] bg-[#fffbf1] dark:bg-base-200 rounded-xl font-medium'>
      <div>
        <div className='flex flex-col justify-center items-center space-y-4'>
          <div className="avatar">
            <div className="w-20 rounded-full">
              <img src={worker?.photoURL} />
            </div>
          </div>
          <div>
            <h2 className='text-xl text-center'>{worker?.displayName}</h2>
            <h5 className='text-center text-lg'>TaskHive Worker</h5>
          </div>
          <div className='space-y-2'>
            <div className='flex gap-x-2 items-center'>
              <div> <IoServerOutline className='text-xl' ></IoServerOutline> </div>
              <div className='text-lg'>{worker?.coin} Coins</div>
            </div>
            <div className='flex gap-x-2 items-center'>
              <div> <IoLocationOutline className='text-xl'></IoLocationOutline> </div>
              <div className='text-lg'>Dhaka, Bangladesh</div>
            </div>
            <div className='flex gap-x-2 items-center'>
              <div> <BsGlobe className='text-xl'></BsGlobe> </div>
              <div className='text-lg'>English / Bengali</div>
            </div>
          </div>
          <div className='flex gap-4 border-b pb-6'>
            <button className='badge bg-base-200 p-4'>Available</button>
            <button className='badge bg-base-200 p-4'>Verified Seller</button>
          </div>
          <div className='flex gap-2'>
            <label className='text-lg'>
              Ratting:
            </label>
            <div className="rating">
              <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#ffd75e]" />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-[#ffd75e]"
                defaultChecked />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-[#ffd75e]"
                defaultChecked />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-[#ffd75e]"
                defaultChecked />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-[#ffd75e]"
                defaultChecked />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;