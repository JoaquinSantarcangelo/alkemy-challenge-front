import React, { useState } from "react";

//Icons
import { BiCheck } from "react-icons/bi";

const Form = ({ addTransaction, action }) => {
  const [desc, setDesc] = useState(null);
  const [type, setType] = useState("Inbound");
  const [category, setCategory] = useState("Taxes");
  const [amount, setAmount] = useState(null);
  const [date, setDate] = useState(null);

  //Handle Form Submit
  const handleForm = () => {
    console.log("Adding new transaction");
    let newTransaction;
    //Validation
    if (desc && type && category && amount && date) {
      console.log("Yep");
      if (desc !== "" && amount > 0) {
        newTransaction = {
          desc,
          amount,
          type,
          category,
          date: new Date(date),
        };
      }
    }

    alert("Completa el formulario");

    if (newTransaction) {
      console.log(newTransaction);
      addTransaction(newTransaction);
    }
  };

  return (
    <div className="form">
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
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
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
