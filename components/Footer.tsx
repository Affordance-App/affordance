import React from "react";

interface Footer {

}

export const Footer: React.FC<Footer> = ({}) => {
  return (
    <div className="bottom-0 justify-center  mb-12  items-center justify-between mx-auto container py-9 px-5">
     
      <div className="grid grid-cols-4 gap-4 ">
        <div><img src="/static/simplelogo.svg" className="w-12"/></div>
        

        <ul className="space-y-4">
          <p className="text-base font-semibold tracking-wide uppercase">company</p>  
          <li>Pricing</li>
          <li>Our Team</li>
          <li>Blog</li>
          <li>Status <p className="text-indigo-300 text-">operational</p></li>
        </ul>
        
        <ul className="space-y-4">
          <p className="text-base font-semibold tracking-wide uppercase">legal</p>  
          <li>Privacy Policy</li>
          <li>Apache License</li>
          <li>Trademark Policy</li>
          <li>Terms of Service</li>
        </ul>

        <ul className="space-y-4">
          <p className="text-base block font-semibold tracking-wide uppercase">social</p>
          <li><a href="https://twitter.com/affordancehq">Twitter</a></li>
          <li><a href="https://github.com/Affordance-App/affordance">Github</a></li>
          <li><a href="https://discord.gg/NhfngzZX"> Discord</a></li>
        </ul>
        

       </div>
      
    
      <p className="small mt-3 text-gray items-center justify-center mx-auto">
         Copyright © 2021 Affordance All rights reserved.{" "}
           By<a href="https://twitter.com/coderinblack" className="text-black">
          @codeinblack
          </a>  and
          <a href="https://twitter.com/coderinblack" className="text-black">
          @jonas</a> 
        </p>
    </div>
  );
};
