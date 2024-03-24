import Image from "next/image";
import styles from "./page.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

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
            <div className={styles.DefaultContainer}>
              <div className={styles.HeaderGrid}>
                <div className={styles.HeadingContainer}>
                  <h1 id={styles.WebsiteHeading}>Blende 1.7</h1>
                </div>
                <div className={styles.HeaderImageContainer}>
                  <Image
                    className={styles.BannerImage}
                    id={styles.HeaderImage}
                    src="https://ik.imagekit.io/photoggang/Blende17/HomepagePics/header_image.jpg"
                    alt="Sonnenuntergang in der Sächsischen Schweiz"
                    width={7952}
                    height={2922}
                    priority
                  />
                </div>
              </div>
            </div>
          </section>
          <section className={styles.WhiteSection}>
            <div className={styles.DefaultContainer}>
              <div>
                <p id={styles.ThisIsUs}>
                  Wir fünf möchten unsere Begeisterung fürs Fotografieren
                  untereinander und gerne auch mit euch teilen.
                </p>
              </div>
              <div className={styles.SocialMediaContainer}>
                {MediaButtonProps.map((property, index) => (
                  <MediaButton
                    key={index}
                    faIcon={property.icon}
                    imageLink={property.link}
                  />
                ))}
              </div>
            </div>
          </section>
        </header>
        <main></main>
      </body>
    </>
  );
}
