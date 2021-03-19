import React from "react";

//Components
import Items from "../../Items";

const ABM = ({ items }) => {
  return (
    <div className="container">
      <div className="form"></div>
      <Items items={items} title="My transactions"/>
    </div>
  );
};

export default ABM;
