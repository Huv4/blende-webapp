import React from "react";
import Image from "next/image";
import titleImage from "../public/landingPageImg/titleImage.jpg";
import CtaButton from "./components/ctaButton";

import Navbar from "./components/navbar/navBar";

export default function Home() {
  return (
    <>
      <body className="bg-white dark:bg-black">
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
              <div className="absolute top-0.5 z-10">
                <Navbar />
              </div>
            </div>
            <div className="absolute bottom-1/3 z-10 text-white p-7 lg:bottom-1/2 dark:text-black">
              <h2 className="text-sm text-white font-semibold text-opacity-35 -mt-1">
                fotokollektionen
              </h2>

              <h1 className="text-l font-normal">
                Bilder die Geschichten erzählen.
              </h1>
              <p className="text-sm text-justify font-light md:max-w-lg">
                Durchstöbere unsere Kollektionen, finde neue Perspektiven und
                lass dich von den vielfältigen Geschichten hinter jedem Bild
                faszinieren.
              </p>
              <CtaButton text="unsere Favoriten" />
            </div>
          </section>
        </header>
        <main>
          <section className="w-full h-screen flex p-7 pt-0 -mt-20 text-black dark:text-white">
            <div>
              <h1 className="text-l font-normal">
                Unsere Geschichten und Kollektionen
              </h1>
            </div>
          </section>
        </main>
      </body>
    </>
  );
}
