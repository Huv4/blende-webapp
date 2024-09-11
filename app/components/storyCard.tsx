import React from "react";
import Image from "next/image";

const storyCard: React.FC<StoryCardProps> = ({ story }) => {
  return (
    <div className="relative overflow-hidden text-center transition-transform transform hover:scale-105">
      <Image
        src={story.titleImage.url}
        alt={story.altTextTitleImage}
        className="object-cover rounded-3xl"
        width={540}
        height={720}
      ></Image>
      {/* Kollektion Name & Fotograf:in */}
      <div className="absolute top-0 h-full w-full flex flex-col items-center justify-center">
        <h1 className="text-lg text-white">{story.title}</h1>
        <h2 className="text-lg text-white">{story.photographer.name}</h2>
      </div>
    </div>
  );
};

export default storyCard;
