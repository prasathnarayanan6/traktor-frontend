import React from "react";

const Step1 = ({formData, handleChange}) => {
  return (
    <div>
            <div className="grid grid-cols-2 gap-4 items-center mb-5">
                  <div className="">
                          <div className="">Name of the Mentor <span className="text-[#E54545]">*</span></div>
                          <div className="mt-1"><input type="text" name="mentor_name" value={formData.mentor_name} onChange={handleChange} className="block w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-[#45C74D] focus:border-[#45C74D]" placeholder="Enter name of the Mentor"/></div>        
                  </div>
                  <div className="">
                          <div className="">Choose Logo <span className="text-[#E54545]">*</span></div>
                          <div className="mt-1"><input type="text"  name="choose_logo" value={formData.choose_logo} onChange={handleChange} className="block w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-[#45C74D] focus:border-[#45C74D]"/></div>        
                  </div>
            </div>
            <div>
                <div className="">
                          <div className="">Description <span className="text-[#E54545]">*</span></div>
                          <div className="mt-1"><textarea type="text" name="mentor_description" value={formData.mentor_description} onChange={handleChange} className="block w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-[#45C74D] focus:border-[#45C74D] resize-none" placeholder="Type here..."/></div>        
                  </div>
            </div>
    </div>
  );
};
export default Step1;
