import React from "react";
import { Route, Switch } from "react-router";
import { ConnectedRouter } from "connected-react-router";

import { history } from "../redux/store";

import Header from "./header";
import HomePage from "./main/home/index";
import NotFound from "./main/404";
import ErrorBoundary from "./errorBoundary";

import "./style.scss";

function App() {
  return (
    <ConnectedRouter history={history}>
      <ErrorBoundary>
        <Header />
        <main>
          <Switch>
            <Route exact path={"/"} component={HomePage} />
            <Route component={NotFound} />
          </Switch>
        </main>
      </ErrorBoundary>
    </ConnectedRouter>
  );
}

export default App;
