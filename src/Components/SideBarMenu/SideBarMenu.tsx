import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
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
import { LuLogOut } from "react-icons/lu";
import { IoSettingsOutline, IoWifiOutline, IoBulbOutline } from "react-icons/io5";
import { RxAvatar } from "react-icons/rx";
import { RiLayout6Line } from "react-icons/ri";
import { GoMegaphone } from "react-icons/go";
import { GrTransaction } from "react-icons/gr";



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

        // Recent ** ('pushes' content to the right )
        // <Card
        //     className={`${showSidebar ? "block" : "hidden"
        //         } rounded-none border-none w-full max-w-[18rem] left-0 bg-transparent px-1 pt-[rem]`}
        // >

        <Card
            className={`${showSidebar ? "fixed laptop:relative top-0 laptop:top-auto pt-24 laptop:pt-0 bottom-0 left-0 h-full z-50 bg-white overflow-y-auto" : "hidden"
                } rounded-none border-none w-full max-w-[18rem] px-1 pt-[rem]`}
        >
            <List>

                <NavLink to="dashboard"
                    className={({ isActive }) =>
                        isActive
                            ? 'text-blue-500 bg-gray-200/50 font-medium rounded-lg'
                            : 'bg-transparent'
                    }>
                    {/* to="/" */}
                    <ListItem className="py-2">
                        <ListItemPrefix>
                            <RiLayout6Line className="h-5 w-5" />
                        </ListItemPrefix>
                        <p>
                            Dashboard
                        </p>
                    </ListItem>
                </NavLink>

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
                            <NavLink to="/profile"
                                className={({ isActive }) =>
                                    isActive
                                        ? 'text-blue-500 bg-gray-200/50 font-medium rounded-lg'
                                        : 'bg-transparent'
                                }>
                                <ListItem className="py-2">
                                    <ListItemPrefix>
                                        <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                                    </ListItemPrefix>
                                    Profile
                                </ListItem>
                            </NavLink>
                            <NavLink to="pin-management"
                                className={({ isActive }) =>
                                    isActive
                                        ? 'text-blue-500 bg-gray-200/50 font-medium rounded-lg'
                                        : 'bg-transparent'
                                }>
                                <ListItem className="py-2">
                                    <ListItemPrefix>
                                        <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                                    </ListItemPrefix>
                                    Pin Management
                                </ListItem>
                            </NavLink>
                            <NavLink to="change-password"
                                className={({ isActive }) =>
                                    isActive
                                        ? 'text-blue-500 bg-gray-200/50 font-medium rounded-lg'
                                        : 'bg-transparent'
                                }>
                                <ListItem className="py-2">
                                    <ListItemPrefix>
                                        <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                                    </ListItemPrefix>
                                    Change Password
                                </ListItem>
                            </NavLink>
                        </List>
                    </AccordionBody>
                </Accordion>

                <NavLink to="fund-wallet"
                    className={({ isActive }) =>
                        isActive
                            ? 'text-blue-500 bg-gray-200/50 font-medium rounded-lg'
                            : 'bg-transparent'
                    }>
                    <ListItem className="py-2">
                        <ListItemPrefix>
                            <LiaMoneyBillAltSolid className="h-5 w-5" />
                        </ListItemPrefix>
                        <p>
                            Fund Wallet
                        </p>
                    </ListItem>
                </NavLink>

                <NavLink to="topup"
                    className={({ isActive }) =>
                        isActive
                            ? 'text-blue-500 bg-gray-200/50 font-medium rounded-lg'
                            : 'bg-transparent'
                    }>
                    <ListItem className="py-2">
                        <ListItemPrefix>
                            <IoWifiOutline className="h-5 w-5" />
                        </ListItemPrefix>
                        <p>
                            Buy Data/Airtime
                        </p>
                    </ListItem>
                </NavLink>

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
                            <NavLink to="electricity-payment"
                                className={({ isActive }) =>
                                    isActive
                                        ? 'text-blue-500 bg-gray-200/50 font-medium rounded-lg'
                                        : 'bg-transparent'
                                }>
                                <ListItem className="py-2">
                                    <ListItemPrefix>
                                        <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                                    </ListItemPrefix>
                                    Electricity Payments
                                </ListItem>
                            </NavLink>
                            <NavLink to="cable-subscription"
                                className={({ isActive }) =>
                                    isActive
                                        ? 'text-blue-500 bg-gray-200/50 font-medium rounded-lg'
                                        : 'bg-transparent'
                                }>
                                <ListItem className="py-2">
                                    <ListItemPrefix>
                                        <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                                    </ListItemPrefix>
                                    Cable Subscription
                                </ListItem>
                            </NavLink>
                        </List>
                    </AccordionBody>
                </Accordion>

                <NavLink to="transfer"
                    className={({ isActive }) =>
                        isActive
                            ? 'text-blue-500 bg-gray-200/50 font-medium rounded-lg'
                            : 'bg-transparent'
                    }>
                    <ListItem className="py-2">
                        <ListItemPrefix>
                            <LiaMoneyBillSolid className="h-5 w-5" />
                        </ListItemPrefix>
                        Transfer Funds
                    </ListItem>
                </NavLink>

                <NavLink to="transaction-history"
                    className={({ isActive }) =>
                        isActive
                            ? 'text-blue-500 bg-gray-200/50 font-medium rounded-lg'
                            : 'bg-transparent'
                    }>
                    <ListItem className="py-2">
                        <ListItemPrefix>
                            {/* <GiReceiveMoney className="h-5 w-5" /> */}
                            <GrTransaction className="h-5 w-5" />
                        </ListItemPrefix>
                        Transaction History
                    </ListItem>
                </NavLink>

                <hr className="my-1 border-blue-gray-50" />

                <NavLink to="support"
                    className={({ isActive }) =>
                        isActive
                            ? 'text-blue-500 bg-gray-200/50 font-medium rounded-lg'
                            : 'bg-transparent'
                    }>
                    <ListItem className="py-2">
                        <ListItemPrefix>
                            <TbHeadphones className="h-5 w-5" />
                        </ListItemPrefix>
                        Support
                    </ListItem>
                </NavLink>

                <NavLink to="faqs"
                    className={({ isActive }) =>
                        isActive
                            ? 'text-blue-500 bg-gray-200/50 font-medium rounded-lg'
                            : 'bg-transparent'
                    }>
                    <ListItem className="py-2">
                        <ListItemPrefix>
                            <BsQuestionOctagon className="h-5 w-5" />
                        </ListItemPrefix>
                        <p>
                            FAQs
                        </p>
                    </ListItem>
                </NavLink>
                <NavLink to="settings"
                    className={({ isActive }) =>
                        isActive
                            ? 'text-blue-500 bg-gray-200/50 font-medium rounded-lg'
                            : 'bg-transparent'
                    }>
                    <ListItem className="py-2">
                        <ListItemPrefix>
                            {/* <Cog6ToothIcon className="h-5 w-5" /> */}
                            <IoSettingsOutline className="h-5 w-5" />
                        </ListItemPrefix>
                        Settings
                    </ListItem>
                </NavLink>
                <NavLink to="">
                    <ListItem className="py-2" onClick={handleLogout}>
                        <ListItemPrefix>
                            {/* <PowerIcon className="h-5 w-5" /> */}
                            <LuLogOut className="h-5 w-5" />
                        </ListItemPrefix>
                        Log Out
                    </ListItem>
                </NavLink>
            </List>

            <Alert open={openAlert} className="mt-8 bg-blue-gray-900" onClose={() => setOpenAlert(false)}>
                <GoMegaphone className="mb-4 h-12 w-12" />
                <h6 className="font-semibold mb-1">
                    Announcement
                </h6>
                <p className="font-normal text-sm opacity-80">
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
                    <NavLink to="topup" onClick={() => setOpenAlert(false)}
                        className="text-sm cursor-pointer font-medium text-success">
                        Try Now
                    </NavLink>
                </div>
            </Alert>
        </Card>
    );
}