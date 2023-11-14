import React from "react";
import { FiMenu } from "react-icons/fi";
import { LuBell, LuScanLine, LuSun, LuMoon } from "react-icons/lu";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import UserPic from "../../assets/Userpic.png";
import { useAppContext } from "../../Context/AppContext";
import { GoVerified } from "react-icons/go";

const Navbar = ({ toggleSidebar }) => {
  const { user } = useAppContext(); // Use the user state from the context

  return (
    <div className="navbar bg-white border-2 border-t-transparent fixed py-4 top-0 z-[100]">
      <div className="flex-1 laptop:mx-[rem] mx-">
        <div className="flex-none">
          {/* Button to toggle the sidebar */}
          <button className="btn btn-square btn-ghost" onClick={toggleSidebar}>
            <FiMenu size={25} /> {/* Hamburger menu icon */}
          </button>
        </div>
        <div className="flex-1 mx-4 w-1/2">
          <a className="leading-[1.5rem] text-black font-black text-[1.5rem]">
            Logo {/* Company logo */}
          </a>
        </div>
      </div>
      <div className="navbar-end gap-">
        <div className="gap-[0.05rem]">
          {/* Buttons for various actions */}
          <button className="btn btn-ghost btn-circle hidden tablet:inline-flex" title="Scan QR Code">
            <LuScanLine size={23} /> {/* Scan QR Code icon */}
          </button>
          <a href="mailto:name@email.com"
            className="btn btn-ghost btn-circle hidden tablet:inline-flex" title="Get Help">
            <IoChatboxEllipsesOutline size={23} /> {/* Get Help icon */}
          </a>
          <button className="btn btn-ghost btn-circle" title="Notifications">
            <div className="indicator">
              <LuBell size={23} /> {/* Bell icon */}
              <span className="badge badge-xs badge-primary py-2 text-[0.625rem] text-white indicator-item">
                4 {/* Notification count */}
              </span>
            </div>
          </button>
          <button className="btn btn-ghost btn-circle" title="Get Help">
            <LuMoon size={23} /> {/* Moon icon */}
          </button>
          {/* remove 'hidden' when dark/light mode functionality is implemented */}
          <button className="btn hidden btn-ghost btn-circle" title="Get Help">
            <LuSun size={23} /> {/* Sun icon */}
          </button>
        </div>
        <div className="">
          <span className="hidden md:flex mx-4 gap-2 justify-between">
            <span className="py-1">
              <img src={UserPic} alt="User-pic" className="rounded-full" /> {/* User profile picture */}
            </span>
            <span>
              <h2 className="text-[#2E2E3A] text-[0.875rem] font-semibold">
                {user.firstName} {user.lastName} {/* User's first and last name */}
              </h2>
              <p className="text-[#9A9AAF] text-[0.75rem] font-light flex gap-2">Verified user <GoVerified title="Verified User" className="text-green-500" /></p>
              {/* User verification status */}
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
