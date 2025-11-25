import React, { useState } from "react";
import Header from "../components/Header";
import LeftSidebar from "../components/LeftSidebar";
import RightSidebar from "../components/RightSidebar";
import StoryFeed from "../components/StoryFeed";
import CreatePost from "./CreatePost";
import ListPost from "./ListPost";
import "../styles.css";

const FeedList = () => {

  // 🔥 State for reloading posts
  const [reload, setReload] = useState(false);

  // 🔥 Function sent to CreatePost
  const onPostCreated = () => {
    setReload(!reload); // toggle reload state
  };

  return (
    <>
      <Header />
      <div className="flex min-h-screen bg-gray-100 mt-18">

        {/* Left Sidebar */}
        <div className="hidden md:block w-1/4 pl-16 h-screen overflow-y-auto custom-scrollbar">
          <LeftSidebar />
        </div>

        {/* Main Feed */}
        <div className="flex-[1] h-screen overflow-y-auto px-4 custom-scrollbar">
          <div className="w-full">
            <StoryFeed />
          </div>

          <div className="px-4">
            <CreatePost onPostCreated={onPostCreated} /> {/* 🔥 FIXED */}
          </div>

          <div className="px-4">
            <ListPost reload={reload} /> {/* 🔥 Tell ListPost to reload */}
          </div>

        </div>

        {/* Right Sidebar */}
        <div className="hidden md:block w-1/4 pr-10 h-screen overflow-y-auto custom-scrollbar">
          <RightSidebar />
        </div>

      </div>
    </>
  );
};

export default FeedList;
