import React from "react";
import { Navbar } from "./Navbar";

interface LayoutProps {}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main className="container px-5 mx-auto mt-12">{children}</main>
    </div>
  );
};
