import React, { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("");
  const [emailCheck, setEmailCheck] = useState("");
  const [pw, setPw] = useState("");
  const [pwCheck, setPwCheck] = useState("");
  const [name, setName] = useState("");

  const handleRegister = () => {};

  return (
    <div className="login">
      <div className="card">
        <h1>Register</h1>
        <div className="wrapper">
          <input
            type="text"
            name="name"
            id="name"
            placeholder="First Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email adress"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="email"
            name="email"
            id="emailCheck"
            placeholder="Confirm email adress"
            value={emailCheck}
            onChange={(e) => setEmailCheck(e.target.value)}
          />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            onChange={(e) => setPw(e.target.value)}
            value={pw}
          />
          <input
            type="password"
            name="password"
            id="passwordCheck"
            placeholder="Confirm Password"
            onChange={(e) => setPwCheck(e.target.value)}
            value={pwCheck}
          />
          <div className="button" onClick={() => handleRegister()}>
            Create account
          </div>
        </div>
        <div className="info-text">
          <div className="text">
            Already have an account? <Link to="/login">Log in!</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
