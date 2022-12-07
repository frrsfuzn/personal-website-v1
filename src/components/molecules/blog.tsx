import React, { useState } from "react";
import cx from "classnames";
import MenuItem from "../atoms/MenuItem";
import Link from "next/link";
interface BlogProps {
  title: string;
  desc: string;
  date: string;
  slug: string;
  tags: string[];
}

function Blog({ title, desc, date, tags, slug }: BlogProps) {
  const [hover, setHover] = useState(false);
  let highlight = cx({
    "backdrop-invert pointer-event-none transition-[width] duration-500 bg-white/0 absolute top-0 bottom-0 left-0 z-10":
      true,
    "w-full": hover,
    "w-0": !hover,
  });
  return (
    <div className="relative">
      <Link
        href={`/blogs/${slug}`}
        className={highlight}
        onMouseLeave={() => setHover(false)}
        onMouseEnter={() => setHover(true)}
      />

      <div className="w-full drop-shadow-md p-5 border-l-2 border-red-500">
        <Link
          href={`/blogs/${slug}`}
          onMouseLeave={() => setHover(false)}
          onMouseEnter={() => setHover(true)}
        >
          <h1 className="inline-block text-xl">{title}</h1>
        </Link>
        <p>{desc}</p>
        <label>tags:</label>
        <div className="mt-1 mb-2">
          {tags.map((tag) => (
            <Link
              href={`/tags/${tag}`}
              className="bg-orange-500 text-sm p-1 rounded-md mr-2"
              key={tag}
            >
              {tag}
            </Link>
          ))}
        </div>
        <label className="text-sm">{date}</label>
      </div>
    </div>
  );
}

export default Blog;
