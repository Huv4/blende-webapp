import React, { Component } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

import styles from "./mediaButton.module.css";

interface MediaButtonProps {
  faIcon: IconDefinition;
  imageLink: string;
}

const MediaButton: React.FC<MediaButtonProps> = ({ faIcon, imageLink }) => {
  return (
    <div className={styles.ButtonContainer}>
      <Link href={imageLink} target="_blank">
        <button
          type="button"
          className={["btn btn-light", styles.MediaButton].join(" ")}
        >
          <FontAwesomeIcon icon={faIcon} className={styles.icon} />
        </button>
      </Link>
    </div>
  );
};

export default MediaButton;
