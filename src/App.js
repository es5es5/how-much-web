import React from "react";
import AppRouter from "./router";

import "./App.scss";
import { CssBaseline } from "@material-ui/core";

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <AppRouter />
    </React.Fragment>
  );
}

export default App;
