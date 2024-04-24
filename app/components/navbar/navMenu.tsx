//This component represents the navigation menu items.
import React from "react";
import Link from "next/link";

type NavMenuProps = {
  isOpen: boolean;
};

const NavMenu = ({ isOpen }: NavMenuProps) => {
  return (
    <div className={`${isOpen ? "block" : "hidden"}`}>
      <div className="flex flex-col lg:block lg:space-x-7">
        <Link href="/about">About</Link>
        <Link href="/services">Services</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </div>
  );
};

export default NavMenu;
