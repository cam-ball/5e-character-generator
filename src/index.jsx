import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import App from "./components/App";
import reportWebVitals from "./reportWebVitals";

import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

import { Defer20220824Handler } from "@apollo/client/incremental";
import { LocalState } from "@apollo/client/local-state";

import { ApolloProvider } from "@apollo/client/react";

const httpLink = new HttpLink({
  uri: "https://www.dnd5eapi.co/graphql",
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),

  /*
  Inserted by Apollo Client 3->4 migration codemod.
  If you are not using the `@client` directive in your application,
  you can safely remove this option.
  */
  localState: new LocalState({}),

  /*
  Inserted by Apollo Client 3->4 migration codemod.
  If you are not using the `@defer` directive in your application,
  you can safely remove this option.
  */
  incrementalHandler: new Defer20220824Handler(),
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ApolloProvider>,
  document.getElementById("root"),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
