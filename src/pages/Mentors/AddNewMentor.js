import React, { useState } from "react";
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
    const icons = [
        <FaMessage size={20} />,
        <FaInfo size={20} />,
        <FaGear size={20} />
    ];

    const nextPrev = (n) => {
        setCurrentStep((prevStep) => prevStep + n);
    };

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

    return (
        <div className="flex">
            <div id="SideBar" className="h-full">
                <SideBar />
            </div>
            <div className="flex-grow">
                <NavBar />
                <div className="">

                </div>
            </div>
        </div>
    );
}

export default AddNewMentor;
