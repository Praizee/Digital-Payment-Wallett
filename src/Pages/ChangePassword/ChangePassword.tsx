
const ChangePassword = () => {
    return (
        <div className="container pt-20 pb-0">

            <div className='bg-white space-y-4 px-4 py-8 tablet:p-6 rounded-lg shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]'>
                <h1 className="text-[2rem] text-center mt-4 mb-2 text-[#2E2E3A] leading-normal font-bold">
                    Change Password
                </h1>

                <div className=''>
                    <label htmlFor="old-password" className="block text-sm font-medium text-gray-700">
                        Old Password*
                    </label>
                    <input
                        type='password'
                        id="old-password"
                        name="old-password"
                        required
                        className="input mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                    />
                </div>

                <div className=''>
                    <label htmlFor="new-password" className="block text-sm font-medium text-gray-700">
                        New Password*
                    </label>
                    <input
                        type='password'
                        id="new-password"
                        name="new-password"
                        required
                        className="input mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                    />
                </div>

                <div className='text-gray-500 space-y-1 tablet:space-y-0'>
                    <p className='text-[0.725rem]'>
                        - Your password can’t be too similar to your other personal information.
                    </p>
                    <p className='text-[0.725rem]'>
                        - Your password must contain at least 8 characters.
                    </p>
                    <p className='text-[0.725rem]'>
                        - Your password can’t be a commonly used password.
                    </p>
                    <p className='text-[0.725rem]'>
                        - Your password can’t be entirely numeric.
                    </p>
                </div>

                <div className=''>
                    <label htmlFor="confirm-new-password" className="block text-sm font-medium text-gray-700">
                        Confirm New Password*
                    </label>
                    <input
                        type='password'
                        id="confirm-new-password"
                        name="confirm-new-password"
                        required
                        className="input mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                    />
                </div>
                <div className='flex mt-4'>
                    <button
                        className="inline-block mx-auto px-6 rounded-md border border-blue-600 bg-blue-600 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
                    >
                        Proceed
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ChangePassword