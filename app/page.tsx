import Image from "next/image";
import Link from "next/link";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import titleImage from "../public/landingPageImg/titleImage.jpg";
import logo from "../public/Logos/BlendeeinsiebenLogoWebsite.svg";
import MediaButton from "./components/buttons/mediaButton";

import styles from "./page.module.css";

export default function Home() {
  const MediaButtonProps = [
    {
      icon: faEnvelope,
      link: "mailto:kontakt@blendeeinssieben.com?subject=Anfrage%20an%20Blende1.7",
    },
    {
      icon: faInstagram,
      link: "https://www.instagram.com/blendeeinssieben?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    },
  ];

  return (
    <>
      <body>
        <header>
          <section className="relative w-full h-screen">
            <nav className="relative z-50">
              <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
                <Link
                  href="https://blendeeinssieben.vercel.app/"
                  className="flex items-center space-x-1"
                >
                  <Image
                    src={logo}
                    alt="Blendeeinssieben Logo"
                    className="w-7 sm:w-9 lg:w-10"
                  ></Image>
                  <span className="self-center font-sans font-extralight text-xs text-white sm:text-sm lg:text-base  whitespace-nowrap">
                    Blende 1.7
                  </span>
                </Link>
              </div>
            </nav>
            <div className="absolute top-0">
              <Image
                src={titleImage}
                alt="Thüringer Wald verschwindet im Nebel"
                priority
              ></Image>
            </div>
          </section>
        </header>
        <main></main>
      </body>
    </>
  );
}
