// Set a variable that contains all the fields needed for stories when a fetch for
// content is performed
const COLLECTION1_GRAPHQL_FIELDS = `
  sys {
    id
  }
  titleOfCollection
  slug
  dateOfShot
  photographer {name}
  titleImage {
    url
  }
  hoverImage {
    url
  }
`;

async function fetchGraphQL(query, preview = false) {
  return fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // Switch the Bearer token depending on whether the fetch is supposed to retrieve live
        // Contentful content or draft content
        Authorization: `Bearer ${
          preview
            ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
            : process.env.CONTENTFUL_ACCESS_TOKEN
        }`,
      },
      body: JSON.stringify({ query }),
      // Associate all fetches for stories with an "stories" cache tag so content can
      // be revalidated or updated from Contentful on publish
      next: { tags: ["stories"] },
    }
  ).then((response) => response.json());
}

function extractStoryEntries(fetchResponse) {
  return fetchResponse?.data?.collection1Collection?.items;
}

export async function getAllStories(
  // For this demo set the default limit to always return 3 stories.
  limit = 18,
  // By default this function will return published content but will provide an option to
  // return draft content for reviewing stories before they are live
  isDraftMode = false
) {
  const stories = await fetchGraphQL(
    `query {
        collection1Collection(where:{slug_exists: true}, order: date_DESC, limit: ${limit}, preview: ${
      isDraftMode ? "true" : "false"
    }) {
          items {
            ${COLLECTION1_GRAPHQL_FIELDS}
          }
        }
      }`,
    isDraftMode
  );
  return extractStoryEntries(stories);
}

export async function getStory(slug, isDraftMode = false) {
  const story = await fetchGraphQL(
    `query {
        collection1Collection(where:{slug: "${slug}"}, limit: 1, preview: ${
      isDraftMode ? "true" : "false"
    }) {
          items {
            ${COLLECTION1_GRAPHQL_FIELDS}
          }
        }
      }`,
    isDraftMode
  );
  return extractStoryEntries(story)[0];
}
