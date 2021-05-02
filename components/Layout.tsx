import React from "react";
import { Navbar } from "./Navbar";

interface LayoutProps {
  width?: string;
}

export const Layout: React.FC<LayoutProps> = ({ children, width }) => {
  return (
    <div>
      <Navbar />
      <main className={`${width ?? "container"} px-5 mx-auto mt-12`}>
        {children}
      </main>
    </div>
  );
};
