import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";

import "./index.css";
import App from "./components/App";
import { configureStore as store } from "./store/configureStore";

render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("app")
);
