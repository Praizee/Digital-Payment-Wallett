import React, { useEffect, useState } from 'react';
import { BsFillCheckCircleFill } from "react-icons/bs";

const Notification = ({ message, onClose }) => {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setVisible(false);
            onClose(); // Call the onClose function when the notification is closed
        }, 5000);

        return () => clearTimeout(timer);
    }, [onClose]);

    return (
        <div
            className={`fixed flex bottom-0 z-[100] left-0 right-0 mx-auto space-x-4 p-4 bg-success text-white rounded-md transition-opacity 
            ${visible ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}
        >
            <span className=''>
                <BsFillCheckCircleFill size={20} />
            </span>
            <p className=' font-semibold'>
                {message}
            </p>
        </div>
    );
};

export default Notification;
