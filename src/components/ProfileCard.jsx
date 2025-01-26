import React from "react";
import { AiOutlineHeart, AiFillStar } from "react-icons/ai";
import { HiOutlineLocationMarker, HiOutlineGlobeAlt } from "react-icons/hi";
import { BsCurrencyDollar } from "react-icons/bs";

export default function ProfileCard() {
  return (
    <div className="card bg-white shadow-md rounded-lg p-6 relative">

      {/* Profile Picture */}
      <div className="flex justify-center">
        <img
          src="https://via.placeholder.com/80" // Replace with your image URL
          alt="Profile"
          className="rounded-full w-20 h-20 border-2 border-gray-300"
        />
      </div>

      {/* Name and Role */}
      <div className="text-center mt-4">
        <h2 className="text-xl font-semibold text-gray-800">Marcus Rosser</h2>
        <p className="text-sm text-gray-500">Product Manager</p>
      </div>

      {/* Pricing and Details */}
      <div className="mt-4 text-sm text-gray-600">
        <div className="flex items-center justify-center gap-2">
          <BsCurrencyDollar className="text-gray-800" />
          <span className="font-medium text-gray-800">$560</span>
          <span>/month</span>
        </div>
        <div className="flex items-center justify-center gap-2 mt-2">
          <HiOutlineLocationMarker className="text-gray-800" />
          <span>Los Angeles</span>
        </div>
        <div className="flex items-center justify-center gap-2 mt-2">
          <HiOutlineGlobeAlt className="text-gray-800" />
          <span>English</span>
        </div>
      </div>

      {/* Tags */}
      <div className="flex justify-center mt-4 gap-2">
        <span className="badge badge-outline">Software</span>
        <span className="badge badge-outline">Supporter</span>
      </div>

      {/* Rating and Services */}
      <div className="flex justify-between items-center mt-6 text-sm text-gray-500">
        <div className="flex items-center gap-1">
          <AiFillStar className="text-yellow-500" />
          <span className="font-medium">5.0 (1)</span>
        </div>
        <div className="text-gray-800">2 services</div>
      </div>
    </div>
  );
}
