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
import Form from "./components/Form";

const App = () => {
  //Hooks - useState
  const [loggedIn, setLoggedIn] = useState(false);
  const [items, setItems] = useState([]);
  const [balance, setBalance] = useState(0);

  // -- Modal State
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [activeTransaction, setActiveTransaction] = useState(items[0]);

  // Database Communication

  // -- Add Transaction -- //
  const addTransaction = (transaction) => {
    console.log("Sending new transaction");
    console.log(transaction);

    //Fetch Options
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(transaction),
    };

    fetch("http://localhost:5000/api/transactions", requestOptions).then(
      (response) => {
        setItems([transaction, ...items]);
        console.log(response);
      }
    );
  };

  // -- Login -- //
  const login = (user) => {
    console.log("Logging in");
    console.log(user);

    //Fetch Options
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    };

    fetch("http://localhost:5000/api/accounts/login", requestOptions).then(
      (response) => {
        console.log(response);
        setLoggedIn(true);
      }
    );
  };

  // -- Register -- //
  const register = (user) => {
    console.log("Signing up");
    console.log(user);

    //Fetch Options
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    };

    fetch("http://localhost:5000/api/accounts/register", requestOptions).then(
      (response) => {
        console.log(response);
      }
    );
  };

  const editTransaction = (transaction) => {};

  //Calculate Balance Function
  const calculateBalance = async () => {
    let aux = 0;
    await items.forEach((i) => {
      if (i.type === "inbound") {
        aux += i.amount;
      } else {
        aux -= i.amount;
      }
    });
    return aux.toFixed(2);
  };

  //Fetching Data from DB
  useEffect(() => {
    //Fetching Transactions
    fetch("http://localhost:5000/api/transactions").then(async (res) => {
      const auxItems = await res.json();
      console.log(auxItems);
      setItems(auxItems.reverse());
    });
  }, []);

  //Calculate Balance
  useEffect(() => {
    if (items.length > 0) {
      calculateBalance().then((res) => {
        setBalance(res);
      });
    }
  }, [items]);

  return (
    <div className="app">
      <Router>
        {editModalOpen && (
          <div className="modal">
            <div className="card">
              <Form
                setEditModalOpen={setEditModalOpen}
                activeTransaction={activeTransaction}
                action="edit"
              />
            </div>
          </div>
        )}
        {loggedIn && <Navbar setLoggedIn={setLoggedIn} />}
        <Switch>
          {/* Login */}
          <Route
            path="/login"
            render={() =>
              !loggedIn ? (
                <Login login={login} setLoggedIn={setLoggedIn} />
              ) : (
                <Redirect to="/" />
              )
            }
          ></Route>

          {/* Register */}
          <Route
            path="/register"
            render={() =>
              !loggedIn ? <Register register={register} /> : <Redirect to="/" />
            }
          ></Route>

          {/* Home */}
          <Route
            path="/"
            exact
            render={() =>
              !loggedIn ? (
                <Redirect to="/login" />
              ) : (
                <Home
                  items={items}
                  balance={balance}
                  setEditModalOpen={setEditModalOpen}
                  setActiveTransaction={setActiveTransaction}
                />
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
                <ABM
                  addTransaction={addTransaction}
                  items={items}
                  setEditModalOpen={setEditModalOpen}
                  setActiveTransaction={setActiveTransaction}
                />
              )
            }
          ></Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
