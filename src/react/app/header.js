import React from "react";
import { Github } from "styled-icons/icomoon/Github";

import { name } from "../../shared";

function Header() {
  const props = {
    href: "https://github.com/nameer-rizvi/spa_boilerplate",
    target: "_blank",
    rel: "noopener noreferrer"
  };

  return (
    <header>
      <a {...props} className="logo">
        {name}
      </a>
      <a {...props} className="logo hover-underline">
        <Github style={{ height: "30px", width: "30px" }} />
      </a>
    </header>
  );
}

export default Header;
