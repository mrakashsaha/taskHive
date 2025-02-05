import React from 'react';
import { BsGlobe } from 'react-icons/bs';
import { HiOutlineCurrencyDollar } from 'react-icons/hi';
import { IoLocationOutline, IoServerOutline } from 'react-icons/io5';

const ProfileCard = ({worker}) => {
  return (
    <div className='card-body border-2 min-w-72 rounded-md font-medium'>
      <div>
        <div className='flex flex-col justify-center items-center space-y-4 pb-4'>
          <div className="avatar">
            <div className="w-24 rounded-full">
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
        <div className='flex gap-2'>
          <label className='text-lg'>
            Ratting:
          </label>
          <div className="rating">
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
              defaultChecked />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
              defaultChecked />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
              defaultChecked />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
              defaultChecked />
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;