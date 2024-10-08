import React from "react";
import CtaButton from "../buttons/ctaButton";
import Image from "next/image";

import cafeImg from "./../../../public/carouselImg/nathan-dumlao-zUNs99PGDg0-unsplash (1).jpg";

interface InfoTextProps {
  ctaButtonText: string;
  ctaLinkText: string;
}

const TextandImage: React.FC<InfoTextProps> = ({
  ctaButtonText,
  ctaLinkText,
}) => {
  return (
    <div className="grid grid-cols-2 gap-2 bg-white rounded-3xl p-5">
      <div className="flex items-center">
        <h1 className=" font-regular whitespace-pre-line">
          Gestalte dein <span className="font-semibold text-deer">Café</span>.
          <br />
          Mit einer Reihe persönlicher Kunst.
        </h1>
      </div>
      <div className="md:row-span-2 flex justify-end items-end">
        <Image
          src={cafeImg}
          alt="Café das bereits Bilder von uns aufgehangen hat."
          className="w-full max-w-80 aspect-square mx-auto object-cover rounded-2xl"
        ></Image>
      </div>
      <div className="col-span-2 md:col-span-1">
        <p className="text-sm md:text-base font-light mt-2">
          Schmücke deine Wände mit Fotokollektionen, ganz ohne Stock images oder
          überteuerten Einzelprints und bleibe trotzdem einzigartig.
        </p>
        <div className="">
          <CtaButton text={ctaButtonText} ctaLink={ctaLinkText} />
        </div>
      </div>
    </div>
  );
};

export default TextandImage;
