import React from "react";
import { getAllStories } from "@/lib/api";
import Image from "next/image";
import Link from "next/link";
import { draftMode } from "next/headers";

export default async function Home() {
  const { isEnabled } = draftMode();
  const stories = await getAllStories();
  // Function to parse and format ISO8601 date
  const formatDate = (isoDate) => {
    const parsedDate = new Date(isoDate);
    const options = { month: "long", day: "numeric" };
    return parsedDate.toLocaleDateString("de", options);
  };

  return (
    <div className="grid grid-cols-1 gap-2 center-items justify-items-center md:grid-cols-2 xl:grid-cols-3">
      {stories.map((story) => (
        <story
          key={story.sys.id}
          className="bg-graylight opacity-90 dark:bg-graymid"
        >
          <div className="relative opacity-100">
            <h1 className="z-10">{story.title}</h1>
            <h2>{story.photographer.name}</h2>
            <h3>{formatDate(story.dateOfShot)}</h3>
            <p> </p>
            <div className="p-14">
              <div className="bg-white p-2 shadow-md dark:bg-graylight dark:shadow-graylight">
                <Image
                  src={story.titleImage.url}
                  alt={story.altTextTitleImage}
                  className="top-0 object-cover z-0"
                  width={540}
                  height={720}
                ></Image>
              </div>
            </div>
          </div>
        </story>
      ))}
    </div>
  );
}
