import React, { useState } from "react";
import type { Post, Comment } from "../types/Post";
import { HiOutlinePhotograph } from "react-icons/hi";
import { TiMicrophoneOutline } from "react-icons/ti";
import { BiCommentDetail } from "react-icons/bi";
import { FaRegThumbsUp, FaThumbsUp } from "react-icons/fa";  
import { BsReply } from "react-icons/bs";  
import defaultImage from "../assets/images/profile-1.png";
import axios from "axios";

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
  const [comments, setComments] = useState<Comment[]>(feeds.comments || []); 
  const [liked, setLiked] = useState(false);  
  const [likesCount, setLikesCount] = useState(feeds.likes.length);  

  // Handle submitting a comment
  const handleCommentSubmit = async (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) { 
      e.preventDefault(); 

      if (!comment.trim()) return; 

      try {
        const response = await axios.post(
          `http://127.0.0.1:8000/api/feed-comment/${feeds.id}`,
          {
            comment: comment,
            feed_id: feeds.id,
            parent_id: null,
          },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("access_token")}`,
            },
          }
        );

        setComments([response.data, ...comments]); 
        setComment(""); 
      } catch (error) {
        console.log("Error submitting comment:", error);
      }
    }
  };

  // Handle like button click for the post
  const handleLike = async () => {
    if (!liked) {
      try {
        const response = await axios.post(
          `http://127.0.0.1:8000/api/feed-like/${feeds.id}`,
          {},
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("access_token")}`,
            },
          }
        );
        setLiked(true);  
        setLikesCount(likesCount + 1);  
      } catch (error) {
        console.log("Error liking post:", error);
      }
    } else {
      try {
        const response = await axios.post(
          `http://127.0.0.1:8000/api/feed-unlike/${feeds.id}`,
          {},
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("access_token")}`,
            },
          }
        );
        setLiked(false);  // Mark the post as unliked
        setLikesCount(likesCount - 1);  // Decrement like count
      } catch (error) {
        console.log("Error unliking post:", error);
      }
    }
  };

  // Handle like button click for a comment
  const handleCommentLike = async (commentId: number) => {
    try {
      const response = await axios.post(
        `http://127.0.0.1:8000/api/feed-comment-like/${commentId}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
        }
      );
      console.log("Comment liked:", response.data);
    } catch (error) {
      console.log("Error liking comment:", error);
    }
  };

  const handleReply = (commentId: number) => {
    console.log("Replying to comment:", commentId);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
      {/* USER INFO */}
      <div className="flex items-center mb-4">
        <img
          src={feeds.user.image || defaultImage}
          onError={(e) => (e.currentTarget.src = defaultImage)}
          className="w-12 h-12 rounded-full object-cover mr-4"
        />
        <div>
          <p className="text-lg text-gray-800">
            {feeds.user.first_name} {feeds.user.last_name}
          </p>

          <div className="text-gray-400 text-sm flex items-center space-x-2">
            <span>{timeAgo(feeds.created_at)}</span>
            <span>·</span>
          </div>
        </div>
      </div>

      {/* POST CONTENT */}
      <p className="text-md">{feeds.title}</p>

      {feeds.image && (
        <img
          src={feeds.image}
          className="w-full max-h-80 object-cover rounded-lg mt-3"
        />
      )}

      {/* LIKE  */}
      <div className="flex items-center space-x-6 mt-4">
        <button onClick={handleLike} className="flex items-center text-gray-500">
          {liked ? (
            <FaThumbsUp className="text-blue-500" />
          ) : (
            <FaRegThumbsUp className="text-gray-500" />
          )}
          <span className="ml-2">{likesCount} Likes</span>
        </button>

        <button className="flex items-center text-gray-500">
          <BiCommentDetail className="text-gray-500 h-5 w-5 m-2 mb-1" />
          <span className="">Comment</span>
        </button>

        <button className="flex items-center text-gray-500">
          <HiOutlinePhotograph className="text-gray-500 h-5 w-5 m-3" />
          <span className="ml-2">Share</span>
        </button>
      </div>

      <div className="bg-gray-200 rounded-md flex mt-4">
        <img
          src={feeds.user.image || defaultImage}
          onError={(e) => (e.currentTarget.src = defaultImage)}
          className="w-7 h-7 rounded-full object-cover mt-2 ml-2"
        />
        <input
          value={comment}
          onChange={(e) => setComment(e.target.value)} 
          onKeyDown={handleCommentSubmit} 
          className="w-full p-3 rounded-md"
          placeholder="Write a comment..."
        />
        <TiMicrophoneOutline className="h-6 w-6 m-3 opacity-40" />
        <HiOutlinePhotograph className="h-6 w-6 m-3 opacity-40" />
        
      </div>

      {/* COMMENTS LIST */}
      <div className="mt-4">
        {comments.length === 0 ? (
          <p className="text-sm text-gray-500">No comments yet.</p>
        ) : (
          comments.map((c) => (
            <div key={c.id} className="flex items-start mt-3">
              <img
                src={c.user.image || defaultImage}
                onError={(e) => (e.currentTarget.src = defaultImage)}
                className="w-10 h-10 rounded-full mr-3"
              />
              <div className="bg-gray-100 p-3 rounded-lg w-full">
                <p className="font-semibold">
                  {c.user.first_name} {c.user.last_name}
                </p>
                <p className="text-sm">{c.comment}</p>
                <p className="text-xs text-gray-400 mt-1">
                  {timeAgo(c.created_at)}
                </p>

                {/* Like and Reply Buttons for Comment */}
                <div className="flex items-center space-x-4 mt-2">
                  <button
                    onClick={() => handleCommentLike(c.id)}
                    className="flex items-center text-gray-500"
                  >
                    <FaRegThumbsUp className="text-gray-500 w-4 h-4" />
                    <span className="ml-1 text-xs">Like</span>
                  </button>
                  <button
                    onClick={() => handleReply(c.id)}
                    className="flex items-center text-gray-500"
                  >
                    <BsReply className="text-gray-500 h-4 w-4" />
                    <span className="ml-1 text-xs">Reply</span>
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default PostItem;
