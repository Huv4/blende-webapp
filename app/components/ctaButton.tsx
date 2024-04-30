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
          className="text-sm text-black text-opacity-50 p-1 mt-5 border rounded-xl border-current hover:text-deer hover:border-deer dark:text-white dark:text-opacity-50"
        >
          {text}
        </button>
      </Link>
    </div>
  );
};

export default ctaButton;
