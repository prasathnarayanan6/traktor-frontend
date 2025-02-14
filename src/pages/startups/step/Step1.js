import React from "react";

const Step1 = ({formData, handleChange}) => {
  return (
    <div className="grid grid-cols-2 gap-5 mt-9 px-7">
                                                        <div>
                                                            <div>Name of the Start-up <span className="text-red-500">*</span></div>
                                                            <div className="mt-1"><input type="text" className="block w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-[#45C74D] focus:border-[#45C74D]" placeholder="Enter name of the Start-up"/></div>
                                                        </div>
                                                        <div>
                                                            <div>Sector <span className="text-red-500">*</span></div>
                                                            <div className="mt-1"><input type="text" className="block w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-[#45C74D] focus:border-[#45C74D]" placeholder="Select sector"/></div>
                                                        </div>
                                                        <div>
                                                            <div>Start-up Type <span className="text-red-500">*</span></div>
                                                            <div className="mt-1"><input type="text" className="block w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-[#45C74D] focus:border-[#45C74D]" placeholder="Select start-up type"/></div>
                                                        </div>
                                                        <div>
                                                            <div>Start-up Industry <span className="text-red-500">*</span></div>
                                                            <div className="mt-1"><input type="text" className="block w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-[#45C74D] focus:border-[#45C74D]" placeholder="Select Start-up Industry"/></div>
                                                        </div>
                                                        <div>
                                                            <div>Start-up Technology <span className="text-red-500">*</span></div>
                                                            <div className="mt-1"><input type="text" className="block w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-[#45C74D] focus:border-[#45C74D]" placeholder="Select Start-up technology"/></div>
                                                        </div>
                                                        <div>
                                                            <div>Start-up Cohort <span className="text-red-500">*</span></div>
                                                            <div className="mt-1"><input type="text" className="block w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-[#45C74D] focus:border-[#45C74D]" placeholder="Select Cohort"/></div>
                                                        </div>
                                                        <div>
                                                            <div>Year of Graduation <span className="text-red-500">*</span></div>
                                                            <div className="mt-1"><input type="text" className="block w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-[#45C74D] focus:border-[#45C74D]" placeholder="Enter Year of graduation"/></div>
                                                        </div>
                                                        <div>
                                                            <div>Graduated To <span className="text-red-500">*</span></div>
                                                            <div className="mt-1"><input type="text" className="block w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-[#45C74D] focus:border-[#45C74D]" placeholder="Select Graduated"/></div>
                                                        </div>
      </div>
  );
};

export default Step1;
