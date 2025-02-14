import React, {useState, useEffect} from "react";
import { ApiFetchMentor, ApiDeletMentorData } from "../../../API/API";

const Step2 = ({formData, handleChange}) => {
  const [data, setData] = useState([]);

  const FetchData = async() => {
    try {
        const API = await ApiFetchMentor();
        setData(API.STATUS.rows);
        //console.log(API.STATUS.rows);
    }
    catch(err)
    {
        console.log(err);
    }
}
useEffect(() =>{
  FetchData();
  setData()
},[])
  return (
    <div className="grid grid-cols-2 gap-5 mt-9 px-7">
          <div>
              <div>Official Contact Number</div>
              <div className="mt-1"><input type="text" className="block w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-[#45C74D] focus:border-[#45C74D]" placeholder="xxxxx xxxxx"/></div>
          </div>
          <div>
              <div>Official Email Address</div>
              <div className="mt-1"><input type="text" className="block w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-[#45C74D] focus:border-[#45C74D]" placeholder="Enter official email address"/></div>
          </div>
          <div>
              <div>Website Link</div>
              <div className="mt-1"><input type="text" className="block w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-[#45C74D] focus:border-[#45C74D]"/></div>
          </div>
          <div>
              <div>LinkedIn ID</div>
              <div className="mt-1"><input type="text" className="block w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-[#45C74D] focus:border-[#45C74D]"/></div>
          </div>
          <div>
              <div>Mentor Associated</div>
              <div className="mt-1"><input type="text" className="block w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-[#45C74D] focus:border-[#45C74D]" placeholder="Select Mentor associated"/></div>
          </div>
          <div>
              <div>CIN/Registration Number</div>
              <div className="mt-1"><input type="text" className="block w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-[#45C74D] focus:border-[#45C74D]"/></div>
          </div>
          <div>
              <div>Password</div>
              <div className="mt-1"><input type="text" className="block w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-[#45C74D] focus:border-[#45C74D]"/></div>
          </div>
    </div>
  );
};

export default Step2;
