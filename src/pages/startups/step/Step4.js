import React from "react";

const Step4 = ({formData, handleChange}) => {
  return (
    <div className="grid grid-cols-1 mt-9 px-7">
          <div>
                <div>Choose Logo</div>
                <div className="mt-1"><input type="text" className="block w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-[#45C74D] focus:border-[#45C74D]"/></div>
          </div>

          <div className="mt-4">
                <div>Description</div>
                <div className="mt-1"><textarea className="block w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-[#45C74D] focus:border-[#45C74D] resize-none" placeholder="Type here"/></div>
          </div>
    </div>
  );
};

export default Step4;
