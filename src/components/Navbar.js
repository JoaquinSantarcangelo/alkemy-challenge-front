import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

//Icons
import { BiHomeAlt, BiListPlus, BiLogOut } from "react-icons/bi";

//Framer Motion Variants
const variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { when: "beforeChildren", staggerChildren: 1 },
  },
  exit: { opacity: 0 },
};

const Navbar = ({ setLoggedIn }) => {
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="container"
    >
      <div className="navbar">
        <NavLink
          activeClassName="active-link"
          exact={true}
          to="/"
          className="button"
          id="home"
        >
          <div className="icon">
            <BiHomeAlt />
          </div>
          <div className="text">Home</div>
        </NavLink>
        <NavLink
          activeClassName="active-link"
          exact={true}
          to="/abm"
          className="button"
          id="abm"
        >
          <div className="icon">
            <BiListPlus />
          </div>
          <div className="text">ABM</div>
        </NavLink>
        <div onClick={() => setLoggedIn(false)} className="button" id="logout">
          <div className="icon">
            <BiLogOut />
          </div>
          <div className="text">Logout</div>
        </div>
      </div>
    </motion.div>
  );
};

export default Navbar;
