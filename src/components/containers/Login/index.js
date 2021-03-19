import React, { useState } from "react";

const Login = ({ setLoggedIn }) => {
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");

  const handleLogin = () => {
    setLoggedIn(true);
  };

  return (
    <div className="login">
      <div className="card">
        <h1>Login</h1>
        <div className="wrapper">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email adress"
          />
          <input type="password" name="" id="" placeholder="Password" />
          <button onClick={() => handleLogin()}>Log in</button>
        </div>
        <div className="create-account">
          <div className="text">
            Don't have an account yet? <span>Create one!</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
