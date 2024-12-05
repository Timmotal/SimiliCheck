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
     
        </div>
   
     
  
      </div>
      {/* Responsive menu dropdown */}
  
    </nav>
  );
};


