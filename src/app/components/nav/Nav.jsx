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

      {/* Responsive menu dropdown */}
  
    </nav>
  );
};


