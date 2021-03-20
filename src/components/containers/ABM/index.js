import React from "react";

//Components
import Items from "../../Items";
import Form from "../../Form";

const ABM = ({
  items,
  addTransaction,
  setEditModalOpen,
  setActiveTransaction,
}) => {
  return (
    <div className="container">
      <Form addTransaction={addTransaction} action="add" />
      <Items
        setActiveTransaction={setActiveTransaction}
        setEditModalOpen={setEditModalOpen}
        items={items}
        title="My transactions"
      />
    </div>
  );
};

export default ABM;
