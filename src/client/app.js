import React, { Component, Fragment } from "react";
import { Route, Switch } from "react-router";
import { ConnectedRouter } from "connected-react-router";

import { history } from "./store";

import Header from "./components/header";
import HomePage from "./components/home";
import NotFound from "./components/404";

import "./styles/index.scss";

export default class App extends Component {
  render() {
    return (
      <ConnectedRouter history={history}>
        <Header />
        <main>
          <Switch>
            <Route exact path={"/"} component={HomePage} />
            <Route component={NotFound} />
          </Switch>
        </main>
      </ConnectedRouter>
    );
  }
}
