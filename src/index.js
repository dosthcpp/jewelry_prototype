import React from "react";
import ReactDOM from "react-dom";
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import { createLogger } from "redux-logger";
import { Route, HashRouter as Router, Switch } from "react-router-dom";
import ReduxThunk from "redux-thunk";

import reducers from "./reducers";
import App from "./App";
import GuaranteeWindow from "./components/Guarantee";

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const logger = createLogger();
export const store = createStore(reducers, applyMiddleware(logger, ReduxThunk));

ReactDOM.render(
  <Provider store={store}>
    {/* 향후에 Route로 바꾸기*/}
    <Router>
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/guarantee" exact component={GuaranteeWindow} />
      </Switch>
    </Router>
  </Provider>,
  document.querySelector("#root")
);
