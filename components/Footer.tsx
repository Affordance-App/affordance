import React from "react";

interface Footer {}

export const Footer: React.FC<Footer> = ({}) => {
  return (
    <footer className="bottom-0 w-full justify-between mb-12  items-center mx-auto container py-9 px-5">
      <div className="grid grid-cols-4 gap-4 ">
        <div>
          <img src="/static/simplelogo.svg" className="w-12" />
        </div>

        <ul className="space-y-4">
          <p className="small font-bold text-gray uppercase">company</p>
          <li>Pricing</li>
          <li>Our Team</li>
          <li>Blog</li>
          <li>
            Status <span className="text-indigo-300 text-">operational</span>
          </li>
        </ul>

        <ul className="space-y-4">
          <p className="small font-bold text-gray uppercase">legal</p>
          <li>Privacy Policy</li>
          <li>Apache License</li>
          <li>Trademark Policy</li>
          <li>Terms of Service</li>
        </ul>

        <ul className="space-y-4">
          <p className="small block font-bold text-gray uppercase">social</p>
          <li>
            <a href="https://twitter.com/affordancehq">Twitter</a>
          </li>
          <li>
            <a href="https://github.com/Affordance-App/affordance">GitHub</a>
          </li>
          <li>
            <a href="https://discord.gg/NhfngzZX">Discord</a>
          </li>
        </ul>
      </div>

      <div className="flex space-x-1 justify-center small mt-12 text-gray">
        <p className="inline">
          Copyright © 2021 Affordance All rights reserved.
        </p>
        By
        <a
          href="https://twitter.com/coderinblack"
          className="inline text-black"
        >
          @coderinblack
        </a>
        <p className="inline">and</p>
        <a href="https://twitter.com/jonas_kg" className="inline text-black">
          @jonas
        </a>
      </div>
    </footer>
  );
};
