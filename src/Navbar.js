import React, { useState } from "react";
import { Link } from "@reach/router";
import { css } from "@emotion/core";

const Navbar = () => {
  const [padding, setPadding] = useState(15);
  return (
    /*eslint-disable*/
    <header
      onClick={() => setPadding(padding + 15)}
      css={css`
        background-color: #d9c148;
        padding: ${padding}px;
        border-radius: 10px;
        margin: 10px auto;
      `}
    >
      <Link to="/">Adopt me!</Link>
      <span
        role="img"
        aria-label="logo"
        css={css`
          font-size: 60px;
        `}
      >
        🐩
      </span>
    </header>
    /*eslint-enable*/
  );
};

export default Navbar;
