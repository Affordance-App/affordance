import React from "react";
import Link from "next/link";
import { Button } from "./Button";

interface NavbarProps {
  signedIn: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({signedIn}) => {
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
          {!signedIn ? (<>
              <Link href="/apply"><Button>Apply</Button></Link>
              <Button color="black">Sign In</Button></>
          ) : (
          <>
              <img src="/static/not.svg"/>
              <Link href="/apply"><Button>Apply</Button></Link>
                <img 
                  style={{ width: "45px", height: "45px", borderRadius: "50%" }}
                  src="https://avatars.githubusercontent.com/u/41022901?v=4"
                  alt="user profile" />  
          </>
          )}
       </li> 
      </ul>
    </nav>
  );
};
