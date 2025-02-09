import React, {useState, useEffect} from 'react'
import { FaBars, FaBook, FaBookOpen, FaCalendar, FaCalendarCheck, FaChalkboard, FaChalkboardTeacher, FaChartPie, FaCubes, FaDashcube, FaFile, FaFilePdf, FaFileUpload, FaGraduationCap, FaHome, FaPencilAlt, FaPeopleArrows, FaRegCalendarCheck, FaRegFile, FaRocket} from 'react-icons/fa';
import { FaPeopleGroup, FaPersonChalkboard } from 'react-icons/fa6';
import nirmaanlogo from '../assets/images/nirmaan-iitm.14fdf833.svg';
import startupslogo from '../assets/images/Dashboard.svg';
function SideBar({children}) {
    // const [userRole, setUserRole] = useState('customer');  
    // const currentPath = window.location.pathname;
    // const ShowArrowIcon = currentPath === '/customer/Home';
    const currentPath = window.location.pathname;
    const [selectedIndex, setSelectedIndex] = useState('')

    const findCurrentPathname = () => {
        if (currentPath === '/home') {
          setSelectedIndex('bg-[#45C74D] text-white rounded-xl')
        }
        else if (currentPath === '/startups') {
          setSelectedIndex('bg-[#45C74D] text-white rounded-xl')
        }
      }
      useEffect(() => {
        findCurrentPathname();
      }, [])
  return (
  // <div className="fixed top-0 left-0 mt-14 h-screen md:w-11 sm:w-9 w-9 m-0 flex flex-col text-black border-r-0 border-gray-500 shadow-md">
  //       <SideBarLink href="/home">
  //           <SideBarIcon icon={<FaHome size="24" />} tooltipText="Home" />
  //       </SideBarLink>
  //       <SideBarLink href="/startups">
  //           <SideBarIcon icon={<FaGraduationCap size="24" />} tooltipText="Startups" />
  //       </SideBarLink>
  //       <SideBarLink href="/mentors">
  //           <SideBarIcon icon={<FaChalkboardTeacher size="24" />} tooltipText="Mentor" />
  //       </SideBarLink>
  //       <SideBarLink href="/mentorship">
  //           <SideBarIcon icon={<FaPersonChalkboard size="24" />} tooltipText="Mentorship" />
  //       </SideBarLink>
  //       <SideBarLink href="/events">
  //               <SideBarIcon icon={<FaCalendar size="24" />} tooltipText="Events" />
  //       </SideBarLink>  
  //       <SideBarLink href="/connections">
  //         <SideBarIcon icon={<FaPeopleArrows size="24" />} tooltipText="Connections" />
  //       </SideBarLink>
  //       <SideBarLink href="/reports">
  //           <SideBarIcon icon={<FaFilePdf size="24" />} tooltipText="Reports" />
  //       </SideBarLink>
  //       <div className="md:text-sm md:ms-2 mt-10 text-gray-500 font-semibold">V.1.0</div>
  // </div>
  <div className="fixed top-0 left-0 h-screen md:w-[220px] sm:w-9 w-9 m-0 flex flex-col text-black border-r-0 border-gray-500 shadow-md bg-white">
        <div className="md:px-[50px] pt-4"><img src={nirmaanlogo} className="w-[120px;]"/></div>
        <div className="">
            <ul className="py-5 px-8">
                <li className={`flex gap-5 hover:bg-[#45C74D] hover:rounded-xl p-2 hover:text-white mb-2 mt-2 ${currentPath == "/home" && "bg-[#45C74D] text-white rounded-xl"}`}><a href="/home" className="flex gap-5"><FaChartPie size={20}/> Dashboard</a></li>
                <li className={`flex gap-5 hover:bg-[#45C74D] hover:rounded-xl p-2 hover:text-white mb-2 ${currentPath == "/startups" && "bg-[#45C74D] text-white rounded-xl"}`}><a href="/startups" className="flex gap-5"><FaRocket size={20}/>Start-ups</a></li>
                <li className={`flex gap-5 hover:bg-[#45C74D] hover:rounded-xl p-2 hover:text-white mb-2 ${currentPath == "/mentors" && "bg-[#45C74D] text-white rounded-xl"}`}><a href="/mentors" className="flex gap-5"><FaChalkboardTeacher size={20}/>Mentors</a></li>
                <li className={`flex gap-5 hover:bg-[#45C74D] hover:rounded-xl p-2 hover:text-white mb-2 ${currentPath == "/mentorship" && "bg-[#45C74D] text-white rounded-xl"}`}><a href="/mentorship" className="flex gap-5"><FaBookOpen size={20}/>Mentorships</a></li>
                <li className={`flex gap-5 hover:bg-[#45C74D] hover:rounded-xl p-2 hover:text-white mb-2 ${currentPath == "/events" && "bg-[#45C74D] text-white rounded-xl"}`}><a href="/events" className="flex gap-5"><FaRegCalendarCheck size={20} />Events</a></li>
                <li className={`flex gap-5 hover:bg-[#45C74D] hover:rounded-xl p-2 hover:text-white mb-2 ${currentPath == "/connections" && "bg-[#45C74D] text-white rounded-xl"}`}><a href="/connections" className="flex gap-5"><FaPeopleGroup size={20} />Connections</a></li>
                <li className={`flex gap-5 hover:bg-[#45C74D] hover:rounded-xl p-2 hover:text-white mb-2 ${currentPath == "/reports" && "bg-[#45C74D] text-white rounded-xl"}`}><a href="/reports" className="flex gap-5"><FaRegFile size={20} />Reports</a></li>
            </ul>
        </div>
  </div>
  );
}
// const SideBarLink = ({ href, children }) => {
//   return (
//     <a href={href} className="block">
//       {children}
//     </a>
//   );
// };
// const SideBarIcon = ({ icon, tooltipText }) => {
//   const [hoverTooltip, setHoverTooltip] = useState(false);
//   const handleMouseEnter = () => {
//     setHoverTooltip(true);
//   };
//   const handleMouseLeave = () => {
//     setHoverTooltip(false);
//   };
//   return (
//     <div
//       className="relative flex items-center justify-center h-9 w-8 lg:mt-2 mb-3 mx-auto hover:border-2 hover:border-green-400 hover:bg-green-300 text-gray-500 transition-all duration-300 cursor-pointer group active:scale-[.98] active:duration-75 hover:scale-[1.02] ease-in-out transition-all rounded-md"
//       onMouseEnter={handleMouseEnter}
//       onMouseLeave={handleMouseLeave}
//     >
//       {icon}
//       {hoverTooltip && (
//         <span className="absolute w-auto p-2 m-2 min-w-max left-8 rounded-md shadow-md text-slate-800 bg-white text-xs font-bold transition duration-1000 scale-100 border z-10">
//             {tooltipText}
//         </span>
//       )}
//     </div>
//   );
// };
export default SideBar;