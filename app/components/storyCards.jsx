import React from "react";
import { getAllStories } from "@/lib/api";
import Image from "next/image";
import Link from "next/link";
import { draftMode } from "next/headers";
import { format, parse } from "date-fns";

export default async function Home() {
  const { isEnabled } = draftMode();
  const stories = await getAllStories();

  return (
    <div className="grid grid-cols-1 gap-2 center-items justify-items-center md:grid-cols-2 xl:grid-cols-3">
      {stories.map((story) => (
        <div className="bg-graylight opacity-90 dark:bg-graymid">
          <story key={story.sys.id}>
            <div className="relative opacity-100">
              <h1 className="z-10">{story.title}</h1>
              <h2>{story.photographer.name}</h2>
              <h3>format({story.dateOfShot},"MM/dd/yyyy")</h3>
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
        </div>
      ))}
    </div>
  );
}
