import React from "react";
import Image from "next/image";

import CtaButton from "../buttons/ctaButton";
import blogDummy from "./../../../public/landingPageImg/BlogDummy.jpg";

interface InfoTextProps {
  ctaButtonText: string;
  ctaLinkText: string;
}

const blogPostCard: React.FC<InfoTextProps> = ({
  ctaButtonText,
  ctaLinkText,
}) => {
  return (
    <div className="w-full rounded-3xl">
      <Image
        src={blogDummy}
        alt="Sraße in Norwegen."
        className="w-full max-h-[75vh] object-cover rounded-3xl"
      ></Image>
      <div className="absolute bg-white top-1/2 transform -translate-y-1/2 p-5 mr-16 rounded-r-3xl">
        <h1 className="mt-2 font-regular">
          <span className="font-semibold text-deer">Arne's</span> Geschichte
          hinter Norwegen.
        </h1>
        <p className="text-base font-light mt-2">
          Ich war für 10 Tage in Norwegen unterwegs mit meinem Camper und zwei
          Freunden.
        </p>
        <div className="">
          <CtaButton text={ctaButtonText} ctaLink={ctaLinkText} />
        </div>
      </div>
    </div>
  );
};

export default blogPostCard;
