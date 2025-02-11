import React, {useState} from "react";
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
                              <div className="">
                                hfg
                              </div>
                        </div>
          </div>
    </div>
  )
}
export default AddStartup;