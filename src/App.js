import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

//Containers
import Login from "./components/containers/Login";
import Register from "./components/containers/Register";
import Home from "./components/containers/Home";
import ABM from "./components/containers/ABM";

//Components
import Navbar from "./components/Navbar";
import Form from "./components/Form";

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

const App = () => {
  //Hooks - useState
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState({ id: 1 });
  const [items, setItems] = useState([]);
  const [balance, setBalance] = useState(0);

  // Hooks - useEffect

  // // Fetching Data from DB
  useEffect(() => {
    //Fetching Transactions
    if (loggedIn) {
      getTransactions();
    }
  }, [loggedIn]);

  // // Calculate Balance
  useEffect(() => {
    if (items.length > 0) {
      calculateBalance();
    }
  }, [items]);

  // -- Modal State
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [activeTransaction, setActiveTransaction] = useState(items[0]);

  // Database Communication {Starts}
  // Database Communication // Transactions

  // -- Get Transactions -- //
  const getTransactions = () => {
    fetch(`http://localhost:5000/api/transactions/${user.id}`).then(
      async (res) => {
        const auxItems = await res.json();
        console.log("Fetched items: ", auxItems);
        setItems(auxItems.reverse());
      }
    );
  };

  // -- Add Transaction -- //
  const addTransaction = (transaction) => {
    console.log("Sending new transaction");

    //Add user id
    transaction.user_id = user.id;

    //Fetch Options
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(transaction),
    };

    fetch("http://localhost:5000/api/transactions", requestOptions).then(
      (res) => {
        if (res.status === 200) {
          getTransactions();
          console.log(res);
        }
      }
    );
  };

  // -- Delete Transaction -- //
  const deleteTransaction = () => {
    console.log("Deleting transaction");

    fetch(`http://localhost:5000/api/transactions/${activeTransaction.id}`, {
      method: "DELETE",
    }).then((res) => {
      if (res.status === 200) {
        getTransactions();
        setEditModalOpen(false);
      }
    });
  };

  // -- Edit Transaction -- //
  const editTransaction = (transaction) => {
    console.log("Editing transaction");

    //Fetch Options
    const requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(transaction),
    };

    fetch(
      `http://localhost:5000/api/transactions/${activeTransaction.id}`,
      requestOptions
    ).then((res) => {
      if (res.status === 200) {
        getTransactions();
        setEditModalOpen(false);
      }
    });
  };

  // Database Communication // Accounts

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
      async (response) => {
        if (response.status === 200) {
          const { user } = await response.json();
          setUser(user);
          setLoggedIn(true);
        } else {
          document.getElementById("error-login").classList.remove("hidden");
          document.getElementById("error-login").innerHTML =
            "Credentials doesn't match";
        }
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
        if (response.status === 200) {
          setLoggedIn(true);
        }
      }
    );
  };

  //Calculate Balance Function
  const calculateBalance = async () => {
    let aux = 0;
    items.forEach((i) => {
      if (i.type === "inbound") {
        aux = parseFloat(aux) + parseFloat(i.amount);
      } else {
        aux = parseFloat(aux) - parseFloat(i.amount);
      }
    });

    setBalance(aux);
  };

  // Database Communication {Ends}

  return (
    <div className="app">
      <Router>
        {/* Edit Modal */}
        <AnimatePresence>
          {editModalOpen && (
            <motion.div
              variants={variants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="modal"
            >
              <div className="card">
                <Form
                  setEditModalOpen={setEditModalOpen}
                  activeTransaction={activeTransaction}
                  deleteTransaction={deleteTransaction}
                  editTransaction={editTransaction}
                  action="edit"
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        {/* Navbar */}
        {loggedIn && <Navbar setLoggedIn={setLoggedIn} />}
        <Route
          render={({ location }) => (
            <AnimatePresence exitBeforeEnter>
              <Switch location={location} key={location.pathname}>
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
                    !loggedIn ? (
                      <Register register={register} />
                    ) : (
                      <Redirect to="/" />
                    )
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
                        user={user}
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
            </AnimatePresence>
          )}
        />
      </Router>
    </div>
  );
};

export default App;
