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
