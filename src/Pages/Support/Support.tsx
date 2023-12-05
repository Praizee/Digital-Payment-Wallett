import { FC } from 'react'

const Support: FC = () => {
    return (
        <div className="container pt-24 laptop:mr-[rem]">
            <div className='bg-white space-y-4 px-4 py-8 tablet:p-6 rounded-lg shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]'>
                <h1 className="text-[2rem] text-center mt-4 mb-2 text-[#2E2E3A] leading-normal font-bold">
                    Support
                </h1>

                <div className='py-8 text-sm laptop:flex space-x-1'>
                    <p className=''>
                        To contact us, send an email to us at:
                    </p>
                    <a href="mailto:hi@email.com"
                        className='link link-hover text-blue-500'>
                        hi@email.com
                    </a>,
                    <p className=''>
                        we will provide a response as soon as possible. Thank you
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Support