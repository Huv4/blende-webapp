import React from "react";
import Link from "next/link";
import clsx from "clsx";

import CenteredHeading from "../components/headings/centeredHeading";
import GradientBottom from "../components/styleElements/gradientBottom";
import CtaButton from "../components/buttons/ctaButton";
import StoryCard from "../components/storyCard";

import { fetchStories } from "../../lib/fetchStoryCard";
import { Story } from "../types/interfaces";

interface allCollectionsProps {
  searchParams: { [key: string]: string | string[] | undefined };
}

const allCollections = async ({ searchParams }: allCollectionsProps) => {
  const page =
    typeof searchParams.page === "string" ? Number(searchParams.page) : 1;
  const limit =
    typeof searchParams.limit === "string" ? Number(searchParams.limit) : 6;

  const stories: Story[] = await fetchStories({ page, limit });

  return (
    <>
      <body className="bg-white dark:bg-graydark  text-black dark:text-white">
        <header>
          <section className="w-full flex"></section>
        </header>
        <main className="realtive">
          <section className="w-full h-full flex-col p-7 pt-0">
            <div className="mt-20">
              <CenteredHeading
                h1="Entdecke alle unsere Kollektionen"
                h2="eintauchen"
              ></CenteredHeading>
            </div>
          </section>
          <section>
            <div className="max-w-5xl mx-auto text-center">
              <div className="grid grid-cols-1 row-auto gap-2 center-items justify-items-center md:grid-cols-2 lg:grid-cols-3">
                {stories.map((story) => (
                  <StoryCard key={story.sys.id} story={story}></StoryCard>
                ))}
                <div>
                  <Link
                    href={`?page=${page > 1 ? page - 1 : 1}`}
                    className={clsx(
                      "rounded border bg-gray-100 px-3 py-1 text-sm text-gray-800",
                      page <= 1 && "pointer-events-none opacity-50"
                    )}
                  >
                    Previous
                  </Link>

                  <Link
                    href={`?page=${page + 1}`}
                    className="rounded border bg-gray-100 px-3 py-1 text-sm text-black"
                  >
                    Next
                  </Link>
                </div>
              </div>
              <div className="md:mt-10">
                <CtaButton
                  text="entdecke alle..."
                  ctaLink="/allCollections"
                ></CtaButton>
              </div>
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
