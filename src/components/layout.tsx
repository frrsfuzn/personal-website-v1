import React, { ReactNode } from "react";
import Navbar from "./organism/navbar";

interface LayoutProps {
  children: ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <div className="h-screen w-screen pt-12">
      <Navbar />
      <div className="container mx-auto">
        {children}
      </div>
    </div>
  );
}

export default Layout;
