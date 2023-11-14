

const BuyRecharge = () => {
    return (
        <div className="container pt-24 pb-0">
            <div className='bg-white space-y-4 px-4 py-8 tablet:p-6 rounded-lg shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]'>
                <h1 className="text-[2rem] text-center mt-4 mb-2 text-[#2E2E3A] leading-normal font-bold">
                    Airtime/Data TopUp
                </h1>

                <div className='py-2 space-y-2'>
                    <label htmlFor='payment-options' className='text-[0.825rem] block'>
                        Network*
                    </label>

                    <select name='payment-options' id='payment-options'
                        className=' w-full p-2 text-[0.85rem] border border-gray-400 rounded-lg'>
                        <option value="" className=''>
                            --SELECT MOBILE NETWORK--
                        </option>
                        <option value="paystack-atm" className=''>
                            AIRTEL
                        </option>
                        <option value="automated-bank" className=''>
                            GLO
                        </option>
                        <option value="paystack-atm" className=''>
                            9MOBILE
                        </option>
                        <option value="automated-bank" className=''>
                            MTN
                        </option>
                    </select>
                </div>

                <div className='py-2 space-y-2'>
                    <label htmlFor='mobileNo' className='text-[0.825rem] block'>
                        Mobile Number*
                    </label>

                    <input
                        type="number"
                        id="mobileNo"
                        name="mobileNo"
                        className="input mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                    />
                </div>

                <div className='py-2 space-y-2'>
                    <label htmlFor='amount' className='text-[0.825rem] block'>
                        Amount*
                    </label>

                    <input
                        type="text"
                        id="amount"
                        name="amount"
                        className="input mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                    />
                </div>

                <div className='py-2 space-y-2'>
                    <label htmlFor='payment-options' className='text-[0.825rem] block'>
                        Amount to Pay
                    </label>

                    <div
                        className="input py-3 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm">
                        ______ (N5 Discount)
                    </div>
                </div>

                <div className='flex mt-4'>
                    <button
                        className="inline-block shrink-0 px-6 py-3 mx-auto rounded-md border border-blue-600 bg-blue-600 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
                    >
                        Buy Now
                    </button>
                </div>
            </div>
        </div>
    )
}

export default BuyRecharge