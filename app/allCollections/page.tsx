import React from "react";

import CenteredHeading from "../components/headings/centeredHeading";

const allCollections = () => {
  return (
    <>
      <body className="bg-white dark:bg-graydark">
        <header>
          <section className="w-full flex"></section>
        </header>
        <main className="realtive">
          <section className="w-full h-full flex-col p-7 pt-0 text-black dark:text-white">
            <div>
              <CenteredHeading
                h1="Browse durch alle unsere Kollektionen"
                h2="enjoy."
              ></CenteredHeading>
            </div>
          </section>
        </main>
      </body>
    </>
  );
};

export default allCollections;
