import React from "react";
import Link from "next/link";

interface CTAButtonProps {
  text: string;
}

const ctaButton: React.FC<CTAButtonProps> = ({ text }) => {
  return (
    <div>
      <Link href="/geschichten">
        <button
          type="button"
          className="text-sm  text-white text-opacity-25 hover:text-deer"
        >
          {text}
        </button>
      </Link>
    </div>
  );
};

export default ctaButton;
