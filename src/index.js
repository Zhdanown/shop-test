import React, { useEffect } from "react";
import ReactDOM from "react-dom";

const App = ({ dealers }) => {
  useEffect(() => {
    console.log("from App ", dealers);
  }, []);
  return <div>This is an App</div>;
};

let app = {
  start: function ({ dealers }) {
    const appRoot = document.getElementById("app-root");
    ReactDOM.render(<App dealers={dealers} />, appRoot);
  },
};

window.app = app;
