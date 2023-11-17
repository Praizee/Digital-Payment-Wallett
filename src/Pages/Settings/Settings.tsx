import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { useAppContext } from '../../Context/AppContext';
import { getDatabase, ref, set } from 'firebase/database';

import { Spinner } from "@material-tailwind/react";
import Alerts from "../../Components/Alerts/Alerts.jsx";


const Settings = () => {
    const { user } = useAppContext();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [successMessage, setSuccessMessage] = useState(null);
    const [formData, setFormData] = useState({
        bankName: user?.bankName || '', // Initialize with user data or empty string
        accountName: user?.accountName || '', // Initialize with user data or empty string
        phoneNumber: user?.phoneNumber || '', // Initialize with user data or empty string
        accountNumber: user?.accountNumber || '', // Initialize with user data or empty string
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Remove properties with undefined values from formData
        const FormData = Object.fromEntries(
            Object.entries(formData).filter(([key, value]) => value !== undefined)
        );

        // Update user data in the Firebase Realtime Database
        const db = getDatabase();
        const userRef = ref(db, `users/${user.uid}`);

        try {
            // Update only the fields you need to change in the user object
            const updatedUserData = {
                ...user, // Include the existing user data
                bankName: FormData.bankName || user.bankName || '', // Use existing value if not provided in formData
                accountName: FormData.accountName || user.accountName || '', // Use existing value if not provided in formData
                phoneNumber: FormData.phoneNumber || user.phoneNumber || '', // Use existing value if not provided in formData
                accountNumber: FormData.accountNumber || user.accountNumber || '', // Use existing value if not provided in formData
            };

            await set(userRef, updatedUserData);
            console.log("User data updated successfully!");
            setSuccessMessage("User data updated successfully!");

            // Automatically clear the success message after 3.5 seconds (3500 milliseconds)
            setTimeout(() => {
                setSuccessMessage(null);

                // Redirect to '/profile' after 2 seconds (2000 milliseconds)
                setTimeout(() => {
                    navigate('/profile');
                }, 2000);
            }, 3500);
        } catch (error) {
            console.error('Error updating user data:', error);
            Alerts.error("Error updating user data. Please try again.");
        }
    };



    if (!user) {
        // Handle the case where user is not authenticated
        return (
            <div className="container pt-20 pb-0">
                <p>Please log in to access your settings.</p>
            </div>
        );
    }


    return (
        <div className="container pt-20 pb-0">

            <div className='bg-white px-4 py-8 tablet:p-6 rounded-lg shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]'>
                <h1 className="text-[2rem] text-center mt-4 mb-2 text-[#2E2E3A] leading-normal font-bold">
                    Edit Profile
                </h1>

                <form onSubmit={handleSubmit}>
                    <div className='py-2 space-y-2'>
                        <label htmlFor='bankName' className='text-[0.825rem] block'>
                            Bank Name
                        </label>

                        <select
                            name="bankName"
                            id="bankName"
                            value={formData.bankName}
                            onChange={handleChange}
                            // defaultValue="Zenith Bank"
                            required
                            className=' w-full p-2 text-[0.85rem] border border-gray-400 rounded-lg'>
                            <option value="">--SELECT BANK--</option>
                            <option value="Access Bank">Access Bank</option>
                            <option value="Access(Diamond) Bank">Access (Diamond) Bank</option>
                            <option value="ECO Bank">ECO Bank</option>
                            <option value="First Bank of Nigeria">First Bank of Nigeria</option>
                            <option value="FCMBank">FCMBank</option>
                            <option value="Fidelity Bank">Fidelity Bank</option>
                            <option value="GTBank">GTBank</option>
                            <option value="Heritage Bank">Heritage Bank</option>
                            <option value="Kuda Bank">Kuda Bank</option>
                            <option value="Opay">Opay</option>
                            <option value="Palmpay">PalmPay</option>
                            <option value="Polaris Bank">Polaris Bank</option>
                            <option value="Stanbic IBTC">Stanbic IBTC</option>
                            <option value="Sterling Bank">Sterling Bank</option>
                            <option value="UBA">UBA</option>
                            <option value="Union Bank">Union Bank</option>
                            <option value="Unity Bank">Unity Bank</option>
                            <option value="Wema Bank">Wema Bank</option>
                            <option value="Zenith Bank">Zenith Bank</option>
                        </select>
                    </div>

                    <div className='py-2 space-y-2'>
                        <label htmlFor='accountName' className='text-[0.825rem] block'>
                            Account Name
                        </label>

                        <input
                            type="text"
                            id="accountName"
                            name="accountName"
                            value={formData.accountName}
                            onChange={handleChange}
                            required
                            // defaultValue="FIRST MIDDLE SURNAME"
                            // change this value to the actual value of the account name: value={}
                            placeholder="Bank Acount Name"
                            className="input mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                        />
                    </div>

                    <div className='py-2 space-y-2'>
                        <label htmlFor='AccountNumber' className='text-[0.825rem] block'>
                            Account Number*
                        </label>

                        <input
                            type="number"
                            id="accountNumber"
                            name="accountNumber"
                            value={formData.accountNumber}
                            onChange={handleChange}
                            placeholder="10-digit Account Number"
                            required
                            // change this value to the actual value of the account number: value={}
                            // defaultValue="1234567890"
                            className="input mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                        />
                    </div>

                    <div className='py-2 space-y-2'>
                        <label htmlFor='phoneNumber' className='text-[0.825rem] block'>
                            Phone Number*
                        </label>

                        <input
                            type="tel"
                            id="phoneNumber"
                            name="phoneNumber"
                            value={formData.phoneNumber}
                            onChange={handleChange}
                            placeholder="Phone Number"
                            required
                            // change this value to the actual value of the account number: value={}
                            // defaultValue="1234567890"
                            className="input mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                        />
                    </div>

                    <div className='py-2 space-y-2'>
                        <p className='text-[0.825rem] block'>
                            Current Password
                        </p>

                        <div
                            className="input font-semibold py-3 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm">
                            No password set.
                        </div>
                        <p className='text-[0.8rem]'>
                            Raw passwords are not stored, so there is
                            no way to see this user’s current password.
                        </p>
                    </div>

                    <Link to="/reset-password"
                        className="mt-0 text-sm text-[#0071F2] font-semibold link link-hover">
                        Forgot password?
                    </Link>

                    <div className='flex mt-4'>
                        <button
                            type='submit'
                            className="inline-block px-6 py-3 mx-auto rounded-md border border-blue-600 bg-blue-600 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
                            disabled={loading} // Disable the button while loading
                        >
                            {loading ? (
                                <>
                                    <span className="flex place-content-center gap-2">
                                        <Spinner color="blue" className="h-5 w-5 text-gray-500" />
                                        <span className="text-gray-800 text-sm">Saving changes...</span>
                                    </span>
                                </>
                            ) : (
                                'Save Changes'
                            )}
                        </button>
                    </div>

                    {/* Display success message if available */}
                    {successMessage && (
                        <div className="text-green-500 text-center mt-4">
                            {successMessage}
                        </div>
                    )}

                </form>

            </div>
        </div>
    )
}

export default Settings
