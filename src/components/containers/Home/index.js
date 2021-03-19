import React, { useState } from "react";

//Icons
import { BiListPlus } from "react-icons/bi";

const Home = () => {
  const [items, setItems] = useState([
    { title: "Title", amount: 255.2, type: "Taxes" },
    { title: "Title", amount: -55.6, type: "Fun" },
    { title: "Title", amount: 255.2, type: "Taxes" },
    { title: "Title", amount: -55.6, type: "Fun" },
    { title: "Title", amount: 255.2, type: "Taxes" },
    { title: "Title", amount: -55.6, type: "Fun" },
    { title: "Title", amount: 255.2, type: "Taxes" },
    { title: "Title", amount: -55.6, type: "Fun" },
    { title: "Title", amount: 255.2, type: "Taxes" },
    { title: "Title", amount: -55.6, type: "Fun" },
  ]);
  const [balance, setBalance] = useState(100.55);

  return (
    <div className="home">
      <div className="add-button">
        <BiListPlus />
      </div>
      <div className="container">
        <div className="balance">
          <div className="text">
            Hi Joaquin! <br /> <span>Your current balance:</span>
          </div>
          <div className="amount">${balance}</div>
        </div>
        <div className="items">
          <h1 className="title">Last Transactions</h1>
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
