"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

import cafeImg from "./../../../public/carouselImg/nathan-dumlao-zUNs99PGDg0-unsplash (1).jpg";
import restaurantImg from "./../../../public/carouselImg/jakub-dziubak-gj7BLlSzIFs-unsplash.jpg";

const words = [
  { text: "Wohnzimmer", color: "text-red-500" },
  { text: "Restaurant", color: "text-blue-500" },
];
const images = [cafeImg, restaurantImg];

const RotatingTextImage = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative flex flex-col items-center justify-center">
      {/* Rotating Text */}
      <h1 className={`text-4xl font-bold ${words[index].color}`}>
        {words[index].text}
      </h1>
      {/* Rotating Image */}
      <div className="w-full h-64 relative">
        <Image
          src={images[index]}
          alt={words[index].text}
          layout="fill"
          objectFit="cover"
          className="rounded-2xl"
        />
      </div>
    </div>
  );
};

export default RotatingTextImage;
