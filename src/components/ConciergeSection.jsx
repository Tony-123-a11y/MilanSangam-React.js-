import React from "react";
import { FaCrown } from "react-icons/fa";
import { MdBolt } from "react-icons/md";
import image from "../assets/image1.png";
import { FaHandSparkles } from "react-icons/fa";
const ConciergeSection = () => {
  return (
    <div className="max-w-7xl mx-auto py-15">
      <div className="bg-gradient-to-r from-purple-50 to-indigo-100 rounded-3xl p-10 flex flex-col md:flex-row items-center gap-10">
        {/* Left Content */}
        <div className="flex-1">
          <h4 className="text-amber-500 text-lg font-semibold mb-2">
            Exclusive Offering
          </h4>
          <h2 className=" text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Elite Match Concierge
          </h2>
          <p className="text-gray-600 text-sm sm:text-base md:text-lg mb-6">
            A dedicated relationship manager to help you find your life partner
            with priority support, personalized recommendations, and unmatched
            privacy.
          </p>

          <div className="flex justify-start gap-4 items-center flex-wrap">
            <div className="flex items-center gap-2 text-amber-500 font-medium text-sm sm:text-base">
              <FaCrown className="text-lg sm:text-xl" />
              VIP Assistance
            </div>
            <div className="flex items-center gap-2 text-amber-500 font-medium text-sm sm:text-base">
            <MdBolt className="text-lg sm:text-xl"/>
              Faster Matches
            </div>
            <div className="flex items-center gap-2 text-amber-500 font-medium text-sm sm:text-base">
             <FaHandSparkles className="text-lg sm:text-xl"/>
              Handpicked Profiles
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1">
          <img
            src={image} // Replace with your own concierge-style image
            alt="Elite Concierge"
            className="rounded-xl  w-full max-w-md mx-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default ConciergeSection;
