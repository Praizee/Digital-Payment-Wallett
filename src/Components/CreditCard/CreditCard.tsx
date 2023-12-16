import { FC } from "react"
import './styles.css'
import { BsBank } from "react-icons/bs";
import { useAppContext } from '../../Context/AppContext'; // Updated import to useAppContext

const CreditCard: FC = () => {
    const { user } = useAppContext(); // Use the user state from the context
    // console.log('User:', user); // log the user data

    return (
        <section>
            <div className="">
                <div className="card min-w-[500px] max-w-full h-[300px] text-white cursor-pointer ">

                    <div className="card-inner w-full h-full relative">
                        {/* card front */}
                        <div className="front w-full h-full absolute top-0 left-0 rounded-[15px] py-[20px] px-[30px] overflow-hidden z-[1]">
                            <img src="https://i.ibb.co/PYss3yv/map.png" alt='world map'
                                className="-z-[1] top-0 left-0 absolute w-full opacity-[0.3]" />
                            <div className="flex content-center justify-between mb-6">
                                <h1 className='font-mono text-[1.2rem]'>
                                    BANK OF AFRICA
                                </h1>
                                <BsBank className='w-[40px] h-[30px]' title='card-chip' />
                            </div>

                            <img src="https://i.ibb.co/G9pDnYJ/chip.png" className='w-[60px] h-[50px]' alt='card-chip' />

                            <div className="flex content-center justify-between text-[35px] mt-2">
                                <h1 className='font-mono text-[2rem]'>
                                    5244
                                </h1>
                                <h1 className='font-mono text-[2rem]'>
                                    2150
                                </h1>
                                <h1 className='font-mono text-[2rem]'>
                                    8252
                                </h1>
                                <h1 className='font-mono text-[2rem]'>
                                    6420
                                </h1>
                            </div>

                            <div className='flex gap-4'>
                                <p className='uppercase text-sm leading-none font-mono'>
                                    VALID <br /> TILL
                                </p>
                                <p className='uppercase font-mono'>
                                    10 / 27
                                </p>
                            </div>

                            <div className="flex content-center justify-between name text-[22px] mt-12">
                                <p className='uppercase font-mono'>
                                    CARD-HOLDER: <b>{user?.firstName} {user?.lastName}</b>
                                    {/* {user && user.firstName ? user.firstName : 'User'} */}
                                </p>
                                <img src="https://i.ibb.co/WHZ3nRJ/visa.png" className='w-[80px]' alt='VISA' />
                            </div>
                        </div>

                        {/* card back */}
                        <div className="back w-full h-full absolute top-0 left-0 rounded-[15px] py-[20px] px-[30px] overflow-hidden z-[1]">
                            <img src="https://i.ibb.co/PYss3yv/map.png" alt='world-map' className="-z-[1] top-0 left-0 absolute w-full opacity-[0.3]" />
                            <div className="bg-[#222] mx-[-30px] h-[60px] mt-[10px]"></div>
                            <div className="flex content-center justify-between card-cvv flex-1 mt-[20px]">
                                <div>
                                    <img src="https://i.ibb.co/S6JG8px/pattern.png" alt='pattern'
                                        className='rounded-none block leading-[0]'
                                    />
                                </div>
                                <p className='font-mono bg-white text-black font-semibold text py-3 px-6'>
                                    824
                                </p>
                            </div>
                            <div className="flex content-center justify-between mt-[30px] text-[14px]">
                                <p className='font-mono text-sm leading-[0.9]'>
                                    Please remember to keep your credit card information
                                    secure and never share it with anyone unless you are
                                    making a secure transaction with a trusted entity.
                                </p>
                            </div>
                            <div className="flex content-center justify-between signature mt-8">
                                <p className='font-mono'>
                                    CUSTOMER SIGNATURE: <i className='font-cursive text-[1.5rem]'>{user?.firstName} {user?.lastName}</i>
                                </p>
                                {/* <img src="https://i.ibb.co/WHZ3nRJ/visa.png" className='w-[80px]' /> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CreditCard


