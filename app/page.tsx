import React from "react";
import Image from "next/image";
import titleImage from "../public/landingPageImg/titleImage.jpg";
import rightImage from "../public/landingPageImg/Kran.jpg";
import leftImage from "../public/landingPageImg/Dresden.jpg";

import Navbar from "./components/navbar/navBar";
import InfoText from "./components/infoText";
import StoryCards from "./components/storyCards";
import CtaButton from "./components/ctaButton";

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
            <div className="absolute bottom-1/3 z-10 p-7 md:bottom-1/2">
              <InfoText
                heading1="Bilder die Geschichten erzählen."
                heading2="fotokollektionen"
                paragraph="Durchstöbere unsere Kollektionen, finde neue Perspektiven und lass dich
        von den vielfältigen Geschichten hinter jedem Bild faszinieren."
                ctaButtonText="unsere Favoriten"
              ></InfoText>
            </div>
          </section>
        </header>
        <main className="relative">
          <section className="w-full h-full flex-col p-7 pt-0 -mt-32 text-black dark:text-white">
            <div>
              <h2 className="text-base text-black font-semibold text-opacity-35 -mt-1 dark:text-white dark:text-opacity-35">
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
          <section className="relative w-full h-full flex-col text-black md:mt-40 dark:text-white">
            <div className="grid grid-cols-1 center-items justify-items-center md:grid-cols-2">
              <div className="relative">
                <div>
                  <Image
                    src={leftImage}
                    alt="Kondensstreifen von Flugzeug parallel zu Kran bei Nacht"
                    className="h-full object-cover"
                  ></Image>
                </div>
                <div className="absolute bottom-10 z-10 p-7">
                  <InfoText
                    heading1="Wer sind wir?"
                    heading2="über uns"
                    paragraph="Wir möchten jedem Fotografen und jeder Fotografin, die Geschichten mit ihren Fotos erzählen möchte, eine Plattform dafür bieten. Gleichzeitig hoffen wir einfach, dass dir unsere Sammlungen gefallen."
                    ctaButtonText="mehr"
                  ></InfoText>
                </div>
              </div>
              <div className="relative">
                <div>
                  <Image
                    src={rightImage}
                    alt="Konturen der Hofkirche Dresden vor lila Sonnenuntergang."
                    className="h-full object-cover"
                  ></Image>
                </div>
                <div className="absolute bottom-10 right-0 z-10 p-7 text-right">
                  <InfoText
                    heading1="Professionelle Fotografie?"
                    heading2="die fotograf:innen"
                    paragraph="Im klassischen Sinne ist wohl keine unserer Geschichten von einem professionellen Fotografen oder einer professionellen Fotografin abgelichtet, die sonst ihr Geld in einem Studio in der Innenstadt verdienen. Die Fotograf:innen von Blende 1.7 möchten einfach nur durch Fotografie ihrer Kreativität und ihrem Gestaltungswillen Ausdruck zu verleihen."
                    ctaButtonText="zu den Fotograf:innen"
                  ></InfoText>
                </div>
              </div>
            </div>
          </section>
        </main>
        <footer className="relative w-full h-full flex-col mt-20 text-center text-black dark:text-white">
          <div>
            <CtaButton text="kontaktiere uns"></CtaButton>
          </div>
          <div className="mt-20 mb-20">
            <h2 className="text-base text-black font-semibold text-opacity-35 dark:text-white dark:text-opacity-35">
              folge uns
            </h2>
          </div>
        </footer>
      </body>
    </>
  );
}
