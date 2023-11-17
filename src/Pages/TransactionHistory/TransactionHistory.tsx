import { CustomerTable } from '../../Components/Main/CustomerTable'

const TransactionHistory = () => {
    return (
        <div className="container pt-24 laptop:mr-[rem]">
            <div className='bg-white space-y-4 px-4 py-8 tablet:p-6 rounded-lg shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]'>
                <h1 className="text-[2rem] text-center mt-4 mb-2 text-[#2E2E3A] leading-normal font-bold">
                    Your Account History And Activities.
                </h1>

                <div className='py-4 overflow-x-auto'>
                    <CustomerTable />
                </div>
            </div>
        </div>
    )
}

export default TransactionHistory