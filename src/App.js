import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//Containers
import Login from "./components/containers/Login";
import Home from "./components/containers/Home";

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/login" exact component={Login}></Route>
          <Route path="/" component={Home}></Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
