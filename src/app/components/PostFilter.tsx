"use client";

import { useState } from "react";

export default function PostFilter({
  onFilterChange,
}: {
  onFilterChange: (value: string) => void;
}) {
  const [searchTerm, setSearchTerm] = useState("");

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;
    setSearchTerm(value);
    onFilterChange(value);
  }

  return (
    <input
      type="text"
      placeholder="Search posts..."
      value={searchTerm}
      onChange={handleChange}
      className="p-2 border rounded-md w-full"
    />
  );
}
