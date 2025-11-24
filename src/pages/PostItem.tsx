import React, { useState } from "react";
import type { Post } from "../types/Post";
import { FiThumbsUp, FiMessageCircle, FiShare2 } from "react-icons/fi";
import { BsGlobeAsiaAustralia, BsLockFill } from "react-icons/bs";
import defaultImage from "../assets/images/profile-1.png";

// Time formatter
const timeAgo = (dateString: string) => {
  const date = new Date(dateString);
  const now = new Date();
  const diff = Math.floor((now.getTime() - date.getTime()) / 1000);

  if (diff < 60) return `${diff} seconds ago`;
  if (diff < 3600) return `${Math.floor(diff / 60)} minutes ago`;
  if (diff < 86400) return `${Math.floor(diff / 3600)} hours ago`;
  return `${Math.floor(diff / 86400)} days ago`;
};

interface Props {
  feeds: Post;
}

const PostItem: React.FC<Props> = ({ feeds }) => {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState<string[]>([]);

  const handleCommentSubmit = () => {
    if (comment.trim()) {
      setComments([...comments, comment]);
      setComment("");
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm mb-6">

      {/* USER INFO */}
      <div className="flex items-center mb-4">
        {/* User profile picture */}
        <img
          src={feeds.user.image || defaultImage}
          alt="User"
          className="w-12 h-12 rounded-full object-cover mr-4"
          onError={(e) => {
            e.currentTarget.src = defaultImage; 
          }}
        />


        <div>
          {/* User Name */}
          <p className="text-lg text-gray-800">
            {feeds.user.first_name} {feeds.user.last_name}
          </p>

          {/* Time + Visibility */}
          <div className="text-gray-400 text-sm flex items-center space-x-2">
            <span>{timeAgo(feeds.created_at)}</span>
            <span>·</span>

            {/* Visibility icon */}
            {feeds.visibility === "public" ? (
              <div className="flex items-center space-x-1">
                <BsGlobeAsiaAustralia className="text-gray-400" />
                <span>Public</span>
              </div>
            ) : (
              <div className="flex items-center space-x-1">
                <BsLockFill className="text-gray-500" />
                <span>Private</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* POST TEXT + IMAGE */}
      <div className="mb-4">
        <p className="text-md font-sans">{feeds.title}</p>

        {feeds.image && (
          <img
            src={`${feeds.image}`}
            className="w-full max-h-80 object-cover rounded-lg mt-3"
            alt="Post"
          />
        )}
      </div>

      {/* ACTION BUTTONS */}
      <div className="flex space-x-6 mb-4 text-gray-600">
        <button className="flex items-center">
          <FiThumbsUp className="w-5 h-5" />
          <span className="ml-2">Like</span>
        </button>

        <button className="flex items-center">
          <FiMessageCircle className="w-5 h-5" />
          <span className="ml-2">Comment</span>
        </button>

        <button className="flex items-center">
          <FiShare2 className="w-5 h-5" />
          <span className="ml-2">Share</span>
        </button>
      </div>

      {/* COMMENTS SECTION */}
      <div>
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="w-full p-3 border rounded-md"
          placeholder="Write a comment..."
        />
        <button
          onClick={handleCommentSubmit}
          className="mt-2 px-6 py-2 bg-blue-500 text-white rounded-md"
        >
          Post Comment
        </button>

        {/* COMMENTS LIST */}
        <div className="mt-4">
          {comments.length ? (
            comments.map((c, i) => (
              <p key={i} className="text-sm bg-gray-100 p-2 rounded mt-2">
                {c}
              </p>
            ))
          ) : (
            <p className="text-sm text-gray-500">No comments yet.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default PostItem;
