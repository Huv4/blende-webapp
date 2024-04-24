//This component represents the logo or brand name of the Navbar.
import React from "react";
import Link from "next/link";

const Logo = () => {
  return (
    <div>
      <Link href="https://blendeeinssieben.vercel.app">
        <span>Blende 1.7</span>
      </Link>
    </div>
  );
};

export default Logo;
