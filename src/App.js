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
  //Hooks - useState
  const [loggedIn, setLoggedIn] = useState(false);
  const [items, setItems] = useState([
    { title: "Title", amount: 255.2, type: "Taxes", date: new Date() },
    { title: "Title", amount: -55.6, type: "Fun", date: new Date() },
    { title: "Title", amount: 255.2, type: "Taxes", date: new Date() },
    { title: "Title", amount: -55.6, type: "Fun", date: new Date() },
    { title: "Title", amount: 255.2, type: "Taxes", date: new Date() },
    { title: "Title", amount: 255.2, type: "Taxes", date: new Date() },
    { title: "Title", amount: -55.6, type: "Fun", date: new Date() },
    { title: "Title", amount: 255.2, type: "Taxes", date: new Date() },
    { title: "Title", amount: -55.6, type: "Fun", date: new Date() },
    { title: "Title", amount: 255.2, type: "Taxes", date: new Date() },
    { title: "Title", amount: 255.2, type: "Taxes", date: new Date() },
    { title: "Title", amount: -55.6, type: "Fun", date: new Date() },
    { title: "Title", amount: 255.2, type: "Taxes", date: new Date() },
    { title: "Title", amount: -55.6, type: "Fun", date: new Date() },
    { title: "Title", amount: 255.2, type: "Taxes", date: new Date() },
  ]);
  const [balance, setBalance] = useState(100.55);

  return (
    <div className="app">
      <Router>
        {loggedIn && <Navbar setLoggedIn={setLoggedIn} />}
        <Switch>
          {/* Login */}
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

          {/* Register */}
          <Route
            path="/register"
            render={() => (!loggedIn ? <Register /> : <Redirect to="/" />)}
          ></Route>

          {/* Home */}
          <Route
            path="/"
            exact
            render={() =>
              !loggedIn ? (
                <Redirect to="/login" />
              ) : (
                <Home items={items} balance={balance} />
              )
            }
          ></Route>

          {/* ABM */}
          <Route
            path="/abm"
            exact
            render={() =>
              !loggedIn ? <Redirect to="/login" /> : <ABM items={items} />
            }
          ></Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
