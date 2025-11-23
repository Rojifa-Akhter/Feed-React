import React from 'react';

// Importing images
import feedEventImage from "../assets/images/feed_event1.png";
import learningImage from "../assets/images/learning-circle.png";
import peopleImage1 from "../assets/images/people1.png";
import peopleImage2 from "../assets/images/people2.png";
import peopleImage3 from "../assets/images/people3.png";
import insightsImage from "../assets/images/insights.png";
import fFriendImage from "../assets/images/friend-find.webp";
import bookmarksImage from "../assets/images/bookmark-vector.jpg";
import groupImage from "../assets/images/group.png";
import gamingImage from "../assets/images/gaming.png";
import settingsImage from "../assets/images/seting-images.png";
import sPostImage from "../assets/images/Save-icon-11.png";

const LeftSidebar = () => {
  return (
    <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12">
      {/* Left Sidebar Wrapper with fixed height and scroll */}
      <div className="min-h-screen overflow-y-auto bg-gray-100 py-6">

        {/* Explore Section */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
            <h4 className="text-md font-semibold mb-4">Explore</h4>
            <ul className="space-y-4">
                <li className="flex items-center justify-between">
                    <a href="#0" className="flex items-center text-gray-700 hover:text-blue-700">
                        <img src={learningImage} alt="BuddyScript" className="h-5 w-5 opacity-50" />
                        <span className="ml-3 font-semibold opacity-70">Learning</span> 
                    </a>
                    <span className="text-sm bg-green-500 text-green-50 px-1 py-0 rounded-md">New</span>
                </li>
                <li className="flex items-center justify-between">
                    <a href="#0" className="flex items-center text-gray-700 hover:text-blue-600">
                        <img src={insightsImage} alt="BuddyScript" className="h-5 w-5 opacity-50 border-2 rounded-md" />
                        <span className="ml-3 font-semibold opacity-70">Insights</span> 
                    </a>
                </li>
                <li className="flex items-center justify-between">
                    <a href="#0" className="flex items-center text-gray-700 hover:text-blue-600">
                        <img src={fFriendImage} alt="BuddyScript" className="h-6 w-5 opacity-70" />
                        <span className="ml-3 font-semibold opacity-70">Find friends</span> 
                    </a>
                </li>
                <li className="flex items-center justify-between">
                    <a href="#0" className="flex items-center text-gray-700 hover:text-blue-600">
                        <img src={bookmarksImage} alt="BuddyScript" className="h-5 w-5 opacity-70" />
                        <span className="ml-3 font-semibold opacity-70">Bookmarks</span> 
                    </a>
                </li>
                <li className="flex items-center justify-between">
                    <a href="#0" className="flex items-center text-gray-700 hover:text-blue-600">
                        <img src={groupImage} alt="BuddyScript" className="h-7 w-6 opacity-70" />
                        <span className="ml-3 font-semibold opacity-70">Group</span> 
                    </a>
                </li>
                <li className="flex items-center justify-between">
                    <a href="#0" className="flex items-center text-gray-700 hover:text-blue-700">
                        <img src={gamingImage} alt="BuddyScript" className="h-5 w-5 opacity-50" />
                        <span className="ml-3 font-semibold opacity-70">Gaming</span> 
                    </a>
                    <span className="text-sm bg-green-500 text-green-50 px-1 py-0 rounded-md">New</span>
                </li>
                <li className="flex items-center justify-between">
                    <a href="#0" className="flex items-center text-gray-700 hover:text-blue-600">
                        <img src={settingsImage} alt="BuddyScript" className="h-5 w-5 opacity-50 border-2 rounded-md" />
                        <span className="ml-3 font-semibold opacity-70">Settings</span> 
                    </a>
                </li>
                <li className="flex items-center justify-between">
                    <a href="#0" className="flex items-center text-gray-700 hover:text-blue-600">
                        <img src={sPostImage} alt="BuddyScript" className="h-4 w-4 opacity-70" />
                        <span className="ml-3 font-semibold opacity-70">Save post</span> 
                    </a>
                </li>
            </ul>
        </div>

        {/* Suggested People Section */}
        <div className="bg-white p-5 rounded-lg shadow-md mb-6">
          <div className="flex justify-between items-center mb-4">
            <h4 className="text-md font-semibold">Suggested People</h4>
            <a href="#0" className="text-blue-400 text-sm font-semibold">See All</a>
          </div>

          <div className="space-y-4 mb-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <img src={peopleImage1} alt="Steve Jobs" className="w-10 h-10 rounded-full" />
                <div>
                  <h6 className="text-xs font-semibold">Steve Jobs</h6>
                  <p className="text-xs text-gray-500">CEO of Apple</p>
                </div>
              </div>
              <a href="#0" className="text-gray-400 border-1 rounded-md">
                <span className="p-2 text-sm font-semibold">Connect</span>
              </a>
            </div>
          </div>
          <div className="space-y-4 mb-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <img src={peopleImage2} alt="Steve Jobs" className="w-10 h-10 rounded-full" />
                <div>
                  <h6 className="text-xs font-semibold">Ryan Roslansky</h6>
                  <p className="text-xs text-gray-500">CEO of Linkdin</p>
                </div>
              </div>
              <a href="#0" className="text-gray-400 border-1 rounded-md">
                <span className="p-2 text-sm font-semibold">Connect</span>
              </a>
            </div>
          </div>
          <div className="space-y-4 mb-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <img src={peopleImage3} alt="Steve Jobs" className="w-10 h-10 rounded-full" />
                <div>
                  <h6 className="text-xs font-semibold">Dylan Field</h6>
                  <p className="text-xs text-gray-400">CEO of Figma</p>
                </div>
              </div>
              <a href="#0" className="text-gray-500 border-1 rounded-md">
                <span className="p-2 text-sm font-semibold">Connect</span>
              </a>
            </div>
          </div>
        </div>

        {/* Events Section */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
          <div className="flex justify-between items-center mb-4">
            <h4 className="text-md font-semibold">Events</h4>
            <a href="#0" className="text-blue-400 text-sm font-semibold">See All</a>
          </div>

          <a href="event-single.html" className="block">
            <div className="flex flex-col bg-gray-50 rounded-lg overflow-hidden mb-4 shadow-lg">
                <img src={feedEventImage} alt="Event Image" className="w-full h-30 object-cover rounded-md mb-4" />
                
                <div className="flex items-center space-x-4 mb-2 border-b border-b-gray-200 pb-2 p-4"> {/* Added padding-bottom to create space */}
                    <p className="bg-green-600 text-gray-200 p-1 text-lg font-semibold">10 Jul</p>
                    <p className="text-gray-800 text-sm">No more terrorism no more cry</p>
                </div>

                <div className="flex justify-between items-center mb-2 p-4">
                    <p className="text-sm text-gray-400">17 People Going</p>
                    <a href="#0" className="text-blue-400 text-sm font-semibold border-1 rounded-sm">
                    <span className='p-2 text-xs'>Going</span></a>
                </div>
                
            </div>
           </a>

          <a href="event-single.html" className="block">
            <div className="flex flex-col bg-gray-50 rounded-lg overflow-hidden mb-4 shadow-lg">
                <img src={feedEventImage} alt="Event Image" className="w-full h-30 object-cover rounded-md mb-4" />
                
                <div className="flex items-center space-x-4 mb-2 border-b border-b-gray-200 pb-2 p-4"> {/* Added padding-bottom to create space */}
                    <p className="bg-green-600 text-gray-200 p-1 text-lg font-semibold">10 Jul</p>
                    <p className="text-gray-800 text-sm">No more terrorism no more cry</p>
                </div>

                <div className="flex justify-between items-center mb-2 p-4">
                    <p className="text-sm text-gray-400">17 People Going</p>
                    <a href="#0" className="text-blue-400 text-sm font-semibold border-1 rounded-sm">
                    <span className='p-2 text-xs'>Going</span></a>
                </div>
                
            </div>
           </a>
        </div>

      </div>
    </div>
  );
};

export default LeftSidebar;
