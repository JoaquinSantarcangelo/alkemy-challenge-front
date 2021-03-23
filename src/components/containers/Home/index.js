import React, { useState } from "react";
import { motion } from "framer-motion";

//Components
import Items from "../../Items";

//Framer Motion Variants
const variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { when: "beforeChildren", staggerChildren: 1 },
  },
  exit: { opacity: 0, transition: { when: "afterChildren" } },
};

const Home = ({ items, balance, setEditModalOpen, setActiveTransaction }) => {
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="home"
    >
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
    </motion.div>
  );
};

export default Home;
