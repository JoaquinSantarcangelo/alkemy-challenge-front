import React, { useState } from "react";



const Item = ({ itemInfo }) => {
  return (
    <div className="item">
      <div className="wrapper-left">
        <div className="title">{itemInfo.title}</div>
        <div className="type">{itemInfo.type}</div>
      </div>
      <div className="wrapper-right">
        <div className={itemInfo.amount > 0 ? "amount" : "amount negative"}>
          ${Math.abs(itemInfo.amount)}
        </div>
        <div className="date">
          {itemInfo.date.toISOString().substring(0, 10)}
        </div>
      </div>
    </div>
  );
};

const Home = () => {
  const [items, setItems] = useState([
    { title: "Title", amount: 255.2, type: "Taxes", date: new Date() },
    { title: "Title", amount: -55.6, type: "Fun", date: new Date() },
    { title: "Title", amount: 255.2, type: "Taxes", date: new Date() },
    { title: "Title", amount: -55.6, type: "Fun", date: new Date() },
    { title: "Title", amount: 255.2, type: "Taxes", date: new Date() },
  ]);
  const [balance, setBalance] = useState(100.55);

  return (
    <div className="home">
      <div className="container">
        <div className="balance">
          <div className="text">
            Hi Joaquin! <br /> <span>Your balance:</span>
          </div>
          <div className="amount">${balance}</div>
        </div>
        <div className="items">
          <h1 className="title">Last Transactions</h1>
          {items.map((item) => (
            <Item itemInfo={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
