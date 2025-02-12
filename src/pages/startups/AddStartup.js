import React, {useState, useEffect} from "react";
import SideBar from "../../components/sidebar";
import NavBar from "../../components/NavBar";
import {AddTeams} from "../../API/API";
import AddStartupMultiForm from "./AddStartupMultiForm";
function AddStartup() {
  const [getData, setgetData] = useState({
    startup_name: '',
    email: '',
    domain: '',
    sector: '',
    academic_background: '',
    program: '',
    founder_name: '',
    contact_number: '',
    roll_number: '',
    female_cofounder: '',
    pia: '',
    fund_allocated: ''
  });
  const handleChange = (e) => {
    const {name, value} = e.target;
    setgetData((prevData)=>({  
        ...prevData,
        [name]: value,
    })) 
  }
  const handleClick = async (e) =>{
      e.preventDefault();
      try
      {
        // const API = await AddTeams(getData);
        console.log("Hello");
      }
      catch(err)
      {
        console.error("An error occurred:", err);
      }
  }
    const [showw, setShoww] = useState(false);
    useEffect(() => {
        setShoww(true);
    }, [])
   return (
    <div className="flex">
          <div>
                <SideBar />
          </div>
          <div className="ms-[221px] flex-grow">
                        <div>
                            <NavBar />
                        </div>
                        <div className="bg-gray-100">
                              <div className={`mx-10 py-5  content ${showw ? "visible": ""}`}>
                                    <div className="bg-white">
                                            <div className="p-3">
                                                  <div className="text-sm text-[#808080]">Dashboard {'>'} Start-ups {'>'} Add New Start-up</div>
                                                  <div className="flex mt-4">
                                                        <div></div>
                                                        <div>Add New Start-up</div>
                                                  </div> 
                                                  <div className="mt-4">Program <span className="text-red-600">*</span></div>
                                                  <div className="mt-2"><input type="text" className="block w-[50%] p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-[#45C74D] focus:border-[#45C74D]" placeholder="Select Program"/></div>
                                                  <div className="flex justify-between mt-10 gap-6 px-3">
                                                          <div className="bg-[#45C74D] p-2 text-white text-sm">Basic</div>
                                                          <div className="bg-[#45C74D] p-2 text-white text-sm">Official</div>
                                                          <div className="bg-[#45C74D] p-2 text-white text-sm">Founder</div>
                                                          <div className="bg-[#45C74D] p-2 text-white text-sm">Description</div>
                                                  </div>
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
                                                  <div className="flex justify-center items-center mt-3">
                                                      <button className="bg-[#45c74d] p-2 rounded-lg text-white">Next</button>
                                                  </div>
                                            </div>
                                    </div>
                              </div>
                        </div>
          </div>
    </div>
  )
}
export default AddStartup;