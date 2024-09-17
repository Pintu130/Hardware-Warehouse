import React, { useState } from "react";
import { Link } from "react-scroll";
import { IoMenu, IoClose } from "react-icons/io5";
import { logo } from "../Assets";
import { FaHome } from "react-icons/fa";
import { MdMiscellaneousServices } from "react-icons/md";
import { IoGrid } from "react-icons/io5";
import { AiFillProduct } from "react-icons/ai";
import { IoMdContact } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Button to open the sidebar on small screens */}
      <button
        className="md:hidden p-4 bg-[#042f2e] text-white fixed top-0 left-0 z-40 w-full"
        onClick={toggleSidebar}
      >
        <IoMenu className="h-6 w-6" />
      </button>

      {/* Sidebar navigation */}
      <div
        className={`fixed top-0 left-0 h-full bg-[#134e4a] text-white w-64 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform md:translate-x-0 z-50`}
      >
        <div className="flex justify-between items-center p-4">
          <div className="flex justify-center">
            <img src={logo} alt="logo" className="w-32 h-32" />
          </div>
          <button className="md:hidden mb-20" onClick={toggleSidebar}>
            <IoClose className="h-6 w-6" />
          </button>
        </div>
        <hr className="border border-gray-400" />
        <nav className="flex flex-col space-y-3 p-4">
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="cursor-pointer bg-[#0f766e] hover:bg-[#0d9488] rounded-md p-2"
            onClick={() => setIsOpen(false)} // Close sidebar after clicking
          >
            <span className="flex items-center gap-3">
              <FaHome size={20} />
              Home
            </span>
          </Link>
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="cursor-pointer bg-[#0f766e] hover:bg-[#0d9488] rounded-md p-2"
            onClick={() => setIsOpen(false)} // Close sidebar after clicking
          >
            <span className="flex items-center gap-3">
              <MdMiscellaneousServices size={20} />
              Services
            </span>
          </Link>
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="cursor-pointer bg-[#0f766e] hover:bg-[#0d9488] rounded-md p-2"
            onClick={() => setIsOpen(false)} // Close sidebar after clicking
          >
            <span className="flex items-center gap-3">
              <AiFillProduct size={20} />
              Products
            </span>
          </Link>
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="cursor-pointer bg-[#0f766e] hover:bg-[#0d9488] rounded-md p-2"
            onClick={() => setIsOpen(false)} // Close sidebar after clicking
          >
            <span className="flex items-center gap-3">
              <IoGrid size={20} />
              About Us
            </span>
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="cursor-pointer bg-[#0f766e] hover:bg-[#0d9488] rounded-md p-2"
            onClick={() => setIsOpen(false)}
          >
            <span className="flex items-center gap-3">
              <IoMdContact size={20} />
              Contact Us
            </span>
          </Link>
        </nav>
        <hr className="border border-gray-400" />
        <div className="mt-10 flex justify-center flex-col p-4 ">
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="cursor-pointer bg-[#0369a1] hover:bg-[#0284c7] rounded-md p-2"
            onClick={() => setIsOpen(false)}
          >
            <span className="flex items-center gap-3">
              <FaCartShopping size={20} />
              Shop Now
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
