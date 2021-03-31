import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "@babel/polyfill";

let app = {
  start: function ({ dealers }) {
    const appRoot = document.getElementById("app-root");
    ReactDOM.render(<App dealers={dealers} />, appRoot);
  },
};

window.app = app;
