import React, { useState } from "react";
import { Link } from "@reach/router";
import { css } from "@emotion/core";
import colors from "./colors";

const Navbar = () => {
  const [padding] = useState(15);
  return (
    <header
      css={css`
        background-color: ${colors.secondary};
        padding: ${padding}px;
        border-radius: 10px;
        margin: 10px auto;
      `}
    >
      <Link to="/">Adopt me!</Link>
      <span
        css={css`
          font-size: 60px;
          display: inline-block;
          transition: transform 0.5s linear;
          &:hover {
            transform: rotate(360deg);
          }
        `}
        role="img"
        aria-label="logo"
      >
        🐩
      </span>
    </header>
  );
};

export default Navbar;
