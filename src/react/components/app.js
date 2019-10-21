import React, { Component } from "react";
import { Route, Switch } from "react-router";
import { ConnectedRouter } from "connected-react-router";

import { history } from "../redux/store";

import Header from "./header";
import HomePage from "./main/home";
import NotFound from "./main/404";

import { get } from "../axios";

import { log } from "../../shared/index";

import "../style.scss";

export default class App extends Component {
  componentDidMount() {
    get();
  }

  state = {
    hello:
      "Babel's plugin-proposal-class-properties plugin allows the use of state/hooks!"
  };

  render() {
    log({ emoji: "🗄️", label: "[APP/STATE]", message: this.state.hello });
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
