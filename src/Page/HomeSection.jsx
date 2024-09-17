import React from "react";
import { hero } from "../Assets";

const HomeSection = () => {
  return (
    <div className="relative w-full h-screen">
      {/* Use h-screen for full height */}
      {/* Image */}
      <img src={hero} alt="hero" className="w-full h-full object-cover" />
      {/* Black overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>
      {/* Black overlay with 50% opacity */}
      {/* Text on top of the image and black overlay */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
        <h1 className="text-white text-5xl lg:text-7xl font-bold mb-4">
          Hardware Warehouse
        </h1>
        <div className="w-4/6">
          <p className="text-white text-xl lg:text-2xl leading-7">
            Your go-to destination for premium furniture at unbeatable prices.
            Shop living room, bedroom, and office essentials all in one place!
          </p>
        </div>

        <div className="pt-28">
          <button className="text-white bg-slate-100 bg-opacity-30 hover:bg-opacity-50 py-2 px-7 rounded">
            Enquiry
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeSection;
