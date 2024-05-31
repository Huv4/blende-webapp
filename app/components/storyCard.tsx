import React from "react";
import Image from "next/image";
import { Story } from "../types/interfaces";

interface StoryCardProps {
  story: Story;
}

const storyCard: React.FC<StoryCardProps> = ({ story }) => {
  // Function to parse and format ISO8601 date
  const formatDate = (isoDate: string): string => {
    const parsedDate = new Date(isoDate);
    const options: Intl.DateTimeFormatOptions = {
      month: "long",
      day: "numeric",
    };
    return parsedDate.toLocaleDateString("de", options);
  };

  return (
    <div className="relative mt-5 overflow-hidden text-center aspect-[3/4] max-w-[540px] bg-graylight dark:bg-graymid group">
      <div>
        <div className="absolute hidden -mt-10 z-10 opacity-0 md:flex ease-in-out duration-700 delay-75 group-hover:opacity-100">
          <Image
            src={story.hoverImage.url}
            alt={story.altTextHoverImage}
            width={540}
            height={720}
          ></Image>
        </div>
        <div className="relative z-20 -mb-10">
          <h1 className="mt-10 text-xl font-normal duration-700 md:group-hover:text-white">
            {story.title}
          </h1>
          <h2 className="text-base text-black font-semibold text-opacity-35 -mt-1 duration-700 delay-75 dark:text-white dark:text-opacity-35 md:group-hover:text-white">
            {story.photographer.name}
          </h2>
        </div>
        <div className="p-14">
          <div className="bg-white p-2 shadow-md z-0 dark:bg-graylight dark:shadow-graylight">
            <Image
              src={story.titleImage.url}
              alt={story.altTextTitleImage}
              className="top-0 object-cover"
              width={540}
              height={720}
            ></Image>
          </div>
        </div>
        <h3 className="absolute right-8 bottom-14 font-serif z-0 [writing-mode:vertical-lr]">
          {formatDate(story.dateOfShot)}
        </h3>
      </div>
    </div>
  );
};

export default storyCard;