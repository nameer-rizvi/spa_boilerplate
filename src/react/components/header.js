import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Github } from "styled-icons/icomoon/Github";

import { name } from "../../shared";

function Header() {
  return (
    <header>
      <a
        href="https://nameer-rizvi.github.io/ssr_boilerplate/"
        target="_blank"
        rel="noopener noreferrer"
        className="logo"
      >
        {name}
      </a>
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

export default Header;
