const fetchGraphQL = async (query, preview = false) => {
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
      // Associate all fetches for articles with an "articles" cache tag so content can
      // be revalidated or updated from Contentful on publish
      next: { tags: ["stories"] },
    }
  ).then((response) => response.json());
};

function extractArticleEntries(fetchResponse) {
  return fetchResponse?.data?.storyTemplateOneCollection?.items;
}

export const getAllStories = async (isDraftMode = false) => {
  const articles = await fetchGraphQL(
    `query {
      storyTemplateOneCollection(limit: 16, preview: ${
        isDraftMode ? "true" : "false"
      }) {
        items {
          sys{
            id
          }
          title
          slug
          titleImage {url}
          hoverImage {url}
          photographer {name}
          dateOfShot
          altTextTitleImage
          altTextHoverImage
        }
      }
    }`,
    isDraftMode
  );
  return extractArticleEntries(articles);
};
