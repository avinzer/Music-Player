/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React from "react";
import ReactDom from "react-dom";
import ReactDOM from "react-dom/client";
import App from "./app.js";

// ReactDom.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById("root")
// );
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
