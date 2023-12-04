import { FC } from 'react'


const PinManagement: FC = () => {
    return (
        <div className="container pt-24 laptop:mr-[rem]">
            <div className='laptop:flex gap-20 space-y-20 laptop:space-y-0 tablet:place-content-center tablet:px-10'>
                <div className='bg-white tablet:min-w-[22rem] my-10 space-y-4 tablet:my-0 px-4 py-8 tablet:p-6 rounded-lg shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]'>
                    <h1 className="text-[2rem] text-center mt-4 mb-2 text-[#2E2E3A] leading-normal font-bold">
                        Change Your Pin
                    </h1>

                    <div className=' px-4 tablet:px-0'>
                        <label htmlFor="enter-old-pin" className="block text-sm font-medium text-gray-700">
                            Old Pin*
                        </label>
                        <input
                            type='password'
                            id="enter-old-pin"
                            name="enter-old-pin"
                            required
                            className="input mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                        />
                    </div>

                    <div className=' px-4 tablet:px-0'>
                        <label htmlFor="enter-new-pin1" className="block text-sm font-medium text-gray-700">
                            Enter New Pin*
                        </label>
                        <input
                            type='password'
                            id="enter-new-pin1"
                            name="enter-new-pin1"
                            required
                            className="input mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                        />
                    </div>

                    <div className=' px-4 tablet:px-0'>
                        <label htmlFor="re-enter-new-pin" className="block text-sm font-medium text-gray-700">
                            Re-Enter New Pin*
                        </label>
                        <input
                            type='password'
                            id="re-enter-new-pin"
                            name="re-enter-new-pin"
                            required
                            className="input mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                        />
                    </div>

                    <button
                        className="inline-block w-full my-4 rounded-md border border-blue-600 bg-blue-600 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
                    >
                        Change Pin
                    </button>
                </div>

                {/* reset pin */}
                <div className='bg-white tablet:min-w-[22rem] my-10 space-y-4 tablet:my-0 px-4 py-8 tablet:p-6 rounded-lg shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]'>
                    <h1 className="text-[2rem] text-center mt-4 mb-2 text-[#2E2E3A] leading-normal font-bold">
                        Reset Your Lost Pin
                    </h1>

                    <div className=' px-4 tablet:px-0'>
                        <label htmlFor="reset-password" className="block text-sm font-medium text-gray-700">
                            Enter your Password*
                        </label>
                        <input
                            type='password'
                            id="reset-password"
                            name="reset-password"
                            required
                            className="input mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                        />
                    </div>

                    <div className=' px-4 tablet:px-0'>
                        <label htmlFor="enter-new-pin" className="block text-sm font-medium text-gray-700">
                            Enter New Pin*
                        </label>
                        <input
                            type='password'
                            id="enter-new-pin"
                            name="enter-new-pin"
                            required
                            className="input mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                        />
                    </div>

                    <div className=' px-4 tablet:px-0'>
                        <label htmlFor="re-enter-new-pin2" className="block text-sm font-medium text-gray-700">
                            Re-Enter New Pin*
                        </label>
                        <input
                            type='password'
                            id="re-enter-new-pin2"
                            name="re-enter-new-pin2"
                            required
                            className="input mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                        />
                    </div>

                    <button
                        className="inline-block w-full my-4 rounded-md border border-blue-600 bg-blue-600 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
                    >
                        Reset Pin
                    </button>
                </div>
                {/* end of reset pin */}


            </div>
        </div>
    )
}

export default PinManagement