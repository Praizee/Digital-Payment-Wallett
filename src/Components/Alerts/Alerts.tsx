import React, { useState, useEffect } from "react";

const Alerts = ({ errorMessages, successMessages }) => {
    const [alerts, setAlerts] = useState([]);

    useEffect(() => {
        // Ensure that both errorMessages and successMessages are arrays
        const errorMessagesArray = Array.isArray(errorMessages) ? errorMessages : [];
        const successMessagesArray = Array.isArray(successMessages) ? successMessages : [];

        // Combine error and success messages into a single array
        const combinedMessages = [...errorMessagesArray, ...successMessagesArray];

        if (combinedMessages.length > 0) {
            // Create alert components based on both error and success messages
            const newAlerts = combinedMessages.map((message, index) => (
                <div
                    key={index}
                    className={`${errorMessagesArray.includes(message) ? "bg-red-500" : "bg-green-500"
                        } text-white p-2 rounded mb-2`}
                >
                    {message}
                </div>
            ));

            setAlerts(newAlerts);

            // Automatically clear the alerts after 3.5 seconds (3500 milliseconds)
            setTimeout(() => {
                setAlerts([]);
            }, 3500);
        }
    }, [errorMessages, successMessages]);

    return (
        <div className="fixed top-0 right-0 p-4 transition ease-linear animate-bounce duration-500">
            {alerts}
        </div>
    );
};

export default Alerts;
