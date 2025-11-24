import React, { useState } from "react";
import userImage1 from "../assets/images/card_ppl1.png";
import { HiOutlinePhotograph } from "react-icons/hi";
import { GoPencil } from "react-icons/go";
import { GoDash } from "react-icons/go";
import { FiSend } from "react-icons/fi";
import { CiVideoOn } from "react-icons/ci";
import { RiCalendarEventLine } from "react-icons/ri";
import { MdOutlineArticle } from "react-icons/md";
import { createPost } from "../services/PostService";

const CreatePost = ({ onPostCreated }: { onPostCreated: () => void }) => {
  const [post, setPost] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [isFocused, setIsFocused] = useState(false);


  const handleImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleSubmit = async () => {
    if (!post.trim() && !image) return alert("Write something or add an image");

    setLoading(true);

    const formData = new FormData();
    formData.append("title", post);
    formData.append("visibility", "public");
    if (image) formData.append("image", image);

    try {
      await createPost(formData);
      setPost("");
      setImage(null);
      onPostCreated();
    } catch (err) {
      console.error(err);
      alert("Error posting");
    }

    setLoading(false);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm mb-6">

      <div className="flex items-center mb-4 relative">
        <img src={userImage1} className="w-12 h-12 rounded-full mr-4" />

        <input
          value={post}
          onChange={(e) => setPost(e.target.value)}
          onFocus={(e) => {
            e.target.placeholder = "";
            setIsFocused(true);
          }}
          onBlur={(e) => {
            e.target.placeholder = "Write something...";
            setIsFocused(false);
          }}
          placeholder="Write something..."
          className="
            w-full p-3 rounded-md border border-gray-200
            focus:outline-none focus:ring-0 focus:border-transparent
          "
        />

        <GoPencil
          className={`
            absolute right-70 top-1/2 transform -translate-y-1/2 
            text-gray-500 h-5 w-5 
            ${isFocused || post ? "hidden" : "block"}
          `}
        />

        <GoDash
          className={`
            absolute right-68 bottom-2 
            text-gray-500 h-5 w-5
            ${isFocused || post ? "hidden" : "block"}
          `}
        />
      </div>


      <div className="flex items-center space-x-4 bg-gray-200 p-3 rounded-md">

        <label className="flex items-center cursor-pointer">
          <HiOutlinePhotograph className="w-6 h-6 text-gray-600" />
          <span className="text-sm pl-2">Photo</span>
          <input type="file" className="hidden" onChange={handleImage} />
        </label>
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

        <button
          onClick={handleSubmit}
          disabled={loading}
          className="ml-auto px-6 py-2 bg-blue-500 text-white rounded-md flex items-center"
        >
          <FiSend />
          <span className="ml-2">{loading ? "Posting..." : "Post"}</span>
        </button>

      </div>
    </div>
  );
};

export default CreatePost;
