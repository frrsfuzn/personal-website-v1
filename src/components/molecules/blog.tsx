import React from "react";

interface BlogProps {
  title: string;
  desc: string;
  date: string;
}

function Blog({ title, desc, date }: BlogProps) {
  return (
    <div className="max-w-md bg-white drop-shadow-lg p-5 mb-5 mr-5 rounded-md">
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
