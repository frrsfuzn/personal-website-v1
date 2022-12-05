import React, { ReactNode } from "react";
import Navbar from "./organism/navbar";

interface LayoutProps {
  children: ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <div className="h-screen w-screen pt-12">
      <Navbar />
      {children}
    </div>
  );
}

export default Layout;
