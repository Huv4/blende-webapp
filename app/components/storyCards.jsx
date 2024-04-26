import React from "react";
import { getAllStories } from "@/lib/api";
import Image from "next/image";
import Link from "next/link";
import { draftMode } from "next/headers";

export default async function Home() {
  const { isEnabled } = draftMode();
  const stories = await getAllStories();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <section className="w-full pt-12">
        <div className="mx-auto container space-y-12 px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center"></div>
          <div className="space-y-12 bg-black">
            {stories.map((story) => (
              <story key={story.sys.id}>
                <p>{story.title}</p>
              </story>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
