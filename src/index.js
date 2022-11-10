import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App";

ReactDOM.render(
  <BrowserRouter>
    {" "}
    <div>
      <App />{" "}
    </div>
  </BrowserRouter>,
  document.getElementById("root")
);
