import React, { useState } from "react";
import Header from "../components/Header";
import LeftSidebar from "../components/LeftSidebar";
import "../styles.css";

const FeedList = () => {
  const [post, setPost] = useState("");
  const handlePostChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => setPost(e.target.value);

  return (
    <>
      <Header />
      <div className="w-full flex flex-col md:flex-row min-h-screen bg-gray-100 mt-18">
        {/* Left Sidebar */}
        <div className="md:w-1/3 w-full px-20">
          <LeftSidebar />
        </div>

        {/* Main Feed Area */}
        <div className="flex p-4">
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

        {/* Right Sidebar (optional) */}
        <div className="md:w-1/4 w-full">
          {/* You can add RightSidebar component here */}
        </div>
      </div>
    </>
  );
};

export default FeedList;
