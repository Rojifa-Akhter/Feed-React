import React, { useState } from "react";
import Header from "../components/Header";
import LeftSidebar from "../components/LeftSidebar";
import RightSidebar from "../components/RightSidebar";
import "../styles.css";

const FeedList = () => {
  const [post, setPost] = useState("");
  const handlePostChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => setPost(e.target.value);

  return (
    <>
      <Header />
      <div className="flex min-h-screen bg-gray-100 mt-18">
        {/* Left Sidebar */}
        <div className="w-full md:w-1/3 px-6 lg:px-20">
          <LeftSidebar />
        </div>

        {/* Main Feed Area */}
        <div className="flex-1 p-4">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Main Feed</h2>
            {/* Feed Content */}
            {/* You can loop through posts here */}
            <textarea
              value={post}
              onChange={handlePostChange}
              className="w-full p-3 border rounded-md"
              placeholder="What's on your mind?"
            />
            <button className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-md">Post</button>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="w-full md:w-1/3 px-6 lg:px-20">
          <RightSidebar />
        </div>
      </div>
    </>
  );
};

export default FeedList;
