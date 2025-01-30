import React, {useEffect, useState} from 'react';
import PieChart from "../../../components/Graph";
import DonutChart from "../../../components/DonutChart";
import '../../../components/styles/style.css'
import LineChart from "../../../components/LineChart";
import '../../../components/styles/style.css';
import MenWomen from '../../../components/MenWomen';
import { FaDownload, FaGraduationCap, FaRegAddressBook, FaRocket, FaSignOutAlt } from 'react-icons/fa';
import Startupsvg from '../../../assets/images/Startups.svg';
import { FaEllipsis } from 'react-icons/fa6';
function Teams(props){
    console.log(props?.props?.Funding_Distrubuted_data)
    const [show, setShow] = useState(false);
    useEffect(() => {
        setShow(true);
    }, [])
    return (
        <div className={`grid md:grid-cols-3 gap-4 grid-cols-1 content ${show ? "visible": ""}`}>
            {/* <div className="col-span-3 gap-3">
                    <div className="grid md:grid-cols-3 gap-2">
                        <div className="shadow-md font-semibold rounded-lg w-[100%;]" style={{backgroundColor: '#afdade'}}>
                                <div className="p-4 text-sm text-gray-600">Pratham Teams (in Total)</div>
                                <div className="p-3 pt-3 text-5xl font-semibold pb-4 justify-end items-end flex text-gray-500">{props?.props?.Funding_Distrubuted_data?.Total_teams_count_by_program?.Total_Pratham_count || "NA"}</div>
                        </div>
                        <div className="shadow-md rounded-lg w-[100%;]" style={{backgroundColor: '#afd5de'}}>
                            <div className="p-3 text-sm font-semibold text-gray-600">Akshar Teams (in Total)</div>
                            <div className="p-3 pt-3 text-5xl font-semibold pb-4 justify-end items-end flex text-gray-500">{props?.props?.Funding_Distrubuted_data?.Total_teams_count_by_program?.Total_Akshar_count || "NA"}</div>
                        </div>
                        <div className="shadow-md rounded-lg w-[100%;]" style={{backgroundColor: '#7da1ad'}}>
                                <div className="p-3 text-sm font-semibold text-gray-600">Total Graduated</div>
                                <div className="p-3 pt-3 text-5xl font-semibold pb-4 justify-end items-end flex text-gray-600">{props?.props?.dropped_startups || "NA"}</div>
                        </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6 mt-10 mb-2">
                        <div className="shadow-md rounded-lg w-[100%;] border md:h-[435px;]">
                                <div className="p-2 md:text-md text-gray-600 font-semibold">Average graduation rate per year</div>
                                <div className="justify-center items-center"><PieChart /></div>
                        </div>
                        <div className="shadow-md rounded-lg w-[100%;] border">
                            <div className="p-3 pt-2 md:text-md text-gray-600 font-semibold">Total teams incubated at IITMIC</div>
                            <div className="justify-center items-center"><PieChart /></div>
                        </div>
                    </div>
            </div>
            <div className="col-span-1  gap-3">
                    <div className="grid grid-cols-1 gap-3 mb-2">
                        <div className="shadow-md font-semibold rounded-lg w-full md:h-[300px;] border">
                            <div className="p-2 pt-1 text-xs text-gray-600 font-semibold">Gender ratio of startup founders</div>
                            <div className="flex justify-center items-center mb-1">
                                <div className="w-50 h-50 overflow-hidden">
                                    <MenWomen props={props}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-3">
                        <div className="shadow-md font-semibold rounded-lg w-full md:h-[300px;] border">
                            <div className="p-2 pt-1 text-sm text-gray-600 font-semibold">Total Mentoring hours across sector</div>
                            <div className="flex justify-center items-center mb-1">
                                <div className="w-50 h-50 overflow-hidden">
                                    <DonutChart/>
                                </div>
                            </div>
                        </div>
                    </div>
            </div> */}
            <div className="border bg-white mx-4 my-4 col-span-2 rounded-lg">
                 <div className="flex justify-between px-5 py-3 underline underline-offset-[13px] decoration-gray-200">
                    <div className="text-xl">Start-up Dashboard</div>
                    <div className="pt-1"><FaDownload size={0}/></div>
                </div>
                <div className="px-5 pt-2">Overview</div>
                        <div className="grid grid-cols-4 gap-10 px-7 py-2">
                            <div className="shadow-md border border-sm rounded-lg p-2">
                                <div className="pb-1"><FaRegAddressBook size={20} className="text-[#45C74D]"/></div>
                                <div className="text-2xl font-semibold">{props?.props?.startup_total || 0}</div>
                                <div className="text-sm">Total Start-ups</div>
                            </div>
                            <div className="shadow-md border border-sm rounded-lg p-2">
                                <div className="pb-1"><FaRocket size={20} className="text-[#45C74D]"/></div>
                                <div className="text-2xl font-semibold">{props?.props?.active_startups || 0}</div>
                                <div className="text-sm">Active Start-ups</div>
                            </div>

                            <div className="shadow-md border border-sm rounded-lg p-2">
                                <div className="pb-1"><FaGraduationCap size={20} className="text-[#45C74D]"/></div>
                                <div className="text-2xl font-semibold">{props?.props?.graduated_startups || 0}</div>
                                <div className="text-sm">Graduated</div>
                            </div>

                            <div className="shadow-md border border-sm rounded-lg p-2">
                                <div className="pb-1"><FaSignOutAlt size={20} className="text-[#45C74D]"/></div>
                                <div className="text-2xl font-semibold">{props?.props?.dropped_startups || 0}</div>
                                <div className="text-sm">Dropped out</div>
                            </div>            
                    </div>
                    <div className="px-5 flex justify-between pt-5">
                            <div>Start-ups</div>
                            <div className="flex justify-between gap-10">
                                <select className="block w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-[#45C74D] focus:border-[#45C74D]">
                                        <option>Start-ups by Cohort</option>
                                        <option>Start-ups by Cohort</option>
                                </select>
                                <div className="mt-2"><FaEllipsis size={20}/></div>
                            </div>
                    </div>
                    <div className="px-5 flex justify-between pt-5">
                            <div>Start-ups Sectors</div>
                            <div className="flex justify-between gap-10">
                                <select className="block w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-[#45C74D] focus:border-[#45C74D]">
                                        <option>Top 5 Sectors</option>
                                        <option>Start-ups by Cohort</option>
                                </select>
                                <div className="mt-2"><FaEllipsis size={20}/></div>
                            </div>
                    </div>
            </div>
        </div>
    )
}
export default Teams;