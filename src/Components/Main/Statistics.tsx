import React, { useState } from "react";

const Statistics = () => {

    return (
        <section className="text-black">
            <div className="">

                <div className="relative grid tablet:w-auto w-max laptop:grid-cols-3 tablet:grid-cols-2 grid-cols-1 gap-4">

                    <div className="border bg-white p-4 rounded-lg space-y-1 relative">
                        <p className="text-[0.625rem] font-medium">
                            ALL CUSTOMERS
                        </p>
                        <span className="flex gap-4">
                            <h2 className="text-[1.25rem] font-bold">
                                21,224
                            </h2>
                            <p className="text-[#FD4438] py-1 text-[0.9375rem] font-bold">
                                ↓ 0.7%
                            </p>
                        </span>
                        <span className="flex space-x-1">
                            <p className="text-[#00D88A] font-semibold text-[0.725rem]">
                                +17 New
                            </p>
                            <p className="text-[0.725rem] font-semibold">
                                customers compared to yesterday
                            </p>
                        </span>
                    </div>

                    <div className="border bg-white p-4 rounded-lg space-y-1 relative">
                        <p className="text-[0.625rem] font-medium">
                            TRANSACTIONS PROCESSED
                        </p>
                        <span className="flex gap-4">
                            <h2 className="text-[1.25rem] font-bold">
                                129324
                            </h2>
                            <p className="text-[#FD4438] py-1 text-[0.9375rem] font-bold">
                                ↓ 8.5%
                            </p>
                        </span>
                        <span className="flex space-x-1">
                            <p className="text-[0.725rem] font-semibold">
                                compared to </p>
                            <p className="text-[#00D88A] font-semibold text-[0.725rem]">
                                3901
                            </p>
                            <p className="text-[0.725rem] font-semibold">
                                last month</p>
                        </span>
                    </div>

                    <div className="border bg-white p-4 rounded-lg space-y-1 relative">
                        <p className="text-[0.625rem] font-medium">
                            FAILED TRANSACTIONS
                        </p>
                        <span className="flex gap-4">
                            <h2 className="text-[1.25rem] font-bold">
                                324
                            </h2>
                            <p className="text-[#FD4438] py-1 text-[0.9375rem] font-bold">
                                ↓ 8.5%
                            </p>
                        </span>
                        <span className="flex">
                            <p className="text-white px-1 rounded-lg bg-[#1CA78B] font-semibold text-[0.725rem]">
                                ↑ 8.5%
                            </p>
                            <p className="text-[0.725rem] font-semibold">
                                &nbsp; from last 10 days
                            </p>
                        </span>
                    </div>

                </div>


            </div>
        </section>
    );
};

export default Statistics;
