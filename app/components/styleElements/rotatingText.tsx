"use client";
import React, { useState, useEffect } from "react";

interface Word {
  text: string;
  color: string;
}

const words: Word[] = [
  { text: "Wohnzimmer.", color: "text-red-500" },
  { text: "Restaurant.", color: "text-blue-500" },
];

const RotatingText: React.FC = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return <h1 className={`${words[index].color}`}>{words[index].text}</h1>;
};

export default RotatingText;
