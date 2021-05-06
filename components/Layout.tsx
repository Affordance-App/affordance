import React from "react";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";
import { useState } from "react";
import { Context } from "../lib/useContext";

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

  const [newTaskText, setNewTaskText] = useState('');

  return (
    <Context.Provider  value={[newTaskText, setNewTaskText]}>
    <div className="flex flex-col h-screen">
      <Navbar signedIn={signedIn} />
      <main
        className={`${width ?? "container"} px-5 mx-auto mt-12 ${className}`}
      >
        {children}
      </main>
      <Footer/>
      </div>
      </Context.Provider>
  );
};

export async function getStaticProps(newTaskText) {

  // fetch data here
  const data = await fetchData()

  // Let's assume something silly like this:
  // {
  //     buttonLabel: 'Click me to change the title',
  //     pageTitle: 'My page'
  // }
  
  return {
    props: {
       data
    }, // will be passed to the page component as props
  }
}