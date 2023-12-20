import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

const cache = new InMemoryCache();
const token = process.env.EXPO_PUBLIC_CONTENTFUL_ACCESS_TOKEN;
const space_id = process.env.EXPO_PUBLIC_CONTENTFUL_SPACE_ID;

export const client = new ApolloClient({
  uri: `https://graphql.contentful.com/content/v1/spaces/${space_id}`,
  cache,
  credentials: "same-origin",
  headers: {
    Authorization: `Bearer ${token}`,
  },
});
