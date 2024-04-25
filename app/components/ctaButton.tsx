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
          className="text-sm text-white text-opacity-35 p-1 mt-5 border rounded-xl border-current hover:text-deer hover:border-deer"
        >
          {text}
        </button>
      </Link>
    </div>
  );
};

export default ctaButton;
