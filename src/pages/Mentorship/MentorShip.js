import React, { useState, useEffect } from "react";
import SideBar from "../../components/sidebar";
import NavBar from "../../components/NavBar";
import DonutChart from "../../components/DonutChart";
import Schedule from "./Schedule";
import axios from "axios";
import toast from "react-hot-toast";
import { FaEllipsis } from "react-icons/fa6";
function MentorShip() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    setShow(true);
  }, []);
  const [openPopUp, setOpenpopup] = useState(false);
  const handleShow = (e) => setOpenpopup(true);
  const [startupsData, setStartupsData] = useState([])

  const StartupsData = async() => {
    try
    {
        const result = await axios.get('http://localhost:3003/api/v1/fetch-startup')
        console.log(result);
        setStartupsData(result.data.rows);
    }
    catch(err)
    {
        console.log(err)
    }
  }
  const [mentorData, setMentorData] = useState([]);
  const MentorData = async() => {
    try
    {
        const result = await axios.get('http://localhost:3003/api/v1/get-mentor-details');
        console.log(result);
        setMentorData(result.data.STATUS.rows);
    }
    catch(err)
    {
        console.log(err);
    }
  }
 const [formData, setFormData] = useState({
        select_startup:'', 
        select_mentor:'', 
        schedule_date: '', 
        schedule_time:'', 
        description:''
 })
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
        ...prevData,
        [name]: value,
    }));
  };
console.log(formData);

