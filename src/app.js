import React, { useState, lazy, Suspense } from "react";
import { render } from "react-dom";
import { Router } from "@reach/router";
import SearchParams from "./SearchParams";
import ThemeContext from "./ThemeContext";
import Navbar from "./Navbar";

const Details = lazy(() => import("./Details"));

const App = () => {
  const themeHook = useState("crimson");
  return (
    <ThemeContext.Provider value={themeHook}>
      <div>
        <Navbar />
        <Suspense fallback={<h1>loading route ...</h1>}>
          <Router>
            <SearchParams path="/" />
            <Details path="/details/:id" />
          </Router>
        </Suspense>
      </div>
    </ThemeContext.Provider>
  );
};

render(<App />, document.querySelector("#root"));
