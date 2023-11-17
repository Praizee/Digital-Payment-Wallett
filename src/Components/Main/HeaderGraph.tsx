import { useState } from "react";
import DailyGraph from "../../assets/Graph.png";
import WeeklyGraph from "../../assets/Graph-3.png";
import MonthlyGraph from "../../assets/Graph-2.png";

const HeaderGraph = () => {
    const [selectedInterval, setSelectedInterval] = useState("Daily");

    // Define the mapping of interval names to graph images and balances
    const intervalToDataMap = {
        Daily: { graph: DailyGraph, balance: "₦629,394", day: "Today so far", },
        Weekly: { graph: WeeklyGraph, balance: "₦1,234,567", day: "This week so far", },
        Monthly: { graph: MonthlyGraph, balance: "₦5,678,901", day: "This month so far", },
    };

    const handleIntervalChange = (interval) => {
        setSelectedInterval(interval);
    };

    return (
        <section className="">
            <div className="">
                <div className="p-4 hidden tablet:block tablet:max-w-[38.3125rem] w-auto h-[24.4375rem] text-black bg-white rounded-lg">
                    <span className="flex justify-between">
                        <span>
                            {/* so far */}
                            <p className="text-[0.75rem] text-[#2E2E3A] leading-normal font-bold">
                                {intervalToDataMap[selectedInterval].day}
                            </p>
                            {/* end of 'so far' */}

                            {/* Display the selected balance based on the state */}
                            <h1 className="text-[1.25rem] text-[#2E2E3A] leading-normal font-black">
                                {intervalToDataMap[selectedInterval].balance}
                            </h1>
                            {/* Display the selected balance based on the state */}
                        </span>
                        <span className="space-x-4 rounded-xl bg-[#ECECEC]">
                            <p
                                onClick={() => handleIntervalChange("Daily")}
                                className={`btn rounded-xl normal-case px-4 ${selectedInterval === "Daily"
                                    ? "text-white bg-[#0071F2]/80 hover:bg-[#0071F2]"
                                    : "text-black"
                                    }`}
                            >
                                Daily
                            </p>
                            <p
                                onClick={() => handleIntervalChange("Weekly")}
                                className={`btn rounded-xl normal-case px-4 ${selectedInterval === "Weekly"
                                    ? "text-white bg-[#0071F2]/80 hover:bg-[#0071F2]"
                                    : "text-black"
                                    }`}
                            >
                                Weekly
                            </p>
                            <p
                                onClick={() => handleIntervalChange("Monthly")}
                                className={`btn rounded-xl normal-case px-4 ${selectedInterval === "Monthly"
                                    ? "text-white bg-[#0071F2]/80 hover:bg-[#0071F2]"
                                    : "text-black"
                                    }`}
                            >
                                Monthly
                            </p>
                        </span>
                    </span>
                    <div className="flex gap-6 justify-betwee mt-10">
                        <span className="space-y-6">
                            <p className="text-[0.6875rem] font-semibold">
                                ₦5M
                            </p>
                            <p className="text-[0.6875rem] font-semibold">
                                ₦3M
                            </p>
                            <p className="text-[0.6875rem] font-semibold">
                                ₦1M
                            </p>
                            <p className="text-[0.6875rem] font-semibold">
                                ₦500K
                            </p>
                            <p className="text-[0.6875rem] font-semibold">
                                ₦300K
                            </p>
                            <p className="text-[0.6875rem] font-semibold">
                                ₦100K
                            </p>
                        </span>
                        {/* Display the selected graph based on the state */}
                        <span className="flex items-end">
                            <img
                                src={intervalToDataMap[selectedInterval].graph}
                                className=""
                                alt="graph"
                            />
                        </span>
                        {/* end of graph */}
                    </div>
                    <div className="mt-4 flex justify-between">
                        <span className="text-[0.6875rem] font-semibold">
                            0:00
                        </span>
                        <span className="text-[0.6875rem] font-semibold">
                            01:00
                        </span>
                        <span className="text-[0.6875rem] font-semibold">
                            02:00
                        </span>
                        <span className="text-[0.6875rem] font-semibold">
                            03:00
                        </span>
                        <span className="text-[0.6875rem] font-semibold">
                            04:00
                        </span>
                        <span className="text-[0.6875rem] font-semibold">
                            05:00
                        </span>
                        <span className="text-[0.6875rem] font-semibold">
                            06:00
                        </span>
                        <span className="text-[0.6875rem] font-semibold">
                            07:00
                        </span>
                        <span className="text-[0.6875rem] font-semibold">
                            08:00
                        </span>
                        <span className="text-[0.6875rem] font-semibold">
                            09:00
                        </span>
                        <span className="text-[0.6875rem] font-semibold">
                            10:00
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeaderGraph;
