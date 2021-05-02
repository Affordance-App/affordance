import React from "react";
import Link from "next/link";

interface NavbarProps {}

export const Navbar: React.FC<NavbarProps> = ({}) => {
  return (
    <nav className="flex items-center justify-between mx-auto container py-9 px-5">
      <Link href="/">
        <a>
          <img src="/static/logo.svg" className="h-10" />
        </a>
      </Link>
      <ul className="hidden md:flex items-center space-x-10">
        <li>
          <a href="#" className="text-darkGray">
            Explore
          </a>
        </li>
        <li>
          <a href="#" className="text-darkGray">
            Investors
          </a>
        </li>
        <li>
          <a href="#" className="text-darkGray">
            Partners
          </a>
        </li>
        <li>
          <a href="#" className="text-darkGray">
            Credits
          </a>
        </li>
        <li className="flex items-center space-x-3">
          <button className="py-2.5 px-6 rounded-lg border border-lightGray font-bold shadow-sm focus:outline-none focus:ring transition">
            Apply
          </button>
          <button className="py-2.5 px-6 rounded-lg bg-black text-white font-bold shadow-sm focus:outline-none focus:ring transition">
            Sign In
          </button>
        </li>
      </ul>
    </nav>
  );
};
