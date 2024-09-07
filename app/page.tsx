import React from "react";
import Image from "next/image";
import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

import titleImage from "../public/landingPageImg/titleImage.jpg";
import rightImage from "../public/landingPageImg/Kran.jpg";
import leftImage from "../public/landingPageImg/Dresden.jpg";

import NavBar from "./components/navbar/navBar";
import InfoText from "./components/headings/infoText";
import StoryCard from "./components/storyCard";
import CtaButton from "./components/buttons/ctaButton";
import CenteredHeading from "./components/headings/centeredHeading";
import GradientBottom from "./components/styleElements/gradientBottom";

import { fetchStories } from "../lib/fetchStoryCard";
import { Story } from "./types/interfaces";

const Home = async () => {
  const page = 1;
  const limit = 1;
  const stories: Story[] = await fetchStories({ page, limit });
  return (
    <>
      <body className="bg-white dark:bg-graydark text-xl">
        <header>
          <section className="w-full h-screen">
            <div className="">
              <NavBar />
            </div>
            <div className="relative h-full z-0">
              <div className="h-4/5">
                <Image
                  src={titleImage}
                  alt="Thüringer Wald versinkt im Nebel"
                  className="h-full object-cover"
                  priority
                />
              </div>
            </div>
            <div className="absolute bottom-1/3 z-10 p-7 md:bottom-1/2">
              <InfoText
                heading1="Bilder die Geschichten erzählen."
                heading2="fotokollektionen"
                paragraph="Durchstöbere unsere Kollektionen, finde neue Perspektiven und lass dich
        von den vielfältigen Geschichten hinter jedem Bild faszinieren."
                ctaButtonText="unsere Favoriten"
                ctaLinkText="/Favoriten"
              ></InfoText>
            </div>
          </section>
        </header>
        <main className="relative text-center">
          <section className="w-full h-full flex-col p-7 pt-0 -mt-32 text-black md:-mt-10 dark:text-white">
            <CenteredHeading
              h1="Tauch ein in unsere Geschichten"
              h2="neueste"
            ></CenteredHeading>
            <div className="grid grid-cols-1 row-auto gap-2 center-items justify-items-center md:grid-cols-2 md:mt-10 lg:grid-cols-3">
              {stories.map((story) => (
                <div key={story.sys.id}>
                  <StoryCard story={story}></StoryCard>
                </div>
              ))}
            </div>
            <div className="md:mt-10">
              <CtaButton
                text="entdecke alle..."
                ctaLink="/allCollections"
              ></CtaButton>
            </div>
          </section>
          <section className="relative w-full h-full flex-col text-black md:mt-5 dark:text-white">
            <div className="grid grid-cols-1 center-items justify-items-center md:grid-cols-2">
              <div className="relative">
                <div>
                  <Image
                    src={leftImage}
                    alt="Kondensstreifen von Flugzeug parallel zu Kran bei Nacht"
                    className="h-full object-cover"
                  ></Image>
                </div>
                <div className="absolute bottom-10 left-0 z-10 p-7 text-left">
                  <InfoText
                    heading1="Wer sind wir?"
                    heading2="über uns"
                    paragraph="Wir möchten jedem Fotografen und jeder Fotografin, die Geschichten mit ihren Fotos erzählen möchte, eine Plattform dafür bieten. Gleichzeitig hoffen wir einfach, dass dir unsere Sammlungen gefallen."
                    ctaButtonText="mehr"
                    ctaLinkText="/about"
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
                    ctaLinkText="/Fotografen"
                  ></InfoText>
                </div>
              </div>
            </div>
          </section>
          <section></section>
        </main>
        <footer className="relative w-full h-full flex-col mt-20 text-center text-black dark:text-white">
          <div className="text-black text-opacity-70 dark:text-white dark:text-opacity-70">
            <CtaButton
              text="kontaktiere uns"
              ctaLink="mailto:kontakt@blendeeinssieben.com?subject=Anfrage%20an%20Blende1.7"
            ></CtaButton>
          </div>
          <div className="mt-20 mb-20">
            <h2 className="text-base text-black font-semibold text-opacity-70 dark:text-white dark:text-opacity-70">
              folge uns
            </h2>
            <Link
              href="https://www.instagram.com/blendeeinssieben?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              target="_blank"
            >
              <FontAwesomeIcon
                icon={faInstagram}
                className="mt-2 text-xl text-black text-opacity-70 dark:text-white dark:text-opacity-70 hover:text-deer"
              ></FontAwesomeIcon>
            </Link>
          </div>
          <GradientBottom></GradientBottom>
          <Link href="https://www.flaticon.com/free-icons/shopping-online">
            Shopping online icons created by NeXore88 - Flaticon
          </Link>
          <Link href="https://www.flaticon.com/free-icons/account">
            Account icons created by Shashank Singh - Flaticon
          </Link>
        </footer>
      </body>
    </>
  );
};

export default Home;
