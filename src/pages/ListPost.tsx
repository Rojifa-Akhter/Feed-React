import React, { useEffect, useState } from "react";
import type { Post } from "../types/Post";
import { PostService } from "../services/PostService";
import PostItem from "./PostItem";

const ListPost: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const fetchedPosts = await PostService();
        setPosts(fetchedPosts);
      } catch (err) {
        setError("Error loading posts.");
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="space-y-6">
      {posts.map((post) => (
        <PostItem key={post.id} feeds={post} />
      ))}
    </div>
  );
};

export default ListPost;
