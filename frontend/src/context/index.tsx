import { ApolloProvider } from "@apollo/client";
import { client } from "../data/client";
import { AuthProvider } from "./auth";
import { ChildrenData } from "./auth/types";

export const AppProvider = ({ children }: ChildrenData) => {
  return (
    <ApolloProvider client={client}>
      <AuthProvider>{children}</AuthProvider>
    </ApolloProvider>
  );
};
