import React from "react";
import { getAllArticles } from "@/lib/api";
import Image from "next/image";
import Link from "next/link";
import { draftMode } from "next/headers";

export default async function Home() {
  const { isEnabled } = draftMode();
  const articles = await getAllArticles(3, isEnabled);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-white">
      <section className="w-full pt-12">
        <div className="space-y-12">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {articles.map((article) => (
              <article
                key={article.sys.id}
                className="h-full flex flex-col rounded-lg shadow-lg overflow-hidden"
              >
                <Image
                  alt="placeholder"
                  className="aspect-[4/3] object-cover w-full"
                  height="263"
                  src={article.titleImage.url}
                  width="350"
                />
                <div className="flex-1 p-6">
                  <Link href={`/articles/${article.slug}`}>
                    <h3 className="text-2xl font-bold leading-tight text-zinc-900 dark:text-zinc-50  py-4">
                      {article.titleOfCollection}
                    </h3>
                  </Link>
                  <p className="max-w-none text-zinc-600 mt-2 mb-2 text-sm font-bold dark:text-zinc-400">
                    Written by: {article.photographer}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
