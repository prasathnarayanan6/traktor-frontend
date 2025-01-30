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
  return (
    <div className="h-screen flex">
                    <section id="SideBar" className="fixed h-full">
                        <SideBar />
                    </section>
                    <section className="flex-grow">
                        <div className="fixed w-full">
                            <NavBar />
                        </div>
                        <div className="p-[90px;] h-full">
                        <div className="flex justify-between">
                                <h1 className="p-0 text-3xl font-semibold text-gray-500">Startups</h1>
                                <a href={'/addstartup'} className="text-gray-500 text-sm font-semibold mt-1 p-1 px-3 rounded-xl shadow-md text-white" style={{backgroundColor: '#0b5f66'}}>Add new Startup</a>
                        </div>
                        <h1 className="p-0 text-lg text-gray-500 mt-1 ms-1  ">Analytics</h1>
                            <div className={`flex justify-center items-center content ${show ? "visible": ""}`}>
                                <div className="shadow-md rounded-sm mt-10 border flex justify-center items-center md:w-[95%]">
                                     <div className="mt-10 mb-10  border-0 border-t-0  md:w-[95%]">
                                                <div className="flex justify-between mb-4">
                                                      <div>Show entries</div>
                                                      <div><input type="text" className="rounded-sm border border-t-0 shadow-sm" placeholder="Search startups"/></div>
                                                </div>
                                                <table className="table-fixed w-full text-sm p-2">
                                                        <thead>
                                                        <tr>
                                                            <th className="px-5 py-2 text-left text-green-600">Name</th>
                                                            <th className="px-5 py-2 text-left text-green-600">Sector</th>
                                                            <th className="px-5 py-2 text-left text-green-600">Program</th>
                                                            <th className="px-5 py-2 text-left text-green-600">Founder Name</th>
                                                            <th className="px-5 py-2 text-left text-green-600">Status</th>
                                                            <th className="px-5 py-2 text-left text-green-600">Action</th>
                                                        </tr>
                                                        </thead>
                                                        <tbody>
                                                            {currentMentors.length > 0 ? (
                                                                currentMentors.map((dataObj, index) => (
                                                                    <tr key={index} className="border-t border-gray-300 hover:bg-green-100">
                                                                    <td className="px-5 py-2 font-semibold"><a href={`/startup/${dataObj.email_address}`}>{dataObj.startup_name}</a></td>
                                                                    <td className="px-5 py-2">{dataObj.startup_sector}</td>
                                                                    <td className="px-5 py-2"><span className="bg-green-200 p-1 rounded-xl">{dataObj.program}</span></td>
                                                                    <td className="px-5 py-2">{dataObj.founder_name}</td>
                                                                    {loading ? (
                                                                        <td className="px-5 py-2">{dataObj.status === 'Active' && (<span className='p-1 bg-green-100 rounded-2xl px-2'>Active</span>)} {dataObj.status === 'Dropped' && (<span className='p-1 bg-red-100 rounded-2xl px-2'>Dropped</span>)} {dataObj.status === 'Graduated' && (<span className='p-1 bg-yellow-100 rounded-2xl px-2'>Graduated</span>)}</td>
                                                                    ) : (
                                                                        <td className="px-5 py-2">
                                                                            <div role="status">
                                                                                    <svg aria-hidden="true" class="inline w-4 h-4 text-gray-200 animate-spin dark:text-gray-600 fill-green-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                                                                                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                                                                                    </svg>
                                                                                    <span class="sr-only">Loading...</span>
                                                                            </div> 
                                                                        </td>
                                                                    )}
                                                                    <td className="px-5 py-3">
                                                                        {/* <button>
                                                                        <FaEllipsisV />
                                                                        </button> */}
                                                                        <div className="flex space-x-5">
                                                                                <button
                                                                                    className="text-gray-400 relative group"
                                                                                    onClick={() => handleDrop(dataObj.email_address)}
                                                                                >
                                                                                    <FaMinusCircle size={20}/>
                                                                                    {/* <span className="absolute right-[5px] transform -translate-x-1/2 -translate-y-8 bg-gray-700 text-white text-xs p-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                                                                                        Mark as Dropped
                                                                                    </span> */}
                                                                                </button>
                                                                                <button
                                                                                    className="text-gray-400 relative group"
                                                                                    onClick={() => handleGraduate(dataObj.email_address)}
                                                                                >
                                                                                    <FaPlusCircle  size={20}/>
                                                                                    {/* <span className="absolute left-[50px] transform -translate-x-1/2 -translate-y-8 bg-gray-700 text-white text-xs p-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                                                                                        Mark as Graduated
                                                                                    </span> */}
                                                                                </button>

                                                                                <button
                                                                                    className="text-gray-400 relative group"
                                                                                    onClick={() => handleActive(dataObj.email_address)}
                                                                                >
                                                                                    <FaThumbsUp  size={20}/>
                                                                                    {/* <span className="absolute left-[50px] transform -translate-x-1/2 -translate-y-8 bg-gray-700 text-white text-xs p-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                                                                                        Mark as Active
                                                                                    </span> */}
                                                                                </button>
                                                                        </div>
                                                                    </td>
                                                                    </tr>
                                                                ))
                                                                ) : (
                                                                <tr>
                                                                    <td colSpan="5" className="text-center py-2">
                                                                    No data available
                                                                    </td>
                                                                </tr>
                                                            )}
                                                        </tbody>
                                                </table>     
                                        </div>
                                </div>
                            </div>
                            <div className="flex justify-between items-center p-4">
                                    <button
                                    onClick={handlePreviousPage}
                                    disabled={currentPage === 1}
                                    className="text-gray-500 text-sm font-semibold mt-1 p-1 px-3 rounded-xl shadow-md"
                                    style={{ backgroundColor: '#afdade' }}
                                    >
                                    Previous
                                    </button>
                                    <span className="text-sm">
                                    Page {currentPage} of {totalPages}
                                    </span>
                                    <button
                                    onClick={handleNextPage}
                                    disabled={currentPage === totalPages}
                                    className="text-gray-500 text-sm font-semibold mt-1 p-1 px-3 rounded-xl shadow-md"
                                    style={{ backgroundColor: '#afdade' }}
                                    >
                                    Next
                                    </button>
                            </div>
                            {/* <h1 className="text-3xl text-gray-500 font-semibold mt-3">Sectors</h1> */}
                            {/* <div className={`grid md:grid-cols-5 gap-2 mt-3 pb-2 content ${show ? "visible": ""}`}>
                                        <a href="/industrystartups" className="active:scale-[.98] active:duration-75 hover:scale-[1.02] ease-in-out transition-all">
                                            <div className="shadow-md font-semibold rounded-lg w-[100%;] text-gray-600" style={{backgroundColor: '#afdade'}}>
                                                    <div className="p-1 grid grid-cols-2">
                                                            <div className="justify-center flex items-center pt-1 ps-4" style={{color: '#0b5f66'}}>Industry 4.0</div>
                                                            <div className="justify-center flex items-center pt-3 pb-3" style={{color: '#0b5f66'}}><FaGears size={45}/></div>
                                                    </div>
                                            </div>
                                        </a>
                                        <a className="active:scale-[.98] active:duration-75 hover:scale-[1.02] ease-in-out transition-all">
                                            <div className="shadow-md rounded-lg w-[100%;] font-semibold text-gray-600" style={{backgroundColor: '#afd5de'}}>
                                                    <div className="p-1 grid grid-cols-2">
                                                            <div className="justify-center flex items-center pt-1 ps-4" style={{color: '#0b5f66'}}>Healthcare</div>
                                                            <div className="justify-center flex items-center pt-3 pb-3" style={{color: '#0b5f66'}}><FaUserMd size={45}/></div>
                                                    </div>
                                            </div>
                                        </a>
                                        <a className="active:scale-[.98] active:duration-75 hover:scale-[1.02] ease-in-out transition-all">
                                            <div className="shadow-md rounded-lg w-[100%;] font-semibold text-gray-600" style={{backgroundColor: '#afcdde'}}>
                                                    <div className="p-1 grid grid-cols-2">
                                                            <div className="justify-center flex items-center pt-1 ps-4" style={{color: '#0b5f66'}}>Sustainability</div>
                                                            <div className="justify-center flex items-center pt-3 pb-3" style={{color: '#0b5f66'}}><FaRecycle size={45}/></div>
                                                    </div>
                                            </div>
                                        </a>
                                        <a href="/fintechstartups" className="active:scale-[.98] active:duration-75 hover:scale-[1.02] ease-in-out transition-all">
                                            <div className="shadow-md rounded-lg w-[100%;] font-semibold text-gray-600" style={{backgroundColor: '#97bfcc'}}>
                                                    <div className="p-1 grid grid-cols-2">
                                                            <div className="justify-center flex items-center pt-1 ps-4" style={{color: '#0b5f66'}}>FinTech</div>
                                                            <div className="justify-center flex items-center pt-3 pb-3" style={{color: '#0b5f66'}}><FaIndianRupeeSign size={45}/></div>
                                                    </div>
                                            </div>
                                        </a>
                                        <a href="/mobilitystartups" className="active:scale-[.98] active:duration-75 hover:scale-[1.02] ease-in-out transition-all">
                                            <div className="shadow-md rounded-lg w-[100%;] font-semibold text-gray-600" style={{backgroundColor: '#7dada3'}}>
                                                    <div className="p-1 grid grid-cols-2">
                                                            <div className="justify-center flex items-center pt-1 ps-4" style={{color: '#0b5f66'}}>Mobility</div>
                                                            <div className="justify-center flex items-center pt-3 pb-3" style={{color: '#0b5f66'}}><FaCar size={45}/></div>
                                                    </div>  
                                            </div>
                                        </a>
                            </div> */}
                        </div>
                    </section>
    </div>
  )
}
export default Startups;