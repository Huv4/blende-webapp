import React from "react";
import Link from "next/link";

interface PhotoCreditProps {
  authorLink: string;
  authorText: string;
  siteLink: string;
  siteText: string;
}

const PhotoCredit: React.FC<PhotoCreditProps> = ({
  authorLink,
  authorText,
  siteLink,
  siteText,
}) => {
  return (
    <p className="">
      Photo by{" "}
      <Link
        href={authorLink}
        passHref
        className="hover:underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        {authorText}
      </Link>{" "}
      on{" "}
      <Link
        href={siteLink}
        passHref
        className="hover:underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        {siteText}
      </Link>
    </p>
  );
};

export default PhotoCredit;
