import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

//Framer Motion Variants
const variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { when: "beforeChildren", staggerChildren: 1 },
  },
  exit: { opacity: 0 },
};

const Register = ({ register }) => {
  const [email, setEmail] = useState("");
  const [emailCheck, setEmailCheck] = useState("");
  const [password, setPassword] = useState("");
  const [pwCheck, setPwCheck] = useState("");
  const [name, setName] = useState("");

  const handleRegister = () => {
    //Validation
    let valStatus = false;
    if (name.length > 5 && email !== "" && password !== "" && name !== "") {
      if (email === emailCheck && password === pwCheck) {
        register({ email, password, name });
      } else {
        alert("Please confirm if email and password matches ");
      }
    } else {
      alert("Please fill all inputs");
    }
  };

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="login"
    >
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
            onChange={(e) => setPassword(e.target.value)}
            value={password}
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
    </motion.div>
  );
};

export default Register;
