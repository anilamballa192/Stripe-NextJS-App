"use client";

import { useState, useEffect } from "react";

interface Post {
  id: number;
  title: string;
  body: string;
}

export default function PostList({ filter }: { filter: string }) {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts?_limit=10"
        );
        if (!response.ok) throw new Error("Failed to fetch posts");

        const data: Post[] = await response.json();
        setPosts(data);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    }

    fetchPosts();
  }, []);

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(filter.toLowerCase())
  );

  if (loading) return <p className="text-gray-600">Loading posts...</p>;
  if (error) return <p className="text-red-500">Error: {error}</p>;

  return (
    <ul className="space-y-4">
      {filteredPosts.map((post) => (
        <li key={post.id} className="p-4 border rounded-lg shadow-sm bg-white">
          <h2 className="text-lg font-semibold">{post.title}</h2>
          <p className="text-gray-600">{post.body}</p>
        </li>
      ))}
    </ul>
  );
}
