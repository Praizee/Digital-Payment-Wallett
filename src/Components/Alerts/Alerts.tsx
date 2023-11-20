import React, { useState, useEffect, ReactElement } from "react";

interface AlertsProps {
    error: string | null;
    success: string | null;
}

const Alerts: React.FC<AlertsProps> = ({ error, success }) => {
    const [alerts, setAlerts] = useState<ReactElement[] | null>(null);

    useEffect(() => {
        // Combine error and success messages into a single array
        const combinedMessages = [error, success].filter((message) => message !== null) as string[];

        if (combinedMessages.length > 0) {
            // Create alert components based on both error and success messages
            const newAlerts = combinedMessages.map((message, index) => (
                <div
                    key={index}
                    className={`${error ? "bg-red-500" : "bg-green-500"
                        } text-white p-2 rounded mb-2`}
                >
                    {message}
                </div>
            ));

            setAlerts(newAlerts);

            // Automatically clear the alerts after 3.5 seconds (3500 milliseconds)
            setTimeout(() => {
                setAlerts(null);
            }, 3500);
        }
    }, [error, success]);

    return (
        <div className="fixed top-0 right-0 p-4 transition ease-linear animate-bounce duration-500">
            {alerts}
        </div>
    );
};

export default Alerts;
