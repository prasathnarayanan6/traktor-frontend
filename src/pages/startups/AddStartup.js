import React, {useState, useEffect} from "react";
import SideBar from "../../components/sidebar";
import NavBar from "../../components/NavBar";
import {AddTeams} from "../../API/API";
import AddStartupMultiForm from "./AddStartupMultiForm";
import exclamtionsvg from '../../assets/images/Frame (14).svg';
import settingsvgwhite from '../../assets/images/Frame (15).svg';
import foundersvgwhite from '../../assets/images/Frame (16).svg';
import messagesvgwhite from '../../assets/images/Frame (17).svg';
import Step1 from "./step/Step1";
import Step2 from "./step/Step2";
import Step3 from "./step/Step3";
import Step4 from "./step/Step4";
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
    const[steps, setsteps] = useState(0);
    const handlestepsincrement = (e) => {
            e.preventDefault();
            setsteps(steps + 1);
    }
    const handlestepsdecrement = (e) => {
        e.preventDefault();
        setsteps(steps - 1);
    }
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
                                                        {/* <div><img src={exclamtionsvg} /></div> */}
                                                        <div className="text-lg">Add New Start-up</div>
                                                  </div> 
                                                  <div className="mt-4">Program <span className="text-red-600">*</span></div>
                                                  <div className="mt-2"><input type="text" className="block w-[50%] p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-[#45C74D] focus:border-[#45C74D]" placeholder="Select Program"/></div>
                                                  <div className="grid grid-cols-4 mt-10 px-3">
                                                          <div className="bg-[#45C74D] text-white flex justify-center items-center text-lg gap-2" style={{clipPath: "polygon(0% 0%, 90% 0%, 100% 50%, 90% 100%, 0% 100%)",}}>
                                                                <span><img src={exclamtionsvg} class /></span>
                                                                <span className="my-2 text-lg">Basic</span > 
                                                           </div>
                                                          <div className="bg-[#45C74D] text-white flex justify-center items-center text-lg gap-2" style={{clipPath: "polygon(75% 0%, 85% 50%, 75% 100%, 0% 100%, 9% 50%, 0% 0%)",}}>
                                                                <span><img src={settingsvgwhite} /></span>
                                                                <span className="my-2 text-lg">Official</span >
                                                          </div>
                                                          <div className="bg-[#45C74D] text-white flex justify-center items-center text-lg gap-2" style={{clipPath: "polygon(75% 0%, 85% 50%, 75% 100%, 0% 100%, 9% 50%, 0% 0%)",}}>
                                                                <span><img src={foundersvgwhite} class /></span>
                                                                <span className="my-2 text-lg">Founder</span >
                                                          </div>
                                                          <div className="bg-[#45C74D] text-white flex justify-center items-center text-lg gap-2" style={{clipPath: "polygon(0% 0%, 90% 0%, 100% 50%, 90% 100%, 0% 100%)",}}>
                                                                <span><img src={messagesvgwhite} className="" /></span>
                                                                <span className="my-2 text-lg">Description</span >
                                                          </div>
                                                  </div>
                                                  {steps == 0 && (
                                                    <Step1 />
                                                  )}
                                                  {steps == 1 && (
                                                    <Step2 />
                                                  )}
                                                  {steps == 2 && (
                                                    <Step3 />
                                                  )}
                                                  {steps == 3 && (
                                                    <Step4 />
                                                  )}
                                                  
                                                  <div className="flex justify-center items-center mt-3 gap-5">
                                                      {steps == 1 && <button className="border-[#45c74d] border p-2 rounded-lg text-[#45c74d] font-semibold" onClick={handlestepsdecrement}>Back</button>}
                                                      {steps == 2 && <button className="border-[#45c74d] border p-2 rounded-lg text-[#45c74d] font-semibold" onClick={handlestepsdecrement}>Back</button>}
                                                      {steps == 3 && <button className="border-[#45c74d] border p-2 rounded-lg text-[#45c74d] font-semibold" onClick={handlestepsdecrement}>Back</button>}
                                                      {steps == 3 && <button className="bg-[#45c74d] p-2 rounded-lg text-white font-semibold">Submit</button>}
                                                      <button  className={`bg-[#45c74d] p-2 rounded-lg text-white font-semibold ${steps==3 && 'hidden'}`} onClick={handlestepsincrement}>Next</button>
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