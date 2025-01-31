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
    <div className={`flex`}>
                    <div>
                            <SideBar />
                    </div>
                    <div className="ms-[221px] flex-grow">
                        <NavBar/>
                        <div>Hello</div>
                    </div>
    </div>
  )
}
export default Startups;