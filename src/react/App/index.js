import React from "react";
import { Route, Switch } from "react-router";
import { ConnectedRouter } from "connected-react-router";
import { history } from "../setup";
import { ThemeProvider } from "styled-components";
import { ThemeConfig, ThemeGlobalStyle } from "./Theme";
import Page from "./Page";

const App = () => (
  <ConnectedRouter history={history}>
    <Switch>
      <ThemeProvider theme={ThemeConfig}>
        <ThemeGlobalStyle />
        <Route component={Page} />
      </ThemeProvider>
    </Switch>
  </ConnectedRouter>
);

// To render component on specific routes,
// add component props: exact path={"/"}

export default App;
