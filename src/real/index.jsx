/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React from "react";
import ReactDOM from "react-dom/client";
import Test from "./test"
import { Provider } from "react-redux";
import { createStore } from "redux";
import { combinedReducer } from "./reducer";

const store = createStore(combinedReducer);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
    <Test />
    </Provider>
  </React.StrictMode>
);