import React, { useState } from "react";
import Header from "../components/Header";
import LeftSidebar from "../components/LeftSidebar";
import RightSidebar from "../components/RightSidebar";
import StoryFeed from "../components/StoryFeed";
import "../styles.css";

const FeedList = () => {
  const [post, setPost] = useState("");
  const handlePostChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => setPost(e.target.value);

  return (
    <>
      <Header />
      <div className="flex min-h-screen bg-gray-100 mt-18">

        <div className="hidden md:block w-1/4 pl-20 pr-2 h-screen overflow-y-auto custom-scrollbar">
            <LeftSidebar />
        </div>

        {/* Main Feed */}
        <div className="flex-[2] h-screen overflow-y-auto px-4 custom-scrollbar">
            <div className="w-full">
            <StoryFeed />
            </div>

            <div className="bg-white p-2 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Main Feed</h2>
            <textarea
                value={post}
                onChange={handlePostChange}
                className="w-full p-3 border rounded-md"
                placeholder="What's on your mind?"
            />
            <button className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-md">
                Post
            </button>
            </div>
        </div>

        {/* Right Sidebar */}
        <div className="hidden md:block w-1/4 pl-2 pr-18 h-screen overflow-y-auto custom-scrollbar">
            <RightSidebar />
        </div>

        </div>

    </>
  );
};

export default FeedList;
