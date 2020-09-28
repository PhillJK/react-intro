import React, { useState } from "react";
import { Router } from "@reach/router";
import SearchParams from "./SearchParams";
import ThemeContext from "./ThemeContext";
import Navbar from "./Navbar";
import Details from "./Details";

const App = () => {
  const themeHook = useState("crimson");
  return (
    <ThemeContext.Provider value={themeHook}>
      <div>
        <Navbar />
        <Router>
          <SearchParams path="/" />
          <Details path="/details/:id" />
        </Router>
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
