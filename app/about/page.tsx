import React from "react";
import client from "../../lib/apolloClient";
import { GET_COLLECTION_CARD } from "../../lib/queries";

interface Story {
  sys: { id: string };
  title: string;
  slug: string;
  titleImage: { url: string };
  hoverImage: { url: string };
  photographer: { name: string };
  dateOfShot: string;
  altTextTitleImage: string;
  altTextHoverImage: string;
}

const fetchStories = async (): Promise<Story[]> => {
  try {
    const { data } = await client.query<{
      storyTemplateOneCollection: { items: Story[] };
    }>({
      query: GET_COLLECTION_CARD,
    });
    return data.storyTemplateOneCollection.items;
  } catch (error) {
    console.error("Error fetching stories:", error);
    throw new Error("Failed to fetch stories");
  }
};

const AboutPage = async () => {
  const stories = await fetchStories();
  return (
    <div>
      <h1>Stories</h1>
      <ul>
        {stories.map((story) => (
          <li key={story.sys.id}>
            <h1>{story.title}</h1>
            <img src={story.titleImage.url} alt={story.altTextTitleImage} />
            <img src={story.hoverImage.url} alt={story.altTextHoverImage} />
            <p>Photographer: {story.photographer.name}</p>
            <p>Date of Shot: {story.dateOfShot}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AboutPage;
