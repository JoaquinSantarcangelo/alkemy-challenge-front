import React from "react";
import { motion } from "framer-motion";

//Components
import Items from "../../Items";
import Form from "../../Form";

//Framer Motion Variants
const variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { when: "beforeChildren", staggerChildren: 1 },
  },
  exit: { opacity: 0 },
};

const ABM = ({
  items,
  addTransaction,
  setEditModalOpen,
  setActiveTransaction,
}) => {
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="container"
    >
      <Form addTransaction={addTransaction} action="add" />
      <Items
        setActiveTransaction={setActiveTransaction}
        setEditModalOpen={setEditModalOpen}
        items={items}
        title="My transactions"
      />
    </motion.div>
  );
};

export default ABM;
