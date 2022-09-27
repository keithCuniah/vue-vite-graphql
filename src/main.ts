import { createApp, provide, h } from "vue";
import "./style.css";
import App from "./App.vue";

import { ApolloClient } from "apollo-client";
import { createHttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import VueApollo from "vue-apollo";
import { DefaultApolloClient } from "@vue/apollo-composable";

// HTTP connection to the API
const httpLink = createHttpLink({
  // Adapt the URL depending of the swapi-graphql port
  uri: "http://localhost:50919/graphiql",
});

// Cache implementation
const cache = new InMemoryCache();
// Create the apollo client
const apolloClient = new ApolloClient({
  link: httpLink,
  cache,
});

const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
});
const app = createApp({
  setup() {
    provide(DefaultApolloClient, apolloClient);
  },

  render: () => h(App),
});

app.use(apolloProvider);

app.mount("#app");
