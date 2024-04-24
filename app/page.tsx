import React from "react";
import Image from "next/image";
import titleImage from "../public/landingPageImg/titleImage.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faGripLines } from "@fortawesome/free-solid-svg-icons";

import Navbar from "./components/navbar/navBar";

export default function Home() {
  return (
    <>
      <body>
        <header>
          <section className="w-full h-screen flex">
            <div className="relative h-full z-0">
              <div className="h-4/5">
                <Image
                  src={titleImage}
                  alt="Thüringer Wald versinkt im Nebel"
                  className="h-full object-cover"
                  priority
                />
              </div>
              <div className="absolute top-0 z-1">
                <Navbar />
              </div>
            </div>
          </section>
        </header>
        <main></main>
      </body>
    </>
  );
}
