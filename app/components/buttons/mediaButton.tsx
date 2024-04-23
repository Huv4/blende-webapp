import React, { Component } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

interface MediaButtonProps {
  faIcon: IconDefinition;
  imageLink: string;
}

const MediaButton: React.FC<MediaButtonProps> = ({ faIcon, imageLink }) => {
  return (
    <div className="">
      <Link href={imageLink} target="_blank">
        <button type="button" className="">
          <FontAwesomeIcon icon={faIcon} className="" />
        </button>
      </Link>
    </div>
  );
};

export default MediaButton;
