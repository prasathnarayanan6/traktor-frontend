import React, {useEffect} from "react";

const Step3 = ({formData, handleChange}) => {
  function generatePassword() {
    var length = 8,
        charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
        retVal = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal;
  }
  useEffect(() => {
    if (!formData.password) {
      handleChange({ target: { name: "password", value: generatePassword() } });
    }
  }, []);
  return (
    <div className="grid grid-cols-2 gap-5 items-center">
          <div className="mt-1">
              <div>Contact Number</div>
              <div className="relative">
                <span className="absolute p-2 text-gray-500 text-sm">+91</span>
                <input type="text" placeholder="Enter contact number" onChange={handleChange} name="contact_number" value={formData.contact_number} className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-[#45C74D] focus:border-[#45C74D]"/>
              </div>
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
              <div><input type="password" onFocus={() => handleChange({ target: { name: "password", value: generatePassword()}})} name="password" value={formData.password} className="block w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-[#45C74D] focus:border-[#45C74D]"/></div>
          </div>
    </div>
  );
};
export default Step3;
