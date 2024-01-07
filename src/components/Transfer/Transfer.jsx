import React, { useState } from "react";

function Transfer({handler}) {
  const [IdFrom, setIdFrom] = useState("");
  const [IdTo, setIdTo] = useState("");
  const [amount, setAmount] = useState(0);
  function handleSubmit(e) {
    e.preventDefault();
    handler({
      idFrom: IdFrom,
      idTo: IdTo,
      amount: amount,
    });
  }
  return (
    <div>
      <h3>Transfer</h3>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div>
          <label htmlFor="idFrom">Transfer from user ID</label>
          <br />
          <input
            type="text"
            id="idFrom"
            onChange={(e) => setIdFrom(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="idTo">Transfer To user ID</label>
          <br />
          <input
            type="text"
            id="idTo"
            onChange={(e) => setIdTo(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="amount">Amount</label>
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

export default Transfer;
