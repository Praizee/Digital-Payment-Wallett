import React from 'react'
import FaqComponent from '../../Components/FaqComponent/FaqComponent'

const Faqs = () => {
    return (
        <div className="container pt-24 pb-16 laptop:mr-[rem]">
            <div className='bg-white space-y-4 px-4 py-8 tablet:p-6 rounded-lg shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]'>
                <h1 className="text-[2rem] text-center mt-4 mb-2 text-[#2E2E3A] leading-normal font-bold">
                    Frequently Asked Questions (FAQs)
                </h1>

                <FaqComponent />
            </div>
        </div>
    )
}

export default Faqs