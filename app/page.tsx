import React from "react";
import Image from "next/image";
import titleImage from "../public/landingPageImg/titleImage.jpg";
import CtaButton from "./components/ctaButton";

import Navbar from "./components/navbar/navBar";
import StoryCards from "./components/storyCards";

export default function Home() {
  return (
    <>
      <body className="bg-white dark:bg-graydark">
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
              <div className="absolute top-0.5 z-10 overflow-hidden">
                <Navbar />
              </div>
            </div>
            <div className="absolute bottom-1/3 z-10 text-white p-7 md:bottom-1/2 ">
              <h2 className="text-base text-white font-semibold text-opacity-35 -mt-1">
                fotokollektionen
              </h2>
              <h1 className="text-xl font-normal">
                Bilder die Geschichten erzählen.
              </h1>
              <p className="text-base text-justify font-light md:max-w-lg">
                Durchstöbere unsere Kollektionen, finde neue Perspektiven und
                lass dich von den vielfältigen Geschichten hinter jedem Bild
                faszinieren.
              </p>
              <CtaButton text="unsere Favoriten" />
            </div>
          </section>
        </header>
        <main>
          <section className="w-full h-screen flex flex-col p-7 pt-0 -mt-32 text-black dark:text-white">
            <div>
              <h2 className="text-base text-white font-semibold text-opacity-35 -mt-1">
                neueste
              </h2>
              <h1 className="text-xl font-normal">
                Tauch ein in unsere Geschichten
              </h1>
            </div>
            <div className="relative">
              <StoryCards></StoryCards>
            </div>
          </section>
        </main>
      </body>
    </>
  );
}
