import { gql } from '@apollo/client';

export const GET_COUNTRIES = gql`
  query Countries {
    countries {
      code
      name
      emoji
    }
  }
`;

export const GET_COLLECTION_CARD = gql`query {
  storyTemplateOneCollection(limit: 16) {
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
}`;
