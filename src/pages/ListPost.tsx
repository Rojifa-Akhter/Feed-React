import React, { useEffect, useState } from "react";
import type { Post } from "../types/Post";
import { PostService } from "../services/PostService";
import PostItem from "./PostItem";

interface ListPostProps {
  reload: boolean;
}

const ListPost: React.FC<ListPostProps> = ({ reload }) => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

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

  useEffect(() => {
    fetchPosts();  // call on load + when reload changes
  }, [reload]);

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
