import React from "react";

const Step2 = ({ formData, handleChange }) => {
  return (
    <div className="grid grid-cols-2 gap-4 items-center">
          <div>
              <div>Year of Experience</div>
              <div><input type="text" placeholder="Enter year of experience" onChange={handleChange} name="years_of_experience" value={formData.years_of_experience} className="block w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-[#45C74D] focus:border-[#45C74D]"/></div>
          </div>
          <div>
              <div>Area of Expertise</div>
              <div><input type="text" placeholder="Enter area of expertise" onChange={handleChange} name="area_of_expertise" value={formData.area_of_expertise} className="block w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-[#45C74D] focus:border-[#45C74D]"/></div>
          </div>
          <div>
              <div>Current Designation</div>
              <div><input type="text" placeholder="Enter current designation" onChange={handleChange} name="current_designation" value={formData.current_designation} className="block w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-[#45C74D] focus:border-[#45C74D]"/></div>
          </div>
          <div>
              <div>Institution</div>
              <div><input type="text" placeholder="Enter Institution" onChange={handleChange} name="institution" value={formData.institution} className="block w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-[#45C74D] focus:border-[#45C74D]"/></div>
          </div>
          <div>
              <div>Qualification</div>
              <div><input type="text" placeholder="Enter qualification" onChange={handleChange} name="qualification" value={formData.qualification} className="block w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-[#45C74D] focus:border-[#45C74D]"/></div>
          </div>
          <div>
              <div>Year of Passing-Out</div>
              <div><input type="text" placeholder="Enter year of passing-out" onChange={handleChange} name="year_of_passing_out" value={formData.year_of_passing_out} className="block w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-[#45C74D] focus:border-[#45C74D]"/></div>
          </div>
          <div>
              <div>Start-ups Associated</div>
              <div><input type="text" placeholder="Enter start-ups associated" onChange={handleChange} name="startup_associated" value={formData.startup_associated} className="block w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-[#45C74D] focus:border-[#45C74D]"/></div>
          </div>
    </div>
  );
};

export default Step2;

