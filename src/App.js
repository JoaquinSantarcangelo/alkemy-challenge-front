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
  const [loggedIn, setLoggedIn] = useState(true);
  const [items, setItems] = useState([
    { desc: "Title", amount: 255.2, type: "Taxes", date: new Date() },
    { desc: "Title", amount: -55.6, type: "Fun", date: new Date() },
    { desc: "Title", amount: 255.2, type: "Taxes", date: new Date() },
    { desc: "Title", amount: -55.6, type: "Fun", date: new Date() },
    { desc: "Title", amount: 255.2, type: "Taxes", date: new Date() },
    { desc: "Title", amount: 255.2, type: "Taxes", date: new Date() },
    { desc: "Title", amount: -55.6, type: "Fun", date: new Date() },
    { desc: "Title", amount: 255.2, type: "Taxes", date: new Date() },
    { desc: "Title", amount: -55.6, type: "Fun", date: new Date() },
    { desc: "Title", amount: 255.2, type: "Taxes", date: new Date() },
    { desc: "Title", amount: 255.2, type: "Taxes", date: new Date() },
    { desc: "Title", amount: -55.6, type: "Fun", date: new Date() },
    { desc: "Title", amount: 255.2, type: "Taxes", date: new Date() },
    { desc: "Title", amount: -55.6, type: "Fun", date: new Date() },
    { desc: "Title", amount: 255.2, type: "Taxes", date: new Date() },
  ]);
  const [balance, setBalance] = useState(100.55);

  const addTransaction = (transaction) => {
    console.log("Sending new transaction");
    console.log(transaction);
    setItems((prevItems) => [...prevItems, transaction]);
  };

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
              !loggedIn ? (
                <Redirect to="/login" />
              ) : (
                <ABM addTransaction={addTransaction} items={items} />
              )
            }
          ></Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
