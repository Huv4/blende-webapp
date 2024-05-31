"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useDebounce } from "use-debounce";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const search = () => {
  const router = useRouter();
  const [text, setText] = useState("");
  const [query] = useDebounce(text, 500);

  useEffect(() => {
    if (!query) {
      router.push(`/allCollections`);
    } else {
      router.push(`/allCollections?search=${query}`);
    }
  }, [query, router]);

  return (
    <div className="flex w-full rounded-xl p-2 pr-1 border-1 shadow-sm shadow-black space-x-2 border-black focus-within:shadow-inner dark:border-white dark:shadow-white dark:focus-within:shadow-inner-custom md:w-1/2">
      <div className="pointer-events-none">
        <FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon>
      </div>
      <input
        value={text}
        placeholder="Durchsuche unsere Kollektionen..."
        onChange={(e) => setText(e.target.value)}
        className="w-full bg-transparent pl-1 outline-none focus:ring-0"
      />
    </div>
  );
};

export default search;
