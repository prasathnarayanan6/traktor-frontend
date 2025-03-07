import React, {useState, useEffect} from "react";
import './styles/style.css';
function ActionsModel({isVisible, onClose, children}) {
    const handleClose = (e) => {
        if(e.target.id === 'wrapper') onClose();
    }
    console.log('True')
    const [isAnimating, setIsAnimating] = useState(false);
    useEffect(()=>{
        if(isVisible)
        {
                setIsAnimating(true);
        }
        else{
            const timer = setTimeout(()=> setIsAnimating(false), 200);
            return () => clearTimeout(timer);
        }
    }, [isVisible])

    if (!isAnimating && !isVisible) {
        return null;
    }
  return (
        <div className={`fixed inset-0 bg-black bg-opacity-25 backdrop-blur-xs flex justify-center items-center border-md ${isVisible ? 'animate-show' : 'animate-hide'}`}  id="wrapper" onClick={handleClose}>
            <div className="md:w-[350px]">
                <div className="bg-white p-4 rounded-md shadow-lg">
                      {children}
                </div>
            </div>
        </div>
  )
}
export default ActionsModel;