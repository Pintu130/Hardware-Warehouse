import React, { useState } from "react";
import { Link } from "react-scroll";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { logo } from "../Assets";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Button to open the sidebar on small screens */}
      <button
        className="md:hidden p-4 bg-[#042f2e] w-full text-white fixed"
        onClick={toggleSidebar}
      >
        <IoMenu className="h-6 w-6" />
      </button>

      {/* Sidebar navigation */}
      <div
        className={`fixed top-0 left-0 h-full bg-[#134e4a] text-white w-64 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform md:translate-x-0`}
      >
        <div className="flex justify-between md:justify-center">
          <div className="flex justify-center cursor-pointer">
            <img src={logo} alt="logo" className="w-32 h-32" />
          </div>
          <button className="p-4 md:hidden mb-20" onClick={toggleSidebar}>
            <IoClose className="h-6 w-6" />
          </button>

        </div>
        <hr className="border border-gray-300" />
        <nav className="flex flex-col space-y-2 p-4">
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="cursor-pointer bg-[#0f766e] hover:bg-[#0d9488] rounded-md p-2"
            onClick={() => setIsOpen(false)} // Close sidebar after clicking
          >
            Home
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="cursor-pointer bg-[#0f766e] hover:bg-[#0d9488] rounded-md p-2"
            onClick={() => setIsOpen(false)}
          >
            Contact Us
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
