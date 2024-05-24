import client from "./apolloClient";
import { GET_COLLECTION_CARD } from "./queries";

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

export const fetchStories = async ({
  page = 1,
  limit = 10,
}: {
  page: number;
  limit: number;
}): Promise<Story[]> => {
  try {
    const skip = (page - 1) * limit;

    const { data } = await client.query<{
      storyTemplateOneCollection: { items: Story[] };
    }>({
      query: GET_COLLECTION_CARD,
      variables: { limit, skip },
    });

    return data.storyTemplateOneCollection.items;
  } catch (error) {
    console.error("Error fetching stories:", error);
    throw new Error("Failed to fetch stories");
  }
};
