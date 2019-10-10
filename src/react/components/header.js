import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Github } from "styled-icons/icomoon/Github";

class Header extends Component {
  render() {
    const { name } = this.props;
    return (
      <header>
        <Link to="/" className="logo">
          {name}
        </Link>
        <a
          href="https://github.com/nameer-rizvi/ssr_boilerplate"
          target="_blank"
          rel="noopener noreferrer"
          className="logo hover-underline"
        >
          <Github style={{ height: "30px", width: "30px" }} />
        </a>
      </header>
    );
  }
}

function mapStateToProps(state) {
  return {
    name: state.shared.name
  };
}

export default connect(mapStateToProps)(Header);
