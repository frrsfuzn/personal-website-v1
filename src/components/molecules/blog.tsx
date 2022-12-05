import React from "react";

interface BlogProps {
  title: string;
  desc: string;
  date: string;
}

function Blog({ title, desc, date }: BlogProps) {
  return (
    <div className="w-full bg-white drop-shadow-md p-5 rounded-md border-l-4 border-red-500">
      <h1 className="text-xl">{title}</h1>
      <p>{desc}</p>
      <label>tags:</label>
      <div>

      </div>
      <p>{date}</p>
    </div>
  );
}

export default Blog;
