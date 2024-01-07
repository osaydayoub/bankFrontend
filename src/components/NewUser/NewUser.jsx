import React, { useState } from "react";

function NewUser({ handleAddNewUser }) {
  const [userID, setuserID] = useState("");
  const [cash, setCash] = useState(0);
  const [credit, setCredit] = useState(0);

  function handleSubmit(e) {
    e.preventDefault();
    handleAddNewUser({
      ID: userID,
      cash: cash,
      credit: credit,
    });
  }
  return (
    <div>
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
          <label htmlFor="cash">Cash</label>
          <br />
          <input
            type="number"
            id="cash"
            onChange={(e) => setCash(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="credit">Credit</label>
          <br />
          <input
            type="number"
            id="credit"
            onChange={(e) => setCredit(e.target.value)}
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

export default NewUser;
