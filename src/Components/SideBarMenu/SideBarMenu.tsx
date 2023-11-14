import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from '../../Firebase/firebase.ts';

import {
    Card, List, ListItem, ListItemPrefix, Accordion,
    AccordionHeader, AccordionBody, Alert,
} from "@material-tailwind/react";
import {
    ChevronRightIcon, ChevronDownIcon,
} from "@heroicons/react/24/outline";

import { TbHeadphones } from "react-icons/tb";
import { BsQuestionOctagon } from "react-icons/bs";
import { LiaMoneyBillAltSolid, LiaMoneyBillSolid } from "react-icons/lia";
import { LuLogOut, LuPhone } from "react-icons/lu";
import { IoSettingsOutline, IoWifiOutline, IoBulbOutline } from "react-icons/io5";
import { RxAvatar } from "react-icons/rx";
import { RiLayout6Line } from "react-icons/ri";
import { GoMegaphone } from "react-icons/go";
import { GrTransaction } from "react-icons/gr";
import { FaCircleUser } from "react-icons/fa6";



export function SidebarWithSearch({ showSidebar }) {
    const navigate = useNavigate();
    // logout
    const handleLogout = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            navigate("/");
            console.log("Signed out successfully")
        }).catch((error) => {
            // An error happened.
        });
    }
    // end of logout

    const [open, setOpen] = React.useState(0);
    const [openAlert, setOpenAlert] = React.useState(true);

    const handleOpen = (value) => {
        setOpen(open === value ? 0 : value);
    };


    return (
        // <Card className="h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
        <Card
            className={`${showSidebar ? "block" : "hidden"
                } rounded-none border-none w-full max-w-[18rem] left-0 bg-transparent px-1 pt-[rem]`}
        >

            <List>
                {/* <div className=" mx-auto py-2">
                    <FaCircleUser size={60} />
                </div> */}

                <Link to="dashboard">
                    {/* to="/" */}
                    <ListItem className="py-2">
                        <ListItemPrefix>
                            <RiLayout6Line className="h-5 w-5" />
                        </ListItemPrefix>
                        <p>
                            Dashboard
                        </p>
                    </ListItem>
                </Link>

                <Accordion
                    open={open === 1}
                    icon={
                        <ChevronDownIcon
                            strokeWidth={2.5}
                            className={`mx-auto h-4 w-4 transition-transform ${open === 1 ? "rotate-180" : ""}`}
                        />
                    }
                >
                    <ListItem className="p-0" selected={open === 1}>
                        <AccordionHeader onClick={() => handleOpen(1)} className="border-b-0 p-3">
                            <ListItemPrefix>
                                {/* <UserCircleIcon className="h-5 w-5" /> */}
                                <RxAvatar className="h-5 w-5" />
                            </ListItemPrefix>
                            <p className="mr-auto font-normal">
                                Account
                            </p>
                        </AccordionHeader>
                    </ListItem>
                    <AccordionBody className="py-1">
                        <List className="p-0">
                            <Link to="/profile">
                                <ListItem className="py-2">
                                    <ListItemPrefix>
                                        <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                                    </ListItemPrefix>
                                    Profile
                                </ListItem>
                            </Link>
                            <Link to="pin-management">
                                <ListItem className="py-2">
                                    <ListItemPrefix>
                                        <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                                    </ListItemPrefix>
                                    Pin Management
                                </ListItem>
                            </Link>
                            <Link to="change-password">
                                <ListItem className="py-2">
                                    <ListItemPrefix>
                                        <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                                    </ListItemPrefix>
                                    Change Password
                                </ListItem>
                            </Link>
                        </List>
                    </AccordionBody>
                </Accordion>

                <Link to="fund-wallet">
                    <ListItem className="py-2">
                        <ListItemPrefix>
                            <LiaMoneyBillAltSolid className="h-5 w-5" />
                        </ListItemPrefix>
                        <p>
                            Fund Wallet
                        </p>
                    </ListItem>
                </Link>

                <Link to="topup">
                    <ListItem className="py-2">
                        <ListItemPrefix>
                            <IoWifiOutline className="h-5 w-5" />
                        </ListItemPrefix>
                        <p>
                            Buy Data/Airtime
                        </p>
                    </ListItem>
                </Link>

                <Accordion
                    open={open === 2}
                    icon={
                        <ChevronDownIcon
                            strokeWidth={2.5}
                            className={`mx-auto h-4 w-4 transition-transform ${open === 2 ? "rotate-180" : ""}`}
                        />
                    }
                >
                    <ListItem className="p-0" selected={open === 2}>
                        <AccordionHeader onClick={() => handleOpen(2)} className="border-b-0 p-3">
                            <ListItemPrefix>
                                <IoBulbOutline className="h-5 w-5" />
                            </ListItemPrefix>
                            <p color="" className="mr-auto font-normal">
                                Bills
                            </p>
                        </AccordionHeader>
                    </ListItem>
                    <AccordionBody className="py-1">
                        <List className="p-0">
                            <Link to="electricity-payment">
                                <ListItem className="py-2">
                                    <ListItemPrefix>
                                        <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                                    </ListItemPrefix>
                                    Electricity Payments
                                </ListItem>
                            </Link>
                            <Link to="cable-subscription">
                                <ListItem className="py-2">
                                    <ListItemPrefix>
                                        <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                                    </ListItemPrefix>
                                    Cable Subscription
                                </ListItem>
                            </Link>
                        </List>
                    </AccordionBody>
                </Accordion>

                <Link to="transfer">
                    <ListItem className="py-2">
                        <ListItemPrefix>
                            <LiaMoneyBillSolid className="h-5 w-5" />
                        </ListItemPrefix>
                        Transfer Funds
                    </ListItem>
                </Link>

                <Link to="transaction-history">
                    <ListItem className="py-2">
                        <ListItemPrefix>
                            {/* <GiReceiveMoney className="h-5 w-5" /> */}
                            <GrTransaction className="h-5 w-5" />
                        </ListItemPrefix>
                        Transaction History
                    </ListItem>
                </Link>

                <hr className="my-1 border-blue-gray-50" />

                <Link to="support">
                    <ListItem className="py-2">
                        <ListItemPrefix>
                            <TbHeadphones className="h-5 w-5" />
                        </ListItemPrefix>
                        Support
                    </ListItem>
                </Link>

                <Link to="faqs">
                    <ListItem className="py-2">
                        <ListItemPrefix>
                            <BsQuestionOctagon className="h-5 w-5" />
                        </ListItemPrefix>
                        <p>
                            FAQs
                        </p>
                    </ListItem>
                </Link>
                <Link to="settings">
                    <ListItem className="py-2">
                        <ListItemPrefix>
                            {/* <Cog6ToothIcon className="h-5 w-5" /> */}
                            <IoSettingsOutline className="h-5 w-5" />
                        </ListItemPrefix>
                        Settings
                    </ListItem>
                </Link>
                <Link to="">
                    <ListItem className="py-2" onClick={handleLogout}>
                        <ListItemPrefix>
                            {/* <PowerIcon className="h-5 w-5" /> */}
                            <LuLogOut className="h-5 w-5" />
                        </ListItemPrefix>
                        Log Out
                    </ListItem>
                </Link>
            </List>

            <Alert open={openAlert} className="mt-8 bg-blue-gray-900" onClose={() => setOpenAlert(false)}>
                <GoMegaphone className="mb-4 h-12 w-12" />
                <h6 variant="h6" className="font-semibold mb-1">
                    Announcement
                </h6>
                <p variant="small" className="font-normal text-sm opacity-80">
                    You can now make payments for Phone Airtime Recharge and Internet Data bundle
                    subscription (MTN, Airtel, 9Mobile, Glo); Cable TV subscription
                    such as DTSV, GOTV, Startimes; as well as Electricity bills.
                </p>
                <div className="mt-4 flex gap-3">
                    <a onClick={() => setOpenAlert(false)}
                        className="text-sm cursor-pointer font-medium text-warning"
                    >
                        Dismiss
                    </a>
                    <Link to="topup" onClick={() => setOpenAlert(false)}
                        className="text-sm cursor-pointer font-medium text-success">
                        Try Now
                    </Link>
                </div>
            </Alert>
        </Card>
    );
}