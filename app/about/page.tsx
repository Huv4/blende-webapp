import React from "react";
import CenteredHeading from "../components/headings/centeredHeading";

const about = () => {
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
                h1="Wir arbeiten hier noch :)"
                h2="coming soon..."
              ></CenteredHeading>
            </div>
          </section>
        </main>
        <footer></footer>
      </body>
    </>
  );
};

export default about;
