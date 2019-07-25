import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
// createstore
import { createStore } from "redux";
// provider
import { Provider } from "react-redux";
// reducer
import reducer from "./reducer";
import "bulma/css/bulma.css";
import "./styles.scss";

const store = createStore(reducer);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement,
);
