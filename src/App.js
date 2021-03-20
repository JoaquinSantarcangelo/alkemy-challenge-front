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
  const [loggedIn, setLoggedIn] = useState(true);
  const [items, setItems] = useState([]);
  const [balance, setBalance] = useState(100.55);

  // -- Modal State
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [activeTransaction, setActiveTransaction] = useState(items[0]);

  const addTransaction = (transaction) => {
    console.log("Sending new transaction");
    console.log(transaction);
    setItems([...items, transaction]);
  };

  const handleEditTransaction = (transaction) => {};

  //Fetching Data from DB
  useEffect(() => {
    fetch("http://localhost:5000/api/transactions").then(async (res) => {
      const auxItems = await res.json();
      console.log(auxItems);
      setItems(auxItems)
    });
  }, []);

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
