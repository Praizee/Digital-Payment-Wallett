import { useState } from "react";
import './styles.css';
import CopyButton from "./CopyButton";
import Balance from "./Balance";

const AvailableBalance = () => {
    const [selectedBank, setSelectedBank] = useState("UBA Bank PLC"); // Set the default bank here

    // Create an object to store bank-account number pairs
    const bankAccountNumbers = {
        "Sterling Bank Ltd": "9876544310",
        "UBA Bank PLC": "8452099123",
        "Wema Bank PLC": "1234567890", // Replace with actual account numbers
        "Zenith Bank PLC": "9876543210",
    };

    // Function to handle changes in the selected bank
    const handleBankChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedBank(e.target.value);
    };

    return (
        <section className="">
            <div className="">
                <div className="balance max-w-[20.5rem] min-w-[19.5rem]  px-5 py-6 leading-normal space-y-2 rounded-[1.2rem] text-white">
                    <p className="text-[0.75rem] font-semibold">
                        WALLET BALANCE
                    </p>
                    <div>
                        <Balance initialBalance={225650} />
                        <span>
                            <p className="text-[0.75rem] font-medium">
                                *This balance is available to withdraw
                            </p>
                            <hr className="my-4 " />
                            <p className="text-[0.75rem] font-semibold">
                                BONUS BALANCE
                            </p>
                        </span>
                        <Balance initialBalance={1250} />
                    </div>
                    <select name="bank" id="bank" title="Bank"
                        className="text-[0.9375rem] w-full leading-normal font-semibold p-2 bg-transparent border border-white rounded-lg"
                        onChange={handleBankChange} // Add this onChange handler
                        value={selectedBank} // Set the selected value to the state
                    >
                        <option value={"Sterling Bank Ltd"}
                            className="text-[black]">
                            Sterling Bank Ltd
                        </option>
                        <option value={"UBA Bank PLC"}
                            className="text-[black]">
                            UBA Bank PLC
                        </option>
                        <option value={"Wema Bank PLC"}
                            className="text-[black]">
                            Wema Bank PLC
                        </option>
                        <option value={"Zenith Bank PLC"}
                            className="text-[black]">
                            Zenith Bank PLC
                        </option>
                    </select>

                    <span className="flex justify-between font-normal bg-[#2488FF80] p-2 rounded-lg">
                        {/* text to be copied */}
                        <span className="flex space-x-4 py-2">
                            <p className="text-[0.75rem] font-semibold">
                                {bankAccountNumbers[selectedBank as keyof typeof bankAccountNumbers]}
                            </p>
                            <p className="text-[0.75rem]">
                                — &nbsp; {selectedBank}
                            </p>
                        </span>

                        {/* Include the CopyButton component here */}
                        <CopyButton selectedBank={selectedBank} />
                    </span>
                    <p className="text-[0.75rem] font-medium">
                        Make transfer to any of these accounts to fund your wallet
                    </p>
                </div>
            </div>
        </section>
    );
};

export default AvailableBalance;
