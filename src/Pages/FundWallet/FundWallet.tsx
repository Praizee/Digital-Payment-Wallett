import Marquee from "react-fast-marquee";
import { FaWallet } from "react-icons/fa";

const FundWallet = () => {
    return (
        <div className="container pt-24 pb-0">
            <div className='bg-white space-y-4 px-4 py-8 tablet:p-6 rounded-lg shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]'>
                <span className="flex justify-between">
                    <h1 className="text-[2rem] text-center mt-4 mb-2 text-[#2E2E3A] leading-normal font-bold">
                        Fund Wallet
                    </h1>

                    <span className='py-4 text-blue-600'>
                        <FaWallet size={40} title='' />
                    </span>
                </span>

                <Marquee className='font-semibold text-gray-500'>
                    Thank you for choosing us!
                </Marquee>

                <div className='py-8 space-y-4'>
                    <label htmlFor='payment-options' className='text-[0.825rem] block'>
                        Select Payment Option
                    </label>

                    <select name='payment-options' id='payment-options'
                        className=' w-full p-2 text-[0.85rem] border border-gray-400 rounded-lg'>
                        <option value="" className=''>
                            --SELECT PAYMENT MEDIUM--
                        </option>
                        <option value="paystack-atm" className=''>
                            PAYSTACK ATM
                        </option>
                        <option value="automated-bank" className=''>
                            AUTOMATED BANK
                        </option>
                    </select>
                </div>

                <div className='text-right'>
                    <button
                        className="btn normal-case border-blue-600 bg-blue-600 py-3 px- text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 hover:border-blue-600 focus:outline-none focus:ring active:text-blue-500"
                    >
                        Proceed
                    </button>
                </div>

            </div>
        </div>
    )
}

export default FundWallet