import React, { useState } from "react";

const Form = ({ addTransaction }) => {
  const [desc, setDesc] = useState("");
  const [type, setType] = useState("");
  const [amount, setAmount] = useState(null);
  const [date, setDate] = useState(null);

  const handleForm = () => {
    console.log("Adding new transaction");
    let newTransaction;
    //Validation
    if (true) {
      newTransaction = { desc, amount, type, date };
    }

    console.log(newTransaction);

    if (newTransaction) {
      addTransaction(newTransaction);
    }
  };

  return (
    <div className="form">
      <input
        type="text"
        name="description"
        id="description"
        placeholder="Transaction description"
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
      />
      <div className="wrapper">
        <select id="type" name="cars" onChange={(e) => setType(e.target.value)}>
          <option value="volvo">Taxes</option>
          <option value="saab">Food</option>
          <option value="fiat">Health</option>
          <option value="audi">Fun</option>
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
      <button onClick={() => handleForm()}>Add transaction</button>
    </div>
  );
};

export default Form;
