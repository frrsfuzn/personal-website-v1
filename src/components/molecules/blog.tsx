import React, { useState } from "react";
import cx from "classnames";
interface BlogProps {
  title: string;
  desc: string;
  date: string;
}

function Blog({ title, desc, date }: BlogProps) {
  const [hover, setHover] = useState(false);
  let highlight = cx({
    "backdrop-invert rounded-md transition-[width] duration-500 bg-white/0 absolute top-0 bottom-0 left-0 z-10":
      true,
    "w-full": hover,
    "w-0": !hover,
  });
  return (
    <div className="relative">
      <div
        className={highlight}
        onMouseLeave={() => setHover(false)}
        onMouseEnter={() => setHover(true)}
      />

      <div
        className="w-full bg-white drop-shadow-md p-5 rounded-md border-l-2 border-red-500"
        onMouseLeave={() => setHover(false)}
        onMouseEnter={() => setHover(true)}
        onFocus={() => setHover(true)}
        onBlur={() => setHover(false)}
      >
        <h1 className="text-xl">{title}</h1>
        <p>{desc}</p>
        <label>tags:</label>
        <div></div>
        <p>{date}</p>
      </div>
    </div>
  );
}

export default Blog;
