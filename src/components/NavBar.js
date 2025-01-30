import React, {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom';
import img from '../assets/images/nirmaan-iitm.14fdf833.svg';
import profile from '../assets/images/Nandhinimamtraktor.png';
import {FaArrowAltCircleDown, FaBars, FaBell, FaBox, FaBoxes, FaCandyCane, FaComment, FaEye, FaList, FaPaperPlane, FaRegBell, FaRegUserCircle, FaUserCircle } from 'react-icons/fa';
import axios from 'axios';
import APP_URL from '../Config';
import { jwtDecode } from 'jwt-decode';
import ProfileModal from './ProfileModal';
import Messages from './Messages';
import alertify from 'alertifyjs';
import 'alertifyjs/build/css/alertify.css';
import { FaBellConcierge, FaEllipsis, FaMessage, FaPerson } from 'react-icons/fa6';
import Notification from './Notification';
import notifyimage from '../assets/images/Notification.png';
import ActionsModel from '../components/ActionsModel';
import Startupsvg from '../assets/images/Startups.svg';
import Mentorsvg from '../assets/images/Mentor.svg';
import ChatMessage from '../assets/images/message.svg';
import Mentorshipsvg from '../assets/images/Mentorships.svg';
import Eventsvg from '../assets/images/Event.svg';
function NavBar({onSelectionChange, selectedIndex}) {
  const [openNav, setOpenNav] = useState(false);
  // const openSideBar = () => {
  //       setOpenNav(!openNav);
  //       toggleSideBar();
  // }
  const navigate = useNavigate();
  const [bellBlinkChange, setBlinkChange] = useState('')
  const currentPath = window.location.pathname;
  const showArrowIcon = currentPath === '/home';
  const [isBellHovered, setIsBellHovered] = useState(false);
  const [profileHover, setProfileHover] = useState(false);
  // const [rocketHover, setRocketHover] = useState(false);
  // const [arrowHover, setArrowHover] = useState(false);
  const [signOut, setSignOut] = useState(false);
  const [messageNotify, setMessageNotification] = useState(false);
  const handleShow = () => setMessageNotification(true);
  const handleClose = () => setMessageNotification(false);
  const handleMouseEnter = () => {
    setProfileHover(true);
  }
  const handleMouseLeave = () => {
    setProfileHover(false);
  }
  const styles = {
      transform: isBellHovered?"rotate(30deg)" : "",
      transitionTimingFunction: isBellHovered?"ease-in" : "",
      transition: isBellHovered?"0.30s":""
  }
  const handleBellHover = () => {
    setIsBellHovered(!isBellHovered);
  };
  const handleSignOut = () => {
      const token = localStorage.removeItem('token');
      if(!token)
      {
        navigate('/')
      }
  }
  let result = localStorage.getItem('token');
  const[showModal, setShowModal] = useState(false);
  const[showMessages, setShowMessages] = useState(false);
  const[enc, setEnc] = useState('');
  useState(()=>{
    try
    {
      if(!result || result.split('.').length !== 3){
        throw new Error("Invalid format")
      }
      const decoded = jwtDecode(result);
      console.log(decoded);
      let x = decoded.user_mail;
      setEnc(x);
      return
    }
    catch(err)
    {
        console.log(err);
    }
  }, [])
  const[tokenData, setTokenData] = useState('')
  const ProfileView = async() => {
    const result = await axios.get(APP_URL+`profile-data/${enc}`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
          'Content-Type': 'application/json'
        }
    });
    if(result.data.message === "Invalid Token!")
    {
        localStorage.removeItem('token');
    }
    else
    {
      setTokenData(result.data.result.rows[0]);
    }
  }
  const NotificationsData = async() => {
    try{
      const result = await axios.get(`http://localhost:3003/api/v1/notification`, {
        headers: {
          // 'Authorization': `Bearer ${localStorage.getItem('token')}`,
          'Content-Type': 'application/json'
        }
        })
        //console.log(result.data.result);
        if(result.data.result.rows[0].status === "pending")
        {
            setBlinkChange('bg-red-500')
            console.log(result);
        }
        else if(result.data.result.rows[0].status === "approved")
        {
          setBlinkChange('');
        }
    }
    catch(err)
    {
        console.log(err);
    }
  }
  const[notification, SetNotification] = useState([])
  const UpdatedFundingData = async() => {
    try
    {
        const result = await axios.get('http://localhost:3003/api/v1/notification');
        SetNotification(result.data.rows)
    }
    catch(err)
    {
      console.log(err);
    }
  }
  let imageToken  = localStorage.getItem('token');
  let tokenDecodedData = jwtDecode(imageToken);
  let sessionRole = sessionStorage.getItem('role')
  const [image, setImage] = useState('');
  const GetProfilePhotoImage = async() => {
    try
    {
        const result = await axios.get(`http://localhost:3003/api/v1/prof?mail=${tokenDecodedData.user_mail}`)
        let imageUrl = 'https://trktorrr.s3.ap-south-1.amazonaws.com/'
        if(result)
        {
            setImage(imageUrl+result.data.Key);
        }
    }
    catch(err)
    {
      console.log(err); 
    }
  }
  useEffect(() => {
    GetProfilePhotoImage();
  }, [])
  useEffect(()=> {
    setInterval(()=> {
        UpdatedFundingData()
    }, 5000)
  }, [])

  const [color, setColor] = useState(['#afdade', '#afd5de', '#afcdde', '#99b6bf', '#6d858c']);
    // const [selectedIndex, setSelectedIndex] = useState(null);
    // const [screenSize, setScreenSize] = useState('sm:')
    // const darkColor = '#0b5f66';
    // // const toggleSideBar = () => {
    // //     setIsSidebarOpen(!isSidebarOpen);
    // // };
    // const[analysis, setAnalysis] = useState('home');

    // const handleButtonClick = (index) => {
    //     setSelectedIndex(selectedIndex === index ? null : index);
    //     if (selectedIndex === index) {
    //         setSelectedIndex(null);
    //         setAnalysis('home');
    //     } else {
    //         setSelectedIndex(index);
    //         const analysisOptions = ['home', 'teams', 'mentors', 'finance', 'investor'];
    //         setAnalysis(analysisOptions[index]);
    //     }
    // };
  const [actionpopup, setActionpop] = useState(false);
  const handleActionShow = () => setActionpop(true);
  const handleActionClose = () => setActionpop(false);
  return (
    <div className="navbar dm-sans">
      <nav class="bg-white shadow-sm">
                <div class="flex flex-wrap items-center justify-between p-3">
                <div class="flex md:order-2">
                  <button type="button" data-collapse-toggle="navbar-search" aria-controls="navbar-search" aria-expanded="false" class="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 me-1">
                    <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                    </svg>
                    <span class="sr-only">Search</span>
                  </button>
                  <div class="relative hidden md:block">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                      <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                      </svg>
                      <span class="sr-only">Search icon</span>
                    </div>
                    <input type="text" id="search-navbar" className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-[#45C74D] focus:border-[#45C74D]" placeholder="Search..." />
                  </div>
                  <div className="relative hidden md:block">
                        <button onClick={handleActionShow} className="bg-[#45C74D] text-white block py-2 px-2 rounded-lg ms-3 text-sm font-semibold">Action</button>
                  </div>
                  <div className="relative md:block">
                      <div className="text-black px-2 py-2 ms-3"><FaRegBell size={23}/></div>
                  </div>
                  <div className="relative md:block">
                      <div className="text-black px-2 py-2 ms-3"><FaEllipsis size={23}/></div>
                  </div>
                  <div className="relative md:block">
                      <div className="text-black px-2 py-2 ms-3"><FaRegUserCircle size={23}/></div>
                  </div>
                  <button data-collapse-toggle="navbar-search" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-search" aria-expanded="false">
                      <span class="sr-only">Open main menu</span>
                      <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                      </svg>
                  </button>
                </div>
                  <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-search">
                    <div class="relative mt-3 md:hidden">
                      <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                        </svg>
                      </div>
                      <input type="text" id="search-navbar" class="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." />
                    </div>
                    {/* <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                      <li>
                                         
                        <a href="#" className="block py-2 px-3 text-black md:p-0 text-[#45C74D] hover:underline hover:underline-offset-[22px] hover:decoration-4 hover:decoration-[#45C74D]" aria-current="page">Overview</a>
                      </li>
                      <li>
                        <a href="#" className="block py-2 px-3 text-black md:p-0 text-[#45C74D] hover:underline hover:underline-offset-[22px] hover:decoration-4 hover:decoration-[#45C74D]">Start-ups</a>
                      </li>
                      <li>
                        <a href="#" className="block py-2 px-3 text-black block py-2 px-3 text-black md:p-0 text-[#45C74D] hover:underline hover:underline-offset-[22px] hover:decoration-4 hover:decoration-[#45C74D]">Mentor</a>
                      </li>
                      <li>
                        <a href="#" class="block py-2 px-3 text-black block py-2 px-3 text-black md:p-0 text-[#45C74D] hover:underline hover:underline-offset-[22px] hover:decoration-4 hover:decoration-[#45C74D]">Funding</a>
                      </li>
                    </ul> */}
                      <div className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            {color.map((colors, index) => (
                                                  <button
                                                  key={index}
                                                  className="block py-2 px-3 text-black md:p-0 text-[#45C74D] hover:underline hover:underline-offset-[22px] hover:decoration-4 hover:decoration-[#45C74D]"
                                                  // style={{ backgroundColor: selectedIndex === index ? darkColor : colors,
                                                  //     color: selectedIndex === index ? 'white' : 'initial'
                                                  //  }}
                                                  onClick={() => {onSelectionChange(index);}}
                                                  >
                                                  {['Overview', 'Start-ups', 'Mentor', 'Funding'][index]}
                                                  </button>
                            ))}
                      </div>
                  </div>
                </div>
      </nav>
          {/* <nav className="dark:bg-gray-900 shadow-sm border-10" style={{ backgroundColor: '#0b5f66' }}>
            <div className="max-w-screen-3xl flex flex-wrap items-center justify-between mx-auto p-2">
              <button className="text-white text-xl" onClick={openSideBar}><FaBars /></button>
              <a href="https://github.com/prasathnarayanan6/nirmaan-vc-app" className="flex space-x-3 rtl:space-x-reverse">
                  <img src={img} className="h-10" alt="Flowbite Logo" />
                  <span className="self-center text-3xl font-semibold whitespace-nowrap dark:text-white text-green-500 hover:text-green-500 transition-all eas-in-out active:scale-[.100] active:duration-75"><i>Trak<span className="text-white">tor</span></i></span>
              </a>
              <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                  <span className="sr-only">Open main menu</span>
                  <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                  </svg>
              </button>
              <div className="hidden w-full md:block md:w-auto lg:w-auto" id="navbar-default">
                <ul className="font-medium flex flex-col p-6 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-gray-100 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700" style={{ backgroundColor: '#0b5f66' }}>
                  <li>
                     <button onClick={handleShow}  className="relative -left-10 block py-2 px-2 text-white bg-blue-700 rounded md:bg-transparent md:text-white md:p-1 dark:text-white md:dark:text-blue-500 text-xl hover:text-white rounded-3xl hover:rounded-2xl transition-all duration-200 ease-linear cursor-pointer group;" onMouseEnter={handleBellHover} onMouseLeave={handleBellHover}>
                        <FaMessage className="mt-[4px;] text-2xl"/> <span class="sr-only">Notifications</span>
                        <div className={`absolute inline-flex items-center justify-center w-[9px;] h-[9px;] text-xs font-bold text-white bg-green-200 border-0 border-white rounded-full top-1 end-[2px;] dark:border-gray-900 animate-pulse`}><span className="text-xs"></span></div>
                     </button>
                  </li>
                  <li>
                     <button className="relative -left-10 block py-2 px-2 text-white bg-blue-700 rounded md:bg-transparent md:text-gray-300 md:p-1 dark:text-white md:dark:text-blue-500 text-xl hover:text-white rounded-3xl hover:rounded-2xl transition-all duration-200 ease-linear cursor-pointer group;" onMouseEnter={handleBellHover} onMouseLeave={handleBellHover}>
                        <FaRegBell className="mt-[4px;] text-2xl"/> <span class="sr-only">Notifications</span>
                        <div className={`absolute inline-flex items-center justify-center w-[9px;] h-[9px;] text-xs font-bold text-white bg-red-400 border-0 border-white rounded-full top-1 end-[5px;] dark:border-gray-900`}><span className="text-xs"></span></div>
                     </button>
                  </li>
                  <li>
                      <div className="block py-2 px-2 text-white bg-blue-700 rounded md:bg-transparent md:text-gray-300 md:p-1 dark:text-white md:dark:text-blue-500 text-xl hover:text-white rounded-3xl hover:rounded-2xl transition-all duration-300 ease-linear cursor-pointer group; relative -left-10 bg-white" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} ><img className="w-8 h-8 rounded-full" src={image} alt="user photo" />
                            {profileHover && (
                                <div className="absolute top-[33px;] right-[-24px;] mt-1 w-30 border bg-white shadow-sm rounded-lg shadow-sm items-center w-[230%]">
                                    <a href="/settings" className="block py-2 px-4 text-sm text-black text-center">Settings</a>
                                    <a href="/profile" className="block py-2 px-4 text-black text-sm text-center justify-center items-center">Profile</a>
                                    <a onClick={handleSignOut} className="block py-2 px-4 text-black text-sm text-center justify-center items-center">SignOut</a>
                                </div>
                            )}
                      </div>
                  </li>
                </ul>
              </div>
            </div>
          </nav> */}
          <Notification isVisible={messageNotify} onClose={handleClose}>
            {Array.isArray(notification) && notification.length > 0 ? (
                notification.map((dataObj, key) => (
                  <div className="max-h-[50px]">
                      <div className="flex justify-between gap-10 bg-white mt-1" key={key}>  
                          <div className="text-xs">startup Vision have requested for a new connection with startup Vision.
                            <br></br>
                            <span className="text-gray-400">Hello</span>
                          </div>
                          {/* <button className="bg-gray-100 ">View</button> */}
                          <button className='p-3 bg-gray-100 rounded-sm'>View</button>
                          <div className="m-2 inline-block w-[15px] h-[11px] text-sm font-semibold text-white bg-green-500 rounded-full relative">
                                      <button className="w-full h-full"></button>
                                      <span className="absolute left-1/2 top-[-90px] transform -translate-x-1/2 -translate-y-full bg-gray-300 text-white text-xs font-medium px-2 py-1 rounded opacity-0 hover:opacity-100 transition-opacity duration-200">
                                        Mark as Read
                                      </span>
                          </div>
                            {/* <div className="p-2 text-sm">
                                <span className="text-md">{dataObj.description}</span><br></br>
                                <span className='text-xs text-gray-400'>{dataObj.funding_date}</span>
                            </div> */}
                            {/* <div className="p-2 items-center justify-end flex text-xs"><button className="border shadow-sm px-3 py-1 active:scale-95 active:shadow-md transition-transform">Mark as Read</button></div> */}
                            {/* <div className="text-sm pt-5 font-semibold ps-1 ">Requested for Aws</div>
                            <div className="p-4 items-center justify-end flex"><FaEllipsis /></div> */}
                      </div>   
                  </div>
                ))
            ): (
                <div></div>
            )}
          </Notification>
          <ProfileModal isVisible={showModal} onClose={()=>setShowModal(false)}>
                      <center><img src={img} className="h-[60px;]" alt="Flowbite Logo" /></center>
                      <div className="grid grid-cols-2 cols-2 gap-4">
                                    <input name="name" 
                                        className="w-full border-2 border-gray-200 rounded-md p-2 mt-3 bg-transparent hover:border-green-300"
                                        placeholder="Name"
                                        Value={tokenData.user_name}
                                    />
                                    <input name="insti-type" 
                                        className="w-full border-2 border-gray-200 rounded-md p-2 mt-3 bg-transparent hover:border-green-300"
                                        placeholder="Institution type"
                                    />
                                    <input name="sector" 
                                        className="w-full border-2 border-gray-200 rounded-md p-2 mt-3 bg-transparent hover:border-green-300"
                                        placeholder="Sector"
                                        Value={tokenData.user_department}
                                    />
                                    <input name="Email" 
                                        className="w-full border-2 border-gray-200 rounded-md p-2 mt-3 bg-transparent hover:border-green-300"
                                        placeholder="Email"
                                        value={tokenData.user_mail}
                                    />
                                    <input name="contact_number" 
                                        className="w-full border-2 border-gray-200 rounded-md p-2 mt-3 bg-transparent hover:border-green-300"
                                        placeholder="Contact Number"
                                    />
                                    <input name="website" 
                                        className="w-full border-2 border-gray-200 rounded-md p-2 mt-3 bg-transparent hover:border-green-300"
                                        placeholder="Website"
                                    />
                                    <input name="linkedin" 
                                        className="w-full border-2 border-gray-200 rounded-md p-2 mt-3 bg-transparent hover:border-green-300"
                                        placeholder="Linked In"
                                    />
                                    <input name="ceo_name" 
                                        className="w-full border-2 border-gray-200 rounded-md p-2 mt-3 bg-transparent hover:border-green-300"
                                        placeholder="CEO name"
                                        value={tokenData.user_name}
                                    />
                                    <input name="ceo_email" 
                                        className="w-full border-2 border-gray-200 rounded-md p-2 mt-3 bg-transparent hover:border-green-300"
                                        placeholder="CEO email"
                                        value={tokenData.personal_email}
                                    />
                                    <input name="ceo_contact_number" 
                                        className="w-full border-2 border-gray-200 rounded-md p-2 mt-3 bg-transparent hover:border-green-300"
                                        placeholder="CEO contact number"
                                        value={tokenData.user_contact}
                                    />
                                    <button className="text-red-400 font-bold active:scale-[.98] active:duration-75 hover:scale-[1.02] ease-in-out transition-all">Cancel</button>
                                    <button className="text-white bg-green-400 rounded-sm font-bold active p-1 active:scale-[.98] active:duration-75 hover:scale-[1.02] ease-in-out transition-all">Update</button>
                      </div>
          </ProfileModal>

          <ActionsModel isVisible={actionpopup} onClose={()=>handleActionClose(false)}>
                  <div className="flex justfiy-between px-2 gap-4 mt-5 border p-3">
                        <div className=""><img src={Startupsvg} className="w-[100px] bg-[#D8F3D9] p-3 rounded-lg"/></div>
                        <div className="">
                          <span className="text-lg">Add New Start-up</span>
                          <div className="text-xs">Search and connect with start-ups across sectors, industry & experience.</div>
                        </div>
                  </div>
                  <div className="flex justfiy-between px-2 gap-4 mt-5 border p-3">
                        <div className=""><img src={Mentorsvg} className="w-[100px] bg-[#D8F3D9] p-3 rounded-lg"/></div>
                        <div className="">
                          <span className="text-lg">Add New Mentor</span>
                          <div className="text-xs">Search and connect with mentors across sectors, industry & experience.</div>
                        </div>
                  </div>
                  <div className="flex justfiy-between px-2 gap-4 mt-5 border p-3">
                        <div className=""><img src={ChatMessage} className="w-[100px] bg-[#D8F3D9] p-3 rounded-lg"/></div>
                        <div className="">
                          <span className="text-lg">Create New Contact</span>
                          <div className="text-xs">Create & publish job roles at your startups, and notify it to your network</div>
                        </div>
                  </div>
                  <div className="flex justfiy-between px-2 gap-4 mt-5 border p-3">
                        <div className=""><img src={Mentorshipsvg} className="w-[89px] bg-[#D8F3D9] p-3 rounded-lg"/></div>
                        <div className="">
                          <span className="text-lg">Mentoring Session</span>
                          <div className="text-xs">Seamlessly Schedule a Mentoring Session with the Mentors.</div>
                        </div>
                  </div>
                  <div className="flex justfiy-between px-2 gap-4 mt-5 border p-3">
                        <div className=""><img src={Eventsvg} className="w-[89px] bg-[#D8F3D9] p-3 rounded-lg"/></div>
                        <div className="">
                          <span className="text-lg">Create New Event</span>
                          <div className="text-xs">Effortlessly create and manage your next event with ease!</div>
                        </div>
                  </div>
          </ActionsModel>
    </div>
  )
}
export default NavBar;
