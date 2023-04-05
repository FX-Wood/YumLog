
import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

let client: ApolloClient<any> | null = null;

export const getClient = () => {
  // create a new client if there's no existing one
  // or if we're in a server component
  if (!client || typeof window === "undefined") {
    client = new ApolloClient({
      link: new HttpLink({
        uri: "http://localhost:4000/",
      }),
      cache: new InMemoryCache(),
    });
  }

  return client;
};
