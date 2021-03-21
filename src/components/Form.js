import React, { useEffect, useState } from "react";

//Icons
import { BiCheck, BiX } from "react-icons/bi";

const Form = ({
  addTransaction,
  action,
  setEditModalOpen,
  activeTransaction,
}) => {
  const [description, setDescription] = useState("");
  const [type, setType] = useState("inbound");
  const [category, setCategory] = useState("Taxes");
  const [amount, setAmount] = useState(0);
  const [date, setDate] = useState(null);

  //Handle Form Submit
  const handleForm = () => {
    console.log("Adding new transaction");
    let newTransaction;
    //Validation
    if (description && type && category && amount && date) {
      console.log("Yep");
      if (description !== "" && amount > 0) {
        newTransaction = {
          description,
          amount,
          type,
          category,
          date: date,
        };
      }
    }

    if (newTransaction) {
      console.log(newTransaction);
      addTransaction(newTransaction);
    } else {
      alert("Completa el formulario");
    }
  };

  //Edit Form Auto Fill
  useEffect(() => {
    if (activeTransaction) {
      if (activeTransaction.description) {
        setDescription(activeTransaction.description);
      }
      if (activeTransaction.type) {
        setType(activeTransaction.type);
      }
      if (activeTransaction.category) {
        setCategory(activeTransaction.category);
      }
      if (activeTransaction.amount) {
        setAmount(activeTransaction.amount);
      }
      if (activeTransaction.date) {
        setDate(new Date());
      }
    }
  }, []);
  return (
    <div className="form">
      {action === "edit" && (
        <div onClick={() => setEditModalOpen(false)} className="close-icon">
          <BiX />
        </div>
      )}
      <h1>{action === "add" ? "Add Transaction" : "Edit Transaction"}</h1>

      <div className="wrapper-top">
        {action === "add" ? (
          <select
            id="type"
            name="type"
            onChange={(e) => setType(e.target.value)}
            value={type}
          >
            <option value="inbound">Inbound</option>
            <option value="outbound">Outbound</option>
          </select>
        ) : (
          <select id="type" name="type" value={type} disabled>
            <option value="inbound">Inbound</option>
            <option value="outbound">Outbound</option>
          </select>
        )}
        <input
          type="text"
          name="description"
          id="description"
          placeholder="Transaction description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div className="wrapper-bottom">
        <select
          id="category"
          name="category"
          onChange={(e) => setCategory(e.target.value)}
          value={category}
        >
          <option value="taxes">Taxes</option>
          <option value="food">Food</option>
          <option value="health">Health</option>
          <option value="fun">Fun</option>
        </select>
        <input
          type="date"
          value={date}
          placeholder={date}
          name="date"
          id="date"
          onChange={(e) => setDate(e.target.value)}
        />
        <input
          type="number"
          name="amount"
          id="amount"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>
      <div onClick={() => handleForm()} className="button">
        <BiCheck /> Confirm
      </div>
    </div>
  );
};

export default Form;
