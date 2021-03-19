import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

//Containers
import Login from "./components/containers/Login";
import Home from "./components/containers/Home";
import ABM from "./components/containers/ABM";

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div className="app">
      <Router>
        <Switch>
          <Route
            path="/login"
            render={() => {
              <Login />;
            }}
          ></Route>
          <Route path="/" exact component={Home}></Route>
          <Route path="/abm" exact component={ABM}></Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
