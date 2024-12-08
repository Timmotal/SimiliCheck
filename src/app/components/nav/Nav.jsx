import React, { useState } from "react";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuHandler = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="fixed z-10 top-0 left-0 text-white p-4 xlg:px-20 w-screen  h-14 uppercase">
      <div className=" bg-white text-[#232323] flex justify-between items-center rounded-full p-3 w-full">
        <div className="h-10">
          <img src="/logo.png" alt="" className="h-full" />
        </div>
        <ul className="hidden primary lg:flex justify-center items-center gap-6 text-16">
          <li className="cursor-pointer">
            <a href="#goal">about</a>
          </li>
       
        </ul>
     
  
      </div>
      {/* Responsive menu dropdown */}
  
    </nav>
  );
};


