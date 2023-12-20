import { View, Text } from "react-native";
import { Slot } from "expo-router";
import { ApolloProvider } from "@apollo/client";
import React from "react";
import { client } from "../../../lib/apolloClient";

export default (children) => {
  return (
    <ApolloProvider client={client}>
      <Slot />
    </ApolloProvider>
  );
};
