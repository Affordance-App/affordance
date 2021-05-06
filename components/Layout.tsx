import React from "react";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";

interface LayoutProps {
  width?: string;
  className?: string;
  signedIn?: boolean;
}

export const Layout: React.FC<LayoutProps> = ({
  children,
  width,
  className,
  signedIn
}) => {
  return (
    <div className="flex flex-col h-screen">
      <Navbar signedIn={signedIn} />
      <main
        className={`${width ?? "container"} px-5 mx-auto mt-12 ${className}`}
      >
        {children}
      </main>
      <Footer/>
    </div>
  );
};
