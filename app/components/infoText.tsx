import React from "react";
import CtaButton from "./ctaButton";

interface InfoTextProps {
  heading1: string;
  heading2: string;
  paragraph: string;
  ctaButtonText: string;
  ctaLinkText: string;
}

const infoText: React.FC<InfoTextProps> = ({
  heading1,
  heading2,
  paragraph,
  ctaButtonText,
  ctaLinkText,
}) => {
  return (
    <div className="text-white">
      <h2 className="text-white text-base font-semibold text-opacity-35 -mt-1">
        {heading2}
      </h2>
      <h1 className="text-xl font-normal">{heading1}</h1>
      <p className="text-base text-justify font-light md:max-w-lg">
        {paragraph}
      </p>
      <div className="text-white text-opacity-70">
        <CtaButton text={ctaButtonText} ctaLink={ctaLinkText} />
      </div>
    </div>
  );
};

export default infoText;
