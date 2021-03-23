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
  const [pw, setPw] = useState("");

  const handleLogin = () => {
    login({ email, pw });
  };

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="login"
    >
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
            name=""
            id=""
            placeholder="Password"
            onChange={(e) => setPw(e.target.value)}
            value={pw}
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
