import React, { useState } from "react";
import type { Post } from "../types/Post";
import { FiThumbsUp, FiMessageCircle, FiShare2 } from "react-icons/fi";

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
        <img
          src={feeds.image}
          alt="Post"
          className="w-12 h-12 rounded-full object-cover mr-4"
        />
        <div>
          <p className="font-bold">{feeds.user.first_name}</p>
        </div>
      </div>

      <div className="mb-4">
        <p className="text-lg">{feeds.title}</p>

        {feeds.image && (
          <img
            src={feeds.image}
            className="w-full mt-3 rounded-md"
            alt="Post"
          />
        )}
      </div>

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

      {/* COMMENTS */}
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
