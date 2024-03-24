import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
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
        </header>
        <main></main>
      </body>
    </>
  );
}
