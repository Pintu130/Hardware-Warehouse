import React from "react";
import { IoClose } from "react-icons/io5";

const EnquiryModel = ({ toggleModal, isModalOpen }) => {
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
    <div>
      {/* Modal */}
      {isModalOpen && (
        <div
          id="crud-modal"
          tabIndex="-1"
          className="fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-full bg-black bg-opacity-50"
        >
          <div className="relative p-3 w-full max-w-md max-h-full bg-white bg-opacity-30 backdrop-blur-sm rounded-lg shadow-lg mx-3">
            <div className="flex items-center justify-between p-4 border-b border-gray-200 rounded-t">
              <h3 className="text-lg font-semibold text-white">Enquiry</h3>
              <button
                onClick={toggleModal}
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center"
              >
                <IoClose className="h-6 w-6" />
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            <form onSubmit={handleSubmit} className="p-2 md:p-5">
              <div className="grid gap-4 mb-4 grid-cols-2">
                <div className="col-span-2">
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium text-white"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 outline-none"
                    placeholder="Type your name"
                    required
                  />
                </div>

                <div className="col-span-2">
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-white"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg outline-none block w-full p-2.5"
                    placeholder="Type your email"
                    required
                  />
                </div>

                <div className="col-span-2">
                  <label
                    htmlFor="phone"
                    className="block mb-2 text-sm font-medium text-white"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg outline-none block w-full p-2.5"
                    placeholder="Type your phone number"
                    required
                  />
                </div>

                <div className="col-span-2">
                  <label
                    htmlFor="message"
                    className="block mb-2 text-sm font-medium text-white"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    className="block p-2.5 w-full text-sm text-gray-900 bg-white border border-gray-300 rounded-lg outline-none"
                    placeholder="Write your message here"
                    required
                  ></textarea>
                </div>
              </div>
              <button
                type="submit"
                className="bg-[#0f766e] hover:bg-[#0d9488] rounded-md p-2 text-white w-full"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default EnquiryModel;
