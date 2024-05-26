import React from "react";

import CenteredHeading from "../components/headings/centeredHeading";
import GradientBottom from "../components/styleElements/gradientBottom";

const allCollections = () => {
  return (
    <>
      <body className="bg-white dark:bg-graydark">
        <header>
          <section className="w-full flex"></section>
        </header>
        <main className="realtive">
          <section className="w-full h-full flex-col p-7 pt-0 text-black dark:text-white">
            <div className="mt-20">
              <CenteredHeading
                h1="Entdecke alle unsere Kollektionen"
                h2="eintauchen"
              ></CenteredHeading>
            </div>
          </section>
        </main>
        <footer>
          <GradientBottom></GradientBottom>
        </footer>
      </body>
    </>
  );
};

export default allCollections;
