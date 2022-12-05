import React, { useState } from "react";
import cx from "classnames";

interface NavItemProps {
  active: boolean;
  title: string;
}

function NavItem({ title, active }: NavItemProps) {
  let [hover, setHover] = useState(false);
  const containerStyle = cx({
    "relative bg-white/100 mr-2 rounded-sm": true,
    "invert backdrop-invert": active,
  });
  let highlight = cx({
    "transition-all duration-500 bg-white/0 absolute top-0 bottom-0 left-0":
      true,
    "backdrop-invert w-full": hover && !active,
    "w-0": !hover && !active,
  });
  return (
    <div className={containerStyle}>
      <div
        className={highlight}
        onMouseLeave={() => setHover(false)}
        onMouseEnter={() => setHover(true)}
      />
      <span
        className="border-b-2 border-red-400"
        onMouseLeave={() => setHover(false)}
        onMouseEnter={() => setHover(true)}
      >
        {title}
      </span>
    </div>
  );
}

export default NavItem;
