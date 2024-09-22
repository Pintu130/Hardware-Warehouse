import React from "react";
import { logo } from "../Assets";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa"; // Import icons from react-icons

const Footer = () => {
  return (
    <footer className="bg-[#042f2e] text-gray-300 py-8 px-4">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo Section */}
        <div className="flex flex-col items-start">
          <img src={logo} alt="Logo" className="h-20 w-auto mb-4" />
        </div>

        {/* Address Section */}
        <div className="flex flex-col">
          <h3 className="font-semibold text-lg mb-2">Address</h3>
          <p className="flex items-center mb-1">
            <FaMapMarkerAlt className="mr-2" /> Shop no 8 Amidhara Township, Narmada Market Nandelav Rod, 
          </p>
          <p className="ml-5">to Railway Station, Bharuch, Gujarat 392001, India</p>
        </div>

        {/* Contact Section */}
        <div className="flex flex-col">
          <h3 className="font-semibold text-lg mb-2">Contact</h3>
          {/* Clickable phone number */}
          <a href="tel:+919033766419" className="flex items-center mb-1 cursor-pointer">
            <FaPhoneAlt className="mr-2" /> 
            <p  className="hover:text-gray-400">+91 90337 66419</p>
          </a>
          {/* Clickable email */}
          <a href="mailto:info@example.com" className="flex items-center cursor-pointer">
            <FaEnvelope className="mr-2" /> 
            <p  className="hover:text-gray-400">info@example.com</p>
          </a>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="mt-8 border-t border-gray-700 pt-4 text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Hardware Warehouse. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
