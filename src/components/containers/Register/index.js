import React, { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("");
  const [emailCheck, setEmailCheck] = useState("");
  const [pw, setPw] = useState("");
  const [pwCheck, setPwCheck] = useState("");

  const handleRegister = () => {};

  return (
    <div className="login">
      <div className="card">
        <h1>Register</h1>
        <div className="wrapper">
          <input type="text" name="name" id="name" placeholder="First Name"/>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email adress"
          />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Confirm email adress"
          />
          <input type="password" name="" id="" placeholder="Password" />
          <input type="password" name="" id="" placeholder="Confirm Password" />
          <button onClick={() => handleRegister()}>Create account</button>
        </div>
        <div className="create-account">
          <div className="text">
            Already have an account? <Link to="/login">Log in!</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
