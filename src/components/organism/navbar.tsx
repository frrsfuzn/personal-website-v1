import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import cx from "classnames";
import NavItem from "../atoms/NavItem";

function Navbar() {
  const router = useRouter();
  const pathname = router.pathname.split("/")[1];

  return (
    <div className="flex h-12 justify-center items-center fixed top-0 left-0 right-0 z-50 backdrop-blur-sm bg-white/30">
      <nav className="flex justify-end container">
        <Link className="mr-5" href="/">
          <NavItem title="home" active={pathname === "home"} />
        </Link>
        <Link className="mr-5" href="/blogs">
          <NavItem title="blogs" active={pathname === "blogs"} />
        </Link>
        <Link className="mr-5" href="/experience">
          <NavItem title="experience" active={pathname === "experience"} />
        </Link>
      </nav>
    </div>
  );
}

export default Navbar;
