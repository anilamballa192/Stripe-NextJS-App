"use client";

import { useState } from "react";
import PostList from "./components/PostList";
import PostFilter from "./components/PostFilter";

export default function Home() {
  const [filter, setFilter] = useState("");

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="w-full max-w-2xl bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-4">Post Viewer</h1>
        <PostFilter onFilterChange={setFilter} />
        <div className="mt-4">
          <PostList filter={filter} />
        </div>
      </div>
    </main>
  );
}
