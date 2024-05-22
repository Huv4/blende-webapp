// lib/apolloClient.ts
import { ApolloClient, InMemoryCache, ApolloLink, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

// Set the authorization headers using setContext
const authLink = setContext((_, { headers }) => {
  const token = process.env.CONTENTFUL_ACCESS_TOKEN;
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    }
  };
});

// Create an HttpLink to the Contentful GraphQL API
const httpLink = createHttpLink({
  uri: `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
});

// Create the Apollo Client instance with the authLink and httpLink
const client = new ApolloClient({
  link: ApolloLink.from([authLink, httpLink]),
  cache: new InMemoryCache(),
});

export default client;
