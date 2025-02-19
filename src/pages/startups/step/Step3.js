import React, {useState} from "react";

const Step3 = ({formData, handleChange}) => {
  let regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const [emailValid, setEmailValid] = useState(0);
  const [formDataa, setFormData] = useState({ founder_email: "" });

  const handleEmailValidation = (e) => {
      let email = e.target.value;
      setFormData({ ...formDataa, founder_email: email });
      if (regex.test(email)) {
          console.log("Valid Email address");
          setEmailValid(1);
      } else if(email == ""){
          setEmailValid(0);
      }
      else
      {
        setEmailValid(2);
      }
  };
  let handleBothChange = (e) => {
    handleChange(e);
    handleEmailValidation(e);
  }
  return (
    <div className="grid grid-cols-2 gap-5 mt-9 px-7">
        <div>
            <div>Founder Name</div>
            <div className="mt-1"><input type="text" onChange={handleChange} name="founder_name" value={formData.founder_name} className="block w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-[#45C74D] focus:border-[#45C74D]" placeholder="Enter founded name"/></div>
        </div>
        <div>
            <div>Email Address</div>
            <div className="mt-1">
              <input type="text" onChange={handleChange}  onInput={handleEmailValidation} name="founder_email" value={formData.founder_email} className={`block w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-[#45C74D] focus:border-[#45C74D] ${emailValid === 2 && 'focus:ring-[#E54545] focus:border-[#E54545]'}`} placeholder="Enter email address"/>
              {emailValid===2 && <span className="text-xs text-[#E54545]">Please enter a valid email address</span> || ''}
            </div>
        </div>
        <div>
            <div>Contact Number</div>
            <div className="mt-1"><input type="text" onChange={handleChange} name="founder_number" value={formData.founder_number} className="block w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-[#45C74D] focus:border-[#45C74D]" placeholder="xxxxx xxxxx"/></div>
        </div>
        <div>
            <div>Gender</div>
            <div className="mt-1">
              <select onChange={handleChange} name="founder_gender" value={formData.founder_gender} className="block w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-[#45C74D] focus:border-[#45C74D]" placeholder="Select gender">
                  <option>Choose a Gender</option>
                  <option>Male</option>
                  <option>Female</option>
              </select>

            </div>
        </div>
        <div>
            <div>Student ID</div>
            <div className="mt-1"><input type="text" onChange={handleChange} name="founder_student_id" value={formData.founder_student_id} className="block w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-[#45C74D] focus:border-[#45C74D]" placeholder="Enter student ID"/></div>
        </div>
        <div>
            <div>LinkedIn Id</div>
            <div className="mt-1"><input type="text" onChange={handleChange} name="linkedInid" value={formData.linkedInid} className="block w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-[#45C74D] focus:border-[#45C74D]"/></div>
        </div>
    </div>
  );
};
export default Step3;
