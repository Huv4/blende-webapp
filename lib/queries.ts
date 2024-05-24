import { gql } from "@apollo/client";

export const GET_COLLECTION_CARD = gql`
  query GetCollectionCard($limit: Int!, $skip: Int!) {
    storyTemplateOneCollection(limit: $limit, skip: $skip) {
      items {
        sys {
          id
        }
        title
        slug
        titleImage {
          url
        }
        hoverImage {
          url
        }
        photographer {
          name
        }
        dateOfShot
        altTextTitleImage
        altTextHoverImage
      }
    }
  }
`;
