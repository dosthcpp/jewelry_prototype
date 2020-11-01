import React from "react";
import ReactDOM from "react-dom";
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import { createLogger } from "redux-logger";
<<<<<<< HEAD
import { Route, HashRouter as Router } from "react-router-dom";
import ReduxThunk from "redux-thunk";

import reducers from "./reducers";
import Wrapper from "./App";
=======
import { Route, HashRouter as Router, Switch } from "react-router-dom";
import ReduxThunk from "redux-thunk";

import reducers from "./reducers";
import App from "./App";
import GuaranteeWindow from "./components/Guarantee";

>>>>>>> b89d77596b476d8d061179488debb9a325304c57
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const logger = createLogger();
export const store = createStore(reducers, applyMiddleware(logger, ReduxThunk));

ReactDOM.render(
  <Provider store={store}>
    {/* 향후에 Route로 바꾸기*/}
    <Router>
<<<<<<< HEAD
      <Route path="/" component={Wrapper} />
=======
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/guarantee" exact component={GuaranteeWindow} />
      </Switch>
>>>>>>> b89d77596b476d8d061179488debb9a325304c57
    </Router>
  </Provider>,
  document.querySelector("#root")
);
