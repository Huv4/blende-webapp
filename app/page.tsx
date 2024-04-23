import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import titleImage from "../public/landingPageImg/titleImage.jpg";

import MediaButton from "./components/buttons/mediaButton";

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
            <div className="">
              <div className="">
                <div className="">
                  <h1>Blende 1.7</h1>
                </div>
                <div className="">
                  <Image
                    className=""
                    src={titleImage}
                    alt="Thüringer Wald im Nebel versunken"
                    priority
                  />
                </div>
              </div>
            </div>
          </section>
        </header>
        <main></main>
      </body>
    </>
  );
}
