import React, { useState } from "react";

const Home = () => {
  const [items, setItems] = useState([
    { title: "Title", amount: 255, type: "Taxes" },
    { title: "Title", amount: -55, type: "Fun" },
  ]);
  const [balance, setBalance] = useState(100);

  return (
    <div className="home">
      <div className="container">
        <div className="balance">
          <div className="text">Your balance:</div>
          <div className="amount">${balance}</div>
        </div>
        <div className="items">
          {items.map((item) => (
            <div className="item">
              <div className="wrapper">
                <div className="title">{item.title}</div>
                <div className="type">{item.type}</div>
              </div>
              <div className={item.amount > 0 ? "amount" : "amount negative"}>
                ${Math.abs(item.amount)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
