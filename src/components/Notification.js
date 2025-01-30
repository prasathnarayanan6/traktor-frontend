import React from "react";
function Notification({isVisible, onClose, children})
{
    if(!isVisible) return null;
    const handleClose = (e) => {
        if(e.target.id === 'wrapper') onClose();
    }
    return(
        <div className='fixed inset-0 bg-black bg-opacity-15 backdrop-blur-xs mt-[56px;] flex ps-[750px;]' id="wrapper" onClick={handleClose}>
            <div className="w-[500px]">
                <div className="p-4 bg-white rounded-md shadow-lg" onClick={handleClose}>
                    <div className="text-2xl pb-2 font-semibold text-gray-500">Notifications</div>
                    <span className="border border-b-1 flex"></span>
                      {children}
                </div>
            </div>
        </div>
    )
}
export default Notification;  
