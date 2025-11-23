import React, { useEffect, useState } from "react";
import { PostService } from "../services/PostService"; // Service to fetch posts
import PostItem from "./PostItem"; // Component to display individual posts

// Define the Post type
interface Post {
  id: number;
  title: string;
  image: string;
}

const PostList = () => {
  // Set the initial state types for posts, loading, and error
  const [posts, setPosts] = useState<Post[]>([]); // Explicitly type the posts as Post[]
  const [loading, setLoading] = useState<boolean>(true); // Loading state as boolean
  const [error, setError] = useState<string | null>(null); // Error state as string or null

  useEffect(() => {
    // Fetch posts when the component mounts
    const fetchPosts = async () => {
      try {
        const fetchedPosts = await PostService(); // Fetch posts from the service
        setPosts(fetchedPosts); // Update the state with the fetched posts
      } catch (err) {
        setError("Error loading posts."); // If error, update the error state
      } finally {
        setLoading(false); // Set loading to false once done
      }
    };

    fetchPosts(); // Call the fetch function
  }, []); // Empty dependency array ensures this runs only once when the component mounts

  if (loading) return <div>Loading...</div>; // Show loading message while fetching
  if (error) return <div>{error}</div>; // Show error message if there's an issue

  return (
    <div>
      {posts.map((post) => (
        <PostItem key={post.id} feeds={post} /> // Render each post using the PostItem component
      ))}
    </div>
  );
};

export default PostList;
