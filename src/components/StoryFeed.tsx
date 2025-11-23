import React, { useState } from "react";

// Example images (replace these with actual images or imports)
import userImage1 from "../assets/images/card_ppl1.png";
import userImage2 from "../assets/images/card_ppl2.png";
import userImage3 from "../assets/images/card_ppl3.png";
import userImage4 from "../assets/images/card_ppl4.png";
import userImage5 from "../assets/images/mini_pic.png"; 
import arowImage from "../assets/images/arrow-right.svg"; 

const StoryFeed = () => {
  const [post, setPost] = useState<string>("");

  const handlePostChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setPost(e.target.value);
  };

  return (
    <div className="p-6 mb-8">
      {/* Your Story Section */}
      <div className="flex space-x-4 mb-6">
        {/* Your Story */}
        <div className="relative w-38 h-38 bg-gray-800 rounded-lg overflow-hidden flex items-center justify-center">
          <img src={userImage1} alt="Your Story" className="w-full h-full object-cover backdrop-opacity-45" />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-2 text-center">
            <button className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mx-auto -mt-6">
              <span className="text-2xl mb-1">+</span>
            </button>
            <p className="text-white text-sm font-semibold mt-2">Your Story</p>
          </div>
        </div>

        {/* Other People */}
        {[userImage2, userImage3].map((image, index) => (
          <div key={index} className="relative w-38 h-38 bg-gray-800 rounded-lg overflow-hidden">
            <img src={image} alt="User" className="w-full h-full object-cover opacity-40" />
            <div className="absolute top-2 right-2 rounded-full border-3 border-white">
              <img src={userImage5} alt="User" className="w-7 h-7 object-cover rounded-full" />
            </div>
            <p className="absolute bottom-0 left-0 right-0 text-center text-sm font-semibold text-white mb-4">
              Ryan Roslansky
            </p>
          </div>
        ))}

        {/* Last Image - Only Icon */}
        <div className="relative w-38 h-38 bg-gray-800 rounded-lg overflow-hidden flex items-center justify-center">
            <img src={userImage4} alt="User" className="w-full h-full object-cover opacity-40" />
            <div className="absolute top-2 right-2 rounded-full border-3 border-white">
                <img src={userImage5} alt="User" className="w-7 h-7 object-cover rounded-full" />
            </div>
            <div className="absolute bottom-12 right-[-5px] flex items-center justify-center">
                <img src={arowImage} alt="Arrow" className="w-6 h-6 object-cover rounded-full bg-blue-400 border-1 border-gray-100" />
            </div>
            <p className="absolute bottom-0 left-0 right-0 text-center text-sm font-semibold text-white mb-4">
                Ryan Roslansky
            </p>
            </div>
      </div>
    </div>
  );
};

export default StoryFeed;
