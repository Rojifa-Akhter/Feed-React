import React, { useState } from "react";
import Header from "../components/Header";
import LeftSidebar from "../components/LeftSidebar";
import RightSidebar from "../components/RightSidebar";
import StoryFeed from "../components/StoryFeed";
import CreatePost from "./CreatePost";
import ListPost from "./ListPost";
import "../styles.css";

const FeedList = () => {
  return (
    <>
      <Header />
      <div className="flex min-h-screen bg-gray-100 mt-18">

        {/* Left Sidebar */}
        <div className="hidden md:block w-1/4 pl-20 pr-2 h-screen overflow-y-auto custom-scrollbar">
          <LeftSidebar />
        </div>

        {/* Main Feed */}
        <div className="flex-[2] h-screen overflow-y-auto px-4 custom-scrollbar">
          <div className="w-full">
            <StoryFeed />
          </div>
            <div className="px-6">
                <CreatePost />
            </div>
            <div className="px-6">
            <ListPost /> 
          </div>

        </div>

        {/* Right Sidebar */}
        <div className="hidden md:block w-1/4 pl-2 pr-15 h-screen overflow-y-auto custom-scrollbar">
          <RightSidebar />
        </div>

      </div>
    </>
  );
};

export default FeedList;
