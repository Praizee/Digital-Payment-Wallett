import { Link } from 'react-router-dom'
import { useAppContext } from '../../Context/AppContext';
import { FC } from 'react';


const Profile: FC = () => {
    const { user } = useAppContext(); // Use the user state from the context

    return (
        <div className="container pt-20 pb-0">

            <div className='bg-white px-4 py-8 tablet:p-6 rounded-lg shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]'>
                <h1 className="text-[2rem] text-center mt-4 mb-2 text-[#2E2E3A] leading-normal font-bold">
                    Profile
                </h1>

                <div className='flex px-4 tablet:px-10 justify-between border-2 border-slate-300 border-x-transparent py-4'>
                    <h2 className='font-semibold'>Username</h2>
                    <p>{user ? user.firstName : 'FirstName'}</p>
                </div>

                <div className='flex px-4 tablet:px-10 justify-between border-2 border-slate-300 border-x-transparent border-t-transparent py-4'>
                    <h2 className='font-semibold'>Phone Number</h2>
                    {/* <p>+2349012345678</p> */}
                    <p className='italic text-red-300'>Not yet set</p>
                </div>

                <div className='flex px-4 tablet:px-10 justify-between border-2 border-slate-300 border-x-transparent border-t-transparent py-4'>
                    <h2 className='font-semibold'>Email</h2>
                    <p>{user ? user.email : 'user@mail.com'}</p>
                </div>

                <div className='flex px-4 tablet:px-10 justify-between border-2 border-slate-300 border-x-transparent border-t-transparent py-4'>
                    <h2 className='font-semibold'>Bank Name</h2>
                    <p>
                        {user && user.accountName ? (
                            user.accountName
                        ) : (
                            <span className="text-red-300">Not yet set</span>
                        )}
                    </p>
                </div>

                <div className='flex px-4 tablet:px-10 justify-between border-2 border-slate-300 border-x-transparent border-t-transparent py-4'>
                    <h2 className='font-semibold'>Account Number</h2>
                    {/* <p>1234567890</p> */}
                    <p className='italic text-red-300'>Not yet set</p>
                </div>

                <div className='flex mt-4'>
                    <Link to="/settings"
                        className="inline-block mx-auto px-8 py-3 my- rounded-md border border-blue-600 bg-blue-600 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500">
                        Update
                    </Link>
                </div>

            </div>
        </div >
    )
}

export default Profile

// Unused(prolly later)
{/* <div className='flex justify-between bg-white p-10 text-left rounded-lg shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]'>

<div className='px-10 space-y-6 border-2 border-slate-300 border-x-transparent'>
    <h2 className='font-semibold'>Username</h2>
    <h2 className='font-semibold'>Phone Number</h2>
    <h2 className='font-semibold'>Email</h2>
    <h2 className='font-semibold'>Bank Name</h2>
    <h2 className='font-semibold'>Account Number</h2>
</div>

<div className='px-10 space-y-6'>
    <p>Praizee</p>
    <p>+2349012345678</p>
    <p>user@mail.com</p>
    <p>Zenith Bank</p>
    <p>1234567890</p>
</div>

</div> */}