"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

import cafeImg from "./../../../public/carouselImg/nathan-dumlao-zUNs99PGDg0-unsplash (1).jpg";
import restaurantImg from "./../../../public/carouselImg/jakub-dziubak-gj7BLlSzIFs-unsplash.jpg";

const images = [cafeImg, restaurantImg];
const imageAltTexts = ["Wohnzimmer", "Restaurant"];

const RotatingImage: React.FC = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <Image
        src={images[index]}
        alt={imageAltTexts[index]}
        className="w-full max-w-80 mx-auto aspect-square object-cover rounded-2xl"
      />
    </div>
  );
};

export default RotatingImage;
