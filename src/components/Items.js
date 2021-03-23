import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
//Icons
import { BiPlus } from "react-icons/bi";

//Framer Motion Variants
const variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { when: "beforeChildren", staggerChildren: 1 },
  },
  exit: { opacity: 0 },
};

const Items = ({
  items,
  title,
  more,
  setActiveTransaction,
  setEditModalOpen,
}) => {
  const Item = ({ itemInfo, i }) => {
    return (
      <motion.div
        variants={variants}
        initial="hidden"
        animate={{ opacity: 1, transition: { delay: i / 10 } }}
        exit="exit"
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
      </motion.div>
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
      {items.map((item, i) => (
        <Item key={item.id} itemInfo={item} i={i} />
      ))}
    </div>
  );
};

export default Items;
