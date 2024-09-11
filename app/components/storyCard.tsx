import React from "react";
import Image from "next/image";

interface KollektionenCardProps {
  name: string;
  url: string;
  photographer: string;
}

const storyCard: React.FC<KollektionenCardProps> = ({
  name,
  url,
  photographer,
}) => {
  return (
    <div className="relative overflow-hidden text-center transition-transform transform hover:scale-105">
      <Image
        src={url}
        alt={name}
        className="object-cover rounded-3xl"
        width={540}
        height={720}
      ></Image>
      {/* Kollektion Name & Fotograf:in */}
      <div className="absolute top-0 h-full w-full flex flex-col items-center justify-center">
        <h1 className="text-lg text-white">{name}</h1>
        <h2 className="text-lg text-white">{photographer}</h2>
      </div>
    </div>
  );
};

export default storyCard;
