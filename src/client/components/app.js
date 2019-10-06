import React, { Component, Fragment } from "react";
import { Route, Switch } from "react-router";
import { ConnectedRouter } from "connected-react-router";

import { history } from "../redux/store";

import Header from "./header";
import HomePage from "./main/home";
import NotFound from "./main/404";

import { get } from "../axios";

import "../style.scss";

export default class App extends Component {
  componentDidMount() {
    get();
  }

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
