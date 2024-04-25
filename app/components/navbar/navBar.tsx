"use client";
import React, { useState } from "react";
import MobileMenuButton from "./mobileMenuButton";
import Logo from "./logo";
import NavMenu from "./navMenu";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="w-screen p-7 text-l font-light text-white dark:text-black">
      <div className="flex justify-between">
        <Logo />
        <div className="text-right">
          <MobileMenuButton isOpen={isOpen} toggleMenu={toggleMenu} />
          <NavMenu isOpen={isOpen} />
        </div>
      </div>
    </nav>
  );
}
