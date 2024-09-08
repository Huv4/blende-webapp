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
          className="text-base p-2 mt-5 bg-black text-white rounded-xl transition-transform transform hover:scale-105"
        >
          {text}
        </button>
      </Link>
    </div>
  );
};

export default ctaButton;
