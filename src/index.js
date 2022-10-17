import React, { StrictMode } from "react";
import ReactDom from "react-dom";
import App from "./App.jsx";

//const rootElement = document.getElementById("root");
//const root = createRoot(rootElement);

ReactDom.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root")
);
