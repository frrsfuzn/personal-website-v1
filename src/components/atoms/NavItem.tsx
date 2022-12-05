import React from "react";
import cx from "classnames";

interface NavItemProps {
  active: boolean;
  title: string;
}

function NavItem({ title, active }: NavItemProps) {
  const containerStyle = cx({
    "bg-white/100 p-1 mr-5 rounded-sm": true,
    "invert backdrop-invert": active,
  });
  return (
    <div className={containerStyle}>
      <p className="border-b-2 border-red-400">{title}</p>
    </div>
  );
}

export default NavItem;
