import React, { useState } from "react";
import "./Deposit.css";
function Deposit({ handleDeposit }) {
  const [userID, setuserID] = useState("");
  const [amount, setAmount] = useState(0);
  function handleSubmit(e) {
    e.preventDefault();
    handleDeposit({
      ID: userID,
      amount: amount,
    });
  }
  return (
    <div className="deposit-container">
      <form onSubmit={(e) => handleSubmit(e)}>
        <div>
          <label htmlFor="userId">User Id</label>
          <br />
          <input
            type="text"
            id="userId"
            onChange={(e) => setuserID(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="amount">Deposit Amount</label>
          <br />
          <input
            type="number"
            id="amount"
            onChange={(e) => setAmount(e.target.value)}
            required
          />
        </div>
        <div>
          <button type="submit">Confirm</button>
        </div>
      </form>
    </div>
  );
}

export default Deposit;
