import React from "react";

const Step3 = ({formData, handleChange}) => {
  return (
    <div className="grid grid-cols-2 gap-5 items-center">
          <div className="mt-1">
              <div>Contact Number</div>
              <div><input type="text" placeholder="Enter contact number" onChange={handleChange} name="contact_number" value={formData.contact_number} className="block w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-[#45C74D] focus:border-[#45C74D]"/></div>
          </div>
          <div className="mt-1">
              <div>Email Address</div>
              <div><input type="text" placeholder="Enter email address" onChange={handleChange} name="email_address" value={formData.email_address} className="block w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-[#45C74D] focus:border-[#45C74D]"/></div>
          </div>
          <div className="mt-1">
              <div>LinkedIn ID</div>
              <div><input type="text" placeholder="Enter linkedIn" onChange={handleChange} name="linkedIn_ID" value={formData.linkedIn_ID} className="block w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-[#45C74D] focus:border-[#45C74D]"/></div>
          </div>
          <div className="mt-1">
              <div>Password</div>
              <div><input type="password" placeholder="" onChange={handleChange} name="password" value={formData.password} className="block w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-[#45C74D] focus:border-[#45C74D]"/></div>
          </div>
    </div>
  );
};
export default Step3;
