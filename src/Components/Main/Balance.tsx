import { useState } from "react";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";

const Balance = ({ initialBalance }: { initialBalance: number }) => {
    const [isBalanceVisible, setIsBalanceVisible] = useState(false);

    const toggleBalanceVisibility = () => {
        setIsBalanceVisible((prev) => !prev);
    };

    // Format the initial balance with commas
    const formattedInitialBalance = initialBalance.toLocaleString();

    return (
        <div>
            <span className="flex space-x-3 text-[3.125rem]">
                {/* Show/Hide icon */}
                <span className="py-6 cursor-pointer" onClick={toggleBalanceVisibility}>
                    {isBalanceVisible ? (
                        <AiOutlineEyeInvisible size={30} title="Hide" />
                    ) : (
                        <AiOutlineEye size={30} title="Show" />
                    )}
                </span>
                {/* Balance */}
                <h1 className=" select-none">
                    {isBalanceVisible ? `₦${formattedInitialBalance}` : "₦***,***"}
                </h1>
            </span>
        </div>
    );
};

export default Balance;
