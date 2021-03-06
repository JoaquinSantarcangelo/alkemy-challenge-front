import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { when: "beforeChildren", staggerChildren: 1 },
  },
  exit: { opacity: 0 },
};

const Login = ({ login }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    //Validation
    let valStatus = false;
    if (email !== "" && password !== "") {
      document.getElementById("error-login").classList.add("hidden");
      login({ email, password });
    } else {
      document.getElementById("error-login").classList.remove("hidden");
      document.getElementById("error-login").innerHTML =
        "Please fill all the inputs";
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
      <div id="error-login" className="error hidden"></div>
      <motion.div variants={variants} className="card">
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
            name="password"
            id="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <div className="button" onClick={() => handleLogin()}>
            Login
          </div>
        </div>
        <div className="info-text">
          <div className="text">
            Don't have an account yet? <Link to="/register">Create one!</Link>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Login;
