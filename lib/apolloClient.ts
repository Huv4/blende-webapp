// lib/apolloClient.ts
import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://countries.trevorblades.com', // Replace with your GraphQL endpoint
  cache: new InMemoryCache(),
});

export default client;

