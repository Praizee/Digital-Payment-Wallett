import { FC, useState } from 'react';

const CableSubscription: FC = () => {
    const [service, setService] = useState<string>(''); // State to store the selected service
    const [plans, setPlans] = useState<CablePlans>([]); // State to store the available plans based on the selected service
    // Initialize with an empty array

    // Define the available services and their corresponding plans
    const serviceOptions = [
        { label: 'DSTV', value: 'dstv' },
        { label: 'GOTV', value: 'gotv' },
        { label: 'STARTIMES', value: 'startimes' },
        // Add more services as needed
    ];

    type CablePlans = {
        label: string;
        value: string;
    }[];

    type PlansByService = {
        dstv: CablePlans;
        gotv: CablePlans;
        startimes: CablePlans;
        // Add more services as needed
    };

    const plansByService: PlansByService = {
        dstv: [
            { label: '-----', value: '' },
            { label: 'DStv Premium - ₦24,500 monthly', value: 'premium' },
            { label: 'DStv Compact Plus - ₦16,600 monthly', value: 'compact-plus' },
            { label: 'DStv Compact - ₦10,500 monthly', value: 'compact' },
            { label: 'DStv Confam - ₦6,200 monthly', value: 'confam' },
            { label: 'DStv Yanga - ₦3,500 monthly', value: 'yanga' },
            { label: 'DStv Padi - ₦2,500 monthly', value: 'padi' },
            // { label: 'Premium - ₦24,500 monthly', value: 'basic' },
            // Add more plans as needed
        ],
        gotv: [
            { label: '-----', value: '' },
            { label: 'GOtv Supa+ - ₦10,000 monthly', value: 'supa-plus' },
            { label: 'GOtv Supa - ₦6,400 monthly', value: 'supa' },
            { label: 'GOtv Max - ₦4,850 monthly', value: 'max' },
            { label: 'GOtv Jolli - ₦3,300 monthly', value: 'jolli' },
            { label: 'GOtv Jinja - ₦2,250 monthly', value: 'jinja' },
            { label: 'GOtv Smallie - ₦1,100 monthly, 2,900 quarterly, 8600 annually', value: 'smallie' },
            // Add more plans as needed
        ],
        startimes: [
            { label: '------', value: '' },
            { label: 'Startimes Nova Bouquet - (N900/month)', value: 'nova bouquet' },
            { label: 'Startimes Smart Bouquet - (N2200/month)', value: 'smart bouquet' },
            { label: 'Startimes Super Bouquet - (N4200/month)', value: 'super bouquet' },
            { label: 'Startimes Chinese Bouquet - (N6600/month)', value: 'chinese bouquet' },
            // Add more plans as needed
        ],
        // Add plans for other services here
    };

    // Handle the change of the first select
    const handleServiceChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedService = e.target.value as keyof PlansByService;
        setService(selectedService);
        setPlans(plansByService[selectedService] || []);
        // Use an empty array if plans don't exist
    };

    return (
        <div className="container pt-24 pb-0">

            <div className=''>
                <div className='bg-white space-y-4 px-4 py-8 tablet:p-6 rounded-lg shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]'>
                    <h1 className="text-[2rem] text-center mt-4 mb-2 text-[#2E2E3A] leading-normal font-bold">
                        Cable Subscription
                    </h1>

                    <div className='py-2 space-y-2'>
                        <label htmlFor='cable-subscription' className='text-[0.825rem] block'>
                            Cable Name*
                        </label>

                        <select name='cable-subscription' value={service}
                            id='cable-subscription'
                            onChange={handleServiceChange}
                            className=' w-full p-2 text-[0.85rem] border border-gray-400 rounded-lg'>
                            <option value="">Select a service</option>
                            {serviceOptions.map((option) => (
                                <option key={option.value} value={option.value}>
                                    {option.label}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className='py-2 space-y-2'>
                        <label htmlFor='smartCard-number' className='text-[0.825rem] block'>
                            Smart Card number / IUC number*
                        </label>

                        <input
                            type="number"
                            id="smartCard-number"
                            name="smartCard-number"
                            className="input mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                        />
                    </div>

                    <div className='py-2 space-y-2'>
                        <label htmlFor='payment-options' className='text-[0.825rem] block'>
                            Cable Plan*
                        </label>

                        {plans.length > 0 && (
                            <select name='payment-options' id='payment-options'
                                className=' w-full p-2 text-[0.85rem] border border-gray-400 rounded-lg'>
                                {plans.map((plan) => (
                                    <option key={plan.value} value={plan.value}>
                                        {plan.label}
                                    </option>
                                ))}
                            </select>
                        )}
                    </div>

                    {/* <div
                        className="input py-3 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm">
                        N10.00 Charge
                    </div> */}

                    <div className='flex mt-4'>
                        <button
                            className="inline-block px-6 py-3 mx-auto shrink-0 rounded-md border border-blue-600 bg-blue-600 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
                        >
                            Buy Now
                        </button>
                    </div>

                </div>

                <div className='pt-4 px-4'>
                    <p className='text-[0.8rem] text-black/60'>
                        * You can contact DSTV/GOtv's customers
                        care unit on 01-2703232/08039003788 or the
                        toll free lines: 08149860333, 07080630333,
                        and 09090630333 for assistance, STARTIMES's
                        customers care unit on (094618888, 014618888).
                    </p>
                </div>
            </div>
        </div>
    )
}

export default CableSubscription