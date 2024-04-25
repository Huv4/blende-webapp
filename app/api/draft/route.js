import { getStory } from "@/lib/api";
import { draftMode } from "next/headers";
import { redirect } from "next/navigation";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const secret = searchParams.get("secret");
  const slug = searchParams.get("slug");

  if (!secret || !slug) {
    return new Response("Missing parameters", { status: 400 });
  }

  if (secret !== process.env.CONTENTFUL_PREVIEW_SECRET) {
    return new Response("Invalid token", { status: 401 });
  }

  const story = await getStory(slug);

  if (!story) {
    return new Response("Story not found", { status: 404 });
  }

  draftMode().enable();
  redirect(`/storys/${story.slug}`);
}
