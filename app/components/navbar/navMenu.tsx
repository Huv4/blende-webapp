//This component represents the navigation menu items.
import React from "react";
import Link from "next/link";

type NavMenuProps = {
  isOpen: boolean;
};

const NavMenu = ({ isOpen }: NavMenuProps) => {
  return (
    <div
      className={`${
        isOpen
          ? "lg:transition-none translate-x-0 transition-transform"
          : "lg:translate-x-0 lg:mx-0 lg:transition-none translate-x-full transition-transform -mx-7"
      }`}
    >
      <div className="lg:block lg:space-x-7 flex flex-col duration-900 ease-in-out">
        <Link href="/geschichten" className="hover:text-deer">
          Geschichten
        </Link>
        <Link href="/fotografen" className="hover:text-deer">
          Fotographen
        </Link>
        <Link href="/about" className="hover:text-deer">
          Über uns
        </Link>
        <Link href="/kontakt" className="hover:text-deer">
          Kontakt
        </Link>
      </div>
    </div>
  );
};

export default NavMenu;
