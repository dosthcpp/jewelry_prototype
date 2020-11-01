import React from "react";
import Header from "./components/Header";
import Menu from "./components/Menu";
import SideMenu from "./components/SideMenu";
import ContentHeader from "./components/ContentHeader";
import Content from "./components/Content";
import "./css/style.css";
<<<<<<< HEAD
import { Route, Switch } from "react-router-dom";
import GuaranteeWindow from "./components/Guarantee";
=======
>>>>>>> b89d77596b476d8d061179488debb9a325304c57

const App = () => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        <Menu />
        <SideMenu />
      </div>
      <div>
        <ContentHeader />
        <Content />
      </div>
    </div>
  );
};

<<<<<<< HEAD
const Wrapper = () => {
  return (
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/guarantee" component={GuaranteeWindow} />
    </Switch>
  );
};

export default Wrapper;
=======
export default App;
>>>>>>> b89d77596b476d8d061179488debb9a325304c57
