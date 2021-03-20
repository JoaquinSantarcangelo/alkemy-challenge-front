import React, { useState } from "react";

//Components
import Items from "../../Items";

const Home = ({ items, balance, setEditModalOpen, setActiveTransaction }) => {
  return (
    <div className="home">
      <div className="container">
        <div className="balance">
          <div className="text">
            Hi Joaquin! <br /> <span>Your balance:</span>
          </div>
          <div className="amount">${balance}</div>
        </div>
        <Items
          items={items.slice(0, 9)}
          title="Last Transactions"
          more
          setEditModalOpen={setEditModalOpen}
          setActiveTransaction={setActiveTransaction}
        />
      </div>
    </div>
  );
};

export default Home;
