import React from "react";

interface CenteredHeadingProps {
  h1: string;
  h2: string;
}

const centeredHeading: React.FC<CenteredHeadingProps> = ({ h1, h2 }) => {
  return (
    <div className="md:text-center">
      <h1 className="text-xl font-normal">{h1}</h1>
      <h2 className="text-base text-black font-semibold text-opacity-35 -mt-1 dark:text-white dark:text-opacity-35">
        {h2}
      </h2>
    </div>
  );
};

export default centeredHeading;
