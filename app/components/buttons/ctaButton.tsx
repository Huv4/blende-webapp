import React from "react";
import Link from "next/link";

interface CTAButtonProps {
  text: string;
  ctaLink: string;
}

const ctaButton: React.FC<CTAButtonProps> = ({ text, ctaLink }) => {
  return (
    <div>
      <Link href={ctaLink}>
        <button
          type="button"
          className="text-sm p-1 mt-5 border-1 rounded-xl shadow-sm shadow-black dark:shadow-white hover:text-deer hover:border-deer hover:shadow-deer"
        >
          {text}
        </button>
      </Link>
    </div>
  );
};

export default ctaButton;
