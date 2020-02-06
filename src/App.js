import React from "react";
import { Switch, Route } from "react-router-dom";

import { withRouter } from "./hoc";

import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Hooks from "./pages/Hooks";
import Hoc from "./pages/Hoc";

import "./App.css";

const Main = () => (
  <section>
    <Switch>
      <Route exact path="/about">
        <About />
      </Route>
      <Route exact path="/hooks">
        <Hooks />
      </Route>
      <Route exact path="/hoc">
        <Hoc />
      </Route>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="*">Route not found</Route>
    </Switch>
  </section>
);

const App = () => (
  <div className="App">
    <Header />
    <Main />
  </div>
);

export default withRouter(App);
