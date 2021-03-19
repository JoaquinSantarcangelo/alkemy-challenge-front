import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

//Containers
import Login from "./components/containers/Login";
import Register from "./components/containers/Register";
import Home from "./components/containers/Home";
import ABM from "./components/containers/ABM";

//Components
import Navbar from "./components/Navbar";

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div className="app">
      <Router>
        {loggedIn && <Navbar setLoggedIn={setLoggedIn} />}
        <Switch>
          <Route
            path="/login"
            render={() =>
              !loggedIn ? (
                <Login setLoggedIn={setLoggedIn} />
              ) : (
                <Redirect to="/" />
              )
            }
          ></Route>
          <Route
            path="/register"
            render={() => (!loggedIn ? <Register /> : <Redirect to="/" />)}
          ></Route>
          <Route
            path="/"
            exact
            render={() => (!loggedIn ? <Redirect to="/login" /> : <Home />)}
          ></Route>
          <Route
            path="/abm"
            exact
            render={() => (!loggedIn ? <Redirect to="/login" /> : <ABM />)}
          ></Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
