import React from "react";

import CtaButton from "../buttons/ctaButton";

interface InfoTextProps {
  ctaButtonText: string;
  ctaLinkText: string;
}

const transparentBox: React.FC<InfoTextProps> = ({
  ctaButtonText,
  ctaLinkText,
}) => {
  return (
    <div className="bg-white w-full rounded-3xl p-5 bg-opacity-25 text-white">
      <h1 className="mt-2 font-regular whitespace-pre-line">Wer wir sind. </h1>
      <p className="text-sm md:text-base font-light mt-2">
        Wir möchten jedem Fotografen und jeder Fotografin, die Geschichten mit
        ihren Fotos erzählen möchte, eine Plattform dafür bieten und
        gleichzeitig deine Räume schöner machen.{" "}
      </p>
      <div className="">
        <CtaButton text={ctaButtonText} ctaLink={ctaLinkText} />
      </div>
    </div>
  );
};

export default transparentBox;
