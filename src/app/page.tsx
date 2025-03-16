"use client";

import { useState, useEffect } from "react";

export default function Home() {
  const [data, setData] = useState<{ id: number; title: string }[] | null>(
    null
  );
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts?_limit=5"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-100 p-4">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Latest Posts</h1>

        {loading && <p className="text-gray-600">Loading...</p>}
        {error && <p className="text-red-500">Error: {error}</p>}

        <ul>
          {data?.map((post) => (
            <li key={post.id} className="border-b py-2">
              <h2 className="text-lg font-semibold">{post.title}</h2>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
