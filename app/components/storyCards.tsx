import React from "react";
import { getAllStories, Story } from "@/lib/api"; // Assuming you have a Story interface/type
import Image from "next/image";
import { draftMode } from "next/headers";

interface HomeProps {
  // Define any props if needed
}

export default function Home({}: HomeProps): JSX.Element {
  const fetchData = async () => {
    const { isEnabled } = draftMode();
    const stories: Story[] = await getAllStories();
    return { isEnabled, stories };
  };

  const formatDate = (isoDate: string): string => {
    const parsedDate = new Date(isoDate);
    const options = { month: "long", day: "numeric", year: "numeric" };
    return parsedDate.toLocaleDateString("de", options);
  };

  const renderStory = (story: Story) => (
    <div key={story.sys.id} className="bg-graylight opacity-90 dark:bg-graymid">
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
            />
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="grid grid-cols-1 gap-2 center-items justify-items-center md:grid-cols-2 xl:grid-cols-3">
      {fetchData().then(({ stories }) => stories.map(renderStory))}
    </div>
  );
}
