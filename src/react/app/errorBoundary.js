import React, { Component } from "react";

import { log } from "../../shared/index";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    log({ emoji: false, label: error, message: errorInfo });
  }

  render() {
    const style = { margin: "auto", cursor: "default" };

    return this.state.hasError ? (
      <div style={style}>
        <h1>Uh oh! Something went wrong.</h1>
        <h2>See console / terminal for more details.</h2>
      </div>
    ) : (
      this.props.children
    );
  }
}

export default ErrorBoundary;
