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
          <section>
            <nav>
              <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
                <Link
                  href="https://blendeeinssieben.vercel.app/"
                  className="flex items-center space-x-3"
                >
                  <div className="">
                    <Image
                      src={logo}
                      alt="Blendeeinssieben Logo"
                      className="w-8"
                    ></Image>
                  </div>

                  <span className="text-black">Blendeeinssieben</span>
                </Link>
              </div>
            </nav>
          </section>
        </header>
        <main></main>
      </body>
    </>
  );
}
