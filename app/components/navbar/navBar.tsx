"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

import cart from "./../../../public/icons/commerce.png";
import user from "./../../../public/icons/people.png";
import burgermenu from "./../../../public/icons/burgermenu.svg";
import logo from "./../../../public/Logos/Logo.svg";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="top-0 w-full bg-white shadow-md z-50">
      <div className="flex justify-between items-center p-4">
        {/* Left side: Cart and Profile Icons */}
        <div className="flex space-x-4">
          <Image src={cart} alt="Cart Logo" className="w-4 object-cover" />
          <Image src={user} alt="Cart Logo" className="w-4 object-cover" />
        </div>

        {/* Center: Logo */}
        <div>
          <Image
            src={logo}
            alt="Blendeeinssieben Logo"
            className="w-20 object-cover"
            priority
          />
        </div>

        {/* Right side: Burger Menu */}
        <div className="text-l">
          <button onClick={toggleMenu}>
            <Image
              src={burgermenu}
              alt="burgermenu Logo"
              className="w-4 m-1 object-cover"
            ></Image>
          </button>
        </div>
      </div>
      {/* Slide-in Menu */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${
          menuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleMenu} // Clicking outside the menu closes it
      >
        <div
          className={`fixed inset-x-0 top-0 w-full bg-white p-6 rounded-b-lg space-y-6 transition-transform duration-300 transform ${
            menuOpen ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          {/* Close Button */}
          <div className="flex justify-end">
            <button onClick={toggleMenu}>
              <FontAwesomeIcon icon={faTimes} className="text-2xl" />
            </button>
          </div>

          {/* Menu Items */}
          <nav className="flex flex-col items-center space-y-4">
            <Link href="/kollektionen" onClick={toggleMenu} className="">
              Kollektionen
            </Link>
            <Link href="/ueber-uns" onClick={toggleMenu} className="">
              Über uns
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
