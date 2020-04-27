import React from "react";
import { Route, Switch } from "react-router";
import { ConnectedRouter } from "connected-react-router";
import { history } from "../setup/store";
import Page from "./Page";
import "./style.scss";

function App() {
  return (
    <ConnectedRouter history={history}>
      <Switch>
        <Route component={Page} />
      </Switch>
    </ConnectedRouter>
  );
}

// To render component on specific routes,
// add component props: exact path={"/"}

export default App;
