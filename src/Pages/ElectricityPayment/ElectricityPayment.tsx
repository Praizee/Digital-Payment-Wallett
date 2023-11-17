

const ElectricityPayment = () => {
    return (
        <div className="container pt-24 pb-0">
            <div className='bg-white space-y-4 px-4 py-8 tablet:p-6 rounded-lg shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]'>
                <h1 className="text-[2rem] text-center mt-4 mb-2 text-[#2E2E3A] leading-normal font-bold">
                    Electricity Bill Payment
                </h1>

                <div className='py-2 space-y-2'>
                    <label htmlFor='provider-name' className='text-[0.825rem] block'>
                        Provider Name*
                    </label>

                    <select name='provider-name' id='provider-name'
                        className=' w-full p-2 text-[0.85rem] border border-gray-400 rounded-lg'>
                        <option value="" className=''>
                            --SELECT Provider--
                        </option>
                        <option value="paystack-atm" className=''>
                            Ikeja Electric
                        </option>
                        <option value="paystack-atm" className=''>
                            Eko Electric
                        </option>
                        <option value="paystack-atm" className=''>
                            Abuja Electric
                        </option>
                        <option value="paystack-atm" className=''>
                            Ibadan Electric
                        </option>
                        <option value="paystack-atm" className=''>
                            Benin Electric
                        </option>
                        <option value="paystack-atm" className=''>
                            Kaduna Electric
                        </option>
                        <option value="paystack-atm" className=''>
                            Port Harcourt Electric
                        </option>
                    </select>
                </div>

                <div className='py-2 space-y-2'>
                    <label htmlFor='meter-number' className='text-[0.825rem] block'>
                        Meter Number*
                    </label>

                    <input
                        type="number"
                        id="meter-number"
                        name="meter-number"
                        className="input mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                    />
                </div>

                <div className='py-2 space-y-2'>
                    <label htmlFor='payment-options' className='text-[0.825rem] block'>
                        Meter Type*
                    </label>

                    <select name='payment-options' id='payment-options'
                        className=' w-full p-2 text-[0.85rem] border border-gray-400 rounded-lg'>
                        <option value="" className=''>
                            ------
                        </option>
                        <option value="paystack-atm" className=''>
                            Prepaid
                        </option>
                        <option value="paystack-atm" className=''>
                            Postpaid
                        </option>
                    </select>
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
                    <label htmlFor='customer-phone' className='text-[0.825rem] block'>
                        Customer Phone*
                    </label>

                    <input
                        type="number"
                        id="customer-phone"
                        name="customer-phone"
                        className="input mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                    />
                </div>

                <div
                    className="input py-3 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm">
                    N10.0 Charge
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

export default ElectricityPayment