import React, { useState } from "react";
import { hero } from "../Assets";
import { action } from "../Assets";
import EnquiryModel from "../Common/EnquiryModel";

const HomeSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to toggle modal visibility
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Gather form data and process it
    const formData = new FormData(e.target);
    const productData = {
      name: formData.get("name"),
      price: formData.get("price"),
      category: formData.get("category"),
      description: formData.get("description"),
    };
    console.log("Product Data:", productData);

    // Close the modal after submission
    toggleModal();
  };

  return (
    <div className="relative w-full h-screen">
      {/* Use h-screen for full height */}
      {/* Image */}
      <img
        src={hero}
        alt="hero"
        className="w-full h-full object-cover hidden md:block"
      />
      <img
        src={action}
        alt="hero"
        className="w-full h-full object-cover md:hidden"
      />
      {/* Black overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>
      {/* Text on top of the image and black overlay */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
        <h1 className="text-white text-3xl xs:text-4xl sm:text-5xl lg:text-7xl font-bold mb-4">
          Hardware Warehouse
        </h1>
        <div className="w-5/6 md:w-4/6">
          <p className="text-white text-lg sm:text-xl lg:text-2xl leading-6 md:leading-7">
            Your go-to destination for premium furniture at unbeatable prices.
            Shop living room, bedroom, and office essentials all in one place!
          </p>
        </div>

        <div className="pt-28">
          <button
            onClick={toggleModal}
            className="text-white bg-slate-100 bg-opacity-30 hover:bg-opacity-50 py-2 px-7 rounded"
          >
            Enquiry
          </button>
        </div>
      </div>

      {isModalOpen && (
        <EnquiryModel isModalOpen={isModalOpen} toggleModal={toggleModal} />
      )}
    </div>
  );
};

export default HomeSection;