const ScheduleButton = async(e) => {
    e.preventDefault();
    try
    {
        const result = await axios.post('http://localhost:3003/api/v1/schedule-meeting', formData);
        console.log(result);
        if(result)
        {
            toast.success('Meeting Scheduled successfully');
            setOpenpopup(false);
        }
    }
    catch(err)
    {
        console.log(err);
        if(err.response.status==401)
        {
            toast.error('Please fill the required fields')
        }
        else if(err.response.status==500)
        {
            toast.error('Unknown error occured')
        }
    }
}
  useEffect(() => {
    StartupsData()
    MentorData()
  }, [])
  const [showw, setShoww] = useState(false);
    useEffect(() => {
        setShoww(true);
    }, [])
  return (
    <div className={`flex`}>
      <div>
        <SideBar />
      </div>
      <div className="ms-[221px] flex-grow">
          <NavBar />
          <div className="bg-gray-100">
                <div className={`mx-10 py-5  content ${showw ? "visible": ""}`}>
                      <div className="bg-white rounded-lg shadow-sm">
                          <div className="flex gap-2 text-sm p-3 text-[#808080]">
                                <div>Dashboard</div>
                                <div>{'>'}</div>
                                <div>Mentorship</div>
                          </div>
                          <div className="mt-1 text-xl px-3">Mentorship</div>
                          <div className="px-3 grid grid-cols-3 mt-5 gap-4">
                              <div className="shadow shadow-lg border p-2 rounded-lg relative">
                                    <div className="rounded-2xl absolute mt-[-18px] bg-green-100 px-2 text-sm">o</div>
                                    <div className="text-xl pb-1 font-semibold">30,000</div>
                                    <div className="text-sm">No.of Abhyasa Sessions Conducted</div>
                              </div>
                              <div className="shadow shadow-lg border p-2 rounded-lg relative">
                                    <div className="rounded-2xl absolute mt-[-18px] bg-green-100 px-2 text-sm">o</div>
                                    <div className="text-xl pb-1 font-semibold">14,700</div>
                                    <div className="text-sm">No.of Venture capitalist Mentors</div>
                              </div>
                              <div className="shadow shadow-lg border p-2 rounded-lg relative">
                                    <div className="rounded-2xl absolute mt-[-18px] bg-green-100 px-2 text-sm">o</div>
                                    <div className="text-xl pb-1 font-semibold">147</div>
                                    <div className="text-sm">IITMEF Mentors</div>
                              </div>
                          </div>
                          <div className="grid grid-cols-2 gap-4 px-3 py-3 mt-3">
                                  <div><input type="text" className="block w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/></div>
                                  <div className="flex gap-5 justify-end">
                                      <button className="border border-[#45C74D] rounded-lg p-2 text-sm">Request Mentor</button>
                                      <button className="border bg-[#45C74D] rounded-lg p-2 text-sm text-white">Request Mentor</button>
                                  </div>
                          </div>
                          <div className="grid grid-cols-3 gap-10 px-3 mt-4 pb-4">
                                  <div className="border rounded-md shadow-md">
                                      <div className="flex justify-between p-3">
                                            <div className="bg-[#D8F3D9] text-[#45C74D] text-xs px-2 rounded-lg">Completed</div>
                                            <div className=""><FaEllipsis /></div>
                                      </div>
                                      <div className="flex justify-between text-sm px-3 mt-3">
                                            <div>
                                              <img src="../../assets/images/Frame (4).svg" />
                                            </div>
                                            <div className="text-[#45C74D] font-semibold">HH:MM:SS</div>
                                      </div>
                                      <div className="flex justify-between border border-b-1 border-t-0 border-l-0 border-r-0 mt-5 mb-3 px-3 pb-2">
                                                  <div>
                                                      <div className="text-lg font-semibold">Mentor Name</div>
                                                      <div className="text-[#808080]">Start-up name</div>
                                                  </div>
                                                  <div>
                                                      <div className="text-xs">MM/DD/YYY</div>
                                                      <div className="text-xs">HH:MM</div>
                                                  </div>
                                      </div>
                                      <div className="pb-2"> 
                                          <div className="text-[#808080] px-3">Feedback</div>
                                          <div class="flex items-center px-[6px]">
                                                <button>
                                                    <svg class="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                                                    </svg>
                                                </button>
                                                <button>
                                                    <svg class="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                                                    </svg>
                                                </button>
                                                <button>
                                                    <svg class="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                                                    </svg>
                                                </button>
                                                <button>
                                                    <svg class="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                                                    </svg>
                                                </button>  
                                                <button>
                                                    <svg class="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                                                    </svg>
                                                </button>     
                                          </div>
                                      </div>
                                  </div>

                                  <div className="border rounded-md shadow-md">
                                      <div className="flex justify-between p-3">
                                            <div className="bg-[#D8F3D9] text-[#45C74D] text-xs px-2 rounded-lg">Completed</div>
                                            <div className=""><FaEllipsis /></div>
                                      </div>
                                      <div className="flex justify-between text-sm px-3 mt-3">
                                            <div>
                                              <img src="../../assets/images/Frame (4).svg" />
                                            </div>
                                            <div className="text-[#45C74D] font-semibold">HH:MM:SS</div>
                                      </div>
                                      <div className="flex justify-between border border-b-1 border-t-0 border-l-0 border-r-0 mt-5 mb-3 px-3 pb-2">
                                                  <div>
                                                      <div className="text-lg font-semibold">Mentor Name</div>
                                                      <div className="text-[#808080]">Start-up name</div>
                                                  </div>
                                                  <div>
                                                      <div className="text-xs">MM/DD/YYY</div>
                                                      <div className="text-xs">HH:MM</div>
                                                  </div>
                                      </div>
                                      <div className="pb-2"> 
                                          <div className="text-[#808080] px-3">Feedback</div>
                                          <div class="flex items-center px-[6px]">
                                                <button>
                                                    <svg class="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                                                    </svg>
                                                </button>
                                                <button>
                                                    <svg class="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                                                    </svg>
                                                </button>
                                                <button>
                                                    <svg class="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                                                    </svg>
                                                </button>
                                                <button>
                                                    <svg class="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                                                    </svg>
                                                </button>  
                                                <button>
                                                    <svg class="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                                                    </svg>
                                                </button>     
                                          </div>
                                      </div>
                                  </div>

                                  <div className="border rounded-md shadow-md">
                                      <div className="flex justify-between p-3">
                                            <div className="bg-[#D8F3D9] text-[#45C74D] text-xs px-2 rounded-lg">Completed</div>
                                            <div className=""><FaEllipsis /></div>
                                      </div>
                                      <div className="flex justify-between text-sm px-3 mt-3">
                                            <div>
                                              <img src="../../assets/images/Frame (4).svg" />
                                            </div>
                                            <div className="text-[#45C74D] font-semibold">HH:MM:SS</div>
                                      </div>
                                      <div className="flex justify-between border border-b-1 border-t-0 border-l-0 border-r-0 mt-5 mb-3 px-3 pb-2">
                                                  <div>
                                                      <div className="text-lg font-semibold">Mentor Name</div>
                                                      <div className="text-[#808080]">Start-up name</div>
                                                  </div>
                                                  <div>
                                                      <div className="text-xs">MM/DD/YYY</div>
                                                      <div className="text-xs">HH:MM</div>
                                                  </div>
                                      </div>
                                      <div className="pb-2"> 
                                          <div className="text-[#808080] px-3">Feedback</div>
                                          <div class="flex items-center px-[6px]">
                                                <button>
                                                    <svg class="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                                                    </svg>
                                                </button>
                                                <button>
                                                    <svg class="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                                                    </svg>
                                                </button>
                                                <button>
                                                    <svg class="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                                                    </svg>
                                                </button>
                                                <button>
                                                    <svg class="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                                                    </svg>
                                                </button>  
                                                <button>
                                                    <svg class="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                                                    </svg>
                                                </button>     
                                          </div>
                                      </div>
                                  </div>
                                 
                          </div>
                      </div>
                </div>
          </div>
      </div>
      <Schedule isVisible={openPopUp} onClose={() => setOpenpopup(false)}>
        <form onSubmit={ScheduleButton}>
          <div className="font-semibold">Schedule Session</div>
          <div className="grid grid-cols-2 gap-2">
                 <div className="relative mt-5">
                    <select id="options" onChange={handleChange} className="peer border border-gray-300 h-[45px] text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" name="select_startup">
                      <option value="Webinar" disabled>Select startups</option>
                      {Array.isArray(startupsData) && startupsData.length > 0 ? (
                        startupsData.map((dataObj, Index) => (
                            <option key={Index} value={dataObj.email_address}>{dataObj.startup_name}</option>
                        ))
                      ): (
                        <div>No startups found</div>
                      )}
                    </select>
                    <label className="absolute text-sm text-gray-500 duration-300 transform -translate-y-5 scale-75 top-3 z-10 bg-white px-2 peer-focus:px-2 peer-focus:text-blue-500">Select Startup</label>
                  </div>
                  <div className="relative mt-5">
                    <select id="options"
                        onChange={handleChange} 
                        className="peer border border-gray-300 h-[45px] text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" 
                        name="select_mentor">
                      <option value="Webinar">Select Mentors</option>
                      {Array.isArray(mentorData) && mentorData.length > 0 ? (
                        mentorData.map((dataObj, Index) => (
                            <option value={dataObj.email_address}>{dataObj.mentor_name}</option>
                        ))
                      ): (
                        <div>No Mentors found</div>
                      )}
                    </select>
                    <label className="absolute text-sm text-gray-500 duration-300 transform -translate-y-5 scale-75 top-3 z-10 bg-white px-2 peer-focus:px-2 peer-focus:text-blue-500">Select Mentor</label>
                  </div>
                  <div className="relative mt-5">
                    <input  type="date" onChange={handleChange} id="floating_outlined" className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " name="schedule_date"/>
                    <label  className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">Schedule date</label>
                  </div>
                  <div className="relative mt-5">
                    <input  type="time" onChange={handleChange} id="floating_outlined" className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 appearance-none dark:text-white dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " name="schedule_time"/>
                    <label  className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">Schedule time</label>
                  </div>    
            </div>

                        <div className="relative mt-5">
                                <textarea name="description" onChange={handleChange} rows="4" className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 appearance-none dark:text-white dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer resize-none" placeholder=" "/>
                                <label  className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">description</label>
                        </div>    
                        <div className="relative mt-5 flex justify-end mr-3">
  <button className="shadow-sm rounded-xl text-gray-800 font-semibold px-1 py-1" style={{ backgroundColor: "#afdade" }}>
    Submit
  </button>
</div>


          
        </form>
      </Schedule>
    </div>
  );
}

export default MentorShip;
