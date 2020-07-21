import React from "react";
import ReactDOM from "react-dom";

import data from "./data";
import App from "./components/App";

import "./styles.css";

const rootElement = document.getElementById("root");

ReactDOM.render(
  <App users={data.users} conversation={data.conversation} />,

  rootElement
);
