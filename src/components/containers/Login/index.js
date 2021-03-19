import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = ({ setLoggedIn }) => {
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");

  const handleLogin = () => {
    setLoggedIn(true);
  };

  return (
    <div className="login">
      <div className="card">
        <h1>Welcome!</h1>
        <div className="wrapper">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email adress"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <input
            type="password"
            name=""
            id=""
            placeholder="Password"
            onChange={(e) => setPw(e.target.value)}
            value={pw}
          />
          <button onClick={() => handleLogin()}>Login</button>
        </div>
        <div className="create-account">
          <div className="text">
            Don't have an account yet? <Link to="/register">Create one!</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
