import React from "react";

//Icons
import { BiHomeAlt, BiListPlus, BiLogOut } from "react-icons/bi";

const Navbar = () => {
  return (
    <div className="container">
      <div className="navbar">
        <div className="button" id="home">
          <div className="icon">
            <BiHomeAlt />
          </div>
          <div className="text">Home</div>
        </div>
        <div className="button" id="abm">
          <div className="icon">
            <BiListPlus />
          </div>
          <div className="text">ABM</div>
        </div>
        <div className="button" id="logout">
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
