import React, {useEffect, useState} from "react";
import PieChart from "../../../components/Graph";
import DonutChart from "../../../components/DonutChart";
import '../../../components/styles/style.css'
import LineChart from "../../../components/LineChart";
import axios from "axios";
import { ApiFetchMentorCount } from "../../../API/API";
import MentorscheduleChart from "../../../components/Mentorschedule";
import { FaDownload, FaEllipsisV } from "react-icons/fa";
import mentorhour from '../../../assets/images/all startups.svg';
import Startupsvg from '../../../assets/images/Startups.svg';
import Graduated from '../../../assets/images/Graduated Startups.svg'
function Mentor(props){
    // console.log(props)
    const [show, setShow] = useState(false);
    const [data, setData] = useState([]); 
    const getData = async() => {
        try
        {
            const result = await ApiFetchMentorCount();
            // console.log(result.rows[0].count);
            setData(result.rows);
        }
        catch(err)
        {
            console.log(err);
        }
    }
    useEffect(() => {
        getData();
        setShow(true);
    }, [])
    return (
        // <div className={`grid md:grid-cols-4 gap-4 mt-2 grid-cols-1 content ${show ? "visible": ""}`}>
        //             <div className="col-span-3 gap-3">
        //                     <div className="grid md:grid-cols-3 gap-2">
        //                         <div className="shadow-md font-semibold rounded-lg w-[100%;]" style={{backgroundColor: '#afdade'}}>
        //                         {Array.isArray(data) && data.length > 0 ? (
        //                             data.map((dataObj, index) => (
        //                                 <div key={index}>
        //                                         <div className="p-4 text-sm text-gray-600">Mentors in total</div>
        //                                         <div className="p-3 pt-3 text-5xl font-semibold pb-4 justify-end items-end flex text-gray-500">{dataObj.count}</div>  
        //                                 </div>
        //                             ))
        //                             ) : (
        //                             <>
        //                                 <div className="p-4 text-sm text-gray-600">Mentors in total</div>
        //                                 <div className="p-3 pt-3 text-5xl font-semibold pb-4 justify-end items-end flex text-gray-500">NA</div>
        //                             </>
        //                             )}   
        //                         </div>
        //                         <div className="shadow-md rounded-lg w-[100%;]" style={{backgroundColor: '#afd5de'}}>
        //                             <div className="p-3 text-sm font-semibold text-gray-600">Mentoring Sessions</div>
        //                             <div className="p-3 pt-3 text-5xl font-semibold pb-4 justify-end items-end flex text-gray-500">{props?.props?.Mentors?.Session_Total || "NA"}</div>
        //                         </div>
        //                         <div className="shadow-md rounded-lg w-[100%;]" style={{backgroundColor: '#afcdde'}}>
        //                                 <div className="p-3 text-sm font-semibold text-gray-600">Total Mentoring Hours</div>
        //                                 <div className="p-3 pt-3 text-5xl font-semibold pb-4 justify-end items-end flex text-gray-500">30</div>
        //                         </div>
        //                     </div>
        //                     <div className="grid md:grid-cols-2 gap-6 mt-10 mb-2">
        //                         <div className="shadow-md rounded-lg w-[100%;] border md:h-[435px;]">
        //                                 <div className="p-2 md:text-md text-gray-600 font-semibold">Top 5 Sectors by Maximum Internal Fund Usage</div>
        //                                 <div className="justify-center items-center">
        //                                     {/* <PieChart /> */}
        //                                 </div>
        //                         </div>
        //                         <div className="shadow-md rounded-lg w-[100%;] border">
        //                             <div className="p-3 pt-2 md:text-md text-gray-600 font-semibold">Funding Distributed across Sectors</div>
        //                             <div className="justify-center items-center">
        //                                 {/* <PieChart /> */}
        //                             </div>
        //                         </div>
        //                     </div>
        //             </div>
        //             <div className="col-span-1  gap-3">
        //                     <div className="grid grid-cols-1 gap-3 mb-2">
        //                         <div className="shadow-md font-semibold rounded-lg w-full md:h-[300px;] border">
        //                             <div className="p-2 pt-1 text-xs text-gray-600 font-semibold">Women across industry</div>
        //                             <div className="flex justify-center items-center mb-1">
        //                                 <div className="w-50 h-50 overflow-hidden">
        //                                     {/* <DonutChart/> */}
        //                                 </div>
        //                             </div>
        //                         </div>
        //                     </div>
        //                     <div className="grid grid-cols-1 gap-3">
        //                         <div className="shadow-md font-semibold rounded-lg w-full md:h-[300px;] border">
        //                             <div className="p-2 pt-1 text-sm text-gray-600 font-semibold">Total Mentoring across sector</div>
        //                             <div className="flex justify-center items-center mb-1">
        //                                 <div className="w-50 h-50 overflow-hidden">
        //                                     <MentorscheduleChart props={props} />
        //                                 </div>
        //                             </div>
        //                         </div>
        //                     </div>
        //             </div>
        //      </div>
        <div className={`grid md:grid-cols-3 gap-4 grid-cols-1 content ${show ? "visible": ""}`}>
                    <div className="border bg-white mx-4 my-4 col-span-2 rounded-lg">
                            <div className="flex justify-between px-5 py-3 underline underline-offset-[13px] decoration-gray-200">
                                    <div className="text-xl">Mentor Dashboard</div>
                                    <div className="pt-1"><FaDownload size={0}/></div>
                            </div>
                            <div className="px-5 py-3 font-semibold">Overview</div>
                            <div className="grid grid-cols-3 gap-5 px-5 pb-4">
                                    <div className="shadow-md border border-sm rounded-lg p-2">
                                        <div className="pb-1"><img src={mentorhour} className="bg-[#D8F3D9] p-2 rounded-xl "/></div>
                                        <div className="text-2xl font-semibold">14hr 30min</div>
                                        <div className="text-sm">Total Mentoring Hours</div>
                                    </div>

                                    <div className="shadow-md border border-sm rounded-lg p-2">
                                        <div className="pb-1"><img src={Startupsvg} className="bg-[#FFE7CC] p-2 rounded-xl "/></div>
                                        <div className="text-2xl font-semibold">14hr 30min</div>
                                        <div className="text-sm">Mentoring Sessions</div>
                                    </div>

                                    <div className="shadow-md border border-sm rounded-lg p-2">
                                        <div className="pb-1"><img src={Graduated} className="bg-[#D8F3D9] p-2 rounded-xl "/></div>
                                        <div className="text-2xl font-semibold">14hr 30min</div>
                                        <div className="text-sm">Total Mentors</div>
                                    </div>
                            </div>
                            <div className="flex justify-between px-5">
                                    <div className="">Mentoring Hours</div>
                                    <div><button><FaEllipsisV /></button></div>
                            </div>
                            <div className="flex justify-between px-5 pt-6 pb-4">
                                            <div>Most Represented Specializations</div>
                                            <div className="flex justify-between gap-10">
                                                <select className="block w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-[#45C74D] focus:border-[#45C74D]">
                                                        <option>Top 5</option>
                                                        <option>Top 10</option>
                                                </select>
                                                <div className="mt-2"><FaEllipsisV /></div>
                                            </div>
                            </div>
                    </div>
        </div>
    )
}
export default Mentor;