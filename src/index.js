import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import "./index.scss";
import App from "./components/homepage";
import UserDetails from "./components/userDetails";
import NotFound from "./components/notfound";
import configureStore from "./store";
import * as serviceWorker from "./serviceWorker";

let store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/users/:userId" component={UserDetails} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
