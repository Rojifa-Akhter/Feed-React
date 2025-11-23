// PostItem.tsx
import React, { useState } from "react";
import { FiThumbsUp, FiMessageCircle, FiShare2 } from "react-icons/fi";
import type { Post } from "../types/Post"; 

interface PostItemProps {
  feeds: Post;
}

const PostItem: React.FC<PostItemProps> = ({ feeds }) => {
//   const [likeCount, setLikeCount] = useState(feeds.likes); // Start with initial likes from the feed
  const [comment, setComment] = useState(""); // Track the current comment text
  const [comments, setComments] = useState<string[]>([]); // Store comments in an array

  // Handle like button click
  const handleLike = () => {
    // Simulate liking the post by incrementing the like count
    // setLikeCount(likeCount + 1);
  };

  // Handle comment input change
//   const handleCommentChange = (e) => {
//     setComment(e.target.value);
//   };

  // Handle comment submission
  const handleCommentSubmit = () => {
    if (comment.trim()) {
      // Simulate adding a comment
      setComments([...comments, comment]);
      setComment(""); // Clear the input field after submitting
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
      <div className="flex items-center mb-4">
        <img src={feeds.image} alt="User" className="w-12 h-12 object-cover rounded-full mr-4" />
        <div>
          <p className="font-bold">{feeds.title}</p>
          {/* <p className="text-sm text-gray-500">{feeds.created_at}</p> */}
        </div>
      </div>

      <div className="mb-4">
        <p className="text-lg">{feeds.title}</p>
        {feeds.image && (
          <img src={`${feeds.image}`} alt="Post content" className="w-full mt-4 rounded-md" />
        )}
      </div>

      <div className="flex space-x-6 mb-4">
        <button onClick={handleLike} className="flex items-center text-gray-500">
          <FiThumbsUp className="w-5 h-5" />
          {/* <span className="ml-2">{likeCount} Likes</span> */}
        </button>
        <button className="flex items-center text-gray-500">
          <FiMessageCircle className="w-5 h-5" />
          <span className="ml-2">Comment</span>
        </button>
        <button className="flex items-center text-gray-500">
          <FiShare2 className="w-5 h-5" />
          <span className="ml-2">Share</span>
        </button>
      </div>

      {/* Comment Section */}
      <div>
        <textarea
          value={comment}
        //   onChange={handleCommentChange}
          className="w-full p-3 border rounded-md"
          placeholder="Write a comment..."
        />
        <button onClick={handleCommentSubmit} className="mt-2 px-6 py-2 bg-blue-500 text-white rounded-md">
          Post Comment
        </button>

        {/* Display the list of comments */}
        <div className="mt-4">
          {comments.length > 0 ? (
            <div>
              <h3 className="font-semibold text-lg">Comments:</h3>
              <ul>
                {comments.map((comment, index) => (
                  <li key={index} className="mt-2">
                    <p className="text-sm">{comment}</p>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <p className="text-sm text-gray-500">No comments yet.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default PostItem;
