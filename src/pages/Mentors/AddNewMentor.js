import React, { useState, useEffect } from "react";
import SideBar from "../../components/sidebar";
import NavBar from "../../components/NavBar";
import { FaGear, FaMessage } from "react-icons/fa6";
import { FaInfo } from "react-icons/fa";
import Step1 from "./Step/Step1";
import Step2 from "./Step/Step2";
import Step3 from "./Step/Step3";
import axios from "axios";
// import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { ApiAddNewMentor } from "../../API/API";
import backarrow from '../../assets/images/Frame (1).svg';
import messagesvg from '../../assets/images/Frame (2).svg';
import settingsvg from '../../assets/images/Frame (3).svg';
import professionalsvg from '../../assets/images/Frame (4).svg';
// import toast from "react-hot-toast/headless";
import toast from 'react-hot-toast';
function AddNewMentor() {
    const [currentStep, setCurrentStep] = useState(0);
    const navigate = useNavigate();
    const steps = [
        'Description',
        'Professional',
        'Contact',
    ];
    console.log(steps.length);
    const icons = [
        <FaMessage size={20} />,
        <FaInfo size={20} />,
        <FaGear size={20} />
    ];

    const nextPrev = (n) => {
        setCurrentStep((prevStep) => prevStep + n);
    };

    const nxtstep = () => {
        setCurrentStep(() => {
            if(steps.length <= 3){
                return currentStep + 1;
            }
        })
    }

    const [formData, setFormData] = useState({
        description: {
            mentor_name: '',
            mentor_description: ''
        },
        professional: {
            years_of_experience: null,
            area_of_expertise: '',
            current_designation: '',
            institution: '',
            qualification: '',
            year_of_passing_out: null,
            startup_associated: ''
        },
        contact: {
            contact_number: '',
            email_address: '',
            linkedIn_ID: '',
            password: ''
        }
    });
    console.log(formData);
    const handleChange = (e, section) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [section]: {
                ...prevData[section],
                [name]: value,
            },
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const result = await ApiAddNewMentor(formData);
            if(result)
            {
                toast.success("Mentor Created");
                navigate('/addmentor');
            }
        } catch (err) {
            if(err.response)
            {
                console.log(err.response.status);
                    
                    if(err.response.status==400)
                    {
                        toast.error('Please fill necessary data')
                    }
                    else if(err.response.status==401)
                    {
                        toast.error("Please Provide Valid Email");
                    }
                    else if(err.response.status==402)
                    {
                        toast.error('Phone number is not valid')
                    }
                    else if(err.response.status==409)
                    {
                        toast.error('Already exists')
                    }
            }
            else {
                console.log(err);
            }
                  
        }
    };
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
                <NavBar />
                <div className="bg-gray-100">
                        <div className={`mx-10 py-5  content ${showw ? "visible": ""}`}>
                            <div className="bg-white rounded-sm px-10 py-10">
                                    <div className="flex text-sm text-[#808080]">Dashboard {'>'} Mentor {'>'} Add New Mentor</div>
                                    <div className="text-lg font-semibold pt-2 flex gap-3">
                                        <span><img src={backarrow} className="w-[90%]"/></span>
                                        <span className="">Add New Mentor</span>
                                    </div>
                                    <div className="grid grid-cols-3 gap-5 mt-2">
                                            <div className="flex justify-center items-center border bg-[#45C74D] p-3 rounded-xl">
                                                    <div><img src={messagesvg} className="w-[80%]"/></div>
                                                    <div className="text-white text-lg">Description</div>
                                            </div> 
                                            <div className="flex justify-center items-center border bg-[#D8F3D9] p-3 rounded-xl">
                                                    <div><img src={professionalsvg} className="w-[80%]"/></div>
                                                    <div className="text-lg">Professional</div>
                                            </div>  
                                            <div className="flex justify-center items-center border bg-[#D8F3D9] p-3 rounded-xl">
                                                    <div className="text-white"><img src={settingsvg} className="w-[80%]"/></div>
                                                    <div className="text-lg">Contact</div>
                                            </div>  
                                    </div>
                                    <div className="mt-7">
                                        <div className="grid grid-cols-2 gap-5">
                                                    <div>
                                                        <label className="text-md">Name of the mentor</label>
                                                        <input type="text" className="w-[100%] block w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-[#45C74D] focus:border-[#45C74D] mt-1"/>
                                                    </div>
                                                    <div>
                                                            <label>Choose logo</label>
                                                            <input type="text" className="w-[100%] block w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-[#45C74D] focus:border-[#45C74D] mt-1"/>
                                                    </div>
                                                    
                                        </div>
                                        <div className="mt-2">
                                                            <label>Description</label>
                                                            <textarea className="w-[100%] block w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-[#45C74D] focus:border-[#45C74D] mt-1 resize-none "/>
                                        </div>
                                        <div className="flex justify-center item-center mt-7">
                                            <button className="bg-[#45C74D] p-2 text-white rounded-lg" onClick={nxtstep}>Next</button>
                                        </div>
                                    </div>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    );
}

export default AddNewMentor;
