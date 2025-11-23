import React from 'react';
import ProfileImage from "../assets/images/Avatar.png";
import searchIcon from "../assets/images/search-icon.jpg";
import FriendImage1 from "../assets/images/profile.png";
import FriendImage2 from "../assets/images/people2.png";
import FriendImage3 from "../assets/images/people3.png";
const RightSidebar = () => {
  return (
    <div className="p-2 w-full max-w-md mt-2"> {/* Increased max-w-xs to max-w-md for more width */}

      {/* You Might Like Section */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <div className="flex justify-between items-center mb-4">
          <h5 className="text-md font-semibold opacity-80">You Might Like</h5>
          <a href="#" className="text-blue-400 text-xs font-semibold">See All</a>
        </div>
        <div className="border-b-2 border-gray-100 mb-4 shadow-gray-600"></div>
        <div className="flex items-center mb-4">
          <img src={ProfileImage} alt="BuddyScript" className="w-12 h-12 rounded-full mr-4" />
          <div>
            <h3 className="font-semibold opacity-80 mb-2">Radovan SkillArena</h3>
            <p className="text-sm text-gray-500">Founder & CEO at Trophy</p>
          </div>
        </div>
        <div className="flex font-semibold">
            <button className="text-md text-gray-400 border border-gray-200 rounded px-4 py-2 mx-4 hover:bg-blue-400 hover:text-amber-50">Ignore</button>
            <button className="text-md text-white bg-blue-500 rounded px-4 py-2 mx-2 hover:bg-blue-400 hover:text-amber-50">Follow</button>
        </div>
      </div>

        {/* Your Friends Section */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <div className="flex justify-between items-center mb-4">
            <h5 className="text-md font-semibold opacity-80">Your Friends</h5>
            <a href="#" className="text-blue-400 text-xs font-semibold">See All</a>
        </div>

        {/* Search Input with Icon */}
        <div className="mb-6">
            <div className="flex items-center bg-gray-100 rounded-full px-4 py-0">
            <img src={searchIcon} alt="Search" className="h-10 w-10 opacity-60" /> {/* Search Icon */}
            <input
                type="text"
                className="opacity-55 bg-transparent w-full outline-none text-lg text-gray-700 ml-3"
                placeholder="input search"
            />
            </div>
        </div>

        {/* Friend 1 */}
        <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
            <img
                src={FriendImage1}
                alt="Steve Jobs"
                className="w-12 h-12 rounded-full mr-4"
            />
            <div>
                <h5 className="font-semibold">Steve Jobs</h5>
                <p className="text-sm text-gray-500">CEO of Apple</p>
            </div>
            </div>
            <span className="text-xs text-gray-500 p-2">5 minute <br /> ago</span>
        </div>

        {/* Friend 2 */}
        <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
            <img
                src={FriendImage2}
                alt="Ryan Roslansky"
                className="w-12 h-12 rounded-full mr-4"
            />
            <div>
                <h5 className="font-semibold">Ryan Roslansky</h5>
                <p className="text-sm text-gray-500">CEO of LinkedIn</p>
            </div>
            </div>
            <div className="w-2 h-2 bg-green-500 rounded-full"></div> {/* Green dot for online status */}
        </div>

        <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
            <img
                src={FriendImage3}
                alt="Dylan Field"
                className="w-12 h-12 rounded-full mr-4"
            />
            <div>
                <h5 className="font-semibold">Dylan Field</h5>
                <p className="text-sm text-gray-500">CEO of Figma</p>
            </div>
            </div>
            <div className="w-2 h-2 bg-green-500 rounded-full"></div> {/* Green dot for online status */}
        </div>
        <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
            <img
                src={FriendImage1}
                alt="Steve Jobs"
                className="w-12 h-12 rounded-full mr-4"
            />
            <div>
                <h5 className="font-semibold">Steve Jobs</h5>
                <p className="text-sm text-gray-500">CEO of Apple</p>
            </div>
            </div>
            <span className="text-xs text-gray-500 p-2">5 minute <br /> ago</span>
        </div>

        <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
            <img
                src={FriendImage2}
                alt="Ryan Roslansky"
                className="w-12 h-12 rounded-full mr-4"
            />
            <div>
                <h5 className="font-semibold">Ryan Roslansky</h5>
                <p className="text-sm text-gray-500">CEO of LinkedIn</p>
            </div>
            </div>
            <div className="w-2 h-2 bg-green-500 rounded-full"></div> {/* Green dot for online status */}
        </div>

        <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
            <img
                src={FriendImage3}
                alt="Dylan Field"
                className="w-12 h-12 rounded-full mr-4"
            />
            <div>
                <h5 className="font-semibold">Dylan Field</h5>
                <p className="text-sm text-gray-500">CEO of Figma</p>
            </div>
            </div>
            <div className="w-2 h-2 bg-green-500 rounded-full"></div> {/* Green dot for online status */}
        </div>
        <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
            <img
                src={FriendImage3}
                alt="Dylan Field"
                className="w-12 h-12 rounded-full mr-4"
            />
            <div>
                <h5 className="font-semibold">Dylan Field</h5>
                <p className="text-sm text-gray-500">CEO of Figma</p>
            </div>
            </div>
            <div className="w-2 h-2 bg-green-500 rounded-full"></div> {/* Green dot for online status */}
        </div>
        <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
            <img
                src={FriendImage1}
                alt="Steve Jobs"
                className="w-12 h-12 rounded-full mr-4"
            />
            <div>
                <h5 className="font-semibold">Steve Jobs</h5>
                <p className="text-sm text-gray-500">CEO of Apple</p>
            </div>
            </div>
            <span className="text-xs text-gray-500 p-2">5 minute <br /> ago</span>
        </div>
      </div>
      


    </div>
  );
};

export default RightSidebar;
