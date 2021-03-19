import React from "react";
import { NavLink } from "react-router-dom";
//Icons
import { BiHomeAlt, BiListPlus, BiLogOut } from "react-icons/bi";

const Navbar = ({ setLoggedIn }) => {
  return (
    <div className="container">
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
    </div>
  );
};

export default Navbar;
