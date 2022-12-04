import React, { ReactNode } from "react";
import Navbar from "./navbar";

interface LayoutProps {
  children: ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <div className="h-screen w-screen">
      <Navbar />
      {children}
    </div>
  );
}

export default Layout;
