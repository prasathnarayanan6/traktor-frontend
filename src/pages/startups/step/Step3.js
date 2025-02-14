import React from "react";

const Step3 = ({formData, handleChange}) => {
  return (
    <div className="grid grid-cols-2 gap-5 mt-9 px-7">
        <div>
            <div>Founder Name</div>
            <div className="mt-1"><input type="text" className="block w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-[#45C74D] focus:border-[#45C74D]" placeholder="Enter founded name"/></div>
        </div>
        <div>
            <div>Email Address</div>
            <div className="mt-1"><input type="text" className="block w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-[#45C74D] focus:border-[#45C74D]" placeholder="Enter email address"/></div>
        </div>
        <div>
            <div>Contact Number</div>
            <div className="mt-1"><input type="text" className="block w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-[#45C74D] focus:border-[#45C74D]" placeholder="xxxxx xxxxx"/></div>
        </div>
        <div>
            <div>Gender</div>
            <div className="mt-1"><input type="text" className="block w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-[#45C74D] focus:border-[#45C74D]" placeholder="Select gender"/></div>
        </div>
        <div>
            <div>Student ID</div>
            <div className="mt-1"><input type="text" className="block w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-[#45C74D] focus:border-[#45C74D]" placeholder="Enter student ID"/></div>
        </div>
        <div>
            <div>LinkedIn Id</div>
            <div className="mt-1"><input type="text" className="block w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-[#45C74D] focus:border-[#45C74D]"/></div>
        </div>
    </div>
  );
};
export default Step3;
