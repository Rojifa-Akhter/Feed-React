import React, { useState } from "react";
import userImage1 from "../assets/images/card_ppl1.png";
import { GoPencil } from "react-icons/go";
import { GoDash } from "react-icons/go";
import { HiOutlinePhotograph } from "react-icons/hi";
import { CiVideoOn } from "react-icons/ci";
import { RiCalendarEventLine } from "react-icons/ri";
import { MdOutlineArticle } from "react-icons/md";
import { FiSend } from "react-icons/fi";

const CreatePost = () => {
  const [post, setPost] = useState("");
  const [isFocused, setIsFocused] = useState(false); // State to handle input focus

  const handlePostChange = (e: React.ChangeEvent<HTMLInputElement>) => setPost(e.target.value); // input change handler
  const handleFocus = () => setIsFocused(true); // When input is focused
  const handleBlur = () => setIsFocused(false); // When input loses focus

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
      {/* Post Text Area with Pen Icon */}
      <div className="flex items-center mb-6">
        <img src={userImage1} alt="User" className="w-12 h-12 object-cover rounded-full mr-4" />
        
        <div className="relative w-full">
          <input 
            value={post}
            onChange={handlePostChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            className={`w-full p-3 rounded-md text-xl ${isFocused ? 'border-none' : 'border-gray-300'}`} 
            placeholder={isFocused || post ? '' : 'Write something ...'} // Hide placeholder when focused or typing
          />
          <GoPencil
            className={`absolute right-75 top-1/2 transform -translate-y-1/2 text-gray-500 h-5 w-5 ${isFocused || post ? 'hidden' : ''}`}
          />
          <GoDash className={`absolute right-74 bottom-3 text-gray-500 ${isFocused || post ? 'hidden' : ''}`} />
        </div>
      </div>

      {/* Buttons for Photo, Video, Event, Article */}
      <div className="flex space-x-6 mb-4 bg-gray-100 mt-10 p-3 rounded-b-lg">
        <button className="flex text-gray-500 items-center">
          <HiOutlinePhotograph className="w-7 h-7" />
          <p className="text-sm px-2">Photo</p>
        </button>
        <button className="flex text-gray-500 items-center">
          <CiVideoOn className="w-7 h-7" />
          <p className="text-md px-2">Video</p>
        </button>
        <button className="flex text-gray-500 items-center">
          <RiCalendarEventLine className="w-7 h-7" />
          <p className="text-sm px-2">Event</p>
        </button>
        <button className="flex text-gray-500 items-center">
          <MdOutlineArticle className="w-7 h-7" />
          <p className="text-sm px-2">Article</p>
        </button>

        {/* Post Button */}
        <button className="flex items-center ml-auto px-6 py-2 bg-blue-500 text-white rounded-md">
          <FiSend className="w-4 h-4" />
          <p className="text-lg ml-2 font-semibold">Post</p>
        </button>
      </div>
    </div>
  );
};

export default CreatePost;
