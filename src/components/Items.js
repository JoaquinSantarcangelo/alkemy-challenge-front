import React from "react";
import { Link } from "react-router-dom";

//Icons
import { BiPlus } from "react-icons/bi";

const Items = ({
  items,
  title,
  more,
  setActiveTransaction,
  setEditModalOpen,
}) => {
  const Item = ({ itemInfo }) => {
    return (
      <div
        key={itemInfo.id}
        onClick={() => {
          setActiveTransaction(itemInfo);
          setEditModalOpen(true);
        }}
        className="item"
      >
        <div className="wrapper-left">
          <div className="title">{itemInfo.description}</div>
          <div className="type">{itemInfo.category}</div>
        </div>
        <div className="wrapper-right">
          <div
            className={
              itemInfo.type === "inbound" ? "amount" : "amount negative"
            }
          >
            ${Math.abs(itemInfo.amount)}
          </div>
          <div className="date">{itemInfo.date.substring(0, 10)}</div>
        </div>
      </div>
    );
  };

  return (
    <div className="items">
      <div className="wrapper">
        <h1 className="title">{title}</h1>
        {more && (
          <Link to="/abm" className="more-button">
            <BiPlus />
          </Link>
        )}
      </div>
      {items.map((item) => (
        <Item itemInfo={item} />
      ))}
    </div>
  );
};

export default Items;
