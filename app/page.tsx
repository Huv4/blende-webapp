import React from "react";
import Image from "next/image";
import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

import titleImage from "../public/landingPageImg/titleImage.jpg";
import rightImage from "../public/landingPageImg/Kran.jpg";
import leftImage from "../public/landingPageImg/Dresden.jpg";

import NavBar from "./components/navbar/navBar";
import HeadingField from "./components/boxes/headingField";
import StoryCard from "./components/storyCard";
import TransparentBox from "./components/boxes/transparentBox";
import CtaButton from "./components/buttons/ctaButton";
import BlogPostCard from "./components/boxes/blogPostCard";
import GradientBottom from "./components/styleElements/gradientBottom";

import { fetchStories } from "../lib/fetchStoryCard";
import { Story } from "./types/interfaces";

const Home = async () => {
  const page = 1;
  const limit = 1;
  const stories: Story[] = await fetchStories({ page, limit });
  return (
    <>
      <body className="relative bg-white text-lg md:text-2xl">
        <header>
          <section className="w-full h-screen">
            <div className="">
              <NavBar />
            </div>
            <div className="relative h-4/5 z-0">
              {/* White Notch */}
              <div className="absolute top-0 left-1/2 w-32 h-5 transform -translate-x-1/2 rounded-b-3xl z-20 bg-white"></div>
              <div className="h-full">
                <Image
                  src={titleImage}
                  alt="Thüringer Wald versinkt im Nebel"
                  className="h-full object-cover"
                  priority
                />
              </div>
              <div className="absolute w-full left-1/2 bottom-1/2 transform -translate-x-1/2 translate-y-1/2 z-10 p-4 md:p-32 md:max-w-7xl">
                <HeadingField
                  ctaButtonText="Shop now"
                  ctaLinkText=""
                ></HeadingField>
              </div>
            </div>
          </section>
        </header>
        <main className="relative">
          <section className="h-full w-full flex flex-col items-center justify-center p-4 pt-0 -mt-16 md:mt-0">
            <div className="grid grid-cols-1 row-auto gap-2 md:grid-cols-2 lg:grid-cols-3">
              {stories.map((story) => (
                <div key={story.sys.id}>
                  <StoryCard story={story}></StoryCard>
                </div>
              ))}
            </div>
            <div className="mt-10">
              <CtaButton text="Alle Kollektionen" ctaLink=""></CtaButton>
            </div>
          </section>
          <section className="w-full h-full mt-16 flex flex-col items-center justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <Image
                src={leftImage}
                alt="Kondensstreifen von Flugzeug parallel zu Kran bei Nacht"
                className="h-full object-cover"
              ></Image>
              <Image
                src={rightImage}
                alt="Konturen der Hofkirche Dresden vor lila Sonnenuntergang."
                className="h-full object-cover"
              ></Image>
            </div>
            <div className="absolute p-4 md:p-32 md:max-w-7xl">
              <TransparentBox
                ctaButtonText="Fotograf:innen"
                ctaLinkText=""
              ></TransparentBox>
            </div>
          </section>
          <section className="relative w-full h-full mt-16 p-4 flex flex-col items-center justify-center">
            <div className="w-full">
              <BlogPostCard
                ctaButtonText="Explore"
                ctaLinkText=""
              ></BlogPostCard>
            </div>
          </section>
          <section className="w-full h-full mt-16 flex flex-col items-center justify-center">
            <div className="">
              <CtaButton
                text="kontaktiere uns"
                ctaLink="mailto:kontakt@blendeeinssieben.com?subject=Anfrage%20an%20Blende1.7"
              ></CtaButton>
            </div>
          </section>
        </main>
        <footer className="relative text-xs w-full h-full flex-col mt-16 mb-5 text-center">
          <div className="">
            <GradientBottom></GradientBottom>
            <h2 className="mt-5">folge uns</h2>
            <Link
              href="https://www.instagram.com/blendeeinssieben?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              target="_blank"
            >
              <FontAwesomeIcon
                icon={faInstagram}
                className="mt-2 text-xl transition-transform transform hover:scale-105"
              ></FontAwesomeIcon>
            </Link>
          </div>
          <div className="mt-5">
            <h2 className="">
              Checkout
              <Link href="https://www.flaticon.com" className="text-deer">
                flaticon
              </Link>
              for cool icons:
            </h2>
            <Link href="https://www.flaticon.com/free-icons/shopping-online">
              Shopping online icons created by NeXore88 - Flaticon
            </Link>
            <Link href="https://www.flaticon.com/free-icons/account">
              Account icons created by Shashank Singh - Flaticon
            </Link>
          </div>
        </footer>
      </body>
    </>
  );
};

export default Home;
