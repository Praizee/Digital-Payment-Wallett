import React from 'react'
import { Link } from "react-router-dom";
import "./styles.css"

const NotFoundPage = () => {
    return (
        <div className='w-full'>
            <div className="grid h-screen px-4 bg-white place-content-center">
                <div className="text-center">
                    <h1 className="font-black text-gray-200 text-9xl">404</h1>

                    <p className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Uh-oh!
                    </p>

                    <p className="mt-4 text-gray-500">We can't find that page.</p>

                    <Link to="/" className="btn mt-6 text-white hover:bg-[#010886] normal-case font-medium border-none bg-[#010886]/90 ">Go Back Home</Link>

                </div>
            </div>

        </div>
    )
}

export default NotFoundPage