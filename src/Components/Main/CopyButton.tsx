import { useState } from "react";
import { IoCopyOutline } from "react-icons/io5";
import Notification from "../Notifications/TextCopyNotification";

const CopyButton = ({ selectedBank }: { selectedBank: string }) => {
    const [showNotification, setShowNotification] = useState(false);

    const handleCopyClick = (e: React.MouseEvent) => {
        e.preventDefault(); // Prevent the default behavior

        // Define bankAccountNumbers object here with account numbers for each bank
        const bankAccountNumbers = {
            "Sterling Bank Ltd": "9876543310",
            "UBA Bank PLC": "8452099123",
            "Wema Bank PLC": "1234567890",
            "Zenith Bank PLC": "9876543210",
        };

        // Get the account number based on the selected bank
        const accountNumber = bankAccountNumbers[selectedBank as keyof typeof bankAccountNumbers];

        const textToCopy = `${accountNumber} — ${selectedBank}`;

        const textArea = document.createElement('textarea');
        textArea.value = textToCopy;

        // Make the textarea invisible
        textArea.style.position = 'fixed';
        textArea.style.top = '0';
        textArea.style.left = '0';
        textArea.style.opacity = '0';

        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();

        try {
            // Execute the copy command
            const successful = document.execCommand('copy');
            if (successful) {
                console.log('Text copied to clipboard');
                setShowNotification(true); // Show the notification
            } else {
                console.error('Unable to copy text to clipboard');
            }
        } catch (err) {
            console.error('Unable to copy text to clipboard', err);
        }

        // Clean up
        document.body.removeChild(textArea);
    };

    const handleCloseNotification = () => {
        setShowNotification(false); // Hide the notification
    };

    return (
        <>
            {/* 'copy' icon */}
            <span
                className="bg-[#2488FF80]/50 p-1 rounded-lg transform scale-x-[-1] cursor-pointer"
                onClick={handleCopyClick} title="Copy"
            >
                <IoCopyOutline size={25} />
            </span>

            {showNotification && (
                <Notification
                    message="Text copied to clipboard"
                    onClose={handleCloseNotification} // Pass the onClose function
                />
            )}
        </>
    );
};

export default CopyButton;
