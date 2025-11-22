import { useState } from "react";

// Import Images
import logo from "../assets/images/logo.svg";
import profileImg from "../assets/images/people1.png";
import caretDown from "../assets/images/Caretdown.svg";
import friendIcon from "../assets/images/friend-icon.jpg";
import homeIcon from "../assets/images/home.png";
import messageIcon from "../assets/images/message.png";
import notificationIcon from "../assets/images/notification-icon-png.png";
import searchIcon from "../assets/images/search-icon.jpg";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full px-20 bg-white shadow-sm flex items-center justify-between h-18 fixed top-0 left-0 z-50 rounded-tl-xl rounded-tr-xl">
      {/* Logo */}
      <div className="flex items-center">
        <img src={logo} alt="BuddyScript" className="h-7" />
      </div>

      {/* Search Bar (Shifted Left) */}
      <div className="flex w-[380px]">
        <div className="flex items-center bg-gray-100 px-4 h-10 rounded-full w-full">
          <img src={searchIcon} alt="Search" className="h-10 w-10 opacity-60" />
          <input type="text" className="bg-transparent outline-none ml-3 text-gray-600 w-full" placeholder="input search text" />
        </div>
      </div>

      {/* Right Icons */}
      <div className="flex items-center gap-12 relative">
        {/* Home Icon */}
        <div className="relative flex flex-col items-center">
          <img src={homeIcon} alt="Home" className="h-6 w-6 opacity-70" />
          {/* Bottom Border for Home Icon */}
          <div className="absolute bottom-[-24px] w-[45px] h-[2px] bg-blue-400"></div>
          <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">6</span>
        </div>

        {/* Friend Requests Icon */}
        <button><img src={friendIcon} className="h-6 w-6 opacity-60" alt="Friend Requests" /></button>

        {/* Notifications Icon */}
        <button className="relative">
          <img src={notificationIcon} className="h-6 w-5 opacity-80" alt="Notifications" />
          <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">6</span>
        </button>

        {/* Messages Icon */}
        <button className="relative">
          <img src={messageIcon} className="h-7 w-7 opacity-80" alt="Messages" />
          <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">2</span>
        </button>

        {/* Profile Icon */}
        <div className="relative flex items-center gap-2 cursor-pointer" onClick={() => setOpen(!open)}>
          <img src={profileImg} alt="Profile" className="h-7 w-7 rounded-full" />
          <div className="hidden md:flex items-center gap-1">
            <span className="font-medium text-gray-700">Dylan kocu</span>
            <img src={caretDown} className="mt-1 h-3 w-3 opacity-70" alt="Dropdown" />
          </div>

          {open && (
            <div className="absolute right-0 top-12 w-52 bg-white shadow-lg rounded-md border p-3 z-50">
              <div className="flex items-center gap-3">
                <img src={profileImg} className="h-10 w-10 rounded-full" alt="Profile" />
                <div>
                  <p className="font-semibold">Dylan Field</p>
                  <a className="text-blue-500 text-sm" href="#">View Profile</a>
                </div>
              </div>
              <hr className="my-3" />
              <ul className="space-y-2">
                <li className="hover:bg-gray-100 p-2 rounded cursor-pointer">Settings</li>
                <li className="hover:bg-gray-100 p-2 rounded cursor-pointer">Help & Support</li>
                <li className="hover:bg-gray-100 p-2 rounded cursor-pointer">Log Out</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
