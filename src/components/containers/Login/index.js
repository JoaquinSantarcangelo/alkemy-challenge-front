import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");

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
          <button>Log in</button>
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
