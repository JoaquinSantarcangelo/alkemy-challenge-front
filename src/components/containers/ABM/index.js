import React from "react";

//Components
import Items from "../../Items";
import Form from "../../Form";

const ABM = ({ items, addTransaction }) => {
  return (
    <div className="container">
      <Form addTransaction={addTransaction} />
      <Items items={items} title="My transactions" />
    </div>
  );
};

export default ABM;
