import React from "react";
import Link from "next/link";

function Navbar() {
  return (
    <div className="flex h-12 justify-center items-center fixed top-0 left-0 right-0 z-50 backdrop-blur-sm bg-white/30">
      <nav className="flex justify-end container">
        <Link className="mr-5" href="/">
          <div className="bg-">home</div>
        </Link>
        <Link className="mr-5" href="/blogs">
          blogs
        </Link>
        <Link className="mr-5" href="/experience">
          experience
        </Link>
      </nav>
    </div>
  );
}

export default Navbar;
