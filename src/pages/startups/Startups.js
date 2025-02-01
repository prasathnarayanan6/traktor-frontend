import React, {useEffect, useState} from 'react'
import SideBar from '../../components/sidebar';
import NavBar from '../../components/NavBar';
import { FaCar, FaCheck, FaCheckCircle, FaCheckDouble, FaEllipsisV, FaEye, FaFileExcel, FaFilter, FaMinusCircle, FaPlusCircle, FaRecycle, FaSpinner, FaThumbsUp, FaUser, FaUserAlt, FaUserMd} from "react-icons/fa";
import axios from 'axios';
import profile from '../../assets/images/Nandhinimamtraktor.png';
import { FaGears, FaIndianRupeeSign } from 'react-icons/fa6';
import StackedHorizontalBarChart from '../../components/HorizontalChart';
import '../../components/styles/style.css';
import toast from 'react-hot-toast';
import FrameSvg from '../../assets/images/Frame.svg';
import ExportSvg from '../../assets/images/export excel.svg';
function Startups() {
    const [data, setData] = useState([]);
    useEffect(()=>{
        fetchData();
    })
    const fetchData = async () => {
        try {
          const response = await axios.post('http://localhost:3003/api/v1/view');
          setData(response.data.rows); // Assuming your data is in response.data.rows
        } catch (error) {
          console.error('Error fetching data:', error);
        }
    };
    const [show, setShow] = useState(false);
    useEffect(() => {
        setShow(true);
    }, [])
    const[startupsData, setStartupsData] = useState([])
    const [currentPage, setCurrentPage] = useState(1); 
    const [rowsPerPage, setRowsPerPage] = useState(5); 
    const UpdatedFundingData = async() => {
        try
        {
            const result = await axios.get('http://localhost:3003/api/v1/fetch-startup');
            setStartupsData(result.data.rows)
        }
        catch(err)
        {
          console.log(err);
        }
      }
      useEffect(()=> {
        UpdatedFundingData()
      }, [])
      const indexOfLastMentor = currentPage * rowsPerPage;
      const indexOfFirstMentor = indexOfLastMentor - rowsPerPage;
      const currentMentors = startupsData.slice(indexOfFirstMentor, indexOfLastMentor);
      const totalPages = Math.ceil(startupsData.length / rowsPerPage);
        const handleNextPage = () => {
            if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
            }
        };
        const handlePreviousPage = () => {
            if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
            }
        };
        const [status, setStatus] = useState('');
        const[loading, setLoading] = useState(true);
        const handleGraduate = async(official_email_address) => {
            //setStatus('Graduated');
            setLoading(true);
            try
            {
                const result = await axios.put(`http://localhost:3003/api/v1/update-status?startup_status=Graduated&official_email_address=${official_email_address}`);
                if(result)
                {
                    toast.success('Status Marked as graduated');
                    UpdatedFundingData()
                }
            }
            catch(err)
            {
                toast.error('Unknow error occured!')
            }
            finally {
                setLoading(false)
            }
        };

        const handleDrop = async(official_email_address) => {
            //setStatus('Dropped');

            try
            {
                const result = await axios.put(`http://localhost:3003/api/v1/update-status?startup_status=Dropped&official_email_address=${official_email_address}`);
                if(result)
                {
                    toast.success('Status Marked as dropped')
                }
            }
            catch(err)
            {
                toast.error('Unknow error occured!')
            }
        };

        const handleActive = async(official_email_address) => {
            try
            {
                const result = await axios.put(`http://localhost:3003/api/v1/update-status?startup_status=Active&official_email_address=${official_email_address}`);
                if(result)
                {
                    toast.success('Status Marked as active')
                }
            }
            catch(err)
            {
                toast.error('Unknow error occured!')
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
                                    <div className="border bg-white">
                                            <div className="px-5 pt-6 text-md text-[#808080]">Dashboard<span>{' > '}</span>Start-ups</div>
                                            <div className="font-bold text-lg px-5 pt-3">Start-ups</div>
                                            <div className="flex justify-between px-5 mt-3">
                                                <div className="relative">
                                                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                                                    </svg>
                                                    </div>
                                                    <input type="text" id="search-navbar" className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." />
                                                </div>
                                                <div className="flex justify-between gap-4">
                                                        <button className="bg-[#45C74D] text-white block py-2 px-2 rounded-lg ms-3 text-sm font-semibold">Add New Start-ups</button>
                                                        <button><img src={ExportSvg} /></button>
                                                        <button><img src={FrameSvg} /></button>
                                                </div>
                                            </div>
                                            <div className="pt-3">
                                                    <div className="grid grid-cols-2 md:grid-cols-3 gap-5 px-5 mb-2">
                                                            <div className="border shadow-md rounded-lg px-1">
                                                                    <div className="flex justify-end gap-3 my-2">
                                                                            <div className="px-1 bg-[#D8F3D9] rounded-xl text-sm text-[#45C74D]">Active</div>
                                                                            <div className="pt-[3px]"><FaEllipsisV size={14}/></div>
                                                                    </div>
                                                                    <div className="flex justify-center items-center mt-5">
                                                                            <img src={ExportSvg} />
                                                                    </div>
                                                                    <div className="flex justify-center items-center mt-4">
                                                                            <div className="text-sm">Start-up Name</div>
                                                                    </div>
                                                                    <div className="flex justify-center items-center">
                                                                            <div className="text-sm">MM/YY</div>
                                                                    </div>
                                                                    <div className="flex justify-between item-center mx-5 mt-10">
                                                                            <div>
                                                                                    <div className="font-semibold">Mentor</div>
                                                                                    <div>Associated</div>
                                                                            </div>
                                                                            <div>
                                                                                    <div className="font-semibold">Sector</div>
                                                                                    <div>Automotive</div>
                                                                            </div>
                                                                    </div>
                                                                    <div className="mx-5 text-md mt-5 font-semibold">Current Stage</div>
                                                                    <div className="mx-5 mt-1">
                                                                        <div className="w-full bg-gray-200 rounded-full h-1.5 mb-4 dark:bg-gray-700">
                                                                                <div className="bg-[#45C74D] h-1.5 rounded-full" style={{width: '45%'}}></div>
                                                                        </div>
                                                                    </div>
                                                            </div>

                                                            <div className="border shadow-md rounded-lg px-1">
                                                                    <div className="flex justify-end gap-3 my-2">
                                                                            <div className="px-1 bg-[#D8F3D9] rounded-xl text-sm text-[#45C74D]">Active</div>
                                                                            <div className="pt-[3px]"><FaEllipsisV size={14}/></div>
                                                                    </div>
                                                                    <div className="flex justify-center items-center mt-5">
                                                                            <img src={ExportSvg} />
                                                                    </div>
                                                                    <div className="flex justify-center items-center mt-4">
                                                                            <div className="text-sm">Start-up Name</div>
                                                                    </div>
                                                                    <div className="flex justify-center items-center">
                                                                            <div className="text-sm">MM/YY</div>
                                                                    </div>
                                                                    <div className="flex justify-between item-center mx-5 mt-10">
                                                                            <div>
                                                                                    <div className="font-semibold">Mentor</div>
                                                                                    <div>Associated</div>
                                                                            </div>
                                                                            <div>
                                                                                    <div className="font-semibold">Sector</div>
                                                                                    <div>Automotive</div>
                                                                            </div>
                                                                    </div>
                                                                    <div className="mx-5 text-md mt-5 font-semibold">Current Stage</div>
                                                                    <div className="mx-5 mt-1">
                                                                        <div className="w-full bg-gray-200 rounded-full h-1.5 mb-4 dark:bg-gray-700">
                                                                                <div className="bg-[#45C74D] h-1.5 rounded-full" style={{width: '45%'}}></div>
                                                                        </div>
                                                                    </div>
                                                            </div>
                                                            <div className="border shadow-md rounded-lg px-1">
                                                                    <div className="flex justify-end gap-3 my-2">
                                                                            <div className="px-1 bg-[#D8F3D9] rounded-xl text-sm text-[#45C74D]">Active</div>
                                                                            <div className="pt-[3px]"><FaEllipsisV size={14}/></div>
                                                                    </div>
                                                                    <div className="flex justify-center items-center mt-5">
                                                                            <img src={ExportSvg} />
                                                                    </div>
                                                                    <div className="flex justify-center items-center mt-4">
                                                                            <div className="text-sm">Start-up Name</div>
                                                                    </div>
                                                                    <div className="flex justify-center items-center">
                                                                            <div className="text-sm">MM/YY</div>
                                                                    </div>
                                                                    <div className="flex justify-between item-center mx-5 mt-10">
                                                                            <div>
                                                                                    <div className="font-semibold">Mentor</div>
                                                                                    <div>Associated</div>
                                                                            </div>
                                                                            <div>
                                                                                    <div className="font-semibold">Sector</div>
                                                                                    <div>Automotive</div>
                                                                            </div>
                                                                    </div>
                                                                    <div className="mx-5 text-md mt-5 font-semibold">Current Stage</div>
                                                                    <div className="mx-5 mt-1">
                                                                        <div className="w-full bg-gray-200 rounded-full h-1.5 mb-4 dark:bg-gray-700">
                                                                                <div className="bg-[#45C74D] h-1.5 rounded-full" style={{width: '45%'}}></div>
                                                                        </div>
                                                                    </div>
                                                            </div>
                                                    </div>  
                                            </div>  
                                    </div>
                                </div>  
                        </div>
                    </div>
    </div>
  )
}
export default Startups;